<template>
  <section class="services-section" id="services">

    <!-- ── Decorative background blobs ───────────────────── -->
    <div class="bg-blob bg-blob--tr" aria-hidden="true"></div>
    <div class="bg-blob bg-blob--bl" aria-hidden="true"></div>

    <div class="services-container">

      <!-- ── Section header ────────────────────────────────── -->
      <div class="services-header" data-aos="fade-up">
        <div class="label-row">
          <span class="label-line"></span>
          <span class="section-label">{{ $t('ourServices.label') }}</span>
          <span class="label-line"></span>
        </div>
        <h2 class="section-title">{{ $t('ourServices.title') }}</h2>
        <p class="section-subtitle">{{ $t('ourServices.subtitle') }}</p>
      </div>

      <!-- ── 6 service cards (3 × 2 grid) ─────────────────── -->
      <div class="cards-grid">
        <div
          class="service-card"
          v-for="(service, i) in services"
          :key="i"
          data-aos="fade-up"
          :data-aos-delay="(i % 3) * 90"
        >
          <!-- Numbered accent -->
          <span class="card-number">0{{ i + 1 }}</span>

          <!-- Icon -->
          <div class="card-icon-wrap">
            <div class="card-icon-circle">
              <component :is="service.icon" />
            </div>
          </div>

          <h3 class="card-title">{{ $t(service.title) }}</h3>
          <p class="card-desc">{{ $t(service.desc) }}</p>

          <ul class="card-items">
            <li v-for="(item, j) in service.items" :key="j">
              <span class="item-check">
                <!-- Inline SVG checkmark — no import needed -->
                <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                  <polyline points="1.5 6 4.5 9 10.5 3"
                    stroke="#CC933A" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </span>
              {{ $t(item) }}
            </li>
          </ul>

          <!-- Learn more link -->
          <a href="#contact" class="card-link" @click.prevent="scrollTo('contact')">
            {{ $t('ourServices.learnMore') }}
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="12 5 19 12 12 19"/>
            </svg>
          </a>
        </div>
      </div>

      <!-- ── Why Choose Us trust strip ─────────────────────── -->
      <div class="trust-strip" data-aos="fade-up" data-aos-delay="60">
        <div class="trust-item" v-for="(t, i) in trustPoints" :key="i">
          <div class="trust-icon-wrap">
            <component :is="t.icon" />
          </div>
          <div class="trust-text">
            <span class="trust-label">{{ $t(t.label) }}</span>
            <span class="trust-sub">{{ $t(t.sub) }}</span>
          </div>
        </div>
      </div>

      <!-- ── CTA row ────────────────────────────────────────── -->
      <div class="cta-row" data-aos="fade-up" data-aos-delay="80">
        <div class="cta-text">
          <p class="cta-eyebrow">{{ $t('ourServices.ctaEyebrow') }}</p>
          <h3 class="cta-heading">{{ $t('ourServices.ctaHeading') }}</h3>
        </div>
        <a href="#contact" class="view-all-btn" @click.prevent="scrollTo('contact')">
          {{ $t('ourServices.viewAll') }}
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
            <line x1="5" y1="12" x2="19" y2="12"/>
            <polyline points="12 5 19 12 12 19"/>
          </svg>
        </a>
      </div>

      <!-- ── Care packages ──────────────────────────────────── -->
      <div class="packages-row" data-aos="fade-up" data-aos-delay="80">
        <div class="packages-header">
          <div class="label-row">
            <span class="label-line"></span>
            <span class="section-label">{{ $t('packages.label') }}</span>
            <span class="label-line"></span>
          </div>
          <h3 class="packages-title">{{ $t('packages.title') }}</h3>
          <p class="packages-note">{{ $t('packages.note') }}</p>
        </div>

        <div class="packages-grid">
          <div
            class="package-card"
            :class="{ 'package-card--featured': i === 1 }"
            v-for="(pkg, i) in packages"
            :key="i"
            data-aos="fade-up"
            :data-aos-delay="100 * (i + 1)"
          >
            <span v-if="i === 1" class="featured-tag">{{ $t('ourServices.mostPopular') }}</span>

            <!-- Package icon -->
            <div class="pkg-icon-wrap">
              <component :is="pkg.icon" />
            </div>

            <span class="pkg-name">{{ $t(pkg.name) }}</span>
            <span class="pkg-freq">{{ $t(pkg.frequency) }}</span>

            <!-- Feature list -->
            <ul class="pkg-features">
              <li v-for="(f, fi) in pkg.features" :key="fi">
                <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                  <polyline points="1.5 6 4.5 9 10.5 3"
                    :stroke="i === 1 ? '#e0aa54' : '#CC933A'"
                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                {{ $t(f) }}
              </li>
            </ul>

            <a href="#contact" class="pkg-btn" @click.prevent="scrollTo('contact')">
              {{ $t('packages.bookBtn') }}
            </a>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { onMounted, defineComponent, h } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

