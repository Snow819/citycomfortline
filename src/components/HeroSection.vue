<template>
  <section class="hero-section" id="home">

    <!-- ── Carousel background slides ───────────────────── -->
    <div class="slides-track">
      <transition :name="transitionName">
        <div
          class="slide-bg"
          :key="currentSlide"
          :style="{ backgroundImage: `url(${slides[currentSlide].image})` }"
        >
          <div class="slide-overlay"></div>
        </div>
      </transition>
    </div>

    <!-- ── Branded uniform badge (slide 6 only) ─────────── -->
    <transition name="badge-pop">
      <div v-if="slides[currentSlide].workerSlide" class="uniform-badge" key="ub">
        <div class="ub-logo-mark">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <circle cx="14" cy="14" r="13" stroke="var(--color-gold)" stroke-width="1.5"/>
            <path d="M8 14 C8 10 11 8 14 8 C17 8 20 10 20 14 C20 18 17 20 14 20 C11 20 8 18 8 14Z"
                  fill="none" stroke="var(--color-gold)" stroke-width="1.2"/>
            <path d="M10 14 C10 12 12 11 14 11 C16 11 18 12 18 14" stroke="var(--color-gold-bright)"
                  stroke-width="1.5" stroke-linecap="round" fill="none"/>
          </svg>
        </div>
        <div class="ub-text">
          <span class="ub-brand">Swift Comfort Line</span>
          <span class="ub-role">Certified Care Team</span>
        </div>
        <div class="ub-badge-pill">EST. 2019</div>
      </div>
    </transition>

    <!-- ── Hero text content ─────────────────────────────── -->
    <div class="hero-content-wrap">
      <transition :name="transitionName">
        <div class="hero-content" :key="currentSlide">

          <div class="hero-badge">
            <span class="badge-pulse-dot"></span>
            <span>{{ t(slides[currentSlide].badge) }}</span>
          </div>

          <h1 class="hero-headline">
            <span class="line-light reveal-line" style="animation-delay:0.05s">
              {{ t(slides[currentSlide].line1) }}
            </span>
            <span class="line-gold reveal-line" style="animation-delay:0.22s">
              {{ t(slides[currentSlide].line2) }}
            </span>
          </h1>

          <p class="hero-subtitle reveal-fade" style="animation-delay:0.4s">
            {{ t(slides[currentSlide].subtitle) }}
          </p>

          <div class="hero-buttons reveal-fade" style="animation-delay:0.52s">
            <a :href="'tel:' + phone" class="btn-primary">
              <span class="btn-primary-pulse"></span>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" stroke-width="2.2" stroke-linecap="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07
                         A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.68A2 2 0
                         012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0
                         01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0
                         012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/>
              </svg>
              <span class="btn-label">+1 (613) 851-6775</span>
            </a>
            <a href="#services" class="btn-outline" @click.prevent="scrollTo('services')">
              {{ t('hero.button2') }}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" stroke-width="2.4" stroke-linecap="round">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </a>
          </div>

          <div class="trust-row reveal-fade" style="animation-delay:0.62s">
            <div class="trust-item" v-for="(item, i) in trustItems" :key="i">
              <span class="trust-check">✓</span>
              <span>{{ t(item) }}</span>
            </div>
          </div>

          <div class="stats-row reveal-fade" style="animation-delay:0.72s">
            <div class="stat-item" v-for="(stat, i) in stats" :key="i">
              <span class="stat-number">{{ animatedStats[i] }}{{ stat.suffix }}</span>
              <span class="stat-label">{{ t(stat.label) }}</span>
            </div>
          </div>

        </div>
      </transition>
    </div>

    <!-- ── Arrow navigation ──────────────────────────────── -->
    <button class="carousel-arrow carousel-arrow--left"  @click="prevSlide" aria-label="Previous slide">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
           stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
        <polyline points="15 18 9 12 15 6"/>
      </svg>
    </button>
    <button class="carousel-arrow carousel-arrow--right" @click="nextSlide" aria-label="Next slide">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
           stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
        <polyline points="9 18 15 12 9 6"/>
      </svg>
    </button>

    <!-- ── Progress dots ─────────────────────────────────── -->
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
          <circle
            cx="10" cy="10" r="8"
            fill="none"
            stroke="var(--color-gold)"
            stroke-width="2"
            stroke-dasharray="50.27"
            :stroke-dashoffset="50.27 - dotProgress"
            stroke-linecap="round"
            transform="rotate(-90 10 10)"
          />
        </svg>
      </button>
    </div>

    <!-- ── Wave divider ──────────────────────────────────── -->
    <div class="wave-wrap">
      <svg class="wave-gold" viewBox="0 0 1440 60" preserveAspectRatio="none"
           xmlns="http://www.w3.org/2000/svg">
        <path d="M0,30 C240,60 480,0 720,30 C960,60 1200,0 1440,30"
              fill="none" stroke="var(--color-gold)" stroke-width="2"/>
      </svg>
      <svg class="wave-white" viewBox="0 0 1440 80" preserveAspectRatio="none"
           xmlns="http://www.w3.org/2000/svg">
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

