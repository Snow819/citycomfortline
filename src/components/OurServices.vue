<template>
  <section class="services-section" id="services">
    <div class="services-container">
      <!-- Header -->
      <div class="services-header" data-aos="fade-up">
        <div class="label-row">
          <span class="label-line"></span>
          <span class="section-label">{{ $t('ourServices.label') }}</span>
          <span class="label-line"></span>
        </div>
        <h2 class="section-title">{{ $t('ourServices.title') }}</h2>
        <p class="section-subtitle">{{ $t('ourServices.subtitle') }}</p>
      </div>

      <!-- 3 service cards -->
      <div class="cards-grid">
        <div
          class="service-card"
          v-for="(service, i) in services"
          :key="i"
          data-aos="fade-up"
          :data-aos-delay="i * 80"
        >
          <div class="card-icon-circle">
            <component :is="service.icon" />
          </div>
          <h3 class="card-title">{{ $t(service.title) }}</h3>
          <p class="card-desc">{{ $t(service.desc) }}</p>
          <ul class="card-items">
            <li v-for="(item, j) in service.items" :key="j">
              <span class="item-dot"></span>{{ $t(item) }}
            </li>
          </ul>
        </div>
      </div>

      <!-- CTA -->
      <div class="view-all-wrap" data-aos="fade-up" data-aos-delay="100">
        <a href="#contact" class="view-all-btn" @click.prevent="scrollTo('contact')">
          {{ $t('ourServices.viewAll') }}
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2.5"
            stroke-linecap="round"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </a>
      </div>

      <!-- Packages -->
      <div class="packages-row" data-aos="fade-up" data-aos-delay="100">
        <div class="packages-header">
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
            <span class="pkg-name">{{ $t(pkg.name) }}</span>
            <span class="pkg-freq">{{ $t(pkg.frequency) }}</span>
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

/* ── Inline SVG icons (purple) ───────────────────────────── */

const IconCleaning = defineComponent({
  render: () =>
    h(
      'svg',
      {
        width: 28,
        height: 28,
        viewBox: '0 0 24 24',
        fill: 'none',
        stroke: '#2D1B69',
        'stroke-width': '1.8',
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round',
      },
      [
        h('circle', { cx: 12, cy: 5, r: 2, fill: '#C9A84C', stroke: 'none' }),
        h('path', { d: 'M12 7v6' }),
        h('path', { d: 'M8 13l-3 8h14l-3-8' }),
        h('path', { d: 'M8 13h8' }),
      ],
    ),
})

const IconCar = defineComponent({
  render: () =>
    h(
      'svg',
      {
        width: 28,
        height: 28,
        viewBox: '0 0 24 24',
        fill: 'none',
        stroke: '#2D1B69',
        'stroke-width': '1.8',
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round',
      },
      [
        h('rect', { x: 1, y: 7, width: 15, height: 9, rx: 2 }),
        h('polygon', { points: '16 9 20 9 23 12 23 16 16 16 16 9' }),
        h('circle', { cx: 5.5, cy: 18, r: 2, fill: '#C9A84C', stroke: 'none' }),
        h('circle', { cx: 18.5, cy: 18, r: 2, fill: '#C9A84C', stroke: 'none' }),
      ],
    ),
})

const IconCompanion = defineComponent({
  render: () =>
    h(
      'svg',
      {
        width: 28,
        height: 28,
        viewBox: '0 0 24 24',
        fill: 'none',
        stroke: '#2D1B69',
        'stroke-width': '1.8',
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round',
      },
      [
        h('circle', { cx: 9, cy: 8, r: 3 }),
        h('circle', { cx: 16, cy: 9, r: 2.5 }),
        h('path', { d: 'M3 21v-1a5 5 0 0 1 5-5h2a5 5 0 0 1 5 5v1' }),
        h('path', { d: 'M16 13.5a4 4 0 0 1 4 4V19' }),
        h('path', { d: 'M13.5 5.5l1 1 2-2', stroke: '#C9A84C' }),
      ],
    ),
})

const services = [
  {
    icon: IconCar,
    title: 'ourServices.transportation.title',
    desc: 'ourServices.transportation.description',
    items: [
      'ourServices.transportation.item1',
      'ourServices.transportation.item2',
      'ourServices.transportation.item3',
    ],
  },
  {
    icon: IconCleaning,
    title: 'ourServices.homeSupport.title',
    desc: 'ourServices.homeSupport.description',
    items: [
      'ourServices.homeSupport.item1',
      'ourServices.homeSupport.item2',
      'ourServices.homeSupport.item3',
    ],
  },
  {
    icon: IconCompanion,
    title: 'ourServices.companionship.title',
    desc: 'ourServices.companionship.description',
    items: [
      'ourServices.companionship.item1',
      'ourServices.companionship.item2',
      'ourServices.companionship.item3',
    ],
  },
]

const packages = [
  { name: 'packages.basic.name', frequency: 'packages.basic.frequency' },
  { name: 'packages.weekly.name', frequency: 'packages.weekly.frequency' },
  { name: 'packages.premium.name', frequency: 'packages.premium.frequency' },
]

onMounted(() => {
  AOS.init({ duration: 900, once: true, easing: 'ease-in-out', offset: 60 })
})

const scrollTo = (id) => {
  const el = document.getElementById(id)
  if (!el) return
  const top = el.getBoundingClientRect().top + window.pageYOffset - 100
  window.scrollTo({ top, behavior: 'smooth' })
}
</script>

<style scoped>
/* ─── Section ───────────────────────────────────────────── */
.services-section {
  background:
    radial-gradient(circle at top right, rgba(204, 147, 58, 0.08), transparent 30%),
    radial-gradient(circle at bottom left, rgba(69, 19, 125, 0.06), transparent 35%),
    var(--color-bg);

  padding: 90px 40px;
  position: relative;
  overflow: hidden;
}

