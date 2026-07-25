<template>
    <section class="cleaning-cta" id="cleaning-cta">

        <!-- ── Decorative blobs ───────────────────────────────── -->
        <div class="cta-blob cta-blob--tl" aria-hidden="true"></div>
        <div class="cta-blob cta-blob--br" aria-hidden="true"></div>

        <div class="cta-inner">

            <!-- Left: text content -->
            <div class="cta-content" data-aos="fade-right" data-aos-duration="900">

                <div class="label-row">
                    <span class="label-line"></span>
                    <span class="section-label">{{ t('cleaningCTA.label') }}</span>
                    <span class="label-line"></span>
                </div>

                <h2 class="cta-title">{{ t('cleaningCTA.title') }}</h2>
                <p class="cta-subtitle">{{ t('cleaningCTA.subtitle') }}</p>

                <!-- Trust chips -->
                <div class="cta-trust-chips">
                    <span class="cta-chip" v-for="(chip, i) in trustChips" :key="i">
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#CC933A" stroke-width="3"
                            stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {{ t(chip) }}
                    </span>
                </div>

                <!-- Buttons -->
                <div class="cta-buttons">
                    <a href="#contact" class="cta-btn-primary" @click.prevent="scrollTo('contact')">
                        {{ t('cleaningCTA.btn') }}
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-width="2.5" stroke-linecap="round">
                            <line x1="5" y1="12" x2="19" y2="12" />
                            <polyline points="12 5 19 12 12 19" />
                        </svg>
                    </a>
                    <a :href="'tel:+16138516775'" class="cta-btn-ghost">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-width="2.2" stroke-linecap="round">
                            <path
                                d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.68A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" />
                        </svg>
                        +1 (613) 851-6775
                    </a>
                </div>

            </div>

            <!-- Right: decorative image panel -->
            <div class="cta-image-col" data-aos="fade-left" data-aos-duration="900" data-aos-delay="120">
                <div class="cta-image-frame">
                    <img src="@/assets/cleaningimg.png" alt="Clean, elegant space with candles and plants"
                        class="cta-image" />
                    <!-- Overlay gradient for blending -->
                    <div class="cta-image-overlay" aria-hidden="true"></div>
                </div>

                <!-- Floating info card -->
                <div class="cta-info-card">
                    <div class="cta-info-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#CC933A" stroke-width="1.8"
                            stroke-linecap="round">
                            <circle cx="12" cy="12" r="10" />
                            <polyline points="12 6 12 12 16 14" />
                        </svg>
                    </div>
                    <div class="cta-info-text">
                        <span class="cta-info-title">{{ t('cleaningCTA.infoTitle') }}</span>
                        <span class="cta-info-sub">{{ t('cleaningCTA.infoSub') }}</span>
                    </div>
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

const trustChips = [
    'cleaningCTA.chip1',
    'cleaningCTA.chip2',
    'cleaningCTA.chip3',
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
    AOS.init({ duration: 860, once: true, easing: 'ease-out-cubic', offset: 50 })
})
</script>

<style scoped>
/* All colors from main.css tokens */

/* ─── Section ────────────────────────────────────────────── */
.cleaning-cta {
    position: relative;
    background: var(--color-primary-deep);
    /* #1A0535 */
    padding: 100px 40px;
    overflow: hidden;
}

/* Dot grid texture */
.cleaning-cta::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: radial-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px);
    background-size: 28px 28px;
    pointer-events: none;
    z-index: 0;
}

/* ─── Blobs ──────────────────────────────────────────────── */
.cta-blob {
    position: absolute;
    border-radius: 50%;
    pointer-events: none;
    z-index: 0;
}

.cta-blob--tl {
    top: -160px;
    left: -160px;
    width: 480px;
    height: 480px;
    background: radial-gradient(circle, rgba(204, 147, 58, 0.14) 0%, transparent 70%);
}

.cta-blob--br {
    bottom: -160px;
    right: -160px;
    width: 420px;
    height: 420px;
    background: radial-gradient(circle, rgba(93, 27, 168, 0.30) 0%, transparent 70%);
}

/* ─── Inner layout ───────────────────────────────────────── */
.cta-inner {
    position: relative;
    z-index: 1;
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 72px;
    align-items: center;
}

/* ─── Label row ──────────────────────────────────────────── */
.label-row {
    display: flex;
    align-items: center;
    gap: 14px;
    margin-bottom: 18px;
}

.label-line {
    width: 28px;
    height: 1px;
    background: var(--color-gold);
}

.section-label {
    font-family: var(--font-body);
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.13em;
    text-transform: uppercase;
    color: var(--color-gold-bright);
}

/* ─── Title & subtitle ───────────────────────────────────── */
.cta-title {
    font-family: var(--font-display);
    font-size: clamp(2rem, 3.5vw, 3rem);
    font-weight: 700;
    color: #ffffff;
    line-height: 1.18;
    margin-bottom: 16px;
    text-shadow: 0 3px 20px rgba(0, 0, 0, 0.30);
}

