<template>
    <section class="cleaning-about" id="cleaning-about">
        <div class="ca-inner">

            <!-- ── Left: photo ────────────────────────────────── -->
            <div class="ca-photo-col" data-aos="fade-right" data-aos-duration="900">
                <div class="ca-photo-frame">
                    <img src="@/assets/cleaningabout.png" alt="Professionally cleaned kitchen by Swift Comfort Line"
                        class="ca-photo" />
                    <!-- Floating stat badge -->
                    <div class="ca-badge">
                        <span class="ca-badge-number">5★</span>
                        <span class="ca-badge-label">{{ t('cleaningAbout.badge') }}</span>
                    </div>
                </div>
                <!-- Decorative offset ring -->
                <div class="ca-ring" aria-hidden="true"></div>
            </div>

            <!-- ── Right: content ─────────────────────────────── -->
            <div class="ca-content" data-aos="fade-left" data-aos-duration="900" data-aos-delay="100">

                <!-- Eyebrow -->
                <div class="label-row">
                    <span class="label-line"></span>
                    <span class="section-label">{{ t('cleaningAbout.label') }}</span>
                    <span class="label-line"></span>
                </div>

                <h2 class="ca-title">
                    {{ t('cleaningAbout.title') }}
                    <span class="ca-title-accent">{{ t('cleaningAbout.titleAccent') }}</span>
                </h2>

                <p class="ca-subtitle">{{ t('cleaningAbout.subtitle') }}</p>

                <!-- 4 checkpoints -->
                <ul class="ca-checklist">
                    <li v-for="(item, i) in checkpoints" :key="i" class="ca-check-item" data-aos="fade-up"
                        :data-aos-delay="100 + i * 70">
                        <span class="ca-check-icon">
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#CC933A"
                                stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                                <polyline points="20 6 9 17 4 12" />
                            </svg>
                        </span>
                        <div class="ca-check-text">
                            <span class="ca-check-title">{{ t(item.title) }}</span>
                            <span class="ca-check-desc">{{ t(item.desc) }}</span>
                        </div>
                    </li>
                </ul>

                <!-- CTA -->
                <a href="#contact" class="ca-cta" @click.prevent="scrollTo('contact')">
                    {{ t('cleaningAbout.cta') }}
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
import { onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import AOS from 'aos'
import 'aos/dist/aos.css'

const { t } = useI18n()

const checkpoints = [
    { title: 'cleaningAbout.check1.title', desc: 'cleaningAbout.check1.desc' },
    { title: 'cleaningAbout.check2.title', desc: 'cleaningAbout.check2.desc' },
    { title: 'cleaningAbout.check3.title', desc: 'cleaningAbout.check3.desc' },
    { title: 'cleaningAbout.check4.title', desc: 'cleaningAbout.check4.desc' },
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
/* All colors from main.css tokens */

.cleaning-about {
    background: var(--color-bg);
    padding: 100px 40px;
    overflow: hidden;
    position: relative;
}

/* Subtle gold blob top right */
.cleaning-about::before {
    content: '';
    position: absolute;
    top: -120px;
    right: -120px;
    width: 400px;
    height: 400px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(204, 147, 58, 0.07) 0%, transparent 70%);
    pointer-events: none;
}

.ca-inner {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    align-items: center;
    position: relative;
    z-index: 1;
}

/* ─── Photo column ───────────────────────────────────────── */
.ca-photo-col {
    position: relative;
    padding: 20px 20px 20px 0;
}

.ca-ring {
    position: absolute;
    top: 0;
    left: 20px;
    right: -20px;
    bottom: 20px;
    border-radius: var(--radius-lg);
    border: 2px solid rgba(204, 147, 58, 0.20);
    pointer-events: none;
    z-index: 0;
}

.ca-photo-frame {
    position: relative;
    z-index: 1;
    border-radius: var(--radius-lg);
    overflow: visible;
}

.ca-photo {
    width: 100%;
    height: 520px;
    object-fit: cover;
    object-position: center;
    border-radius: var(--radius-lg);
    display: block;
    box-shadow: var(--shadow-lg);
}

/* Floating badge */
.ca-badge {
    position: absolute;
    bottom: -20px;
    right: -20px;
    z-index: 3;
    background: linear-gradient(135deg, var(--color-gold-bright), var(--color-gold));
    border-radius: var(--radius-md);
    padding: 16px 22px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3px;
    box-shadow: 0 10px 32px rgba(204, 147, 58, 0.42);
    animation: floatBadge 3.5s ease-in-out infinite;
}

@keyframes floatBadge {

    0%,
    100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-7px);
    }
}