/*
  SVG stroke/fill attributes cannot read CSS custom properties cross-browser.
  Hex values hardcoded to match main.css tokens exactly:
    #45137D  = --color-primary
    #320e5c  = --color-primary-dark
    #CC933A  = --color-gold
    #e0aa54  = --color-gold-bright
  Update here if main.css tokens change.
*/

/* ── Service icons ───────────────────────────────────────── */

const IconCompanionship = defineComponent({
  render: () => h('svg', {
    width: 30, height: 30, viewBox: '0 0 24 24', fill: 'none',
    stroke: '#320e5c', 'stroke-width': '1.7',
    'stroke-linecap': 'round', 'stroke-linejoin': 'round',
  }, [
    h('path', { d: 'M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z', stroke: '#CC933A', fill: 'rgba(204,147,58,0.10)' }),
    h('circle', { cx: 12, cy: 12, r: 2, fill: '#320e5c', stroke: 'none' }),
  ]),
})

const IconErrands = defineComponent({
  render: () => h('svg', {
    width: 30, height: 30, viewBox: '0 0 24 24', fill: 'none',
    stroke: '#320e5c', 'stroke-width': '1.7',
    'stroke-linecap': 'round', 'stroke-linejoin': 'round',
  }, [
    h('path', { d: 'M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z' }),
    h('line', { x1: 3, y1: 6, x2: 21, y2: 6 }),
    h('path', { d: 'M16 10a4 4 0 0 1-8 0', stroke: '#CC933A' }),
  ]),
})

const IconMeal = defineComponent({
  render: () => h('svg', {
    width: 30, height: 30, viewBox: '0 0 24 24', fill: 'none',
    stroke: '#320e5c', 'stroke-width': '1.7',
    'stroke-linecap': 'round', 'stroke-linejoin': 'round',
  }, [
    h('path', { d: 'M18 8h1a4 4 0 0 1 0 8h-1' }),
    h('path', { d: 'M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z' }),
    h('line', { x1: 6, y1: 1, x2: 6, y2: 4, stroke: '#CC933A' }),
    h('line', { x1: 10, y1: 1, x2: 10, y2: 4, stroke: '#CC933A' }),
    h('line', { x1: 14, y1: 1, x2: 14, y2: 4, stroke: '#CC933A' }),
  ]),
})

const IconCleaning = defineComponent({
  render: () => h('svg', {
    width: 30, height: 30, viewBox: '0 0 24 24', fill: 'none',
    stroke: '#320e5c', 'stroke-width': '1.7',
    'stroke-linecap': 'round', 'stroke-linejoin': 'round',
  }, [
    h('path', { d: 'M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z' }),
    h('polyline', { points: '9 22 9 12 15 12 15 22', stroke: '#CC933A' }),
  ]),
})

