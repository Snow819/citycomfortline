<template>
  <header
    :class="[
      'navbar-header',
      { 'navbar-scrolled': isScrolled },
      { 'navbar-hidden': isHidden },
    ]"
  >
    <nav class="navbar-inner">

      <!-- Logo -->
      <a href="#home" class="navbar-logo" @click.prevent="scrollTo('home')">
        <img src="@/assets/Logo_dark.png" alt="Swift Comfort Line" class="logo-emblem" />
        <div class="logo-text">
          <span class="logo-name">Swift Comfort <span class="logo-name--gold">Line</span></span>
          <span class="logo-divider"></span>
          <span class="logo-tagline">Non-Medical Support Services</span>
        </div>
      </a>

      <!-- Desktop nav links -->
      <ul class="nav-links">
        <li>
          <a
            href="#home"
            class="nav-link"
            :class="{ active: activeSection === 'home' }"
            @click.prevent="scrollTo('home')"
          >{{ t('navbar.home') }}</a>
        </li>
        <li>
          <a
            href="#about"
            class="nav-link"
            :class="{ active: activeSection === 'about' }"
            @click.prevent="scrollTo('about')"
          >{{ t('navbar.about') }}</a>
        </li>
        <li class="nav-dropdown" @mouseenter="servicesOpen = true" @mouseleave="servicesOpen = false">
          <a
            href="#services"
            class="nav-link nav-link--dropdown"
            :class="{ active: activeSection === 'services' }"
            @click.prevent="scrollTo('services')"
          >
            {{ t('navbar.services') }}
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </a>
          <!-- Dropdown -->
          <transition name="dropdown">
            <div v-if="servicesOpen" class="dropdown-panel">
              <a
                v-for="item in serviceItems"
                :key="item.id"
                :href="'#' + item.id"
                class="dropdown-item"
                @click.prevent="scrollTo(item.id); servicesOpen = false"
              >
                <div class="dropdown-icon">
                  <component :is="item.icon" />
                </div>
                <div>
                  <span class="dropdown-item-title">{{ t(item.label) }}</span>
                  <span class="dropdown-item-desc">{{ t(item.desc) }}</span>
                </div>
              </a>
            </div>
          </transition>
        </li>
        <li>
          <a
            href="#areas"
            class="nav-link"
            :class="{ active: activeSection === 'areas' }"
            @click.prevent="scrollTo('areas')"
          >{{ t('navbar.serviceAreas') }}</a>
        </li>
        <li>
          <a
            href="#testimonials"
            class="nav-link"
            :class="{ active: activeSection === 'testimonials' }"
            @click.prevent="scrollTo('testimonials')"
          >{{ t('navbar.testimonials') }}</a>
        </li>
        <li>
          <a
            href="#contact"
            class="nav-link"
            :class="{ active: activeSection === 'contact' }"
            @click.prevent="scrollTo('contact')"
          >{{ t('navbar.contact') }}</a>
        </li>
      </ul>

      <!-- Right: language + CTA -->
      <div class="navbar-right">
        <!-- Language dropdown -->
        <div class="lang-dropdown" ref="langRef">
          <button class="lang-btn" @click="langOpen = !langOpen">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
              <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
            </svg>
            {{ currentLangLabel }}
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </button>
          <transition name="dropdown">
            <ul v-if="langOpen" class="lang-list">
              <li
                v-for="lang in languages"
                :key="lang.code"
                v-if="lang.code !== currentLocale"
                @click="selectLang(lang)"
                class="lang-item"
              >{{ lang.label }}</li>
            </ul>
          </transition>
        </div>

        <!-- CTA -->
        <a href="#contact" class="btn-get-in-touch" @click.prevent="scrollTo('contact')">
          {{ t('navbar.getInTouch') }}
        </a>
      </div>

      <!-- Mobile hamburger -->
      <button
        class="hamburger"
        :class="{ open: mobileOpen }"
        @click="mobileOpen = !mobileOpen"
        aria-label="Toggle menu"
      >
        <span></span><span></span><span></span>
      </button>
    </nav>

    <!-- Mobile menu -->
    <transition name="mobile-slide">
      <div v-if="mobileOpen" class="mobile-menu">
        <a href="#home"         class="mobile-link" @click="mobileNav('home')">{{ t('navbar.home') }}</a>
        <a href="#about"        class="mobile-link" @click="mobileNav('about')">{{ t('navbar.about') }}</a>
        <a href="#services"     class="mobile-link" @click="mobileNav('services')">{{ t('navbar.services') }}</a>
        <a href="#areas"        class="mobile-link" @click="mobileNav('areas')">{{ t('navbar.serviceAreas') }}</a>
        <a href="#testimonials" class="mobile-link" @click="mobileNav('testimonials')">{{ t('navbar.testimonials') }}</a>
        <a href="#contact"      class="mobile-link" @click="mobileNav('contact')">{{ t('navbar.contact') }}</a>

        <div class="mobile-lang">
          <span
            v-for="lang in languages"
            :key="lang.code"
            class="mobile-lang-btn"
            :class="{ active: lang.code === currentLocale }"
            @click="selectLang(lang)"
          >{{ lang.label }}</span>
        </div>

        <a href="#contact" class="mobile-cta" @click="mobileNav('contact')">
          {{ t('navbar.getInTouch') }}
        </a>
      </div>
    </transition>

    <!-- Mobile overlay -->
    <div v-if="mobileOpen" class="mobile-overlay" @click="mobileOpen = false"></div>
  </header>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, defineComponent, h } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

