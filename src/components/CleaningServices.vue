<template>
    <section class="cleaning-services" id="cleaning-services">
        <div class="cs-container">

            <!-- ── Header ─────────────────────────────────────── -->
            <div class="cs-header" data-aos="fade-up">
                <h2 class="cs-title">
                    {{ t('cleaningServices.title') }}
                    <em class="cs-title--accent">{{ t('cleaningServices.titleAccent') }}</em>
                </h2>
                <div class="cs-title-line" aria-hidden="true"></div>
                <p class="cs-subtitle">{{ t('cleaningServices.subtitle') }}</p>
            </div>

            <!-- ── 5 service cards ────────────────────────────── -->
            <div class="cs-grid">
                <div class="cs-card" v-for="(svc, i) in services" :key="i" data-aos="fade-up" :data-aos-delay="i * 70">
                    <div class="cs-card-icon">
                        <component :is="svc.icon" />
                    </div>
                    <h3 class="cs-card-title">{{ t(svc.title) }}</h3>
                    <p class="cs-card-desc">{{ t(svc.desc) }}</p>
                </div>
            </div>

            <!-- ── Bottom CTA ─────────────────────────────────── -->
            <div class="cs-cta-row" data-aos="fade-up" data-aos-delay="80">
                <p class="cs-cta-text">{{ t('cleaningServices.ctaText') }}</p>
                <a href="#contact" class="cs-cta-btn" @click.prevent="scrollTo('contact')">
                    {{ t('cleaningServices.ctaBtn') }}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                        stroke-linecap="round">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                    </svg>
                </a>
            </div>

        </div>
    </section>
</template>

<script setup>
import { onMounted, defineComponent, h } from 'vue'
import { useI18n } from 'vue-i18n'
import AOS from 'aos'
import 'aos/dist/aos.css'

const { t } = useI18n()

/*
  SVG stroke uses #0d1b2a (cleaning dark navy) and #CC933A (cleaning gold).
  These are NOT main.css purple tokens — intentionally different
  so the cleaning page has its own visual identity.
*/

const IconHome = defineComponent({
    render: () => h('svg', {
        width: 32, height: 32, viewBox: '0 0 24 24',
        fill: 'none', stroke: '#0d1b2a',
        'stroke-width': '1.6', 'stroke-linecap': 'round', 'stroke-linejoin': 'round',
    }, [
        h('path', { d: 'M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z' }),
        h('polyline', { points: '9 22 9 12 15 12 15 22', stroke: '#CC933A' }),
    ]),
})

const IconOffice = defineComponent({
    render: () => h('svg', {
        width: 32, height: 32, viewBox: '0 0 24 24',
        fill: 'none', stroke: '#0d1b2a',
        'stroke-width': '1.6', 'stroke-linecap': 'round', 'stroke-linejoin': 'round',
    }, [
        h('rect', { x: 2, y: 3, width: 20, height: 14, rx: 2 }),
        h('line', { x1: 8, y1: 21, x2: 16, y2: 21, stroke: '#CC933A' }),
        h('line', { x1: 12, y1: 17, x2: 12, y2: 21, stroke: '#CC933A' }),
    ]),
})

const IconDeep = defineComponent({
    render: () => h('svg', {
        width: 32, height: 32, viewBox: '0 0 24 24',
        fill: 'none', stroke: '#0d1b2a',
        'stroke-width': '1.6', 'stroke-linecap': 'round', 'stroke-linejoin': 'round',
    }, [
        h('path', { d: 'M3 6l3-3 3 3-3 3z', fill: 'rgba(204, 147, 58,0.15)', stroke: '#CC933A' }),
        h('path', { d: 'M9 3h12v4H9z' }),
        h('path', { d: 'M3 14l3-3 3 3-3 3z', fill: 'rgba(204, 147, 58,0.15)', stroke: '#CC933A' }),
        h('path', { d: 'M9 11h12v4H9z' }),
        h('path', { d: 'M9 19h12v2H9z' }),
    ]),
})

