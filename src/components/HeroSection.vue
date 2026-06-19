<template>
  <section class="hero-section" id="home">

    <!-- Carousel slides: full-bleed background images -->
    <div class="slides-track">
      <transition :name="transitionName">
        <div
          class="slide-bg"
          :key="currentSlide"
          :style="{ backgroundImage: `url(${slides[currentSlide].image})` }"
        >
          <!-- Overlay for text legibility -->
          <div class="slide-overlay"></div>
        </div>
      </transition>
    </div>

    <!-- Text content, sits above the background -->
    <div class="hero-content-wrap">
      <transition :name="transitionName">
        <div class="hero-content" :key="currentSlide">

          <div class="hero-badge">
            <svg class="badge-heart" width="16" height="16" viewBox="0 0 24 24" fill="var(--color-gold)">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
            <span>{{ t(slides[currentSlide].badge) }}</span>
          </div>

          <h1 class="hero-headline">
            <span class="line-light reveal-line" style="animation-delay:0.1s">{{ t(slides[currentSlide].line1) }}</span>
            <span class="line-gold reveal-line" style="animation-delay:0.3s">{{ t(slides[currentSlide].line2) }}</span>
          </h1>

          <p class="hero-subtitle reveal-fade" style="animation-delay:0.5s">{{ t(slides[currentSlide].subtitle) }}</p>

          <div class="hero-buttons reveal-fade" style="animation-delay:0.6s">
            <a :href="'tel:' + phone" class="btn-primary">
              <span class="btn-primary-pulse"></span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.68A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/>
              </svg>
              <span class="relz">+1 (613) 851-6775</span>
            </a>
            <a href="#services" class="btn-outline" @click.prevent="scrollTo('services')">
              {{ t('hero.button2') }}
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </a>
          </div>

          <div class="trust-row reveal-fade" style="animation-delay:0.7s">
            <div class="trust-item" v-for="(item, i) in trustItems" :key="i">
              <span class="trust-check">✓</span>
              <span>{{ t(item) }}</span>
            </div>
          </div>

          <div class="stats-row reveal-fade" style="animation-delay:0.8s">
            <div class="stat-item" v-for="(stat, i) in stats" :key="i">
              <span class="stat-number">{{ animatedStats[i] }}{{ stat.suffix }}</span>
              <span class="stat-label">{{ t(stat.label) }}</span>
            </div>
          </div>

        </div>
      </transition>
    </div>

    <!-- Arrow navigation -->
    <button class="carousel-arrow carousel-arrow--left" @click="prevSlide" aria-label="Previous slide">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="15 18 9 12 15 6"/></svg>
    </button>
    <button class="carousel-arrow carousel-arrow--right" @click="nextSlide" aria-label="Next slide">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="9 18 15 12 9 6"/></svg>
    </button>

    <!-- Dots -->
    <div class="carousel-dots">
      <button
        v-for="(s, i) in slides"
        :key="i"
        class="carousel-dot"
        :class="{ active: i === currentSlide }"
        @click="goToSlide(i)"
        :aria-label="`Go to slide ${i + 1}`"
      >
        <svg v-if="i === currentSlide" class="dot-progress" viewBox="0 0 20 20">
          <circle cx="10" cy="10" r="8" fill="none" stroke="var(--color-gold)" stroke-width="2" stroke-dasharray="50.27" :stroke-dashoffset="50.27 - dotProgress" stroke-linecap="round" transform="rotate(-90 10 10)" />
        </svg>
      </button>
    </div>

    <!-- Wave divider -->
    <div class="wave-wrap">
      <svg class="wave-gold" viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,30 C240,60 480,0 720,30 C960,60 1200,0 1440,30" fill="none" stroke="var(--color-gold)" stroke-width="2.5"/>
      </svg>
      <svg class="wave-white" viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="var(--color-bg)"/>
      </svg>
    </div>

  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { ref, onMounted, onUnmounted } from 'vue'

const { t } = useI18n()
const phone = '+16138516775'

const trustItems = ['hero.trust1', 'hero.trust2', 'hero.trust3']

const stats = [
  { value: 200, suffix: '+', label: 'hero.stat1' },
  { value: 98,  suffix: '%', label: 'hero.stat2' },
  { value: 5,   suffix: '+', label: 'hero.stat3' },
]