/* ── 6 carousel slides ───────────────────────────────────── */
const slides = [
  {
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1600&q=85&auto=format&fit=crop',
    badge:    'hero.slides.1.badge',
    line1:    'hero.slides.1.line1',
    line2:    'hero.slides.1.line2',
    subtitle: 'hero.slides.1.subtitle',
    workerSlide: false,
  },
  {
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1600&q=85&auto=format&fit=crop',
    badge:    'hero.slides.2.badge',
    line1:    'hero.slides.2.line1',
    line2:    'hero.slides.2.line2',
    subtitle: 'hero.slides.2.subtitle',
    workerSlide: false,
  },
  {
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1600&q=85&auto=format&fit=crop',
    badge:    'hero.slides.3.badge',
    line1:    'hero.slides.3.line1',
    line2:    'hero.slides.3.line2',
    subtitle: 'hero.slides.3.subtitle',
    workerSlide: false,
  },
  {
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1600&q=85&auto=format&fit=crop',
    badge:    'hero.slides.4.badge',
    line1:    'hero.slides.4.line1',
    line2:    'hero.slides.4.line2',
    subtitle: 'hero.slides.4.subtitle',
    workerSlide: false,
  },
  {
    image: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=1600&q=85&auto=format&fit=crop',
    badge:    'hero.slides.5.badge',
    line1:    'hero.slides.5.line1',
    line2:    'hero.slides.5.line2',
    subtitle: 'hero.slides.5.subtitle',
    workerSlide: false,
  },
  /* ── Slide 6: Branded worker slide ── */
  {
    /*
     * This photo shows a diverse group of healthcare professionals in
     * navy/teal scrubs / polo-style tops — closest real Unsplash match
     * for uniformed care workers. Replace with your own staff photo.
     */
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1600&q=85&auto=format&fit=crop',
    badge:    'hero.slides.6.badge',
    line1:    'hero.slides.6.line1',
    line2:    'hero.slides.6.line2',
    subtitle: 'hero.slides.6.subtitle',
    workerSlide: true,
  },
]

/* ── Reactive state ──────────────────────────────────────── */
const currentSlide   = ref(0)
const transitionName = ref('fade-slide')
const dotProgress    = ref(0)
const animatedStats  = ref(stats.map(() => 0))

let autoplayTimer   = null
let progressTimer   = null
const SLIDE_DURATION = 5500   // ms per slide

/* ── Stat counter animation ──────────────────────────────── */
const animateCount = (index, target) => {
  const duration   = 1500
  const frameTime  = 16
  const totalFrames = Math.round(duration / frameTime)
  let frame = 0
  const timer = setInterval(() => {
    frame++
    animatedStats.value[index] = Math.round((target / totalFrames) * frame)
    if (frame >= totalFrames) {
      animatedStats.value[index] = target
      clearInterval(timer)
    }
  }, frameTime)
}

/* ── Progress ring ───────────────────────────────────────── */
const startProgress = () => {
  if (progressTimer) clearInterval(progressTimer)
  dotProgress.value = 0
  const circumference = 50.27
  const steps    = 60
  const stepTime = SLIDE_DURATION / steps
  let step = 0
  progressTimer = setInterval(() => {
    step++
    dotProgress.value = (step / steps) * circumference
    if (step >= steps) clearInterval(progressTimer)
  }, stepTime)
}

