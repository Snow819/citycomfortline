<template>
  <header
    :class="[
      { 'navbar-hidden': isNavbarHidden },
      { 'navbar-glass': isGlass },
      { 'navbar-transparent': !isGlass },
    ]"
  >
    <!-- Mobile overlay -->
    <div
      v-if="menuOpen && !isDesktop"
      class="menu-overlay"
      @click="closeMenu"
    ></div>

    <nav :class="['navbar', { open: menuOpen && !isDesktop }]">
      <div class="navbar-header-row">
        <div class="logo">
          <img src="@/assets/Logo_light.png" alt="Swift Comfort Line Logo" />
        </div>
        <button
          class="menu-toggle"
          :class="{ toggled: menuOpen }"
          @click="toggleMenu"
          aria-label="Toggle menu"
        >
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </button>
      </div>

      <ul class="navbar-links">
        <li><a href="#home" @click="closeMenu">{{ t('navbar.home') }}</a></li>
        <li><a href="#about" @click="closeMenu">{{ t('navbar.about') }}</a></li>
        <li><a href="#services" @click="closeMenu">{{ t('navbar.services') }}</a></li>
        <li><a href="#areas" @click="closeMenu">{{ t('navbar.serviceAreas') }}</a></li>
        <li><a href="#testimonials" @click="closeMenu">{{ t('navbar.testimonials') }}</a></li>
      </ul>

      <!-- Language dropdown -->
      <div class="dropdown-menu custom-country-dropdown" ref="dropdownRef">
        <div class="dropdown-selected" @click="toggleCountryDropdown">
          {{ selectedCountry }}
          <span class="dropdown-arrow">&#9662;</span>
        </div>
        <ul v-show="countryDropdownOpen" class="dropdown-list">
          <template v-for="country in countries" :key="country.code">
            <li
              v-if="country.code !== currentLocale"
              @click="selectCountry(country)"
              :class="{ active: selectedCountry === country.name }"
            >
              {{ country.name }}
            </li>
          </template>
        </ul>
      </div>

      <!-- CTA -->
      <div class="btn">
        <a href="#get-quote" class="btn1" @click="closeMenu">
          <button>{{ t('navbar.getQuote') }}</button>
        </a>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()
const currentLocale = computed(() => locale.value || 'en')

const savedLang = localStorage.getItem('lang') || 'en'
locale.value = savedLang

const countries = [
  { name: 'English', code: 'en' },
  { name: 'Français', code: 'fr' },
  { name: '中文', code: 'zh' },
]

function getCountryName(code) {
  return countries.find((c) => c.code === code)?.name ?? 'English'
}

const menuOpen = ref(false)
const isDesktop = ref(typeof window !== 'undefined' ? window.innerWidth > 768 : true)
const countryDropdownOpen = ref(false)
const selectedCountry = ref(getCountryName(savedLang))
const isNavbarHidden = ref(false)
const isGlass = ref(false)
const lastScrollY = ref(0)
const dropdownRef = ref(null)
let scrollTimeout = null

function toggleMenu() {
  menuOpen.value = !menuOpen.value
}

function closeMenu() {
  menuOpen.value = false
}

function toggleCountryDropdown() {
  countryDropdownOpen.value = !countryDropdownOpen.value
}

function selectCountry(country) {
  selectedCountry.value = country.name
  locale.value = country.code
  localStorage.setItem('lang', country.code)
  countryDropdownOpen.value = false
}

function handleOutsideClick(e) {
  if (dropdownRef.value && !dropdownRef.value.contains(e.target)) {
    countryDropdownOpen.value = false
  }
}

function handleResize() {
  isDesktop.value = window.innerWidth > 768
  if (isDesktop.value) menuOpen.value = false
}

function handleScroll() {
  const currentScrollY = window.scrollY

  // Glass effect
  isGlass.value = currentScrollY > 10

  // Hide on scroll down, show on scroll up
  if (currentScrollY > lastScrollY.value && currentScrollY > 60) {
    isNavbarHidden.value = true
  } else {
    isNavbarHidden.value = false
  }

  lastScrollY.value = currentScrollY

  // Always re-show when user stops scrolling
  if (scrollTimeout) clearTimeout(scrollTimeout)
  scrollTimeout = setTimeout(() => {
    isNavbarHidden.value = false
  }, 300)
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
  window.addEventListener('scroll', handleScroll, { passive: true })
  document.addEventListener('click', handleOutsideClick)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
  window.removeEventListener('scroll', handleScroll)
  document.removeEventListener('click', handleOutsideClick)
  if (scrollTimeout) clearTimeout(scrollTimeout)
})
</script>

