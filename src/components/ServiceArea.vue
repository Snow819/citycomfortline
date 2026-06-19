<template>
  <section class="service-areas" id="areas">
    <div class="service-areas-container">

      <div class="areas-content" data-aos="fade-up">

        <div class="label-row">
          <span class="label-line"></span>
          <span class="section-label">{{ t('serviceAreas.label') }}</span>
          <span class="label-line"></span>
        </div>

        <h2 class="section-title">{{ t('serviceAreas.title') }}</h2>
        <p class="section-subtitle">{{ t('serviceAreas.boundary') }}</p>

        <!-- Canada badge -->
        <div class="canada-badge">
          <div class="canada-icon">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#2D1B69" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 2l1.5 3 3-1-1 3 3 1.5-3 1.5 1 3-3-1-1.5 3-1.5-3-3 1 1-3-3-1.5 3-1.5-1-3 3 1z"/>
            </svg>
          </div>
          <div>
            <span class="canada-title">{{ t('serviceAreas.canadaTitle') }}</span>
            <span class="canada-sub">{{ t('serviceAreas.canadaSub') }}</span>
          </div>
        </div>

        <!-- Trust badges row -->
        <div class="areas-trust">
          <div class="areas-trust-item" v-for="(item, i) in trustPoints" :key="i">
            <span class="check">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#2D1B69" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            </span>
            <span>{{ t(item) }}</span>
          </div>
        </div>

        <a href="#contact" class="areas-cta" @click.prevent="scrollTo('contact')">
          {{ t('serviceAreas.cta') }}
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
            <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
          </svg>
        </a>
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
  const top = el.getBoundingClientRect().top + window.pageYOffset - 100
  window.scrollTo({ top, behavior: 'smooth' })
}

onMounted(() => {
  AOS.init({ duration: 800, once: true })
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lora:wght@700&family=DM+Sans:wght@300;400;500;600&display=swap');

/* ─── Section ───────────────────────────────────────────── */
.service-areas {
  background: #faf9ff;
  padding: 90px 40px;
}

.service-areas-container {
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
  background: #C9A84C;
}

.section-label {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #C9A84C;
}

.section-title {
  font-family: 'Lora', Georgia, serif;
  font-size: clamp(1.9rem, 3.2vw, 2.6rem);
  font-weight: 700;
  color: #2D1B69;
  margin-bottom: 14px;
}

.section-subtitle {
  font-family: 'DM Sans', sans-serif;
  font-size: 1rem;
  color: #5a5a7a;
  max-width: 540px;
  margin: 0 auto 40px;
  line-height: 1.7;
}

/* ─── Canada badge ──────────────────────────────────────── */
.canada-badge {
  display: inline-flex;
  align-items: center;
  gap: 18px;
  background: #ffffff;
  border: 1.5px solid rgba(45,27,105,0.1);
  border-radius: 18px;
  padding: 24px 36px;
  box-shadow: 0 12px 36px rgba(45,27,105,0.08);
  margin-bottom: 36px;
}

.canada-icon {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: #faf3e6;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.canada-badge > div:last-child {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
}

.canada-title {
  font-family: 'Lora', Georgia, serif;
  font-size: 1.3rem;
  font-weight: 700;
  color: #2D1B69;
}

.canada-sub {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.85rem;
  color: #8a8aaa;
}

/* ─── Trust row ─────────────────────────────────────────── */
.areas-trust {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 14px 28px;
  margin-bottom: 36px;
}

.areas-trust-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.9rem;
  color: #3a3a5a;
}

.check {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: rgba(201,168,76,0.12);
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
  background: #2D1B69;
  color: #ffffff;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.9rem;
  font-weight: 600;
  padding: 14px 32px;
  border-radius: 50px;
  text-decoration: none;
  box-shadow: 0 8px 24px rgba(45,27,105,0.25);
  transition: all 0.25s ease;
}

.areas-cta:hover {
  background: #C9A84C;
  transform: translateY(-2px);
  box-shadow: 0 12px 32px rgba(201,168,76,0.35);
}

.areas-cta svg { transition: transform 0.2s ease; }
.areas-cta:hover svg { transform: translateX(4px); }

/* ─── Responsive ────────────────────────────────────────── */
@media (max-width: 600px) {
  .service-areas { padding: 64px 20px; }

  .canada-badge {
    flex-direction: column;
    text-align: center;
    padding: 28px 24px;
  }

  .canada-badge > div:last-child {
    align-items: center;
  }

  .areas-trust {
    flex-direction: column;
    gap: 10px;
    align-items: center;
  }
}
</style>