const IconMoveIn = defineComponent({
    render: () => h('svg', {
        width: 32, height: 32, viewBox: '0 0 24 24',
        fill: 'none', stroke: '#0d1b2a',
        'stroke-width': '1.6', 'stroke-linecap': 'round', 'stroke-linejoin': 'round',
    }, [
        h('path', { d: 'M5 8h14M5 8a2 2 0 1 0 0-4h14a2 2 0 1 0 0 4M5 8l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2L19 8' }),
        h('line', { x1: 10, y1: 12, x2: 14, y2: 12, stroke: '#CC933A' }),
    ]),
})

const IconAirbnb = defineComponent({
    render: () => h('svg', {
        width: 32, height: 32, viewBox: '0 0 24 24',
        fill: 'none', stroke: '#0d1b2a',
        'stroke-width': '1.6', 'stroke-linecap': 'round', 'stroke-linejoin': 'round',
    }, [
        h('path', { d: 'M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z' }),
        h('rect', { x: 9, y: 13, width: 6, height: 9, rx: 1, stroke: '#CC933A' }),
        h('circle', { cx: 12, cy: 6, r: 1.5, fill: '#CC933A', stroke: 'none' }),
    ]),
})

const services = [
    {
        icon: IconHome,
        title: 'cleaningServices.home.title',
        desc: 'cleaningServices.home.desc',
    },
    {
        icon: IconOffice,
        title: 'cleaningServices.office.title',
        desc: 'cleaningServices.office.desc',
    },
    {
        icon: IconDeep,
        title: 'cleaningServices.deep.title',
        desc: 'cleaningServices.deep.desc',
    },
    {
        icon: IconMoveIn,
        title: 'cleaningServices.moveIn.title',
        desc: 'cleaningServices.moveIn.desc',
    },
    {
        icon: IconAirbnb,
        title: 'cleaningServices.airbnb.title',
        desc: 'cleaningServices.airbnb.desc',
    },
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
    AOS.init({ duration: 860, once: true, easing: 'ease-out-cubic', offset: 60 })
})
</script>

<style scoped>
/* ─── Section ───────────────────────────────────────────── */
.cleaning-services {
    background: #ffffff;
    padding: 90px 40px;
    position: relative;
    overflow: hidden;
}

/* Subtle gold radial top right */
.cleaning-services::before {
    content: '';
    position: absolute;
    top: -140px;
    right: -140px;
    width: 420px;
    height: 420px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(204, 147, 58, 0.07) 0%, transparent 70%);
    pointer-events: none;
}

.cs-container {
    position: relative;
    z-index: 1;
    max-width: 1200px;
    margin: 0 auto;
}

/* ─── Header ────────────────────────────────────────────── */
.cs-header {
    text-align: center;
    margin-bottom: 56px;
}

.cs-title {
    font-family: var(--font-display);
    font-size: clamp(2rem, 3.5vw, 2.8rem);
    font-weight: 700;
    color: #0d1b2a;
    line-height: 1.15;
    margin-bottom: 10px;
    letter-spacing: -0.015em;
}

.cs-title--accent {
    font-style: italic;
    color: #CC933A;
    display: inline;
}

/* Gold underline */
.cs-title-line {
    width: 52px;
    height: 3px;
    background: linear-gradient(to right, #CC933A, rgba(204, 147, 58, 0.3));
    border-radius: 3px;
    margin: 12px auto 18px;
}

.cs-subtitle {
    font-family: var(--font-body);
    font-size: 1rem;
    color: #5a6a75;
    max-width: 520px;
    margin: 0 auto;
    line-height: 1.75;
}

/* ─── 5-card grid ───────────────────────────────────────── */
/*
  5 cards: 3 on top row, 2 centred on bottom row.
  Uses the same 6-column trick as the care plans grid.
*/
.cs-grid {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 20px;
    margin-bottom: 52px;
}

.cs-card:nth-child(1) {
    grid-column: 1 / 3;
}

.cs-card:nth-child(2) {
    grid-column: 3 / 5;
}

.cs-card:nth-child(3) {
    grid-column: 5 / 7;
}

.cs-card:nth-child(4) {
    grid-column: 2 / 4;
}

.cs-card:nth-child(5) {
    grid-column: 4 / 6;
}

/* ─── Card ──────────────────────────────────────────────── */
.cs-card {
    background: #ffffff;
    border: 1px solid rgba(13, 27, 42, 0.09);
    border-radius: 16px;
    padding: 32px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 14px;
    box-shadow: 0 2px 12px rgba(13, 27, 42, 0.06);
    transition: transform 0.30s ease, box-shadow 0.30s ease, border-color 0.30s ease;
    position: relative;
    overflow: hidden;
}

/* Gold top bar on hover */
.cs-card::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(to right, #CC933A, rgba(204, 147, 58, 0.3), transparent);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.35s ease;
}

.cs-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 16px 40px rgba(13, 27, 42, 0.12);
    border-color: rgba(204, 147, 58, 0.25);
}

