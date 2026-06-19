<template>
  <div class="faq-wrapper" data-aos="fade-up" data-aos-duration="800" id="faqs">
    <div class="faq-container">

      <span class="section-label" data-aos="fade-up">{{ $t('faq.label') }}</span>
      <h2 class="main-title" data-aos="fade-up" data-aos-delay="100">
        {{ $t('faq.title') }}
      </h2>
      <p class="main-subtitle" data-aos="fade-up" data-aos-delay="200">
        {{ $t('faq.subtitle') }}
      </p>

      <div class="accordions-grid">

        <!-- Transportation FAQ -->
        <div class="accordion-section" data-aos="fade-up" data-aos-delay="100">
          <div class="section-header">
            <div class="section-icon-wrap">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"
                stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <rect x="1" y="3" width="15" height="13" />
                <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                <circle cx="5.5" cy="18.5" r="2.5" />
                <circle cx="18.5" cy="18.5" r="2.5" />
              </svg>
            </div>
            <h3 class="section-title">{{ $t('faq.transportation.title') }}</h3>
          </div>
          <div class="accordion">
            <div v-for="(item, index) in transportationFaq" :key="index" class="accordion-item">
              <button @click="toggle('transportation', index)" class="accordion-header">
                <span class="accordion-title-text">{{ $t(item.question) }}</span>
                <svg class="accordion-icon" :class="{ rotated: openIndex.transportation === index }" width="18"
                  height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                  stroke-linecap="round">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              <div class="accordion-content" :class="{ open: openIndex.transportation === index }">
                <div class="accordion-content-inner">{{ $t(item.answer) }}</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Support FAQ -->
        <div class="accordion-section" data-aos="fade-up" data-aos-delay="200">
          <div class="section-header">
            <div class="section-icon-wrap">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"
                stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </div>
            <h3 class="section-title">{{ $t('faq.support.title') }}</h3>
          </div>
          <div class="accordion">
            <div v-for="(item, index) in supportFaq" :key="index" class="accordion-item">
              <button @click="toggle('support', index)" class="accordion-header">
                <span class="accordion-title-text">{{ $t(item.question) }}</span>
                <svg class="accordion-icon" :class="{ rotated: openIndex.support === index }" width="18" height="18"
                  viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              <div class="accordion-content" :class="{ open: openIndex.support === index }">
                <div class="accordion-content-inner">{{ $t(item.answer) }}</div>
              </div>
            </div>
          </div>
        </div>

        <!-- General FAQ -->
        <div class="accordion-section" data-aos="fade-up" data-aos-delay="300">
          <div class="section-header">
            <div class="section-icon-wrap">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"
                stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="10" />
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                <line x1="12" y1="17" x2="12.01" y2="17" />
              </svg>
            </div>
            <h3 class="section-title">{{ $t('faq.general.title') }}</h3>
          </div>
          <div class="accordion">
            <div v-for="(item, index) in generalFaq" :key="index" class="accordion-item">
              <button @click="toggle('general', index)" class="accordion-header">
                <span class="accordion-title-text">{{ $t(item.question) }}</span>
                <svg class="accordion-icon" :class="{ rotated: openIndex.general === index }" width="18" height="18"
                  viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              <div class="accordion-content" :class="{ open: openIndex.general === index }">
                <div class="accordion-content-inner">{{ $t(item.answer) }}</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, reactive } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

const openIndex = reactive({
  transportation: null,
  support: null,
  general: null,
})

function toggle(section, index) {
  openIndex[section] = openIndex[section] === index ? null : index
}

const transportationFaq = [
  { question: 'faq.transportation.items.coverage.question', answer: 'faq.transportation.items.coverage.answer' },
  { question: 'faq.transportation.items.booking.question', answer: 'faq.transportation.items.booking.answer' },
  { question: 'faq.transportation.items.wait.question', answer: 'faq.transportation.items.wait.answer' },
  { question: 'faq.transportation.items.medical.question', answer: 'faq.transportation.items.medical.answer' },
  { question: 'faq.transportation.items.companion.question', answer: 'faq.transportation.items.companion.answer' },
  { question: 'faq.transportation.items.emergency.question', answer: 'faq.transportation.items.emergency.answer' },
]

