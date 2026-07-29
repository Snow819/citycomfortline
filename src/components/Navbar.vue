<template>
  <header :class="[
    'navbar-header',
    { 'navbar-scrolled': isScrolled },
    { 'navbar-hidden': isHidden },
  ]">
    <nav class="navbar-inner">

      <!-- ── Logo ─────────────────────────────────────────── -->
      <a href="#home" class="navbar-logo" @click.prevent="scrollTo('home')">
        <img src="@/assets/logo-m.svg" alt="Swift Comfort Line" class="logo-emblem" />
        <div class="logo-text">
          <span class="logo-name">
            Swift Comfort <span class="logo-name--gold">Line</span>
          </span>
          <span class="logo-divider"></span>
          <span class="logo-tagline">{{ page === "cleaning" ? t("navbar.cleaningTagline") :
            t("navbar.healthcareTagline") }}</span>
        </div>
      </a>

      <!-- ── Desktop nav links ─────────────────────────────── -->
      <ul class="nav-links">
        <li>
          <a href="#home" class="nav-link" :class="{ active: activeSection === 'home' }"
            @click.prevent="scrollTo('home')">{{ t('navbar.home') }}</a>
        </li>
        <li>
          <a href="#about" class="nav-link" :class="{ active: activeSection === 'about' }"
            @click.prevent="scrollTo('about')">{{ t('navbar.about') }}</a>
        </li>

        <!-- Services dropdown -->
        <li class="nav-dropdown" @mouseenter="servicesOpen = true" @mouseleave="servicesOpen = false">
          <a href="#services" class="nav-link nav-link--dropdown" :class="{ active: activeSection === 'services' }"
            @click.prevent="scrollTo('services')">
            {{ t('navbar.services') }}
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
              stroke-linecap="round">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </a>
          <transition name="dropdown">
            <div v-if="servicesOpen" class="dropdown-panel">
              <a v-for="item in serviceItems" :key="item.label" href="#services" class="dropdown-item"
                @click.prevent="scrollTo('services'); servicesOpen = false">
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
          <a href="#areas" class="nav-link" :class="{ active: activeSection === 'areas' }"
            @click.prevent="scrollTo('areas')">{{ t('navbar.serviceAreas') }}</a>
        </li>
        <li>
          <a href="#testimonials" class="nav-link" :class="{ active: activeSection === 'testimonials' }"
            @click.prevent="scrollTo('testimonials')">{{ t('navbar.testimonials') }}</a>
        </li>
        <li>
          <a href="#contact" class="nav-link" :class="{ active: activeSection === 'contact' }"
            @click.prevent="scrollTo('contact')">{{ t('navbar.contact') }}</a>
        </li>
      </ul>

      <!-- ── Right: language + CTA ─────────────────────────── -->
      <div class="navbar-right">
        <!-- Language dropdown -->
        <div class="lang-dropdown" ref="langRef">
          <button class="lang-btn" @click="langOpen = !langOpen">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
              stroke-linecap="round">
              <circle cx="12" cy="12" r="10" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
            {{ currentLangLabel }}
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
              stroke-linecap="round">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
          <transition name="dropdown">
            <ul v-if="langOpen" class="lang-list">
              <template v-for="lang in languages" :key="lang.code">
                <li v-if="lang.code !== currentLocale" class="lang-item" @click="selectLang(lang)">
                  {{ lang.label }}
                </li>
              </template>
            </ul>
          </transition>
        </div>

        <!-- CTA -->
        <a href="#contact" class="btn-get-in-touch" @click.prevent="scrollTo('contact')">
          {{ t('navbar.getInTouch') }}
        </a>
      </div>

      <!-- ── Mobile hamburger ──────────────────────────────── -->
      <button class="hamburger" :class="{ open: mobileOpen }" @click="mobileOpen = !mobileOpen"
        aria-label="Toggle menu">
        <span></span><span></span><span></span>
      </button>
    </nav>

    <!-- ── Mobile menu ────────────────────────────────────── -->
    <transition name="mobile-slide">
      <div v-if="mobileOpen" class="mobile-menu">
        <a href="#home" class="mobile-link" @click.prevent="mobileNav('home')">{{ t('navbar.home') }}</a>
        <a href="#about" class="mobile-link" @click.prevent="mobileNav('about')">{{ t('navbar.about') }}</a>
        <a href="#services" class="mobile-link" @click.prevent="mobileNav('services')">{{ t('navbar.services') }}</a>
        <a href="#areas" class="mobile-link" @click.prevent="mobileNav('areas')">{{ t('navbar.serviceAreas') }}</a>
        <a href="#testimonials" class="mobile-link" @click.prevent="mobileNav('testimonials')">{{
          t('navbar.testimonials')
          }}</a>
        <a href="#contact" class="mobile-link" @click.prevent="mobileNav('contact')">{{ t('navbar.contact') }}</a>

        <div class="mobile-lang">
          <span v-for="lang in languages" :key="lang.code" class="mobile-lang-btn"
            :class="{ active: lang.code === currentLocale }" @click="selectLang(lang)">
            {{ lang.label }}
          </span>
        </div>

        <a href="#contact" class="mobile-cta" @click.prevent="mobileNav('contact')">
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