const IconTransport = defineComponent({
  render: () => h('svg', {
    width: 30, height: 30, viewBox: '0 0 24 24', fill: 'none',
    stroke: '#320e5c', 'stroke-width': '1.7',
    'stroke-linecap': 'round', 'stroke-linejoin': 'round',
  }, [
    h('rect', { x: 1, y: 7, width: 15, height: 9, rx: 2 }),
    h('polygon', { points: '16 9 20 9 23 12 23 16 16 16 16 9' }),
    h('circle', { cx: 5.5,  cy: 18, r: 2, fill: '#CC933A', stroke: 'none' }),
    h('circle', { cx: 18.5, cy: 18, r: 2, fill: '#CC933A', stroke: 'none' }),
  ]),
})

const IconRespite = defineComponent({
  render: () => h('svg', {
    width: 30, height: 30, viewBox: '0 0 24 24', fill: 'none',
    stroke: '#320e5c', 'stroke-width': '1.7',
    'stroke-linecap': 'round', 'stroke-linejoin': 'round',
  }, [
    h('path', { d: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z', stroke: '#CC933A', fill: 'rgba(204,147,58,0.08)' }),
    h('polyline', { points: '9 12 11 14 15 10', stroke: '#320e5c', 'stroke-width': '2' }),
  ]),
})

/* ── Trust-strip icons ───────────────────────────────────── */

const IconCertified = defineComponent({
  render: () => h('svg', {
    width: 22, height: 22, viewBox: '0 0 24 24', fill: 'none',
    stroke: '#CC933A', 'stroke-width': '1.8',
    'stroke-linecap': 'round', 'stroke-linejoin': 'round',
  }, [
    h('circle', { cx: 12, cy: 8, r: 4 }),
    h('path', { d: 'M6 20v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2' }),
    h('polyline', { points: '9 11 11 13 15 9' }),
  ]),
})

const IconClock = defineComponent({
  render: () => h('svg', {
    width: 22, height: 22, viewBox: '0 0 24 24', fill: 'none',
    stroke: '#CC933A', 'stroke-width': '1.8',
    'stroke-linecap': 'round',
  }, [
    h('circle', { cx: 12, cy: 12, r: 10 }),
    h('polyline', { points: '12 6 12 12 16 14' }),
  ]),
})

const IconShield = defineComponent({
  render: () => h('svg', {
    width: 22, height: 22, viewBox: '0 0 24 24', fill: 'none',
    stroke: '#CC933A', 'stroke-width': '1.8',
    'stroke-linecap': 'round', 'stroke-linejoin': 'round',
  }, [
    h('path', { d: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z' }),
    h('polyline', { points: '9 12 11 14 15 10' }),
  ]),
})

const IconStar = defineComponent({
  render: () => h('svg', {
    width: 22, height: 22, viewBox: '0 0 24 24', fill: 'none',
    stroke: '#CC933A', 'stroke-width': '1.8',
    'stroke-linecap': 'round', 'stroke-linejoin': 'round',
  }, [
    h('polygon', { points: '12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2', fill: 'rgba(204,147,58,0.12)' }),
  ]),
})

/* ── Package icons ───────────────────────────────────────── */
const IconPkgBasic = defineComponent({
  render: () => h('svg', {
    width: 26, height: 26, viewBox: '0 0 24 24', fill: 'none',
    stroke: '#CC933A', 'stroke-width': '1.8', 'stroke-linecap': 'round',
  }, [
    h('circle', { cx: 12, cy: 12, r: 10 }),
    h('path', { d: 'M12 8v4l3 3' }),
  ]),
})

const IconPkgWeekly = defineComponent({
  render: () => h('svg', {
    width: 26, height: 26, viewBox: '0 0 24 24', fill: 'none',
    stroke: '#e0aa54', 'stroke-width': '1.8', 'stroke-linecap': 'round',
  }, [
    h('rect', { x: 3, y: 4, width: 18, height: 18, rx: 2 }),
    h('line', { x1: 16, y1: 2, x2: 16, y2: 6 }),
    h('line', { x1: 8, y1: 2, x2: 8, y2: 6 }),
    h('line', { x1: 3, y1: 10, x2: 21, y2: 10 }),
  ]),
})

const IconPkgPremium = defineComponent({
  render: () => h('svg', {
    width: 26, height: 26, viewBox: '0 0 24 24', fill: 'none',
    stroke: '#CC933A', 'stroke-width': '1.8', 'stroke-linecap': 'round',
  }, [
    h('polygon', { points: '12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2' }),
  ]),
})

/* ── Data ────────────────────────────────────────────────── */

const services = [
  {
    icon: IconCompanionship,
    title: 'ourServices.companionship.title',
    desc:  'ourServices.companionship.description',
    items: [
      'ourServices.companionship.item1',
      'ourServices.companionship.item2',
      'ourServices.companionship.item3',
    ],
  },
  {
    icon: IconErrands,
    title: 'ourServices.errands.title',
    desc:  'ourServices.errands.description',
    items: [
      'ourServices.errands.item1',
      'ourServices.errands.item2',
      'ourServices.errands.item3',
    ],
  },
  {
    icon: IconMeal,
    title: 'ourServices.mealPrep.title',
    desc:  'ourServices.mealPrep.description',
    items: [
      'ourServices.mealPrep.item1',
      'ourServices.mealPrep.item2',
      'ourServices.mealPrep.item3',
    ],
  },
  {
    icon: IconCleaning,
    title: 'ourServices.housekeeping.title',
    desc:  'ourServices.housekeeping.description',
    items: [
      'ourServices.housekeeping.item1',
      'ourServices.housekeeping.item2',
      'ourServices.housekeeping.item3',
    ],
  },
  {
    icon: IconTransport,
    title: 'ourServices.transportation.title',
    desc:  'ourServices.transportation.description',
    items: [
      'ourServices.transportation.item1',
      'ourServices.transportation.item2',
      'ourServices.transportation.item3',
    ],
  },
  {
    icon: IconRespite,
    title: 'ourServices.respite.title',
    desc:  'ourServices.respite.description',
    items: [
      'ourServices.respite.item1',
      'ourServices.respite.item2',
      'ourServices.respite.item3',
    ],
  },
]

const trustPoints = [
  { icon: IconCertified, label: 'ourServices.trust.certified.label', sub: 'ourServices.trust.certified.sub' },
  { icon: IconClock,     label: 'ourServices.trust.available.label', sub: 'ourServices.trust.available.sub' },
  { icon: IconShield,    label: 'ourServices.trust.insured.label',   sub: 'ourServices.trust.insured.sub'   },
  { icon: IconStar,      label: 'ourServices.trust.rated.label',     sub: 'ourServices.trust.rated.sub'     },
]

const packages = [
  {
    icon: IconPkgBasic,
    name:      'packages.basic.name',
    frequency: 'packages.basic.frequency',
    features: [
      'packages.basic.feature1',
      'packages.basic.feature2',
      'packages.basic.feature3',
    ],
  },
  {
    icon: IconPkgWeekly,
    name:      'packages.weekly.name',
    frequency: 'packages.weekly.frequency',
    features: [
      'packages.weekly.feature1',
      'packages.weekly.feature2',
      'packages.weekly.feature3',
      'packages.weekly.feature4',
    ],
  },
  {
    icon: IconPkgPremium,
    name:      'packages.premium.name',
    frequency: 'packages.premium.frequency',
    features: [
      'packages.premium.feature1',
      'packages.premium.feature2',
      'packages.premium.feature3',
      'packages.premium.feature4',
    ],
  },
]

onMounted(() => {
  AOS.init({ duration: 860, once: true, easing: 'ease-out-cubic', offset: 60 })
})

const scrollTo = (id) => {
  const el = document.getElementById(id)
  if (!el) return
  window.scrollTo({
    top: el.getBoundingClientRect().top + window.pageYOffset - 100,
    behavior: 'smooth',
  })
}
</script>

<style scoped>
/* ─── Section ───────────────────────────────────────────── */
.services-section {
  position: relative;
  background: var(--color-bg);
  padding: 100px 40px 110px;
  overflow: hidden;
}

/* ─── Decorative blobs ──────────────────────────────────── */
.bg-blob {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  z-index: 0;
}

.bg-blob--tr {
  width: 520px;
  height: 520px;
  top: -180px;
  right: -180px;
  background: radial-gradient(circle, rgba(204, 147, 58, 0.07) 0%, transparent 70%);
}

.bg-blob--bl {
  width: 480px;
  height: 480px;
  bottom: -160px;
  left: -160px;
  background: radial-gradient(circle, rgba(69, 19, 125, 0.06) 0%, transparent 70%);
}

/* ─── Container ─────────────────────────────────────────── */
.services-container {
  position: relative;
  z-index: 1;
  max-width: 1200px;
  margin: 0 auto;
}

/* ─── Header ────────────────────────────────────────────── */
.services-header {
  text-align: center;
  margin-bottom: 60px;
}

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
  font-size: 0.72rem;
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
  margin: 0 auto;
  line-height: 1.75;
}

/* ─── 6-card grid ───────────────────────────────────────── */
.cards-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 26px;
  margin-bottom: 56px;
}

/* ─── Service card ──────────────────────────────────────── */
.service-card {
  background: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: 36px 28px 28px;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: var(--shadow-sm);
  transition: transform 0.32s ease, border-color 0.32s ease, box-shadow 0.32s ease;
}

/* Gold top bar */
.service-card::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(
    to right,
    var(--color-gold),
    var(--color-gold-bright),
    transparent
  );
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.4s ease;
}

/* Warm shimmer fill — revealed on hover */
.service-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    145deg,
    rgba(204, 147, 58, 0.04) 0%,
    transparent 60%
  );
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.32s ease;
}