/* ── 12 carousel slides ──────────────────────────────────── */
const slides = [
  {
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1600&q=80&auto=format&fit=crop',
    badge: 'hero.slides.1.badge',
    line1: 'hero.slides.1.line1',
    line2: 'hero.slides.1.line2',
    subtitle: 'hero.slides.1.subtitle'
  },
  {
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1600&q=80&auto=format&fit=crop',
    badge: 'hero.slides.2.badge',
    line1: 'hero.slides.2.line1',
    line2: 'hero.slides.2.line2',
    subtitle: 'hero.slides.2.subtitle'
  },
  {
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1600&q=80&auto=format&fit=crop',
    badge: 'hero.slides.3.badge',
    line1: 'hero.slides.3.line1',
    line2: 'hero.slides.3.line2',
    subtitle: 'hero.slides.3.subtitle'
  },
  {
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1600&q=80&auto=format&fit=crop',
    badge: 'hero.slides.4.badge',
    line1: 'hero.slides.4.line1',
    line2: 'hero.slides.4.line2',
    subtitle: 'hero.slides.4.subtitle'
  },
  {
    image: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=1600&q=80&auto=format&fit=crop',
    badge: 'hero.slides.5.badge',
    line1: 'hero.slides.5.line1',
    line2: 'hero.slides.5.line2',
    subtitle: 'hero.slides.5.subtitle'
  }
]

const currentSlide   = ref(0)
const transitionName = ref('fade-slide')
const dotProgress    = ref(0)
let autoplayInterval = null
let progressInterval = null
const SLIDE_DURATION  = 5000

const animatedStats = ref(stats.map(() => 0))

const animateCount = (index, target) => {
  const duration = 1400
  const frameRate = 16
  const totalFrames = duration / frameRate
  let frame = 0
  const interval = setInterval(() => {
    frame++
    animatedStats.value[index] = Math.round((target / totalFrames) * frame)
    if (frame >= totalFrames) {
      animatedStats.value[index] = target
      clearInterval(interval)
    }
  }, frameRate)
}

const nextSlide = () => {
  currentSlide.value =
    (currentSlide.value + 1) % slides.length

  startProgress()
}

const prevSlide = () => {
  currentSlide.value =
    (currentSlide.value - 1 + slides.length) %
    slides.length

  startProgress()
}

const goToSlide = (index) => {
  currentSlide.value = index
  startProgress()
}

const startAutoplay = () => {
  clearInterval(autoplayInterval)

  autoplayInterval = setInterval(() => {
    currentSlide.value =
      (currentSlide.value + 1) % slides.length

    startProgress()
  }, SLIDE_DURATION)
}

const pauseAutoplay = () => {
  if (autoplayInterval) { clearInterval(autoplayInterval); autoplayInterval = null }
  if (progressInterval) { clearInterval(progressInterval); progressInterval = null }
}

const resumeAutoplay = () => {
  startAutoplay()
  startProgress()
}

const startProgress = () => {
  if (progressInterval) clearInterval(progressInterval)
  const circumference = 50.27
  const steps = 60
  const stepTime = SLIDE_DURATION / steps
  let step = 0
  dotProgress.value = 0
  progressInterval = setInterval(() => {
    step++
    dotProgress.value = (step / steps) * circumference
    if (step >= steps) clearInterval(progressInterval)
  }, stepTime)
}

const restartProgress = () => {
  startProgress()
  startAutoplay()
}

const scrollTo = (id) => {
  const el = document.getElementById(id)
  if (el) {
    const top = el.getBoundingClientRect().top + window.pageYOffset - 100
    window.scrollTo({ top, behavior: 'smooth' })
  }
}

onMounted(() => {
  setTimeout(() => stats.forEach((s, i) => animateCount(i, s.value)), 700)
  startAutoplay()
  startProgress()
})

onUnmounted(() => {
  if (autoplayInterval) clearInterval(autoplayInterval)
  if (progressInterval) clearInterval(progressInterval)
})
</script>

<style scoped>
/* ─── Section ───────────────────────────────────────────── */
.hero-section {
  position: relative;
  width: 100%;
  min-height: 100vh;
  max-height: 1000px;
  overflow: hidden;
  display: flex;
  align-items: center;
  padding-top: var(--banner-height, 38px);
  background: var(--color-primary-dark);
}

/* ─── Background slides ─────────────────────────────────── */
.slides-track {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.slide-bg {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: var(--color-primary-dark);
  will-change: transform, opacity;
}

/* Overlay for text legibility — gradient from dark purple to transparent */
.slide-overlay {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(
      115deg,
      rgba(69, 19, 125, 0.95) 0%,
      rgba(69, 19, 125, 0.88) 35%,
      rgba(69, 19, 125, 0.65) 60%,
      rgba(69, 19, 125, 0.30) 80%,
      rgba(69, 19, 125, 0.08) 100%
    ),
    linear-gradient(
      to top,
      rgba(50, 14, 92, 0.65) 0%,
      transparent 35%
    );
}

/* Slide fade/scale transition */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition:
    opacity 0.9s ease,
    transform 0.9s ease;
}

.fade-slide-enter-from {
  opacity: 0;
  transform: scale(1.05);
}

.fade-slide-enter-to {
  opacity: 1;
  transform: scale(1);
}

