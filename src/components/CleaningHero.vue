<template>
    <section class="cleaning-hero" id="home">

        <!-- ── Background image ──────────────────────────────── -->
        <div class="hero-bg">
            <img src="@/assets/cleaninghero.jpg" alt="Beautifully clean living space" class="hero-bg-img" />
            <div class="hero-bg-overlay"></div>
        </div>

        <!-- ── Content card ──────────────────────────────────── -->
        <div class="hero-inner">
            <div class="hero-card" data-aos="fade-right" data-aos-duration="900">

                <!-- Eyebrow badge -->
                <div class="hero-badge">
                    <span class="badge-dot"></span>
                    {{ t('cleaningHero.badge') }}
                </div>

                <!-- Headline -->
                <h1 class="hero-headline">
                    {{ t('cleaningHero.line1') }}
                    <span class="hero-headline--accent">{{ t('cleaningHero.line2') }}</span>
                </h1>

                <!-- Subtitle -->
                <p class="hero-subtitle">{{ t('cleaningHero.subtitle') }}</p>

                <!-- Buttons -->
                <div class="hero-buttons">
                    <!-- Primary CTA -->
                    <a href="#contact" class="btn-primary" @click.prevent="scrollTo('contact')">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-width="2.2" stroke-linecap="round">
                            <path
                                d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.68A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" />
                        </svg>
                        {{ t('cleaningHero.cta1') }}
                    </a>

                    <!-- Outline CTA -->
                    <a href="#services" class="btn-outline" @click.prevent="scrollTo('cleaning-services')">
                        {{ t('cleaningHero.cta2') }}
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-width="2.4" stroke-linecap="round">
                            <line x1="5" y1="12" x2="19" y2="12" />
                            <polyline points="12 5 19 12 12 19" />
                        </svg>
                    </a>

                    <!-- Non-medical care link back to healthcare page -->
                    <a href="/" class="btn-care">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                            <path
                                d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                        </svg>
                        {{ t('cleaningHero.careBtn') }}
                    </a>
                </div>

                <!-- Trust bar -->
                <div class="trust-bar">
                    <span v-for="(item, i) in trustItems" :key="i" class="trust-bar-item">
                        <span class="trust-bar-dot" aria-hidden="true"></span>
                        {{ t(item) }}
                    </span>
                </div>

            </div>
        </div>

    </section>
</template>

<script setup>
import { onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import AOS from 'aos'
import 'aos/dist/aos.css'

const { t } = useI18n()

const trustItems = [
    'cleaningHero.trust1',
    'cleaningHero.trust2',
    'cleaningHero.trust3',
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
    AOS.init({ duration: 860, once: true, easing: 'ease-out-cubic' })
})
</script>

<style scoped>
/*
  Colors now read from the global :root tokens in main.css —
  nothing hardcoded here. Deep-purple background/overlay uses
  --color-primary-deep, gold accents use --color-gold /
  --color-gold-bright / --color-gold-dark / --color-gold-light.

  rgba() fallbacks below use the same RGB values as the hex
  tokens (--color-primary-deep #1A0535 = rgb(26,5,53),
  --color-gold #CC933A = rgb(204,147,58)) since CSS vars can't
  be interpolated inside rgba() directly in all target browsers.
*/

.cleaning-hero {
    position: relative;
    min-height: 100vh;
    display: flex;
    align-items: center;
    overflow: hidden;
    background: var(--color-primary-deep);
}

/* ─── Background ─────────────────────────────────────────── */
.hero-bg {
    position: absolute;
    inset: 0;
    z-index: 0;
}

.hero-bg-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    display: block;
}

.hero-bg-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(105deg,
            rgba(26, 5, 53, 0.96) 0%,
            rgba(26, 5, 53, 0.85) 40%,
            rgba(26, 5, 53, 0.45) 65%,
            rgba(26, 5, 53, 0.10) 100%);
}

/* ─── Inner layout ───────────────────────────────────────── */
.hero-inner {
    position: relative;
    z-index: 2;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 140px 48px 100px;
}

/* ─── Card ───────────────────────────────────────────────── */
.hero-card {
    max-width: 560px;
    background: rgba(26, 5, 53, 0.72);
    border: 1px solid rgba(204, 147, 58, 0.20);
    border-radius: var(--radius-lg);
    padding: 48px 44px;
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    box-shadow:
        0 24px 64px rgba(0, 0, 0, 0.45),
        inset 0 1px 0 rgba(255, 255, 255, 0.04);
}

/* ─── Badge ──────────────────────────────────────────────── */
.hero-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-family: var(--font-body);
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.13em;
    text-transform: uppercase;
    color: var(--color-gold);
    background: var(--color-gold-light);
    border: 1px solid rgba(204, 147, 58, 0.30);
    padding: 5px 14px 5px 10px;
    border-radius: 50px;
    margin-bottom: 22px;
}

.badge-dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: var(--color-gold);
    flex-shrink: 0;
    animation: pulseDot 2.5s ease-out infinite;
}

@keyframes pulseDot {
    0% {
        box-shadow: 0 0 0 0 rgba(204, 147, 58, 0.6);
    }

    60% {
        box-shadow: 0 0 0 7px rgba(204, 147, 58, 0);
    }

    100% {
        box-shadow: 0 0 0 0 rgba(204, 147, 58, 0);
    }
}