// ── Inline SVG icon components ──────────────────────────
const IconCar   = defineComponent({ render: () => h('svg', { width:16, height:16, viewBox:'0 0 24 24', fill:'none', stroke:'currentColor', 'stroke-width':'1.8', 'stroke-linecap':'round' }, [h('rect',{x:1,y:3,width:15,height:13}),h('polygon',{points:'16 8 20 8 23 11 23 16 16 16 16 8'}),h('circle',{cx:5.5,cy:18.5,r:2.5}),h('circle',{cx:18.5,cy:18.5,r:2.5})]) })
const IconHome  = defineComponent({ render: () => h('svg', { width:16, height:16, viewBox:'0 0 24 24', fill:'none', stroke:'currentColor', 'stroke-width':'1.8', 'stroke-linecap':'round' }, [h('path',{d:'M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z'}),h('polyline',{points:'9 22 9 12 15 12 15 22'})]) })
const IconUsers = defineComponent({ render: () => h('svg', { width:16, height:16, viewBox:'0 0 24 24', fill:'none', stroke:'currentColor', 'stroke-width':'1.8', 'stroke-linecap':'round' }, [h('path',{d:'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2'}),h('circle',{cx:9,cy:7,r:4}),h('path',{d:'M23 21v-2a4 4 0 0 0-3-3.87'}),h('path',{d:'M16 3.13a4 4 0 0 1 0 7.75'})]) })

const serviceItems = [
  { id: 'services', label: 'ourServices.transportation.title', desc: 'ourServices.transportation.description', icon: IconCar },
  { id: 'services', label: 'ourServices.homeSupport.title',    desc: 'ourServices.homeSupport.description',    icon: IconHome },
  { id: 'services', label: 'ourServices.companionship.title',  desc: 'ourServices.companionship.description',  icon: IconUsers },
]

// ── Language ─────────────────────────────────────────────
const languages = [
  { code: 'en', label: 'English' },
  { code: 'fr', label: 'Français' },
  { code: 'zh', label: '中文' },
]

const savedLang = localStorage.getItem('lang') || 'en'
locale.value = savedLang

const currentLocale     = computed(() => locale.value)
const currentLangLabel  = computed(() => languages.find(l => l.code === locale.value)?.label ?? 'English')

const langOpen   = ref(false)
const langRef    = ref(null)

const selectLang = (lang) => {
  locale.value = lang.code
  localStorage.setItem('lang', lang.code)
  langOpen.value   = false
  mobileOpen.value = false
}

// ── Scroll state ─────────────────────────────────────────
const isScrolled     = ref(false)
const isHidden       = ref(false)
const activeSection  = ref('home')
const mobileOpen     = ref(false)
const servicesOpen   = ref(false)
let lastY = 0

const scrollTo = (id) => {
  const el = document.getElementById(id)
  if (!el) return
  const offset = 100
  const top    = el.getBoundingClientRect().top + window.pageYOffset - offset
  window.scrollTo({ top, behavior: 'smooth' })
  mobileOpen.value = false
}

const mobileNav = (id) => {
  mobileOpen.value = false
  setTimeout(() => scrollTo(id), 10)
}