/* ── Autoplay ────────────────────────────────────────────── */
const startAutoplay = () => {
  clearInterval(autoplayTimer)
  autoplayTimer = setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % slides.length
    startProgress()
  }, SLIDE_DURATION)
}

/* ── Navigation ──────────────────────────────────────────── */
const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.length
  startProgress()
  startAutoplay()
}

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + slides.length) % slides.length
  startProgress()
  startAutoplay()
}

const goToSlide = (i) => {
  currentSlide.value = i
  startProgress()
  startAutoplay()
}

const scrollTo = (id) => {
  const el = document.getElementById(id)
  if (el) {
    window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 100, behavior: 'smooth' })
  }
}

/* ── Lifecycle ───────────────────────────────────────────── */
onMounted(() => {
  setTimeout(() => stats.forEach((s, i) => animateCount(i, s.value)), 800)
  startAutoplay()
  startProgress()
})

onUnmounted(() => {
  clearInterval(autoplayTimer)
  clearInterval(progressTimer)
})
</script>

<style scoped>
/* ─── CSS Custom Properties ─────────────────────────────── */
.hero-section {
  --color-gold:        #CC933A;
  --color-gold-bright: #E8B93C;
  --color-gold-dark:   #A0701E;
  --color-gold-light:  rgba(204, 147, 58, 0.14);
  --color-primary:     #45137D;
  --color-primary-dark:#2D0A5A;
  --color-primary-deep:#1A0535;
  --color-bg:          #ffffff; /* match your site bg */
}

/* ─── Section ───────────────────────────────────────────── */
.hero-section {
  position: relative;
  width: 100%;
  min-height: 100vh;
  max-height: 1020px;
  overflow: hidden;
  display: flex;
  align-items: center;
  padding-top: var(--banner-height, 38px);
  background: var(--color-primary-deep);
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
  background-position: center top;
  background-repeat: no-repeat;
  background-color: var(--color-primary-deep);
  will-change: transform, opacity;
  /* Ken-Burns subtle zoom */
  animation: kenBurns 6s ease-out forwards;
}

@keyframes kenBurns {
  from { transform: scale(1.07); }
  to   { transform: scale(1.00); }
}

/* ── Premium 3-layer color grading overlay ───────────────── */
.slide-overlay {
  position: absolute;
  inset: 0;

  background:
    /* Layer 1: deep purple directional gradient — main text legibility */
    linear-gradient(
      115deg,
      rgba(26,  5, 52, 0.97) 0%,
      rgba(42, 10, 84, 0.93) 28%,
      rgba(55, 14,100, 0.74) 52%,
      rgba(40,  9, 78, 0.40) 72%,
      rgba(22,  4, 44, 0.12) 100%
    ),
    /* Layer 2: bottom vignette — depth & grounding */
    linear-gradient(
      to top,
      rgba(16,  3, 36, 0.90) 0%,
      rgba(35,  8, 68, 0.40) 25%,
      transparent 55%
    ),
    /* Layer 3: warm amber/gold cast on right highlights — luxury warmth */
    linear-gradient(
      140deg,
      transparent 42%,
      rgba(204, 147, 58, 0.09) 62%,
      rgba(180, 105, 18, 0.14) 82%,
      rgba(204, 147, 58, 0.07) 100%
    );
}

/* Radial warm glow behind subject — soft skin warmth */
.slide-overlay::after {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(
    ellipse 65% 55% at 22% 48%,
    rgba(204, 147, 58, 0.06) 0%,
    rgba(130,  50,180, 0.04) 50%,
    transparent 100%
  );
}

/* ── Slide transition ────────────────────────────────────── */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: opacity 0.95s cubic-bezier(0.4, 0, 0.2, 1),
              transform 0.95s cubic-bezier(0.4, 0, 0.2, 1);
}

.fade-slide-enter-from { opacity: 0; transform: scale(1.04); }
.fade-slide-enter-to   { opacity: 1; transform: scale(1);    }
.fade-slide-leave-from { opacity: 1; }
.fade-slide-leave-to   { opacity: 0; }

/* ─── Hero content wrapper ──────────────────────────────── */
.hero-content-wrap {
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
  padding: 140px 48px 180px;
}