<style scoped>
header {
  padding: 10px 40px;
  position: fixed;
  top: var(--banner-height, 48px);
  left: 0;
  width: 100vw;
  z-index: 1000;
  transition:
    transform 0.4s cubic-bezier(0.4, 0, 0.2, 1),
    top 0.3s ease,
    box-shadow 0.3s ease,
    background 0.3s ease,
    backdrop-filter 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.navbar-transparent {
  background: rgba(247, 247, 247, 0.1);
  backdrop-filter: none;
}

.navbar-glass {
  background: rgba(30, 30, 30, 0.4);
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow: 0 4px 32px rgba(0, 0, 0, 0.18);
}

.navbar-hidden {
  transform: translateY(-100%);
}

.navbar {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
}

.logo img {
  width: 70px;
  height: 70px;
}

.menu-toggle {
  order: 2;
  margin-left: auto;
  display: none;
  width: 40px;
  height: 40px;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 1001;
}

.menu-toggle .bar {
  display: block;
  width: 28px;
  height: 3px;
  margin: 6px auto;
  background: #fff;
  border-radius: 2px;
  transition: all 0.3s;
}

.menu-toggle.toggled .bar:nth-child(1) {
  transform: translateY(9px) rotate(45deg);
}
.menu-toggle.toggled .bar:nth-child(2) {
  opacity: 0;
}
.menu-toggle.toggled .bar:nth-child(3) {
  transform: translateY(-9px) rotate(-45deg);
}

.navbar-links {
  flex: 2;
  display: flex;
  justify-content: center;
  gap: 20px;
  margin: 0;
  padding: 0;
}

.navbar-links li {
  list-style: none;
}

.navbar-links li a {
  text-decoration: none;
  color: #e9e9e9;
  padding: 8px 16px;
  font-size: 14px;
  border-radius: 6px;
  white-space: nowrap;
  display: inline-block;
  transition: background 0.2s ease, color 0.2s ease;
}

.navbar-links li a:hover {
  background: #02534d;
  color: #fff;
}

.btn {
  display: flex;
  gap: 20px;
}

.btn1 {
  text-decoration: none;
  color: white;
}

.btn1 button {
  background: #02534d;
  color: #fff;
  border: none;
  padding: 8px 20px;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
  white-space: nowrap;
  transition: background 0.2s ease;
}

.btn1 button:hover {
  background: #222;
}

.dropdown-selected {
  background: #181818;
  color: #fff;
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  white-space: nowrap;
  min-width: 150px;
  transition: background 0.2s ease;
}

.dropdown-arrow {
  margin-left: 10px;
  font-size: 12px;
}

.dropdown-list {
  position: absolute;
  top: 110%;
  left: 0;
  width: 100%;
  background: #181818;
  border-radius: 6px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  z-index: 2000;
  margin: 0;
  padding: 0;
  list-style: none;
}

.dropdown-list li {
  padding: 10px 16px;
  color: #fff;
  cursor: pointer;
  font-size: 14px;
  transition: background 0.2s ease;
}

.dropdown-list li:hover,
.dropdown-list li.active {
  background: linear-gradient(135deg, #00796b, #26a69a);
}

.custom-country-dropdown {
  position: relative;
  min-width: 150px;
}

.menu-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 999;
}

@media (max-width: 834px) {
  header {
    padding: 10px;
    top: var(--banner-height, 155px);
    z-index: 1002;
  }

  .navbar {
    flex-direction: column;
    align-items: flex-start;
    background: transparent;
  }

  .navbar-header-row {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .menu-toggle {
    display: block;
  }

  .navbar-links,
  .dropdown-menu,
  .btn {
    display: none;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
  }

  .navbar.open {
    background: #181818 !important;
    box-shadow: 0 4px 32px rgba(0, 0, 0, 0.18);
    border-radius: 0 0 18px 18px;
    position: relative;
    z-index: 1003;
  }

  .navbar.open .navbar-links,
  .navbar.open .dropdown-menu,
  .navbar.open .btn {
    display: flex !important;
  }

  .navbar-links li a {
    width: 100%;
    text-align: left;
  }

  .custom-country-dropdown {
    width: 100%;
    margin: 10px 0 0 0;
  }
}
</style>