.service-card:hover {
  transform: translateY(-8px);
  border-color: rgba(204, 147, 58, 0.32);
  box-shadow: var(--shadow-lg);
}

.service-card:hover::after  { transform: scaleX(1); }
.service-card:hover::before { opacity: 1; }

/* ─── Card number ───────────────────────────────────────── */
.card-number {
  position: absolute;
  top: 20px;
  right: 22px;
  font-family: var(--font-display);
  font-size: 2rem;
  font-weight: 700;
  color: rgba(69, 19, 125, 0.06);   /* --color-primary at 6% */
  line-height: 1;
  user-select: none;
  pointer-events: none;
  transition: color 0.32s ease;
}

.service-card:hover .card-number {
  color: rgba(204, 147, 58, 0.12);  /* --color-gold at 12% */
}

/* ─── Icon ──────────────────────────────────────────────── */
.card-icon-wrap {
  margin-bottom: 22px;
}

.card-icon-circle {
  width: 68px;
  height: 68px;
  border-radius: 20px;
  background: linear-gradient(
    135deg,
    var(--color-primary-light),
    rgba(204, 147, 58, 0.09)
  );
  border: 1px solid rgba(204, 147, 58, 0.18);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.28s ease, box-shadow 0.28s ease;
}

.service-card:hover .card-icon-circle {
  transform: scale(1.08);
  box-shadow: 0 8px 24px rgba(204, 147, 58, 0.18);
}

