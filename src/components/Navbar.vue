<template>
  <!-- Navbar Container -->
  <header
    :class="[
      { 'navbar-hidden': isNavbarHidden },
      { 'navbar-animate': isNavbarAnimated },
      { 'navbar-glass': isGlass },
      { 'navbar-transparent': !isGlass },
    ]"
  >
    <!-- Overlay for mobile -->
    <div v-if="menuOpen && !isDesktop" class="menu-overlay" @click="toggleMenu"></div>

    <!-- Navbar -->
    <nav :class="['navbar', { open: menuOpen && !isDesktop }]">
      <div class="navbar-header-row">
        <!-- Logo -->
        <div class="logo">
          <img src="@/assets/logo.png" alt="City Comfort Line Logo" />
        </div>

        <!-- Menu toggle button -->
        <button class="menu-toggle" :class="{ toggled: menuOpen }" @click="toggleMenu">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </button>
      </div>

      <!-- Navbar Links -->
      <ul class="navbar-links">
        <li><router-link to="/">{{ t('navbar.home') }}</router-link></li>
        <li><router-link to="/about">{{ t('navbar.about') }}</router-link></li>
        <li><router-link to="/services">{{ t('navbar.services') }}</router-link></li>
        <li><router-link to="/areas">{{ t('navbar.serviceAreas') }}</router-link></li>
        <li><router-link to="/testimonials">{{ t('navbar.testimonials') }}</router-link></li>
      </ul>

      <!-- Language Dropdown -->
      <div class="dropdown-menu custom-country-dropdown">
        <div class="dropdown-selected" @click="toggleCountryDropdown">
          {{ selectedCountry }}
          <span class="dropdown-arrow">&#9662;</span>
        </div>
        <ul v-show="countryDropdownOpen" class="dropdown-list">
          <li
            v-for="country in countries"
            :key="country.code"
            v-show="country.code !== locale"
            @click="selectCountry(country)"
            :class="{ active: selectedCountry === country.name }"
          >
            {{ country.name }}
          </li>
        </ul>
      </div>

      <!-- Button Section -->
      <div class="btn">
        <a href="#" class="btn1">
          <button>{{ t('navbar.getQuote') }}</button>
        </a>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useI18n } from 'vue-i18n'

// ✅ Get translator and locale from i18n
const { t, locale } = useI18n()

// ✅ Read saved language from localStorage
const savedLang = localStorage.getItem('language') || 'en'
locale.value = savedLang

// ✅ Countries definition
const countries = [
  { name: 'English', code: 'en' },
  { name: 'Français', code: 'fr' },
  { name: '中文', code: 'zh' },
]

// ✅ Helper function
function getCountryName(code) {
  const country = countries.find(c => c.code === code)
  return country ? country.name : 'English'
}

// ✅ State variables
const menuOpen = ref(false)
const isDesktop = ref(window.innerWidth > 768)
const countryDropdownOpen = ref(false)
const selectedCountry = ref(getCountryName(locale.value))
const isNavbarHidden = ref(false)
const isNavbarAnimated = ref(false)
const isGlass = ref(false)
const lastScrollY = ref(0)
let scrollTimeout = null

// ✅ Methods
function toggleMenu() {
  menuOpen.value = !menuOpen.value
}

function toggleCountryDropdown() {
  countryDropdownOpen.value = !countryDropdownOpen.value
}

function selectCountry(country) {
  selectedCountry.value = country.name
  locale.value = country.code
  localStorage.setItem('language', country.code)
  countryDropdownOpen.value = false
}

function handleResize() {
  isDesktop.value = window.innerWidth > 768
  if (isDesktop.value) menuOpen.value = false
}

function handleScroll() {
  const currentScrollY = window.scrollY
  isGlass.value = currentScrollY > 10

  if (currentScrollY > lastScrollY.value && currentScrollY > 60) {
    isNavbarHidden.value = true
    isNavbarAnimated.value = false
  } else {
    isNavbarHidden.value = false
    isNavbarAnimated.value = false
  }

  lastScrollY.value = currentScrollY

  if (scrollTimeout) clearTimeout(scrollTimeout)
  scrollTimeout = setTimeout(() => {
    isNavbarHidden.value = false
    isNavbarAnimated.value = true
    setTimeout(() => (isNavbarAnimated.value = false), 400)
  }, 200)
}

// ✅ Lifecycle hooks
onMounted(() => {
  window.addEventListener('resize', handleResize)
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
  window.removeEventListener('scroll', handleScroll)
  if (scrollTimeout) clearTimeout(scrollTimeout)
})
</script>