/* ─── Headline ───────────────────────────────────────────── */
.hero-headline {
    font-family: var(--font-display);
    font-size: clamp(2.2rem, 4vw, 3.2rem);
    font-weight: 700;
    color: #ffffff;
    line-height: 1.15;
    letter-spacing: -0.015em;
    margin-bottom: 16px;
    text-shadow: 0 3px 20px rgba(0, 0, 0, 0.40);
}

/* Gold underline accent on second line */
.hero-headline--accent {
    display: block;
    color: var(--color-gold);
    font-style: italic;
    position: relative;
}

.hero-headline--accent::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    height: 3px;
    width: 55%;
    background: linear-gradient(to right, var(--color-gold), rgba(204, 147, 58, 0.3), transparent);
    border-radius: 3px;
}

/* ─── Subtitle ───────────────────────────────────────────── */
.hero-subtitle {
    font-family: var(--font-body);
    font-size: 1rem;
    font-weight: 300;
    color: rgba(255, 255, 255, 0.78);
    line-height: 1.78;
    margin-bottom: 30px;
    /* override global p color */
    margin-top: 0;
}

/* ─── Buttons ────────────────────────────────────────────── */
.hero-buttons {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 28px;
}

/* Row 1: two main CTAs side by side */
.hero-buttons .btn-primary,
.hero-buttons .btn-outline {
    flex: 1;
}

/* Wrap first two in a row */
.hero-buttons {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
    gap: 10px;
}

.btn-care {
    grid-column: 1 / -1;
    /* full width on its own row */
}

/* Gold primary button */
.btn-primary {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    background: linear-gradient(135deg, var(--color-gold-bright), var(--color-gold), var(--color-gold-dark));
    color: var(--color-primary-deep);
    font-family: var(--font-body);
    font-size: 0.9rem;
    font-weight: 700;
    padding: 14px 22px;
    border-radius: 50px;
    text-decoration: none;
    box-shadow:
        0 8px 28px rgba(204, 147, 58, 0.40),
        inset 0 1px 0 rgba(255, 255, 255, 0.22);
    transition: transform 0.22s ease, box-shadow 0.22s ease;
    white-space: nowrap;
}

.btn-primary:hover {
    transform: translateY(-2px);
    box-shadow:
        0 14px 36px rgba(204, 147, 58, 0.50),
        inset 0 1px 0 rgba(255, 255, 255, 0.22);
}

/* Outline button */
.btn-outline {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    background: rgba(255, 255, 255, 0.06);
    color: #ffffff;
    font-family: var(--font-body);
    font-size: 0.9rem;
    font-weight: 600;
    padding: 12px 22px;
    border-radius: 50px;
    border: 1.5px solid rgba(255, 255, 255, 0.40);
    text-decoration: none;
    backdrop-filter: blur(6px);
    transition: all 0.22s ease;
    white-space: nowrap;
}

.btn-outline:hover {
    background: #ffffff;
    color: var(--color-primary-deep);
    border-color: #ffffff;
    transform: translateY(-2px);
}

.btn-outline svg {
    transition: transform 0.2s ease;
}

.btn-outline:hover svg {
    transform: translateX(4px);
}

/* Non-medical care button */
.btn-care {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 7px;
    background: rgba(255, 255, 255, 0.06);
    color: rgba(255, 255, 255, 0.78);
    font-family: var(--font-body);
    font-size: 0.82rem;
    font-weight: 500;
    padding: 9px 20px;
    border-radius: 50px;
    border: 1px solid rgba(255, 255, 255, 0.22);
    text-decoration: none;
    backdrop-filter: blur(6px);
    transition: all 0.22s ease;
    letter-spacing: 0.01em;
}

.btn-care:hover {
    background: rgba(204, 147, 58, 0.15);
    border-color: rgba(204, 147, 58, 0.50);
    color: var(--color-gold);
    transform: translateY(-1px);
}

.btn-care svg {
    transition: transform 0.2s ease;
}

.btn-care:hover svg {
    transform: scale(1.15);
}

/* ─── Trust bar ──────────────────────────────────────────── */
.trust-bar {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 6px 20px;
    padding-top: 22px;
    border-top: 1px solid rgba(255, 255, 255, 0.10);
}

.trust-bar-item {
    display: flex;
    align-items: center;
    gap: 7px;
    font-family: var(--font-body);
    font-size: 0.82rem;
    color: rgba(255, 255, 255, 0.72);
}

.trust-bar-dot {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: var(--color-gold);
    flex-shrink: 0;
}

/* ─── Responsive ─────────────────────────────────────────── */
@media (max-width: 768px) {
    .hero-inner {
        padding: 120px 20px 80px;
    }

    .hero-card {
        max-width: 100%;
        padding: 36px 24px;
    }

    .hero-headline {
        font-size: clamp(1.9rem, 8vw, 2.4rem);
    }

    .hero-buttons {
        grid-template-columns: 1fr;
    }

    .btn-care {
        grid-column: 1;
    }
}

/* ─── Reduced motion ─────────────────────────────────────── */
@media (prefers-reduced-motion: reduce) {
    .badge-dot {
        animation: none !important;
    }

    .hero-headline--accent::after {
        animation: none !important;
    }
}
</style>