.ca-badge-number {
    font-family: var(--font-display);
    font-size: 1.6rem;
    font-weight: 700;
    color: #ffffff;
    line-height: 1;
}

.ca-badge-label {
    font-family: var(--font-body);
    font-size: 0.68rem;
    color: rgba(255, 255, 255, 0.88);
    text-align: center;
    line-height: 1.3;
    white-space: nowrap;
}

/* ─── Content column ─────────────────────────────────────── */
.label-row {
    display: flex;
    align-items: center;
    gap: 14px;
    margin-bottom: 16px;
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
    color: var(--color-gold);
}

.ca-title {
    font-family: var(--font-display);
    font-size: clamp(1.9rem, 3vw, 2.6rem);
    font-weight: 700;
    color: var(--color-primary);
    line-height: 1.2;
    margin-bottom: 16px;
}

.ca-title-accent {
    display: block;
    font-style: italic;
    color: var(--color-gold);
}

.ca-subtitle {
    font-family: var(--font-body);
    font-size: 1rem;
    color: var(--color-text-muted);
    line-height: 1.78;
    margin-bottom: 32px;
}

/* ─── Checklist ──────────────────────────────────────────── */
.ca-checklist {
    list-style: none;
    padding: 0;
    margin: 0 0 36px;
    display: flex;
    flex-direction: column;
    gap: 18px;
}

.ca-check-item {
    display: flex;
    align-items: flex-start;
    gap: 14px;
}

.ca-check-icon {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background: var(--color-gold-light);
    border: 1px solid rgba(204, 147, 58, 0.25);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    margin-top: 2px;
}

.ca-check-text {
    display: flex;
    flex-direction: column;
    gap: 2px;
}

.ca-check-title {
    font-family: var(--font-body);
    font-size: 0.95rem;
    font-weight: 600;
    color: var(--color-primary);
    line-height: 1.25;
}

.ca-check-desc {
    font-family: var(--font-body);
    font-size: 0.83rem;
    color: var(--color-text-muted);
    line-height: 1.55;
}

/* ─── CTA ────────────────────────────────────────────────── */
.ca-cta {
    display: inline-flex;
    align-items: center;
    gap: 9px;
    background: linear-gradient(135deg, var(--color-primary), var(--color-primary-bright));
    color: #ffffff;
    font-family: var(--font-body);
    font-size: 0.9rem;
    font-weight: 600;
    padding: 14px 32px;
    border-radius: 50px;
    text-decoration: none;
    box-shadow: var(--shadow-md);
    transition: transform 0.22s ease, box-shadow 0.22s ease;
}

.ca-cta:hover {
    transform: translateY(-3px);
    box-shadow: var(--shadow-lg);
}

.ca-cta svg {
    transition: transform 0.2s ease;
}

.ca-cta:hover svg {
    transform: translateX(4px);
}

/* ─── Responsive ─────────────────────────────────────────── */
@media (max-width: 900px) {
    .ca-inner {
        grid-template-columns: 1fr;
        gap: 48px;
    }

    .ca-photo {
        height: 360px;
    }

    .ca-ring {
        display: none;
    }

    .ca-badge {
        bottom: -16px;
        right: 16px;
    }
}

@media (max-width: 600px) {
    .cleaning-about {
        padding: 64px 20px;
    }

    .ca-photo {
        height: 280px;
    }
}

@media (prefers-reduced-motion: reduce) {
    .ca-badge {
        animation: none !important;
    }
}
</style>