.hero-content {
  max-width: 680px;
}

/* ─── Entrance animations ───────────────────────────────── */
.reveal-line {
  display: block;
  opacity: 0;
  transform: translateY(32px);
  animation: revealUp 0.75s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}

.reveal-fade {
  opacity: 0;
  transform: translateY(18px);
  animation: revealUp 0.75s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}

@keyframes revealUp {
  to { opacity: 1; transform: translateY(0); }
}

/* ─── Badge ─────────────────────────────────────────────── */
.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  color: var(--color-gold-bright);
  background: var(--color-gold-light);
  border: 1px solid rgba(204, 147, 58, 0.32);
  padding: 6px 16px 6px 10px;
  border-radius: 50px;
  font-family: var(--font-body);
  font-size: 0.78rem;
  font-weight: 500;
  letter-spacing: 0.03em;
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  margin-bottom: 18px;
}

.badge-pulse-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--color-gold-bright);
  flex-shrink: 0;
  box-shadow: 0 0 0 0 rgba(232, 185, 60, 0.5);
  animation: pulseDot 2.5s ease-out infinite;
}

@keyframes pulseDot {
  0%   { box-shadow: 0 0 0 0   rgba(232, 185, 60, 0.55); }
  60%  { box-shadow: 0 0 0 8px rgba(232, 185, 60, 0);    }
  100% { box-shadow: 0 0 0 0   rgba(232, 185, 60, 0);    }
}

/* ─── Headline ──────────────────────────────────────────── */
.hero-headline {
  display: flex;
  flex-direction: column;
  gap: 3px;
  margin-bottom: 20px;
  line-height: 1.08;
}

.line-light {
  font-family: var(--font-display);
  font-size: clamp(2.5rem, 4.6vw, 4rem);
  font-weight: 700;
  color: #ffffff;
  letter-spacing: -0.015em;
  text-shadow: 0 4px 28px rgba(0, 0, 0, 0.45);
}

.line-gold {
  font-family: var(--font-display);
  font-size: clamp(2.5rem, 4.6vw, 4rem);
  font-weight: 700;
  font-style: italic;
  color: var(--color-gold-bright);
  letter-spacing: -0.015em;
  position: relative;
  /* Warm editorial glow */
  text-shadow:
    0 4px 28px rgba(0, 0, 0, 0.40),
    0 0  44px rgba(232, 185, 60, 0.28);
}

/* Animated underline */
.line-gold::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  height: 3px;
  width: 0;
  background: linear-gradient(
    to right,
    var(--color-gold-bright),
    rgba(204, 147, 58, 0.4),
    transparent
  );
  border-radius: 3px;
  animation: underlineGrow 1s ease 0.8s forwards;
}

@keyframes underlineGrow {
  to { width: 58%; }
}

/* ─── Subtitle ──────────────────────────────────────────── */
.hero-subtitle {
  font-family: var(--font-body);
  font-size: 1.05rem;
  font-weight: 300;
  line-height: 1.82;
  color: rgba(255, 255, 255, 0.86);
  max-width: 490px;
  margin-bottom: 32px;
  text-shadow: 0 2px 14px rgba(0, 0, 0, 0.35);
  letter-spacing: 0.008em;
}

/* ─── Buttons ───────────────────────────────────────────── */
.hero-buttons {
  display: flex;
  align-items: center;
  gap: 14px;
  flex-wrap: wrap;
  margin-bottom: 28px;
}

.btn-primary {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 9px;
  background: linear-gradient(
    135deg,
    #F0CB4A 0%,
    var(--color-gold-bright) 40%,
    var(--color-gold) 75%,
    var(--color-gold-dark) 100%
  );
  color: var(--color-primary-deep);
  font-family: var(--font-body);
  font-size: 0.9rem;
  font-weight: 700;
  padding: 15px 34px;
  border-radius: 50px;
  text-decoration: none;
  letter-spacing: 0.01em;
  overflow: hidden;
  /* Premium layered shadow */
  box-shadow:
    0  8px 32px rgba(204, 147, 58, 0.48),
    0  3px 10px rgba(0, 0, 0, 0.28),
    inset 0 1px 0 rgba(255, 255, 255, 0.28);
  transition: transform 0.22s ease, box-shadow 0.22s ease;
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow:
    0 12px 40px rgba(204, 147, 58, 0.55),
    0  4px 14px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.28);
}

