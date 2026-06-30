<template>
  <section class="service-areas" id="areas">

    <!-- ── Decorative blob ────────────────────────────────── -->
    <div class="blob blob--tr" aria-hidden="true"></div>

    <div class="service-areas-container">

      <div class="areas-content" data-aos="fade-up">

        <div class="label-row">
          <span class="label-line"></span>
          <span class="section-label">{{ t('serviceAreas.label') }}</span>
          <span class="label-line"></span>
        </div>

        <h2 class="section-title">{{ t('serviceAreas.title') }}</h2>
        <p class="section-subtitle">{{ t('serviceAreas.boundary') }}</p>

        <!-- ── Canada badge ──────────────────────────────── -->
        <div class="canada-badge" data-aos="zoom-in" data-aos-delay="80">

          <!-- Pulsing coverage ring behind the icon -->
          <div class="canada-icon-wrap">
            <span class="coverage-ring"></span>
            <div class="canada-icon">
              <!-- Maple leaf -->
              <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#45137D" stroke-width="1.6"
                stroke-linecap="round" stroke-linejoin="round">
                <!-- #45137D = --color-primary -->
                <path d="M12 2l1.5 3 3-1-1 3 3 1.5-3 1.5 1 3-3-1-1.5 3-1.5-3-3 1 1-3-3-1.5 3-1.5-1-3 3 1z" />
              </svg>
            </div>
          </div>

          <div class="canada-text">
            <span class="canada-title">{{ t('serviceAreas.canadaTitle') }}</span>
            <span class="canada-sub">{{ t('serviceAreas.canadaSub') }}</span>
          </div>

          <!-- Coverage stat pill -->
          <div class="coverage-pill">
            <span class="coverage-dot"></span>
            {{ t('serviceAreas.coveragePill') }}
          </div>
        </div>

        <!-- ── Trust badges row ──────────────────────────── -->
        <div class="areas-trust" data-aos="fade-up" data-aos-delay="140">
          <div class="areas-trust-item" v-for="(item, i) in trustPoints" :key="i">
            <span class="check">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#45137D" stroke-width="3"
                stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </span>
            <span>{{ t(item) }}</span>
          </div>
        </div>

        <a href="#contact" class="areas-cta" @click.prevent="scrollTo('contact')">
          {{ t('serviceAreas.cta') }}
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
            stroke-linecap="round">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </a>

        <p class="areas-footnote">{{ t('serviceAreas.footnote') }}</p>

      </div>

    </div>
  </section>
</template>

<script setup>
import AOS from 'aos'
import 'aos/dist/aos.css'
import { onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const trustPoints = [
  'serviceAreas.point1',
  'serviceAreas.point2',
  'serviceAreas.point3',
]

const scrollTo = (id) => {
  const el = document.getElementById(id)
  if (!el) return
  window.scrollTo({
    top: el.getBoundingClientRect().top + window.pageYOffset - 100,
    behavior: 'smooth',
  })
}

onMounted(() => {
  AOS.init({ duration: 800, once: true, easing: 'ease-out-cubic' })
})
</script>

<style scoped>
/*
  All colors come from main.css :root tokens — nothing redefined here.
  SVG stroke attributes that cannot read CSS vars use hardcoded hex
  matching the token exactly:
    #45137D  = --color-primary
    #CC933A  = --color-gold
*/

/* ─── Section ───────────────────────────────────────────── */
.service-areas {
  position: relative;
  background: var(--color-bg-soft);
  padding: 100px 40px;
  overflow: hidden;
}

.blob--tr {
  position: absolute;
  top: -160px;
  right: -160px;
  width: 480px;
  height: 480px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(204, 147, 58, 0.10) 0%, transparent 70%);
  pointer-events: none;
  z-index: 0;
}

.service-areas-container {
  position: relative;
  z-index: 1;
  max-width: 760px;
  margin: 0 auto;
}

.areas-content {
  text-align: center;
}

/* ─── Header ────────────────────────────────────────────── */
.label-row {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  margin-bottom: 14px;
}

.label-line {
  width: 32px;
  height: 1px;
  background: var(--color-gold);
}

.section-label {
  font-family: var(--font-body);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--color-gold);
}

.section-title {
  font-family: var(--font-display);
  font-size: clamp(1.9rem, 3.2vw, 2.6rem);
  font-weight: 700;
  color: var(--color-primary);
  margin-bottom: 14px;
}

.section-subtitle {
  font-family: var(--font-body);
  font-size: 1rem;
  color: var(--color-text-muted);
  max-width: 540px;
  margin: 0 auto 40px;
  line-height: 1.75;
}