/* ─── Card text ─────────────────────────────────────────── */
.card-title {
  font-family: var(--font-display);
  font-size: 1.12rem;
  font-weight: 700;
  color: var(--color-primary);
  margin-bottom: 9px;
  line-height: 1.3;
}

.card-desc {
  font-family: var(--font-body);
  font-size: 0.865rem;
  color: var(--color-text-muted);
  line-height: 1.72;
  margin-bottom: 18px;
  flex: 1;                  /* push items list + link to bottom */
}

/* ─── Checklist ─────────────────────────────────────────── */
.card-items {
  list-style: none;
  padding: 0;
  margin: 0 0 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  border-top: 1px solid var(--color-border);
  padding-top: 16px;
}

.card-items li {
  display: flex;
  align-items: center;
  gap: 9px;
  font-family: var(--font-body);
  font-size: 0.815rem;
  color: var(--color-text-muted);
}

.item-check {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: rgba(204, 147, 58, 0.10);
  border: 1px solid rgba(204, 147, 58, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

/* ─── Card "Learn more" link ────────────────────────────── */
.card-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: var(--font-body);
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--color-primary);
  text-decoration: none;
  margin-top: auto;
  transition: color 0.2s ease;
}

.card-link svg {
  transition: transform 0.2s ease;
}