/*
  page prop: 'healthcare' (default) or 'cleaning'
  Controls the logo tagline shown under the brand name.
  Pass page="cleaning" from CleaningPage.vue.
*/
const props = defineProps({
  page: {
    type: String,
    default: 'healthcare',
  },
})

/* ── Service dropdown icons ──────────────────────────────── */
const IconCar = defineComponent({
  render: () => h('svg', {
    width: 16, height: 16, viewBox: '0 0 24 24',
    fill: 'none', stroke: 'currentColor',
    'stroke-width': '1.8', 'stroke-linecap': 'round',
  }, [
    h('rect', { x: 1, y: 3, width: 15, height: 13 }),
    h('polygon', { points: '16 8 20 8 23 11 23 16 16 16 16 8' }),
    h('circle', { cx: 5.5, cy: 18.5, r: 2.5 }),
    h('circle', { cx: 18.5, cy: 18.5, r: 2.5 }),
  ]),
})

const IconHome = defineComponent({
  render: () => h('svg', {
    width: 16, height: 16, viewBox: '0 0 24 24',
    fill: 'none', stroke: 'currentColor',
    'stroke-width': '1.8', 'stroke-linecap': 'round',
  }, [
    h('path', { d: 'M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z' }),
    h('polyline', { points: '9 22 9 12 15 12 15 22' }),
  ]),
})

const IconHeart = defineComponent({
  render: () => h('svg', {
    width: 16, height: 16, viewBox: '0 0 24 24',
    fill: 'none', stroke: 'currentColor',
    'stroke-width': '1.8', 'stroke-linecap': 'round',
  }, [
    h('path', { d: 'M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z' }),
  ]),
})

const IconMeal = defineComponent({
  render: () => h('svg', {
    width: 16, height: 16, viewBox: '0 0 24 24',
    fill: 'none', stroke: 'currentColor',
    'stroke-width': '1.8', 'stroke-linecap': 'round',
  }, [
    h('path', { d: 'M18 8h1a4 4 0 0 1 0 8h-1' }),
    h('path', { d: 'M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z' }),
    h('line', { x1: 6, y1: 1, x2: 6, y2: 4 }),
    h('line', { x1: 10, y1: 1, x2: 10, y2: 4 }),
    h('line', { x1: 14, y1: 1, x2: 14, y2: 4 }),
  ]),
})