const onScroll = () => {
  const y = window.scrollY
  isScrolled.value = y > 10
  isHidden.value   = y > lastY && y > 80
  lastY            = y

  // Active section detection
  const sections = ['home','about','services','areas','testimonials','contact']
  for (let i = sections.length - 1; i >= 0; i--) {
    const el = document.getElementById(sections[i])
    if (el && el.getBoundingClientRect().top <= 120) {
      activeSection.value = sections[i]
      break
    }
  }
}

const onClickOutside = (e) => {
  if (langRef.value && !langRef.value.contains(e.target)) langOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  document.addEventListener('click', onClickOutside)
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  document.removeEventListener('click', onClickOutside)
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lora:wght@600;700&family=DM+Sans:wght@300;400;500;600&display=swap');

/* ─── Header shell ──────────────────────────────────────── */
.navbar-header {
  position: fixed;
  top: var(--banner-height, 38px);
  left: 0;
  width: 100%;
  z-index: 1000;
  background: #ffffff;
  border-bottom: 1px solid rgba(0,0,0,0.06);
  box-shadow: 0 2px 16px rgba(45,27,105,0.06);
  transition: transform 0.35s ease, box-shadow 0.3s ease, top 0.3s ease;
}

.navbar-scrolled {
  box-shadow: 0 4px 24px rgba(45,27,105,0.12);
}

.navbar-hidden {
  transform: translateY(-100%);
}

/* ─── Inner row ─────────────────────────────────────────── */
.navbar-inner {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 40px;
  height: 84px;
  display: flex;
  align-items: center;
  gap: 32px;
}

/* ─── Logo ──────────────────────────────────────────────── */
.navbar-logo {
  display: flex;
  align-items: center;
  gap: 14px;
  text-decoration: none;
  flex-shrink: 0;
}

.logo-emblem {
  width: 64px;
  height: 64px;
  object-fit: contain;
}

.logo-text {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.logo-name {
  font-family: 'Lora', Georgia, serif;
  font-size: 1.15rem;
  font-weight: 700;
  color: #2D1B69;
  letter-spacing: 0.01em;
  line-height: 1.1;
  text-transform: uppercase;
}

.logo-name--gold { color: #C9A84C; }

.logo-divider {
  display: block;
  width: 100%;
  height: 1.5px;
  background: linear-gradient(to right, #C9A84C, transparent);
  margin: 3px 0;
}

.logo-tagline {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.68rem;
  font-weight: 400;
  color: #8a8aaa;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

/* ─── Nav links ─────────────────────────────────────────── */
.nav-links {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-link {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.88rem;
  font-weight: 500;
  color: #3a3a5a;
  text-decoration: none;
  padding: 8px 14px;
  border-radius: 6px;
  position: relative;
  transition: color 0.2s ease;
  white-space: nowrap;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 2px;
  left: 14px;
  right: 14px;
  height: 2px;
  background: #C9A84C;
  border-radius: 2px;
  transform: scaleX(0);
  transition: transform 0.2s ease;
}

.nav-link:hover        { color: #2D1B69; }
.nav-link:hover::after { transform: scaleX(1); }
.nav-link.active       { color: #C9A84C; }
.nav-link.active::after { transform: scaleX(1); }

/* ─── Services dropdown ─────────────────────────────────── */
.nav-dropdown {
  position: relative;
}

.dropdown-panel {
  position: absolute;
  top: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%);
  background: #ffffff;
  border: 1px solid rgba(45,27,105,0.1);
  border-radius: 14px;
  box-shadow: 0 16px 48px rgba(45,27,105,0.14);
  padding: 10px;
  min-width: 300px;
  z-index: 100;
}

.dropdown-item {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 12px 14px;
  border-radius: 10px;
  text-decoration: none;
  transition: background 0.15s ease;
}

.dropdown-item:hover { background: #f7f4ff; }

.dropdown-icon {
  width: 36px;
  height: 36px;
  border-radius: 8px;
  background: rgba(45,27,105,0.07);
  color: #2D1B69;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.dropdown-item-title {
  display: block;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.85rem;
  font-weight: 600;
  color: #2D1B69;
  line-height: 1.2;
}

.dropdown-item-desc {
  display: block;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.74rem;
  color: #8a8aaa;
  margin-top: 2px;
  line-height: 1.4;
}

/* Dropdown transition */
.dropdown-enter-active,
.dropdown-leave-active { transition: opacity 0.18s ease, transform 0.18s ease; }
.dropdown-enter-from,
.dropdown-leave-to     { opacity: 0; transform: translateX(-50%) translateY(-6px); }

/* ─── Right side ────────────────────────────────────────── */
.navbar-right {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
}

/* ─── Language dropdown ─────────────────────────────────── */
.lang-dropdown { position: relative; }

.lang-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.82rem;
  font-weight: 500;
  color: #3a3a5a;
  background: transparent;
  border: 1.5px solid rgba(45,27,105,0.15);
  border-radius: 50px;
  padding: 7px 14px;
  cursor: pointer;
  transition: border-color 0.2s ease, color 0.2s ease;
  white-space: nowrap;
}

.lang-btn:hover {
  border-color: #2D1B69;
  color: #2D1B69;
}

.lang-list {
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  background: #ffffff;
  border: 1px solid rgba(45,27,105,0.1);
  border-radius: 10px;
  box-shadow: 0 8px 28px rgba(45,27,105,0.12);
  padding: 6px;
  list-style: none;
  min-width: 130px;
  z-index: 200;
}

.lang-item {
  padding: 9px 14px;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.85rem;
  color: #3a3a5a;
  border-radius: 7px;
  cursor: pointer;
  transition: background 0.15s ease, color 0.15s ease;
}

.lang-item:hover {
  background: #f7f4ff;
  color: #2D1B69;
}

/* ─── CTA button ────────────────────────────────────────── */
.btn-get-in-touch {
  display: inline-flex;
  align-items: center;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.88rem;
  font-weight: 600;
  color: #ffffff;
  background: #C9A84C;
  padding: 11px 26px;
  border-radius: 50px;
  text-decoration: none;
  letter-spacing: 0.02em;
  box-shadow: 0 4px 16px rgba(201,168,76,0.35);
  transition: background 0.25s ease, transform 0.2s ease, box-shadow 0.25s ease;
  white-space: nowrap;
}

.btn-get-in-touch:hover {
  background: #b8943e;
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(201,168,76,0.45);
}

/* ─── Hamburger ─────────────────────────────────────────── */
.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 6px;
  margin-left: auto;
}

.hamburger span {
  display: block;
  width: 24px;
  height: 2px;
  background: #2D1B69;
  border-radius: 2px;
  transition: all 0.3s ease;
}

.hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.hamburger.open span:nth-child(2) { opacity: 0; }
.hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

/* ─── Mobile menu ───────────────────────────────────────── */
.mobile-menu {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background: #ffffff;
  border-top: 1px solid rgba(45,27,105,0.08);
  box-shadow: 0 16px 40px rgba(45,27,105,0.12);
  padding: 20px 24px 28px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  z-index: 999;
}

.mobile-link {
  font-family: 'DM Sans', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  color: #2D1B69;
  text-decoration: none;
  padding: 12px 16px;
  border-radius: 10px;
  transition: background 0.15s ease;
}

.mobile-link:hover { background: #f7f4ff; }

.mobile-lang {
  display: flex;
  gap: 8px;
  padding: 12px 16px 4px;
  flex-wrap: wrap;
}

.mobile-lang-btn {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.85rem;
  color: #8a8aaa;
  cursor: pointer;
  padding: 6px 14px;
  border-radius: 50px;
  border: 1.5px solid #ddd;
  transition: all 0.2s ease;
}

.mobile-lang-btn.active {
  color: #2D1B69;
  border-color: #2D1B69;
  font-weight: 600;
}

.mobile-cta {
  display: block;
  text-align: center;
  margin-top: 12px;
  background: #C9A84C;
  color: #fff;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.95rem;
  font-weight: 600;
  padding: 14px;
  border-radius: 50px;
  text-decoration: none;
  box-shadow: 0 4px 16px rgba(201,168,76,0.3);
}

.mobile-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.3);
  z-index: 998;
  backdrop-filter: blur(2px);
}

/* Mobile slide transition */
.mobile-slide-enter-active,
.mobile-slide-leave-active { transition: opacity 0.2s ease, transform 0.2s ease; }
.mobile-slide-enter-from,
.mobile-slide-leave-to     { opacity: 0; transform: translateY(-8px); }

/* ─── Responsive ────────────────────────────────────────── */
@media (max-width: 1024px) {
  .nav-links    { display: none; }
  .navbar-right { display: none; }
  .hamburger    { display: flex; }

  .navbar-inner {
    height: 72px;
    padding: 0 20px;
  }
}

@media (max-width: 480px) {
  .logo-emblem  { width: 52px; height: 52px; }
  .logo-name    { font-size: 1rem; }
  .logo-tagline { display: none; }
}
</style>