/* Pulsing ring on CTA */
.btn-primary-pulse {
  position: absolute;
  inset: 0;
  border-radius: 50px;
  border: 2px solid rgba(255, 255, 255, 0.45);
  animation: ringPulse 2.4s ease-out infinite;
}

@keyframes ringPulse {
  0%   { transform: scale(1);   opacity: 0.65; }
  70%  { transform: scale(1.22); opacity: 0;   }
  100% { transform: scale(1.22); opacity: 0;   }
}

.btn-label { position: relative; z-index: 2; }
.btn-primary svg { position: relative; z-index: 2; flex-shrink: 0; }

.btn-outline {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(255, 255, 255, 0.07);
  color: #ffffff;
  font-family: var(--font-body);
  font-size: 0.9rem;
  font-weight: 600;
  padding: 13px 30px;
  border-radius: 50px;
  border: 1.5px solid rgba(255, 255, 255, 0.48);
  text-decoration: none;
  letter-spacing: 0.02em;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  transition: all 0.22s ease;
}

.btn-outline svg { transition: transform 0.2s ease; }

.btn-outline:hover {
  background: #ffffff;
  color: var(--color-primary);
  border-color: #ffffff;
  transform: translateY(-2px);
}

.btn-outline:hover svg {
  transform: translateX(4px);
}

/* ─── Trust row ─────────────────────────────────────────── */
.trust-row {
  display: flex;
  flex-wrap: wrap;
  gap: 8px 20px;
  margin-bottom: 30px;
}

.trust-item {
  display: flex;
  align-items: center;
  gap: 6px;
  font-family: var(--font-body);
  font-size: 0.83rem;
  color: rgba(255, 255, 255, 0.82);
  letter-spacing: 0.01em;
}

.trust-check {
  color: var(--color-gold-bright);
  font-weight: 700;
  font-size: 0.9rem;
}

/* ─── Stats ─────────────────────────────────────────────── */
.stats-row {
  display: flex;
  align-items: center;
  padding-top: 22px;
  border-top: 1px solid rgba(204, 147, 58, 0.28);
}

.stat-item {
  display: flex;
  flex-direction: column;
  gap: 3px;
  padding: 0 28px;
  border-right: 1px solid rgba(255, 255, 255, 0.16);
}

.stat-item:first-child { padding-left: 0; }
.stat-item:last-child  { border-right: none; }

.stat-number {
  font-family: var(--font-display);
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--color-gold-bright);
  line-height: 1;
  /* Warm luminance on numbers */
  text-shadow: 0 0 22px rgba(232, 185, 60, 0.32);
}

.stat-label {
  font-family: var(--font-body);
  font-size: 0.72rem;
  color: rgba(255, 255, 255, 0.64);
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

/* ─── Uniform badge (slide 6) ───────────────────────────── */
.uniform-badge {
  position: absolute;
  bottom: 108px;
  right: 52px;
  z-index: 6;
  display: flex;
  align-items: center;
  gap: 12px;
  background: rgba(26, 5, 52, 0.82);
  border: 1px solid rgba(204, 147, 58, 0.45);
  border-radius: 14px;
  padding: 14px 18px;
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.4),
    inset 0 1px 0 rgba(255, 255, 255, 0.06);
  max-width: 240px;
}

.ub-logo-mark { flex-shrink: 0; }