const IconShield = defineComponent({
  render: () => h('svg', {
    width: 16, height: 16, viewBox: '0 0 24 24',
    fill: 'none', stroke: 'currentColor',
    'stroke-width': '1.8', 'stroke-linecap': 'round',
  }, [
    h('path', { d: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z' }),
    h('polyline', { points: '9 12 11 14 15 10' }),
  ]),
})

const serviceItems = [
  { label: 'ourServices.companionship.title', desc: 'ourServices.companionship.description', icon: IconHeart },
  { label: 'ourServices.transportation.title', desc: 'ourServices.transportation.description', icon: IconCar },
  { label: 'ourServices.mealPrep.title', desc: 'ourServices.mealPrep.description', icon: IconMeal },
  { label: 'ourServices.housekeeping.title', desc: 'ourServices.housekeeping.description', icon: IconHome },
  { label: 'ourServices.respite.title', desc: 'ourServices.respite.description', icon: IconShield },
]

/* ── Language ────────────────────────────────────────────── */
const languages = [
  { code: 'en', label: 'English' },
  { code: 'fr', label: 'Français' },
  { code: 'zh', label: '中文' },
]

const savedLang = localStorage.getItem('lang') || 'en'
locale.value = savedLang

const currentLocale = computed(() => locale.value)
const currentLangLabel = computed(() =>
  languages.find(l => l.code === locale.value)?.label ?? 'English'
)

const langOpen = ref(false)
const langRef = ref(null)

const selectLang = (lang) => {
  locale.value = lang.code
  localStorage.setItem('lang', lang.code)
  langOpen.value = false
  mobileOpen.value = false
}

/* ── Scroll hide — fixed logic ───────────────────────────────
   Rules:
   1. Always visible when within 300px of the top
   2. Only hide after scrolling DOWN at least 80px in one gesture
   3. 120ms debounce before hiding — prevents flicker on trackpads
   4. Any upward scroll cancels pending hide and shows immediately
──────────────────────────────────────────────────────────── */
const isScrolled = ref(false)
const isHidden = ref(false)
const activeSection = ref('home')
const mobileOpen = ref(false)
const servicesOpen = ref(false)

const SCROLL_THRESHOLD = 10    /* px — when "scrolled" style activates */
const HIDE_START = 300   /* px — navbar won't hide above this     */
const HIDE_DELTA = 80    /* px — must scroll down this far        */
const HIDE_DELAY = 120   /* ms — debounce before hiding           */

let lastY = 0
let hideTimer = null

const onScroll = () => {
  const y = window.scrollY

  /* Scrolled style */
  isScrolled.value = y > SCROLL_THRESHOLD

  if (y < HIDE_START) {
    /* Near the top — always show, cancel any pending hide */
    if (hideTimer) { clearTimeout(hideTimer); hideTimer = null }
    isHidden.value = false
  } else if (y > lastY + HIDE_DELTA) {
    /* Scrolling down past threshold — hide after debounce */
    if (!hideTimer) {
      hideTimer = setTimeout(() => {
        isHidden.value = true
        hideTimer = null
      }, HIDE_DELAY)
    }
  } else if (y < lastY) {
    /* Any upward scroll — show immediately */
    if (hideTimer) { clearTimeout(hideTimer); hideTimer = null }
    isHidden.value = false
  }

  lastY = y

  /* Active section detection */
  const sections = ['home', 'about', 'services', 'areas', 'testimonials', 'contact']
  for (let i = sections.length - 1; i >= 0; i--) {
    const el = document.getElementById(sections[i])
    if (el && el.getBoundingClientRect().top <= 120) {
      activeSection.value = sections[i]
      break
    }
  }
}

/* ── Helpers ─────────────────────────────────────────────── */
const scrollTo = (id) => {
  const el = document.getElementById(id)
  if (!el) return
  window.scrollTo({
    top: el.getBoundingClientRect().top + window.pageYOffset - 100,
    behavior: 'smooth',
  })
  mobileOpen.value = false
}

const mobileNav = (id) => {
  mobileOpen.value = false
  setTimeout(() => scrollTo(id), 10)
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
  if (hideTimer) clearTimeout(hideTimer)
})
</script>

<style scoped>
/* ─── Header shell ──────────────────────────────────────── */
.navbar-header {
  position: fixed;
  /*
    top = banner height.
    TopBanner.vue measures itself on mount/resize and writes
    the exact pixel value to --banner-height on <html>.
    The fallback 38px is used only before the first measurement.
  */
  top: var(--banner-height, 38px);
  left: 0;
  width: 100%;
  z-index: 1000;
  /* banner is 1001, so navbar sits below it */
  background: #ffffff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
  box-shadow: 0 2px 16px rgba(69, 19, 125, 0.06);
  /*
    Transition on transform covers hide/show.
    Duration is 0.38s with a smooth cubic so it
    slides back IN slowly — feels controlled, not snappy.
  */
  transition:
    transform 0.38s cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 0.30s ease,
    top 0.30s ease;
}

.navbar-scrolled {
  box-shadow: 0 4px 24px rgba(69, 19, 125, 0.12);
}

/*
  translateY(-100%) slides the navbar fully above the viewport.
  It does NOT affect the banner — the banner is z-index 1001
  and positioned at top:0 independently.
*/
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
  font-family: var(--font-display);
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--color-primary);
  letter-spacing: 0.01em;
  line-height: 1.1;
  text-transform: uppercase;
}

