<template>
  <section class="hero-section" id="home">

    <!-- Left content panel -->
    <div class="hero-left">
      <div class="hero-content">

        <!-- Badge -->
        <div class="hero-badge">
          <svg class="badge-heart" width="16" height="16" viewBox="0 0 24 24" fill="#C9A84C">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
          <span>{{ t('hero.badge') }}</span>
        </div>

        <!-- Headline -->
        <h1 class="hero-headline">
          <span class="line-dark">{{ t('hero.title_line1') }}</span>
          <span class="line-gold">{{ t('hero.title_line2') }}</span>
        </h1>

        <!-- Subtext -->
        <p class="hero-subtitle">{{ t('hero.subtitle') }}</p>

        <!-- Buttons -->
        <div class="hero-buttons">
          <a :href="'tel:' + phone" class="btn-primary">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.68A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/>
            </svg>
            +1 (613) 851-6775
          </a>
          <a href="#services" class="btn-outline" @click.prevent="scrollTo('services')">
            {{ t('hero.button2') }}
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round">
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="12 5 19 12 12 19"/>
            </svg>
          </a>
        </div>

        <!-- Trust pills -->
        <div class="trust-row">
          <div class="trust-item" v-for="(item, i) in trustItems" :key="i">
            <span class="trust-check">✓</span>
            <span>{{ t(item) }}</span>
          </div>
        </div>

        <!-- Stats row -->
        <div class="stats-row">
          <div class="stat-item" v-for="(stat, i) in stats" :key="i">
            <span class="stat-number">{{ stat.value }}</span>
            <span class="stat-label">{{ t(stat.label) }}</span>
          </div>
        </div>

      </div>
    </div>

    <!-- Right: full bleed photo -->
    <div class="hero-right">
      <img
        src="@/assets/hero.jpg"
        alt="Caregiver warmly assisting an elderly couple at home"
        class="hero-photo"
      />
      <div class="photo-fade"></div>

      <!-- Floating card 1: rating -->
      <div class="float-card float-card--top">
        <div class="float-icon float-icon--gold">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="#C9A84C">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
          </svg>
        </div>
        <div class="float-text">
          <span class="float-number">4.9 / 5</span>
          <span class="float-label">Client Rating</span>
        </div>
      </div>

      <!-- Floating card 2: seniors -->
      <div class="float-card float-card--bottom">
        <div class="float-icon float-icon--purple">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2D1B69" stroke-width="2" stroke-linecap="round">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
            <circle cx="9" cy="7" r="4"/>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
          </svg>
        </div>
        <div class="float-text">
          <span class="float-number">200+</span>
          <span class="float-label">Seniors Supported</span>
        </div>
      </div>
    </div>

    <!-- Wave divider -->
    <div class="wave-wrap">
      <svg class="wave-gold" viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,30 C240,60 480,0 720,30 C960,60 1200,0 1440,30" fill="none" stroke="#C9A84C" stroke-width="2.5"/>
      </svg>
      <svg class="wave-white" viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#ffffff"/>
      </svg>
    </div>

  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const phone = '+16138516775'

const trustItems = ['hero.trust1', 'hero.trust2', 'hero.trust3']

const stats = [
  { value: '200+', label: 'hero.stat1' },
  { value: '98%',  label: 'hero.stat2' },
  { value: '5+',   label: 'hero.stat3' },
]

const scrollTo = (id) => {
  const el = document.getElementById(id)
  if (el) {
    const top = el.getBoundingClientRect().top + window.pageYOffset - 100
    window.scrollTo({ top, behavior: 'smooth' })
  }
}
</script>

<style scoped>

/* ─── Section ───────────────────────────────────────────── */
.hero-section {
  position: relative;
  width: 100%;
  min-height: 100vh;
  background: #ffffff;
  display: flex;
  align-items: stretch;
  overflow: hidden;
  padding-top: calc(var(--banner-height, 38px) + 88px);
}

/* ─── Left panel ────────────────────────────────────────── */
.hero-left {
  width: 52%;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  padding: 60px 56px 160px 72px;
  position: relative;
  z-index: 2;
}

/* Decorative purple circle behind text */
.hero-left::before {
  content: '';
  position: absolute;
  top: 10%;
  left: -120px;
  width: 380px;
  height: 380px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(45,27,105,0.06) 0%, transparent 70%);
  pointer-events: none;
}

.hero-content {
  max-width: 540px;
  position: relative;
  z-index: 2;
}

/* ─── Badge ─────────────────────────────────────────────── */
.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #C9A84C;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.13em;
  text-transform: uppercase;
  margin-bottom: 20px;
  padding: 6px 14px 6px 8px;
  background: rgba(201,168,76,0.08);
  border: 1px solid rgba(201,168,76,0.25);
  border-radius: 50px;
}

/* ─── Headline ──────────────────────────────────────────── */
.hero-headline {
  display: flex;
  flex-direction: column;
  font-family: 'Lora', Georgia, serif;
  margin-bottom: 20px;
  line-height: 1.08;
  gap: 2px;
}

.line-dark {
  font-size: clamp(2.6rem, 4.8vw, 4rem);
  font-weight: 700;
  color: #1a1a2e;
}

.line-gold {
  font-size: clamp(2.6rem, 4.8vw, 4rem);
  font-weight: 700;
  color: #C9A84C;
  font-style: italic;
}