.services-container {
  max-width: 1200px;
  margin: 0 auto;
}

/* ─── Header ────────────────────────────────────────────── */
.services-header {
  text-align: center;
  margin-bottom: 52px;
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
  max-width: 540px;
  margin: 0 auto;
  line-height: 1.7;
}

.section-subtitle,
.card-desc,
.card-items li,
.pkg-freq {
  color: var(--color-text-muted);
}

/* ─── Cards grid ────────────────────────────────────────── */
.cards-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-bottom: 36px;
}

.service-card {
  background: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: 24px;
  padding: 38px 30px;
  position: relative;
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  transition: all 0.35s ease;
}

.service-card::before {
  content: '';
  position: absolute;
  inset: 0;

  background: linear-gradient(135deg, rgba(204, 147, 58, 0.05), transparent 55%);

  opacity: 0;
  transition: opacity 0.35s ease;
}

.service-card:hover {
  transform: translateY(-10px);
  border-color: rgba(204, 147, 58, 0.3);
  box-shadow: var(--shadow-lg);
}

.service-card:hover::before {
  opacity: 1;
}

.service-card::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(to right, var(--color-gold), transparent);
}

/* ─── Icon circle ───────────────────────────────────────── */
.card-icon-circle {
  width: 72px;
  height: 72px;
  border-radius: 22px;
  background: linear-gradient(135deg, var(--color-primary-light), rgba(204, 147, 58, 0.08));
  border: 1px solid rgba(204, 147, 58, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
}

/* ─── Card text ─────────────────────────────────────────── */
.card-title {
  font-family: var(--font-display);
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--color-primary);
  margin-bottom: 10px;
}

.card-desc {
  font-family: var(--font-body);
  font-size: 0.875rem;
  line-height: 1.7;
  margin-bottom: 18px;
}

.card-items {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
  border-top: 1px solid rgba(45, 27, 105, 0.08);
  padding-top: 16px;
}

.card-items li {
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-body);
  font-size: 0.82rem;
  color: var(--color-text-muted);
}

.item-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--color-gold);
  flex-shrink: 0;
}

/* ─── View all CTA ──────────────────────────────────────── */
.view-all-wrap {
  text-align: center;
  margin-bottom: 80px;
}

.view-all-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: linear-gradient(135deg, var(--color-primary), var(--color-primary-bright));
  color: white;
  box-shadow: 0 14px 30px rgba(69, 19, 125, 0.25);
  font-family: var(--font-body);
  font-size: 0.9rem;
  font-weight: 600;
  padding: 14px 32px;
  border-radius: 50px;
  text-decoration: none;
  transition: all 0.25s ease;
}

.view-all-btn:hover {
  transform: translateY(-4px);

  box-shadow: 0 20px 40px rgba(69, 19, 125, 0.35);
}

.view-all-btn svg {
  transition: transform 0.2s ease;
}
.view-all-btn:hover svg {
  transform: translateX(4px);
}

/* ─── Packages row ──────────────────────────────────────── */
.packages-row {
  background: linear-gradient(180deg, var(--color-bg-soft), #ffffff);

  border: 1px solid var(--color-border);

  border-radius: 32px;

  padding: 56px 40px;

  box-shadow: var(--shadow-md);
}

.packages-header {
  text-align: center;
  margin-bottom: 36px;
}

.packages-title {
  font-family: var(--font-display);
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--color-primary);
  margin-bottom: 6px;
}

.packages-note {
  font-family: var(--font-body);
  font-size: 0.85rem;
  color: var(--color-text-muted);
}

.packages-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.package-card {
  background: #ffffff;
  border: 1.5px solid rgba(45, 27, 105, 0.08);
  border-radius: 16px;
  padding: 32px 24px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  position: relative;
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease,
    transform 0.2s ease;
}

.package-card:hover {
  border-color: var(--color-gold);
  box-shadow: 0 12px 32px rgba(201, 168, 76, 0.15);
  transform: translateY(-4px);
}

.package-card--featured {
 background:
    linear-gradient(
      135deg,
      var(--color-primary),
      var(--color-primary-bright)
    );

  transform: scale(1.05);

  box-shadow:
    0 20px 40px rgba(69,19,125,0.28);
}

.package-card--featured .pkg-name {
  color: #ffffff;
}
.package-card--featured .pkg-freq {
  color: rgba(255, 255, 255, 0.65);
}

.featured-tag {
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--color-gold);
  color: white;
  box-shadow:
    0 8px 20px rgba(204,147,58,0.3);
  font-family: var(--font-body);
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 4px 14px;
  border-radius: 20px;
  white-space: nowrap;
}

.pkg-name {
  font-family: var(--font-display);
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--color-primary);
}

.pkg-freq {
  font-family: var(--font-body);
  font-size: 0.9rem;
  color: var(--color-text-muted);
}

.pkg-btn {
  display: inline-block;
  margin-top: 8px;
  background: var(--color-gold);
  color: #ffffff;
  font-family: var(--font-body);
  font-size: 0.85rem;
  font-weight: 600;
  padding: 10px 26px;
  border-radius: 50px;
  text-decoration: none;
  transition:
    background 0.2s ease,
    transform 0.2s ease;
}

.pkg-btn:hover {
  background: var(--color-gold-dark);
  transform: translateY(-2px);
}

/* ─── Responsive ────────────────────────────────────────── */
@media (max-width: 900px) {
  .cards-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
}

@media (max-width: 768px) {
  .services-section {
    padding: 64px 20px;
  }

  .packages-row {
    padding: 32px 20px;
  }

  .packages-grid {
    grid-template-columns: 1fr;
  }

  .package-card--featured {
    order: -1;
  }
}
</style>