.logo-name--gold {
  color: var(--color-gold);
}

.logo-divider {
  display: block;
  width: 100%;
  height: 1.5px;
  background: linear-gradient(to right, var(--color-gold), transparent);
  margin: 3px 0;
}

.logo-tagline {
  font-family: var(--font-body);
  font-size: 0.68rem;
  font-weight: 400;
  color: var(--color-primary);
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
  font-family: var(--font-body);
  font-size: 0.88rem;
  font-weight: 500;
  color: var(--color-primary);
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
  background: var(--color-gold);
  border-radius: 2px;
  transform: scaleX(0);
  transition: transform 0.22s ease;
}

.nav-link:hover::after,
.nav-link.active::after {
  transform: scaleX(1);
}

.nav-link.active {
  color: var(--color-gold);
}

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
  border: 1px solid rgba(69, 19, 125, 0.10);
  border-radius: 14px;
  box-shadow: 0 16px 48px rgba(69, 19, 125, 0.14);
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

.dropdown-item:hover {
  background: var(--color-primary-light);
}

.dropdown-icon {
  width: 36px;
  height: 36px;
  border-radius: 8px;
  background: rgba(69, 19, 125, 0.07);
  color: var(--color-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.dropdown-item-title {
  display: block;
  font-family: var(--font-body);
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--color-primary);
  line-height: 1.2;
}

.dropdown-item-desc {
  display: block;
  font-family: var(--font-body);
  font-size: 0.74rem;
  color: var(--color-text-muted);
  margin-top: 2px;
  line-height: 1.4;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 220px;
}

.dropdown-enter-active,
.dropdown-leave-active {
  transition: opacity 0.18s ease, transform 0.18s ease;
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateX(-50%) translateY(-6px);
}

/* ─── Right side ────────────────────────────────────────── */
.navbar-right {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
}

.lang-dropdown {
  position: relative;
}

.lang-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: var(--font-body);
  font-size: 0.82rem;
  font-weight: 500;
  color: var(--color-primary);
  background: transparent;
  border: 1.5px solid var(--color-border);
  border-radius: 50px;
  padding: 7px 14px;
  cursor: pointer;
  transition: border-color 0.2s ease;
  white-space: nowrap;
}

.lang-btn:hover {
  border-color: var(--color-primary);
}

.lang-list {
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  background: #ffffff;
  border: 1px solid rgba(69, 19, 125, 0.10);
  border-radius: 10px;
  box-shadow: 0 8px 28px rgba(69, 19, 125, 0.12);
  padding: 6px;
  list-style: none;
  min-width: 130px;
  z-index: 200;
}