.fade-slide-leave-from {
  opacity: 1;
}

.fade-slide-leave-to {
  opacity: 0;
}

@keyframes kenBurns {
  from { transform: scale(1.08); }
  to   { transform: scale(1); }
}

/* ─── Content wrapper ───────────────────────────────────── */
.hero-content-wrap {
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 140px 40px;
}

.hero-content {
  max-width: 700px;
}

/* ─── Entrance animations ───────────────────────────────── */
.reveal-line { display: block; opacity: 0; transform: translateY(28px); animation: revealUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
.reveal-fade { opacity: 0; transform: translateY(16px); animation: revealUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
@keyframes revealUp { to { opacity: 1; transform: translateY(0); } }

/* ─── Badge ─────────────────────────────────────────────── */
.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--color-gold);
  background: var(--color-gold-light);
  border: 1px solid rgba(204,147,58,0.35);
  padding: 6px 14px 6px 8px;
  border-radius: 50px;
  backdrop-filter: blur(4px);
}

.badge-heart { flex-shrink: 0; animation: heartBeat 2.4s ease-in-out infinite; }
@keyframes heartBeat {
  0%, 100% { transform: scale(1); }
  15%       { transform: scale(1.25); }
  30%       { transform: scale(1); }
  45%       { transform: scale(1.18); }
  60%       { transform: scale(1); }
}

/* ─── Headline ──────────────────────────────────────────── */
.hero-headline { display: flex; flex-direction: column; font-family: var(--font-display); margin-bottom: 20px; line-height: 1.1; gap: 2px; }

.line-light {
  font-size: clamp(2.5rem, 4.8vw, 4rem);
  font-weight: 700;
  color: #ffffff;
  text-shadow: 0 4px 24px rgba(0,0,0,0.35);
}

.line-gold {
  font-size: clamp(2.5rem, 4.8vw, 4rem);
  font-weight: 700;
  color: var(--color-gold);
  font-style: italic;
  position: relative;
  text-shadow: 0 4px 24px rgba(0,0,0,0.35);
}

.line-gold::after {
  content: '';
  position: absolute;
  bottom: -2px; left: 0;
  height: 4px; width: 0;
  background: linear-gradient(to right, var(--color-gold), transparent);
  border-radius: 4px;
  animation: underlineGrow 1s ease 1s forwards;
}

@keyframes underlineGrow { to { width: 60%; } }

/* ─── Subtitle ──────────────────────────────────────────── */
.hero-subtitle {
  font-family: var(--font-body);
  font-size: 1.05rem; font-weight: 300;
  color: rgba(255,255,255,0.88);
  line-height: 1.8;
  margin-bottom: 32px;
  max-width: 480px;
  text-shadow: 0 2px 12px rgba(0,0,0,0.3);
}

/* ─── Buttons ───────────────────────────────────────────── */
.hero-buttons { display: flex; align-items: center; gap: 14px; flex-wrap: wrap; margin-bottom: 28px; }

.btn-primary {
  position: relative;
  display: inline-flex; align-items: center; gap: 9px;
  background: linear-gradient(135deg, var(--color-gold-bright), var(--color-gold));
  color: var(--color-primary-dark);
  font-family: var(--font-body);
  font-size: 0.9rem; font-weight: 600;
  padding: 15px 32px; border-radius: 50px;
  text-decoration: none;
  box-shadow: 0 8px 28px rgba(232,185,60,0.4);
  transition: all 0.25s ease;
  overflow: hidden;
}

.relz { position: relative; z-index: 2; }

.btn-primary-pulse {
  position: absolute; inset: 0; border-radius: 50px;
  border: 2px solid rgba(255,255,255,0.5);
  animation: ringPulse 2.2s ease-out infinite;
}

@keyframes ringPulse {
  0%   { transform: scale(1); opacity: 0.6; }
  70%  { transform: scale(1.2); opacity: 0; }
  100% { transform: scale(1.2); opacity: 0; }
}

.btn-primary svg { position: relative; z-index: 2; }

.btn-primary:hover {
  background: linear-gradient(
    135deg,
    var(--color-gold),
    var(--color-gold-dark)
  );
  transform: translateY(-2px);
}

.btn-outline {
  display: inline-flex; align-items: center; gap: 8px;
  background: rgba(255,255,255,0.08);
  color: #ffffff;
  font-family: var(--font-body);
  font-size: 0.9rem; font-weight: 600;
  padding: 13px 28px; border-radius: 50px;
  border: 2px solid rgba(255,255,255,0.5);
  text-decoration: none; letter-spacing: 0.02em;
  backdrop-filter: blur(6px);
  transition: all 0.25s ease;
}