.card-link:hover {
  color: var(--color-gold);
}

.card-link:hover svg {
  transform: translateX(4px);
}

/* ─── Trust strip ───────────────────────────────────────── */
.trust-strip {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0;
  background: linear-gradient(
    135deg,
    var(--color-primary),
    var(--color-primary-dark)
  );
  border-radius: var(--radius-lg);
  overflow: hidden;
  margin-bottom: 64px;
  box-shadow: var(--shadow-md);
}

.trust-item {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 28px 24px;
  border-right: 1px solid rgba(255, 255, 255, 0.10);
  transition: background 0.22s ease;
}

.trust-item:last-child {
  border-right: none;
}

.trust-item:hover {
  background: rgba(255, 255, 255, 0.05);
}

.trust-icon-wrap {
  width: 44px;
  height: 44px;
  border-radius: var(--radius-sm);
  background: rgba(204, 147, 58, 0.14);
  border: 1px solid rgba(204, 147, 58, 0.28);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.trust-text {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.trust-label {
  font-family: var(--font-body);
  font-size: 0.85rem;
  font-weight: 700;
  color: #ffffff;
  line-height: 1.2;
}

.trust-sub {
  font-family: var(--font-body);
  font-size: 0.72rem;
  color: rgba(255, 255, 255, 0.60);
  line-height: 1.3;
}

/* ─── CTA row ───────────────────────────────────────────── */
.cta-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  background: var(--color-bg-soft);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: 32px 40px;
  margin-bottom: 64px;
  flex-wrap: wrap;
}

.cta-text {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.cta-eyebrow {
  font-family: var(--font-body);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-gold);
}

.cta-heading {
  font-family: var(--font-display);
  font-size: clamp(1.2rem, 2vw, 1.55rem);
  font-weight: 700;
  color: var(--color-primary);
  margin: 0;
}

.view-all-btn {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  background: linear-gradient(135deg, var(--color-primary), var(--color-primary-bright));
  color: #ffffff;
  font-family: var(--font-body);
  font-size: 0.9rem;
  font-weight: 600;
  padding: 14px 34px;
  border-radius: 50px;
  text-decoration: none;
  white-space: nowrap;
  box-shadow: 0 10px 28px rgba(69, 19, 125, 0.25);
  transition: transform 0.22s ease, box-shadow 0.22s ease;
}

.view-all-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 18px 38px rgba(69, 19, 125, 0.34);
}

.view-all-btn svg {
  transition: transform 0.2s ease;
}

.view-all-btn:hover svg {
  transform: translateX(4px);
}

/* ─── Packages section ──────────────────────────────────── */
.packages-row {
  background: linear-gradient(180deg, var(--color-bg-soft), var(--color-bg));
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: 60px 40px;
  box-shadow: var(--shadow-md);
}

.packages-header {
  text-align: center;
  margin-bottom: 40px;
}

.packages-title {
  font-family: var(--font-display);
  font-size: clamp(1.5rem, 2.4vw, 2rem);
  font-weight: 700;
  color: var(--color-primary);
  margin-bottom: 8px;
}

.packages-note {
  font-family: var(--font-body);
  font-size: 0.88rem;
  color: var(--color-text-muted);
}

.packages-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  align-items: center;
}

/* ─── Package card ──────────────────────────────────────── */
.package-card {
  background: var(--color-bg);
  border: 1.5px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: 36px 28px 28px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  position: relative;
  transition: border-color 0.22s ease, box-shadow 0.22s ease, transform 0.22s ease;
}