/* ─── Canada badge ──────────────────────────────────────── */
.canada-badge {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 22px;
  background: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: 30px 40px;
  box-shadow: var(--shadow-md);
  margin-bottom: 36px;
  transition: transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease;
  overflow: visible;
}

/* Gold top accent */
.canada-badge::after {
  content: '';
  position: absolute;
  top: 0;
  left: 16px;
  right: 16px;
  height: 3px;
  background: linear-gradient(to right, transparent, var(--color-gold), transparent);
  border-radius: 0 0 4px 4px;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.canada-badge:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-lg);
  border-color: rgba(204, 147, 58, 0.25);
}

.canada-badge:hover::after {
  opacity: 1;
}

/* ─── Icon + pulsing coverage ring ───────────────────────── */
.canada-icon-wrap {
  position: relative;
  width: 76px;
  height: 76px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.coverage-ring {
  position: absolute;
  inset: -6px;
  border-radius: 50%;
  border: 2px solid rgba(204, 147, 58, 0.35);
  animation: ringExpand 2.6s ease-out infinite;
}

@keyframes ringExpand {
  0% {
    transform: scale(0.92);
    opacity: 0.8;
  }

  70% {
    transform: scale(1.18);
    opacity: 0;
  }

  100% {
    transform: scale(1.18);
    opacity: 0;
  }
}

.canada-icon {
  position: relative;
  z-index: 1;
  width: 74px;
  height: 74px;
  border-radius: var(--radius-md);
  background: linear-gradient(135deg, var(--color-primary-light), rgba(204, 147, 58, 0.12));
  border: 1px solid rgba(204, 147, 58, 0.18);
  display: flex;
  align-items: center;
  justify-content: center;
}

/* ─── Text block ─────────────────────────────────────────── */
.canada-text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 3px;
}

.canada-title {
  font-family: var(--font-display);
  font-size: 1.32rem;
  font-weight: 700;
  color: var(--color-primary);
  line-height: 1.25;
}

.canada-sub {
  font-family: var(--font-body);
  font-size: 0.86rem;
  color: var(--color-text-muted);
  line-height: 1.4;
}

/* ─── Coverage stat pill ─────────────────────────────────── */
.coverage-pill {
  display: flex;
  align-items: center;
  gap: 7px;
  background: var(--color-bg-soft);
  border: 1px solid var(--color-border);
  border-radius: 50px;
  padding: 8px 16px;
  font-family: var(--font-body);
  font-size: 0.76rem;
  font-weight: 700;
  color: var(--color-primary);
  white-space: nowrap;
  margin-left: 6px;
}

.coverage-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--color-gold);
  flex-shrink: 0;
  animation: pulse 2.4s ease-out infinite;
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(204, 147, 58, 0.55);
  }

  60% {
    box-shadow: 0 0 0 7px rgba(204, 147, 58, 0);
  }

  100% {
    box-shadow: 0 0 0 0 rgba(204, 147, 58, 0);
  }
}

/* ─── Trust row ─────────────────────────────────────────── */
.areas-trust {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 14px 28px;
  margin-bottom: 32px;
}

.areas-trust-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-body);
  font-size: 0.9rem;
  color: var(--color-text-muted);
}

.check {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: rgba(204, 147, 58, 0.12);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

/* ─── CTA ───────────────────────────────────────────────── */
.areas-cta {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: linear-gradient(135deg, var(--color-primary), var(--color-primary-bright));
  color: #ffffff;
  font-family: var(--font-body);
  font-size: 0.9rem;
  font-weight: 600;
  padding: 14px 32px;
  border-radius: 50px;
  text-decoration: none;
  box-shadow: 0 8px 24px rgba(69, 19, 125, 0.28);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.areas-cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 14px 34px rgba(69, 19, 125, 0.38);
}

.areas-cta svg {
  transition: transform 0.2s ease;
}

.areas-cta:hover svg {
  transform: translateX(4px);
}

/* ─── Footnote ──────────────────────────────────────────── */
.areas-footnote {
  font-family: var(--font-body);
  font-size: 0.78rem;
  color: var(--color-text-muted);
  margin-top: 18px;
  opacity: 0.8;
}

/* ─── Reduced motion ────────────────────────────────────── */
@media (prefers-reduced-motion: reduce) {

  .coverage-ring,
  .coverage-dot {
    animation: none !important;
  }
}

/* ─── Responsive ────────────────────────────────────────── */
@media (max-width: 600px) {
  .service-areas {
    padding: 64px 20px;
  }

  .canada-badge {
    flex-direction: column;
    text-align: center;
    padding: 32px 26px;
    gap: 16px;
  }

  .canada-text {
    align-items: center;
  }

  .coverage-pill {
    margin-left: 0;
  }

  .areas-trust {
    flex-direction: column;
    gap: 10px;
    align-items: center;
  }
}
</style>