.btn-outline:hover { background: #ffffff; color: var(--color-primary); border-color: #ffffff; transform: translateY(-2px); }
.btn-outline svg { transition: transform 0.2s ease; }
.btn-outline:hover svg { transform: translateX(4px); }

/* ─── Trust row ─────────────────────────────────────────── */
.trust-row { display: flex; flex-wrap: wrap; gap: 10px 20px; margin-bottom: 32px; }
.trust-item { display: flex; align-items: center; gap: 6px; font-family: var(--font-body); font-size: 0.85rem; color: rgba(255,255,255,0.85); }
.trust-check { color: var(--color-gold); font-weight: 700; }

/* ─── Stats ─────────────────────────────────────────────── */
.stats-row {
  display: flex;
  align-items: center;
  padding-top: 24px;
  border-top: 1px solid rgba(204,147,58,0.3);
}
.stat-item { display: flex; flex-direction: column; gap: 3px; padding: 0 28px; border-right: 1px solid rgba(255,255,255,0.2); }
.stat-item:first-child { padding-left: 0; }
.stat-item:last-child  { border-right: none; }
.stat-number { font-family: var(--font-display); font-size: 1.75rem; font-weight: 700; color: var(--color-gold); line-height: 1; }
.stat-label { font-family: var(--font-body); font-size: 0.73rem; color: rgba(255,255,255,0.7); }

/* ─── Arrow navigation ──────────────────────────────────── */
.carousel-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 5;
  width: 52px; height: 52px;
  border-radius: 50%;
  border: 1.5px solid rgba(255,255,255,0.3);
  background: rgba(255,255,255,0.1);
  backdrop-filter: blur(8px);
  color: #ffffff;
  display: flex; align-items: center; justify-content: center;
  cursor: pointer;
  transition: background 0.25s ease, transform 0.25s ease, border-color 0.25s ease;
}

.carousel-arrow {
  background: rgba(69,19,125,0.35);
  border: 1px solid rgba(204,147,58,0.3);
  backdrop-filter: blur(8px);
}

.carousel-arrow:hover {
  background: var(--color-gold);
  border-color: var(--color-gold);
  color: var(--color-primary);
}

.carousel-arrow--left  { left: 28px; }
.carousel-arrow--right { right: 28px; }

/* ─── Dots ──────────────────────────────────────────────── */
.carousel-dots {
  position: absolute;
  bottom: 100px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 5;
  display: flex;
  gap: 8px;
}

.carousel-dot {
  position: relative;
  width: 22px; height: 22px;
  border-radius: 50%;
  border: none;
  background: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
}

.carousel-dot::before {
  content: '';
  width: 7px; height: 7px;
  border-radius: 50%;
  background: rgba(255,255,255,0.45);
  transition: background 0.2s ease, transform 0.2s ease;
}

.carousel-dot.active::before {
  background: var(--color-gold);
  transform: scale(1.3);
}

.dot-progress { position: absolute; inset: 0; width: 22px; height: 22px; }

/* ─── Wave ──────────────────────────────────────────────── */
.wave-wrap { position: absolute; bottom: 0; left: 0; width: 100%; z-index: 4; pointer-events: none; }
.wave-gold { display: block; width: 100%; height: 60px; position: absolute; bottom: 38px; left: 0; }
.wave-white { display: block; width: 100%; height: 80px; }

/* ─── Reduced motion ────────────────────────────────────── */
@media (prefers-reduced-motion: reduce) {
  .reveal-line, .reveal-fade, .hero-badge, .badge-heart,
  .btn-primary-pulse, .line-gold::after, .slide-bg {
    animation: none !important; opacity: 1 !important; transform: none !important;
  }
}

/* ─── Responsive ────────────────────────────────────────── */
@media (max-width: 1024px) {
  .hero-content-wrap { padding: 120px 40px 160px; }
  .hero-content { max-width: 100%; }
  .stat-item:first-child { padding-left: 28px; }
}

@media (max-width: 768px) {
  .hero-content-wrap { padding: 100px 24px 180px; }
  .hero-badge { font-size: 0.65rem; }
  .line-light, .line-gold { font-size: clamp(2rem, 8.5vw, 2.8rem); }
  .hero-subtitle { font-size: 0.95rem; }
  .hero-buttons { flex-direction: column; align-items: stretch; }
  .btn-primary, .btn-outline { justify-content: center; }
  .stats-row { flex-wrap: wrap; gap: 14px 0; }
  .stat-number { font-size: 1.4rem; }

  .carousel-arrow { width: 42px; height: 42px; }
  .carousel-arrow--left  { left: 12px; }
  .carousel-arrow--right { right: 12px; }
  .carousel-dots { bottom: 96px; }
}

@media (max-width: 768px) {

  .hero-content-wrap {
    padding: 100px 20px 180px;
  }

  .stats-row {
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 16px;
  }

  .stat-item {
    border-right: none;
    padding: 0;
    text-align: center;
  }
}
</style>