.lang-item {
  padding: 9px 14px;
  font-family: var(--font-body);
  font-size: 0.85rem;
  color: var(--color-primary);
  border-radius: 7px;
  cursor: pointer;
  transition: background 0.15s ease;
}

.lang-item:hover {
  background: var(--color-primary-light);
}

/* ─── CTA ────────────────────────────────────────────────── */
.btn-get-in-touch {
  display: inline-flex;
  align-items: center;
  font-family: var(--font-body);
  font-size: 0.88rem;
  font-weight: 600;
  color: #ffffff;
  background: var(--color-gold);
  padding: 11px 26px;
  border-radius: 50px;
  text-decoration: none;
  letter-spacing: 0.02em;
  box-shadow: 0 4px 16px rgba(204, 147, 58, 0.35);
  transition: background 0.25s ease, transform 0.2s ease, box-shadow 0.25s ease;
  white-space: nowrap;
}

.btn-get-in-touch:hover {
  background: var(--color-gold-dark);
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(204, 147, 58, 0.45);
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
  background: var(--color-primary);
  border-radius: 2px;
  transition: all 0.3s ease;
}

.hamburger.open span:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}

.hamburger.open span:nth-child(2) {
  opacity: 0;
}

.hamburger.open span:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

/* ─── Mobile menu ───────────────────────────────────────── */
.mobile-menu {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background: #ffffff;
  border-top: 1px solid rgba(69, 19, 125, 0.08);
  box-shadow: 0 16px 40px rgba(69, 19, 125, 0.12);
  padding: 20px 24px 28px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  z-index: 999;
}

.mobile-link {
  font-family: var(--font-body);
  font-size: 1rem;
  font-weight: 500;
  color: var(--color-primary);
  text-decoration: none;
  padding: 12px 16px;
  border-radius: 10px;
  transition: background 0.15s ease;
}

.mobile-link:hover {
  background: var(--color-primary-light);
}

.mobile-lang {
  display: flex;
  gap: 8px;
  padding: 12px 16px 4px;
  flex-wrap: wrap;
}

.mobile-lang-btn {
  font-family: var(--font-body);
  font-size: 0.85rem;
  color: var(--color-text-muted);
  cursor: pointer;
  padding: 6px 14px;
  border-radius: 50px;
  border: 1.5px solid var(--color-border);
  transition: all 0.2s ease;
}

.mobile-lang-btn.active {
  color: var(--color-primary);
  border-color: var(--color-primary);
  font-weight: 600;
}

.mobile-cta {
  display: block;
  text-align: center;
  margin-top: 12px;
  background: var(--color-gold);
  color: #ffffff;
  font-family: var(--font-body);
  font-size: 0.95rem;
  font-weight: 600;
  padding: 14px;
  border-radius: 50px;
  text-decoration: none;
  box-shadow: 0 4px 16px rgba(204, 147, 58, 0.30);
}

.mobile-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.30);
  z-index: 998;
  backdrop-filter: blur(2px);
}

.mobile-slide-enter-active,
.mobile-slide-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.mobile-slide-enter-from,
.mobile-slide-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

/* ─── Responsive ────────────────────────────────────────── */
@media (max-width: 1024px) {
  .nav-links {
    display: none;
  }

  .navbar-right {
    display: none;
  }

  .hamburger {
    display: flex;
  }

  .navbar-inner {
    height: 72px;
    padding: 0 20px;
  }
}

@media (max-width: 480px) {
  .logo-emblem {
    width: 52px;
    height: 52px;
  }

  .logo-name {
    font-size: 1rem;
  }

  .logo-tagline {
    display: none;
  }
}

@media (prefers-reduced-motion: reduce) {

  .navbar-header,
  .mobile-slide-enter-active,
  .mobile-slide-leave-active {
    transition: none !important;
  }
}
</style>