.package-card:hover {
  border-color: var(--color-gold);
  box-shadow: 0 12px 32px rgba(204, 147, 58, 0.14);
  transform: translateY(-4px);
}

.package-card--featured {
  background: linear-gradient(145deg, var(--color-primary), var(--color-primary-bright));
  border-color: transparent;
  transform: scale(1.05);
  box-shadow: 0 20px 44px rgba(69, 19, 125, 0.30);
}

.package-card--featured:hover {
  transform: scale(1.05) translateY(-4px);
  box-shadow: 0 28px 52px rgba(69, 19, 125, 0.38);
}

.package-card--featured .pkg-name,
.package-card--featured .pkg-features li {
  color: #ffffff;
}

.package-card--featured .pkg-freq {
  color: rgba(255, 255, 255, 0.62);
}

/* ─── Featured pill ─────────────────────────────────────── */
.featured-tag {
  position: absolute;
  top: -13px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--color-gold);
  color: #ffffff;
  font-family: var(--font-body);
  font-size: 0.66rem;
  font-weight: 700;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  padding: 4px 16px;
  border-radius: 20px;
  white-space: nowrap;
  box-shadow: 0 6px 18px rgba(204, 147, 58, 0.32);
}

/* ─── Package card internals ────────────────────────────── */
.pkg-icon-wrap {
  width: 52px;
  height: 52px;
  border-radius: var(--radius-sm);
  background: rgba(204, 147, 58, 0.10);
  border: 1px solid rgba(204, 147, 58, 0.22);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 4px;
}

.pkg-name {
  font-family: var(--font-display);
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--color-primary);
}

.pkg-freq {
  font-family: var(--font-body);
  font-size: 0.85rem;
  color: var(--color-text-muted);
}

.pkg-features {
  list-style: none;
  padding: 0;
  margin: 8px 0 4px;
  display: flex;
  flex-direction: column;
  gap: 7px;
  width: 100%;
  text-align: left;
  border-top: 1px solid var(--color-border);
  padding-top: 16px;
}

.package-card--featured .pkg-features {
  border-top-color: rgba(255, 255, 255, 0.15);
}

.pkg-features li {
  display: flex;
  align-items: center;
  gap: 9px;
  font-family: var(--font-body);
  font-size: 0.82rem;
  color: var(--color-text-muted);
}

.pkg-btn {
  display: inline-block;
  margin-top: 10px;
  background: var(--color-gold);
  color: #ffffff;
  font-family: var(--font-body);
  font-size: 0.85rem;
  font-weight: 600;
  padding: 11px 28px;
  border-radius: 50px;
  text-decoration: none;
  transition: background 0.22s ease, transform 0.22s ease;
}

.pkg-btn:hover {
  background: var(--color-gold-dark);
  transform: translateY(-2px);
}

/* ─── Responsive ────────────────────────────────────────── */
@media (max-width: 1024px) {
  .cards-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .trust-strip {
    grid-template-columns: repeat(2, 1fr);
  }

  .trust-item:nth-child(2) {
    border-right: none;
  }

  .trust-item:nth-child(1),
  .trust-item:nth-child(2) {
    border-bottom: 1px solid rgba(255, 255, 255, 0.10);
  }
}

@media (max-width: 768px) {
  .services-section {
    padding: 64px 20px 80px;
  }

  .cards-grid {
    grid-template-columns: 1fr;
    gap: 18px;
  }

  .trust-strip {
    grid-template-columns: 1fr;
  }

  .trust-item {
    border-right: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.10);
  }

  .trust-item:last-child {
    border-bottom: none;
  }

  .cta-row {
    flex-direction: column;
    align-items: flex-start;
    padding: 24px 22px;
  }

  .packages-row {
    padding: 36px 20px;
  }

  .packages-grid {
    grid-template-columns: 1fr;
  }

  .package-card--featured {
    transform: none;
    order: -1;
  }

  .package-card--featured:hover {
    transform: translateY(-4px);
  }
}
</style>