const supportFaq = [
  { question: 'faq.support.items.services.question', answer: 'faq.support.items.services.answer' },
  { question: 'faq.support.items.frequency.question', answer: 'faq.support.items.frequency.answer' },
  { question: 'faq.support.items.person.question', answer: 'faq.support.items.person.answer' },
  { question: 'faq.support.items.hours.question', answer: 'faq.support.items.hours.answer' },
  { question: 'faq.support.items.family.question', answer: 'faq.support.items.family.answer' },
]

const generalFaq = [
  { question: 'faq.general.items.areas.question', answer: 'faq.general.items.areas.answer' },
  { question: 'faq.general.items.pricing.question', answer: 'faq.general.items.pricing.answer' },
  { question: 'faq.general.items.cancel.question', answer: 'faq.general.items.cancel.answer' },
  { question: 'faq.general.items.safety.question', answer: 'faq.general.items.safety.answer' },
  { question: 'faq.general.items.start.question', answer: 'faq.general.items.start.answer' },
]

onMounted(() => {
  AOS.init({ duration: 900, once: true, easing: 'ease-in-out', offset: 100 })
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lora:wght@600;700&family=DM+Sans:wght@300;400;500&display=swap');

/* ─── Section ───────────────────────────────────────────── */
.faq-wrapper {
  background: #f5f8fb;
  padding: 90px 40px;
  overflow-x: hidden;
}

.faq-container {
  max-width: 1100px;
  margin: 0 auto;
  text-align: center;
}

/* ─── Heading ───────────────────────────────────────────── */
.section-label {
  display: inline-block;
  font-family: var(--font-body);
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #4d9170;
  margin-bottom: 12px;
}

.main-title {
  font-family: var(--font-display);
  font-size: clamp(1.8rem, 3vw, 2.4rem);
  font-weight: 700;
  color: #1E3A5F;
  margin-bottom: 14px;
}

.main-subtitle {
  font-family: var(--font-body);
  color: var(--color-text-muted);
  font-size: 1rem;
  line-height: 1.7;
  max-width: 560px;
  margin: 0 auto 56px;
}

/* ─── Grid ──────────────────────────────────────────────── */
.accordions-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 28px;
  text-align: left;
}

@media (min-width: 1024px) {
  .accordions-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* ─── Section header ────────────────────────────────────── */
.section-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 18px;
  padding-bottom: 14px;
  border-bottom: 2px solid #e8f0f9;
}

.section-icon-wrap {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: #e8f0f9;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: #1E3A5F;
}

.section-title {
  font-family: var(--font-display);
  font-size: 1.1rem;
  font-weight: 600;
  color: #1E3A5F;
  margin: 0;
}

/* ─── Accordion shell ───────────────────────────────────── */
.accordion {
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid #dce6ef;
  background: #ffffff;
}

.accordion-item {
  border-bottom: 1px solid #dce6ef;
}

.accordion-item:last-child {
  border-bottom: none;
}

/* ─── Accordion header ──────────────────────────────────── */
.accordion-header {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 15px 18px;
  background: #ffffff;
  border: none;
  cursor: pointer;
  text-align: left;
  transition: background 0.2s ease;
}

.accordion-header:hover {
  background: #f5f8fb;
}

.accordion-title-text {
  font-family: var(--font-body);
  font-weight: 500;
  color: var(--color-text-muted);
  font-size: 0.9rem;
  line-height: 1.4;
}

/* ─── Chevron ───────────────────────────────────────────── */
.accordion-icon {
  color: var(--color-gold);
  transition: transform 0.3s ease;
  flex-shrink: 0;
  stroke-width: 2.5;
}

.accordion-icon.rotated {
  transform: rotate(180deg);
}

/* ─── Content ───────────────────────────────────────────── */
.accordion-content {
  max-height: 0;
  overflow: hidden;
  opacity: 0;
  transition: max-height 0.35s ease, opacity 0.3s ease;
  background: #f9fbfd;
}

.accordion-content.open {
  max-height: 400px;
  opacity: 1;
}

.accordion-content-inner {
  padding: 14px 18px 18px;
  font-family: var(--font-body);
  color: #5a6a7e;
  line-height: 1.7;
  font-size: 0.875rem;
  border-top: 1px solid #dce6ef;
}

/* ─── Responsive ────────────────────────────────────────── */
@media (max-width: 768px) {
  .faq-wrapper {
    padding: 64px 20px;
  }

  .section-title {
    font-size: 1rem;
  }

  .accordion-header {
    padding: 13px 15px;
  }

  .accordion-title-text {
    font-size: 0.875rem;
  }
}
</style>