<style scoped>
header {
  padding: 10px 40px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 1000;
  transition:
    transform 0.4s cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 0.3s,
    background 0.3s,
    backdrop-filter 0.3s;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.navbar-transparent {
  background: rgba(0, 0, 0, 0.2);
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

.navbar-animate {
  transform: translateY(0);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
}

body {
  padding-top: 80px;
}

.navbar {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
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
   position: relative;
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
 }
 
 .navbar-links li {
   list-style-type: none;
 }
 
 .navbar-links li a,
 .navbar-links li .router-link-active {
   text-align: center;
   text-decoration: none;
   color: #e9e9e9;
   transition: none;
   padding: 8px 16px;
   font-size: 14px;
   border-radius: 6px;
   white-space: nowrap;
   display: inline-block;
   position: relative;
   overflow: hidden;
 }
 
 .navbar-links li a:hover,
 .navbar-links li .router-link-active:hover {
   background: linear-gradient(135deg, #00796b, #26a69a);
   color: #fff;
   box-shadow: 0 2px 8px rgba(246, 61, 67, 0.15);
 }
 
 .navbar-links li .router-link-exact-active {
   background: linear-gradient(135deg, #00796b, #26a69a);
   color: #fff;
   box-shadow: 0 2px 8px rgba(246, 61, 67, 0.15);
 }
 
 .btn {
   display: flex;
   gap: 20px;
 }
 
 .btn button {
   background: #222;
   color: #fff;
   border: none;
   padding: 8px 20px;
   border-radius: 6px;
   font-size: 14px;
   transition:
     background 0.3s,
     color 0.3s,
     box-shadow 0.3s;
   cursor: pointer;
 }
 
 .btn button:hover {
   background: linear-gradient(90deg, #eb6709 0%, #f63d43 100%);
   color: #fff;
   box-shadow: 0 2px 8px rgba(246, 61, 67, 0.15);
 }
 
 .btn1 button {
   background: linear-gradient(135deg, #00796b, #26a69a);
   color: #fff;
   border: none;
   padding: 8px 20px;
   border-radius: 6px;
   font-size: 14px;
   transition: none;
   cursor: pointer;
   white-space: nowrap;
   position: relative;
   overflow: hidden;
 }
 
 .btn1 button:hover {
   background: #222;
   color: #fff;
 }
 
 .btn2 button {
   background: #222;
   color: #fff;
   border: none;
   padding: 8px 20px;
   border-radius: 6px;
   font-size: 14px;
   transition:
     background 0.3s,
     color 0.3s,
     box-shadow 0.3s;
   cursor: pointer;
 }
 
 .btn2 button:hover {
   background: linear-gradient(135deg, #00796b, #26a69a);
   color: #fff;
 }
 
 .dropdown-menu select {
   background: #181818;
   color: #fff;
   border: none;
   padding: 8px 16px;
   border-radius: 6px;
   font-size: 14px;
   transition:
     background 0.3s,
     color 0.3s,
     box-shadow 0.3s;
   cursor: pointer;
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
   transition:
     background 0.3s,
     color 0.3s;
   white-space: nowrap;
   min-width: 150px;
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
   z-index: 10;
   margin: 0;
   padding: 0;
   list-style: none;
 }
 
 .dropdown-list li {
   padding: 10px 16px;
   color: #fff;
   cursor: pointer;
   transition:
     background 0.3s,
     color 0.3s;
   font-size: 14px;
 }
 
 .dropdown-list li:hover,
 .dropdown-list li.active {
   background: linear-gradient(135deg, #00796b, #26a69a);
   color: #fff;
 }

/*  deprecated deep selector */
:deep(.dropdown-menu select option:hover),
:deep(.dropdown-menu select option:focus) {
  background: linear-gradient(135deg, #00796b, #26a69a);
  color: #fff;
}

 .custom-country-dropdown {
   position: relative;
   min-width: 150px;
 }

/* Language visibility control */
.lang-en .lang-fr,
.lang-en .lang-zh {
  display: none !important;
}

.lang-fr .lang-en,
.lang-fr .lang-zh {
  display: none !important;
}

.lang-zh .lang-en,
.lang-zh .lang-fr {
  display: none !important;
}

/* ==================== Media Responsiveness =========================== */
@media (max-width: 834px) {
   header {
     padding: 10px;
   }
 
   .navbar {
     flex-direction: column;
     align-items: flex-start;
     background: transparent;
   }
 
   .navbar-header-row {
     width: 100%;
     display: flex;
     flex-direction: row;
     align-items: center;
     justify-content: space-between;
   }
 
   .logo {
     flex: none;
     justify-content: flex-start;
   }
 
   .menu-toggle {
     display: block;
     margin-left: auto;
   }
 
   .navbar-links,
   .dropdown-menu,
   .btn {
     display: none;
     flex-direction: column;
     align-items: flex-start;
     background: transparent;
     box-shadow: none;
   }
 
   .navbar.open {
     background: #181818 !important;
     box-shadow: 0 4px 32px rgba(0, 0, 0, 0.18);
     border-radius: 0 0 18px 18px;
     transition: background 0.3s;
   }
 
   .navbar.open .navbar-links,
   .navbar.open .dropdown-menu,
   .navbar.open .btn {
     display: flex !important;
   }
 
   .navbar-links li a {
     background: transparent;
     width: 100%;
     text-align: left;
   }
 
   .custom-country-dropdown {
     width: 100%;
     margin: 10px 0 0 0;
   }
 }
</style>