.cs-card:hover::after {
    transform: scaleX(1);
}

/* ─── Icon ──────────────────────────────────────────────── */
.cs-card-icon {
    width: 72px;
    height: 72px;
    border-radius: 18px;
    background: linear-gradient(135deg, #f5f0e8, rgba(204, 147, 58, 0.10));
    border: 1px solid rgba(204, 147, 58, 0.18);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.25s ease, box-shadow 0.25s ease;
    flex-shrink: 0;
}

.cs-card:hover .cs-card-icon {
    transform: scale(1.08) rotate(-3deg);
    box-shadow: 0 6px 20px rgba(204, 147, 58, 0.18);
}

/* ─── Text ──────────────────────────────────────────────── */
.cs-card-title {
    font-family: var(--font-display);
    font-size: 1rem;
    font-weight: 700;
    color: #0d1b2a;
    line-height: 1.25;
    margin: 0;
}

.cs-card-desc {
    font-family: var(--font-body);
    font-size: 0.83rem;
    color: #5a6a75;
    line-height: 1.65;
    margin: 0;
}

/* ─── CTA row ───────────────────────────────────────────── */
.cs-cta-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    background: linear-gradient(135deg, #0d1b2a, #162840);
    border-radius: 16px;
    padding: 28px 36px;
    flex-wrap: wrap;
}

.cs-cta-text {
    font-family: var(--font-display);
    font-size: clamp(1rem, 2vw, 1.2rem);
    font-weight: 700;
    font-style: italic;
    color: #ffffff;
    margin: 0;
    max-width: 440px;
    line-height: 1.45;
}

.cs-cta-btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: linear-gradient(135deg, #d4b050, #CC933A);
    color: #0d1b2a;
    font-family: var(--font-body);
    font-size: 0.9rem;
    font-weight: 700;
    padding: 14px 30px;
    border-radius: 50px;
    text-decoration: none;
    white-space: nowrap;
    box-shadow: 0 8px 24px rgba(204, 147, 58, 0.38);
    transition: transform 0.22s ease, box-shadow 0.22s ease;
}

.cs-cta-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 14px 32px rgba(204, 147, 58, 0.48);
}

.cs-cta-btn svg {
    transition: transform 0.2s ease;
}

.cs-cta-btn:hover svg {
    transform: translateX(4px);
}

/* ─── Responsive ─────────────────────────────────────────── */
@media (max-width: 1024px) {
    .cs-grid {
        grid-template-columns: repeat(2, 1fr);
    }

    .cs-card:nth-child(1),
    .cs-card:nth-child(2),
    .cs-card:nth-child(3),
    .cs-card:nth-child(4),
    .cs-card:nth-child(5) {
        grid-column: auto;
    }
}

@media (max-width: 768px) {
    .cleaning-services {
        padding: 64px 20px;
    }

    .cs-grid {
        grid-template-columns: 1fr;
    }

    .cs-card:nth-child(1),
    .cs-card:nth-child(2),
    .cs-card:nth-child(3),
    .cs-card:nth-child(4),
    .cs-card:nth-child(5) {
        grid-column: 1 / -1;
    }

    .cs-cta-row {
        flex-direction: column;
        align-items: flex-start;
        padding: 24px 22px;
    }

    .cs-cta-btn {
        width: 100%;
        justify-content: center;
    }
}

/* ─── Reduced motion ─────────────────────────────────────── */
@media (prefers-reduced-motion: reduce) {

    .cs-card,
    .cs-card::after,
    .cs-card-icon {
        transition: none !important;
    }
}
</style>