/* ─── Subtitle ──────────────────────────────────────────── */
.hero-subtitle {
  font-family: 'DM Sans', sans-serif;
  font-size: 1rem;
  font-weight: 300;
  color: #4a4a6a;
  line-height: 1.8;
  margin-bottom: 32px;
  max-width: 440px;
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
  display: inline-flex;
  align-items: center;
  gap: 9px;
  background: #2D1B69;
  color: #fff;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.9rem;
  font-weight: 500;
  padding: 15px 32px;
  border-radius: 50px;
  text-decoration: none;
  box-shadow: 0 8px 28px rgba(45,27,105,0.3);
  transition: all 0.25s ease;
}

.btn-primary:hover {
  background: #3d2b7f;
  transform: translateY(-2px);
  box-shadow: 0 14px 36px rgba(45,27,105,0.4);
}

.btn-outline {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: transparent;
  color: #2D1B69;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.9rem;
  font-weight: 600;
  padding: 13px 28px;
  border-radius: 50px;
  border: 2px solid #2D1B69;
  text-decoration: none;
  letter-spacing: 0.02em;
  transition: all 0.25s ease;
}

.btn-outline:hover {
  background: #2D1B69;
  color: #fff;
  transform: translateY(-2px);
}

.btn-outline svg { transition: transform 0.2s ease; }
.btn-outline:hover svg { transform: translateX(4px); }

/* ─── Trust row ─────────────────────────────────────────── */
.trust-row {
  display: flex;
  flex-wrap: wrap;
  gap: 10px 20px;
  margin-bottom: 32px;
}

.trust-item {
  display: flex;
  align-items: center;
  gap: 6px;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.82rem;
  color: #5a5a7a;
}

.trust-check {
  color: #C9A84C;
  font-weight: 700;
}

/* ─── Stats ─────────────────────────────────────────────── */
.stats-row {
  display: flex;
  align-items: center;
  gap: 0;
  padding-top: 28px;
  border-top: 1px solid rgba(45,27,105,0.1);
}

.stat-item {
  display: flex;
  flex-direction: column;
  gap: 3px;
  padding: 0 28px;
  border-right: 1px solid rgba(45,27,105,0.1);
}

.stat-item:first-child { padding-left: 0; }
.stat-item:last-child  { border-right: none; }

.stat-number {
  font-family: 'Lora', Georgia, serif;
  font-size: 1.75rem;
  font-weight: 700;
  color: #2D1B69;
  line-height: 1;
}

.stat-label {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.73rem;
  color: #8a8aaa;
}

/* ─── Right photo ───────────────────────────────────────── */
.hero-right {
  flex: 1;
  position: relative;
  overflow: hidden;
}

.hero-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 20%;
  display: block;
}

/* Fade left edge into white */
.photo-fade {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to right,
    #ffffff 0%,
    rgba(255,255,255,0.6) 15%,
    rgba(255,255,255,0.1) 35%,
    transparent 55%
  );
  pointer-events: none;
}

/* Warm overlay to match brand */
.hero-right::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    160deg,
    rgba(45,27,105,0.08) 0%,
    transparent 50%
  );
  pointer-events: none;
}

/* ─── Floating cards ────────────────────────────────────── */
.float-card {
  position: absolute;
  background: #ffffff;
  border-radius: 14px;
  padding: 14px 18px;
  display: flex;
  align-items: center;
  gap: 12px;
  box-shadow: 0 8px 32px rgba(45,27,105,0.14);
  z-index: 3;
  animation: floatY 3.5s ease-in-out infinite;
}

.float-card--top {
  top: 18%;
  right: 8%;
  animation-delay: 0s;
}

.float-card--bottom {
  bottom: 24%;
  left: 8%;
  animation-delay: 1s;
}

@keyframes floatY {
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(-8px); }
}

.float-icon {
  width: 42px;
  height: 42px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.float-icon--gold   { background: rgba(201,168,76,0.12); }
.float-icon--purple { background: rgba(45,27,105,0.08); }

.float-text {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.float-number {
  font-family: 'Lora', Georgia, serif;
  font-size: 1.1rem;
  font-weight: 700;
  color: #1a1a2e;
  line-height: 1;
}

.float-label {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.72rem;
  color: #8a8aaa;
}

/* ─── Wave ──────────────────────────────────────────────── */
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
  bottom: 38px;
  left: 0;
}

.wave-white {
  display: block;
  width: 100%;
  height: 80px;
}

/* ─── Responsive ────────────────────────────────────────── */
@media (max-width: 1024px) {
  .hero-section {
    flex-direction: column;
  }

  .hero-left {
    width: 100%;
    padding: 48px 32px 40px;
  }

  .hero-content {
    max-width: 100%;
    text-align: center;
  }

  .hero-subtitle  { margin: 0 auto 32px; }
  .hero-buttons   { justify-content: center; }
  .trust-row      { justify-content: center; }
  .stats-row      { justify-content: center; }

  .stat-item:first-child { padding-left: 28px; }

  .hero-right {
    width: 100%;
    height: 460px;
    flex-shrink: 0;
  }

  .photo-fade {
    background: linear-gradient(to bottom, rgba(255,255,255,0.5) 0%, transparent 25%);
  }

  .float-card--top    { top: 10%; right: 5%; }
  .float-card--bottom { bottom: 10%; left: 5%; }
}

@media (max-width: 600px) {
  .hero-left { padding: 32px 20px 32px; }

  .line-dark,
  .line-gold { font-size: clamp(2rem, 9vw, 2.8rem); }

  .hero-buttons {
    flex-direction: column;
    align-items: center;
  }

  .btn-primary,
  .btn-outline {
    width: 100%;
    max-width: 300px;
    justify-content: center;
  }

  .hero-right { height: 320px; }

  .stats-row { flex-wrap: wrap; gap: 16px; }
  .stat-item { border-right: none; padding: 0 16px; }
}
</style>