.ub-text {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.ub-brand {
  font-family: var(--font-display);
  font-size: 0.95rem;
  font-weight: 700;
  font-style: italic;
  color: var(--color-gold-bright);
  letter-spacing: 0.02em;
  white-space: nowrap;
}

.ub-role {
  font-family: var(--font-body);
  font-size: 0.66rem;
  color: rgba(255, 255, 255, 0.6);
  letter-spacing: 0.07em;
  text-transform: uppercase;
}

.ub-badge-pill {
  flex-shrink: 0;
  font-family: var(--font-body);
  font-size: 0.6rem;
  font-weight: 700;
  color: var(--color-gold);
  background: rgba(204, 147, 58, 0.15);
  border: 1px solid rgba(204, 147, 58, 0.3);
  border-radius: 50px;
  padding: 4px 8px;
  letter-spacing: 0.1em;
}

/* Badge enter/leave animation */
.badge-pop-enter-active { transition: opacity 0.45s ease, transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1); }
.badge-pop-leave-active { transition: opacity 0.3s ease, transform 0.3s ease; }
.badge-pop-enter-from   { opacity: 0; transform: scale(0.8) translateY(10px); }
.badge-pop-enter-to     { opacity: 1; transform: scale(1) translateY(0); }
.badge-pop-leave-from   { opacity: 1; transform: scale(1); }
.badge-pop-leave-to     { opacity: 0; transform: scale(0.85); }

/* ─── Arrow navigation ──────────────────────────────────── */
.carousel-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 5;
  width: 52px;
  height: 52px;
  border-radius: 50%;
  border: 1px solid rgba(204, 147, 58, 0.32);
  background: rgba(26, 5, 52, 0.50);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.22s ease, border-color 0.22s ease, transform 0.22s ease;
}

.carousel-arrow:hover {
  background: var(--color-gold);
  border-color: var(--color-gold);
  color: var(--color-primary-deep);
  transform: translateY(calc(-50% - 2px));
}

.carousel-arrow--left  { left: 28px; }
.carousel-arrow--right { right: 28px; }

/* ─── Progress dots ─────────────────────────────────────── */
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
  width: 22px;
  height: 22px;
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
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.40);
  transition: background 0.22s ease, transform 0.22s ease;
}

.carousel-dot.active::before {
  background: var(--color-gold-bright);
  transform: scale(1.3);
  box-shadow: 0 0 6px rgba(232, 185, 60, 0.5);
}

.dot-progress {
  position: absolute;
  inset: 0;
  width: 22px;
  height: 22px;
}

/* ─── Wave divider ──────────────────────────────────────── */
.wave-wrap {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 4;
  pointer-events: none;
}

.wave-gold {
  display: block;
  width: 100%;
  height: 60px;
  position: absolute;
  bottom: 36px;
  left: 0;
  opacity: 0.7;
}

.wave-white {
  display: block;
  width: 100%;
  height: 80px;
}

/* ─── Reduced motion ────────────────────────────────────── */
@media (prefers-reduced-motion: reduce) {
  .reveal-line,
  .reveal-fade,
  .badge-pulse-dot,
  .btn-primary-pulse,
  .line-gold::after,
  .slide-bg {
    animation: none !important;
    opacity: 1 !important;
    transform: none !important;
  }
}

/* ─── Responsive ────────────────────────────────────────── */
@media (max-width: 1024px) {
  .hero-content-wrap { padding: 120px 40px 180px; }
  .hero-content { max-width: 100%; }
  .stat-item:first-child { padding-left: 28px; }
  .uniform-badge { right: 24px; bottom: 120px; }
}

@media (max-width: 768px) {
  .hero-content-wrap { padding: 100px 22px 200px; }
  .hero-badge { font-size: 0.68rem; }
  .line-light,
  .line-gold { font-size: clamp(2rem, 9vw, 2.8rem); }
  .hero-subtitle { font-size: 0.93rem; }
  .hero-buttons { flex-direction: column; align-items: stretch; }
  .btn-primary,
  .btn-outline { justify-content: center; }

  .stats-row {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 14px;
    padding-top: 18px;
  }

  .stat-item {
    border-right: none;
    padding: 0;
    text-align: center;
    align-items: center;
  }

  .stat-number { font-size: 1.45rem; }

  .carousel-arrow { width: 42px; height: 42px; }
  .carousel-arrow--left  { left: 10px; }
  .carousel-arrow--right { right: 10px; }
  .carousel-dots { bottom: 108px; }

  .uniform-badge {
    bottom: auto;
    top: 72px;
    right: 16px;
    max-width: 195px;
    padding: 10px 12px;
    gap: 9px;
  }

  .ub-brand { font-size: 0.82rem; }
}

@media (max-width: 420px) {
  .line-light,
  .line-gold { font-size: 2rem; }
  .hero-buttons { gap: 10px; }
}
</style>