.cta-subtitle {
    font-family: var(--font-body);
    font-size: 1rem;
    font-weight: 300;
    color: rgba(255, 255, 255, 0.72);
    line-height: 1.78;
    margin-bottom: 28px;
    max-width: 460px;
}

/* ─── Trust chips ────────────────────────────────────────── */
.cta-trust-chips {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 32px;
}

.cta-chip {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-family: var(--font-body);
    font-size: 0.80rem;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.82);
    background: rgba(255, 255, 255, 0.07);
    border: 1px solid rgba(255, 255, 255, 0.14);
    padding: 6px 14px;
    border-radius: 50px;
    backdrop-filter: blur(4px);
}

/* ─── Buttons ────────────────────────────────────────────── */
.cta-buttons {
    display: flex;
    align-items: center;
    gap: 12px;
    flex-wrap: wrap;
}

.cta-btn-primary {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: linear-gradient(135deg, var(--color-gold-bright), var(--color-gold));
    color: var(--color-primary-deep);
    font-family: var(--font-body);
    font-size: 0.92rem;
    font-weight: 700;
    padding: 15px 34px;
    border-radius: 50px;
    text-decoration: none;
    box-shadow:
        0 8px 28px rgba(204, 147, 58, 0.44),
        inset 0 1px 0 rgba(255, 255, 255, 0.22);
    transition: transform 0.22s ease, box-shadow 0.22s ease;
    white-space: nowrap;
}

.cta-btn-primary:hover {
    transform: translateY(-3px);
    box-shadow:
        0 14px 38px rgba(204, 147, 58, 0.54),
        inset 0 1px 0 rgba(255, 255, 255, 0.22);
}

.cta-btn-primary svg {
    transition: transform 0.2s ease;
}

.cta-btn-primary:hover svg {
    transform: translateX(4px);
}

.cta-btn-ghost {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: rgba(255, 255, 255, 0.07);
    color: rgba(255, 255, 255, 0.88);
    font-family: var(--font-body);
    font-size: 0.9rem;
    font-weight: 600;
    padding: 13px 26px;
    border-radius: 50px;
    border: 1.5px solid rgba(255, 255, 255, 0.28);
    text-decoration: none;
    backdrop-filter: blur(6px);
    transition: all 0.22s ease;
    white-space: nowrap;
}

.cta-btn-ghost:hover {
    background: rgba(255, 255, 255, 0.14);
    border-color: rgba(255, 255, 255, 0.55);
    transform: translateY(-2px);
}

/* ─── Image column ───────────────────────────────────────── */
.cta-image-col {
    position: relative;
}

.cta-image-frame {
    position: relative;
    border-radius: var(--radius-lg);
    overflow: hidden;
    box-shadow: var(--shadow-lg);
}

.cta-image {
    width: 100%;
    height: 460px;
    object-fit: cover;
    object-position: center;
    display: block;
}

/* Left-side gradient blends image into the dark bg */
.cta-image-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to right,
            rgba(26, 5, 53, 0.55) 0%,
            transparent 50%,
            transparent 100%);
}

/* Floating info card */
.cta-info-card {
    position: absolute;
    bottom: -20px;
    left: -24px;
    z-index: 3;
    display: flex;
    align-items: center;
    gap: 12px;
    background: rgba(26, 5, 53, 0.88);
    border: 1px solid rgba(204, 147, 58, 0.35);
    border-radius: var(--radius-md);
    padding: 14px 18px;
    backdrop-filter: blur(14px);
    box-shadow: var(--shadow-md);
}

.cta-info-icon {
    width: 40px;
    height: 40px;
    border-radius: var(--radius-sm);
    background: rgba(204, 147, 58, 0.12);
    border: 1px solid rgba(204, 147, 58, 0.25);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
}

.cta-info-text {
    display: flex;
    flex-direction: column;
    gap: 2px;
}

.cta-info-title {
    font-family: var(--font-body);
    font-size: 0.85rem;
    font-weight: 700;
    color: #ffffff;
    white-space: nowrap;
}

.cta-info-sub {
    font-family: var(--font-body);
    font-size: 0.70rem;
    color: rgba(255, 255, 255, 0.55);
    white-space: nowrap;
}

/* ─── Responsive ─────────────────────────────────────────── */
@media (max-width: 960px) {
    .cta-inner {
        grid-template-columns: 1fr;
        gap: 52px;
    }

    .cta-image {
        height: 320px;
    }

    .cta-info-card {
        left: 16px;
        bottom: -16px;
    }
}

@media (max-width: 600px) {
    .cleaning-cta {
        padding: 64px 20px;
    }

    .cta-buttons {
        flex-direction: column;
        align-items: stretch;
    }

    .cta-btn-primary,
    .cta-btn-ghost {
        justify-content: center;
    }

    .cta-image {
        height: 240px;
    }

    .cta-info-card {
        display: none;
    }
}

@media (prefers-reduced-motion: reduce) {

    .cta-btn-primary,
    .cta-btn-ghost {
        transition: none !important;
    }
}
</style>