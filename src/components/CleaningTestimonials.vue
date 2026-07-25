<template>
    <section class="cleaning-testi" id="cleaning-testimonials">
        <div class="ct-container">

            <!-- ── Header ─────────────────────────────────────── -->
            <div class="ct-header" data-aos="fade-up">
                <div class="label-row">
                    <span class="label-line"></span>
                    <span class="section-label">{{ t('cleaningTesti.label') }}</span>
                    <span class="label-line"></span>
                </div>
                <h2 class="ct-title">{{ t('cleaningTesti.title') }}</h2>

                <!-- Overall rating row -->
                <div class="ct-rating-row">
                    <div class="ct-stars">
                        <svg v-for="n in 5" :key="n" width="16" height="16" viewBox="0 0 24 24">
                            <polygon
                                points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                                fill="#CC933A" />
                        </svg>
                    </div>
                    <span class="ct-rating-score">5.0</span>
                    <span class="ct-rating-label">{{ t('cleaningTesti.ratingLabel') }}</span>
                </div>
            </div>

            <!-- ── 3 testimonial cards ────────────────────────── -->
            <div class="ct-grid">
                <div class="ct-card" v-for="(item, i) in testimonials" :key="i" data-aos="fade-up"
                    :data-aos-delay="i * 90">
                    <!-- Stars -->
                    <div class="ct-card-stars">
                        <svg v-for="n in 5" :key="n" width="14" height="14" viewBox="0 0 24 24">
                            <polygon
                                points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                                fill="#CC933A" />
                        </svg>
                    </div>

                    <!-- Quote -->
                    <p class="ct-card-quote">"{{ t(item.text) }}"</p>

                    <!-- Author -->
                    <div class="ct-card-footer">
                        <div class="ct-card-divider"></div>
                        <div class="ct-author">
                            <div class="ct-avatar">{{ getInitials(t(item.name)) }}</div>
                            <div class="ct-author-meta">
                                <span class="ct-author-name">{{ t(item.name) }}</span>
                                <span class="ct-author-location">
                                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#CC933A"
                                        stroke-width="2" stroke-linecap="round">
                                        <path
                                            d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                                        <circle cx="12" cy="9" r="2.5" />
                                    </svg>
                                    {{ t(item.location) }}
                                </span>
                            </div>
                        </div>
                        <div class="ct-verified">
                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#45137D"
                                stroke-width="2.5" stroke-linecap="round">
                                <polyline points="20 6 9 17 4 12" />
                            </svg>
                            {{ t('cleaningTesti.verified') }}
                        </div>
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

const testimonials = [
    {
        text: 'cleaningTesti.items.1.text',
        name: 'cleaningTesti.items.1.name',
        location: 'cleaningTesti.items.1.location',
    },
    {
        text: 'cleaningTesti.items.2.text',
        name: 'cleaningTesti.items.2.name',
        location: 'cleaningTesti.items.2.location',
    },
    {
        text: 'cleaningTesti.items.3.text',
        name: 'cleaningTesti.items.3.name',
        location: 'cleaningTesti.items.3.location',
    },
]

const getInitials = (name) => {
    if (!name) return ''
    return name.split(' ').map(n => n[0]).slice(0, 2).join('').toUpperCase()
}

onMounted(() => {
    AOS.init({ duration: 860, once: true, easing: 'ease-out-cubic', offset: 60 })
})
</script>

<style scoped>
/* All colors from main.css tokens */

.cleaning-testi {
    background: var(--color-bg-soft);
    padding: 100px 40px;
    position: relative;
    overflow: hidden;
}

/* Purple blob bottom left */
.cleaning-testi::before {
    content: '';
    position: absolute;
    bottom: -140px;
    left: -140px;
    width: 420px;
    height: 420px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(69, 19, 125, 0.06) 0%, transparent 70%);
    pointer-events: none;
}

.ct-container {
    position: relative;
    z-index: 1;
    max-width: 1100px;
    margin: 0 auto;
}

/* ─── Header ────────────────────────────────────────────── */
.ct-header {
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

.ct-title {
    font-family: var(--font-display);
    font-size: clamp(1.9rem, 3.2vw, 2.5rem);
    font-weight: 700;
    color: var(--color-primary);
    margin-bottom: 18px;
}

.ct-rating-row {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    background: var(--color-bg);
    border: 1px solid var(--color-border);
    border-radius: 50px;
    padding: 8px 20px;
    box-shadow: var(--shadow-sm);
}

.ct-stars {
    display: flex;
    gap: 2px;
}

.ct-rating-score {
    font-family: var(--font-display);
    font-size: 1.1rem;
    font-weight: 700;
    color: var(--color-gold);
}

.ct-rating-label {
    font-family: var(--font-body);
    font-size: 0.75rem;
    color: var(--color-text-muted);
}

/* ─── 3-card grid ────────────────────────────────────────── */
.ct-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
}

/* ─── Card ───────────────────────────────────────────────── */
.ct-card {
    background: var(--color-bg);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-lg);
    padding: 32px 28px 26px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    box-shadow: var(--shadow-sm);
    position: relative;
    overflow: hidden;
    transition: transform 0.30s ease, box-shadow 0.30s ease, border-color 0.30s ease;
}

/* Gold top bar on hover */
.ct-card::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(to right, var(--color-gold-bright), var(--color-gold), transparent);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.35s ease;
}

.ct-card:hover {
    transform: translateY(-8px);
    box-shadow: var(--shadow-lg);
    border-color: rgba(204, 147, 58, 0.28);
}

.ct-card:hover::after {
    transform: scaleX(1);
}

/* Stars */
.ct-card-stars {
    display: flex;
    gap: 2px;
}

/* Quote */
.ct-card-quote {
    font-family: var(--font-body);
    font-size: 0.95rem;
    font-weight: 300;
    font-style: italic;
    color: var(--color-text-muted);
    line-height: 1.80;
    flex: 1;
    margin: 0;
}

/* Footer */
.ct-card-footer {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.ct-card-divider {
    height: 1px;
    background: var(--color-border);
}

.ct-author {
    display: flex;
    align-items: center;
    gap: 12px;
}

.ct-avatar {
    width: 42px;
    height: 42px;
    border-radius: 50%;
    background: linear-gradient(135deg, var(--color-primary), var(--color-primary-bright));
    color: #ffffff;
    font-family: var(--font-body);
    font-size: 0.82rem;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    box-shadow: 0 4px 14px rgba(69, 19, 125, 0.22);
}

.ct-author-meta {
    display: flex;
    flex-direction: column;
    gap: 2px;
}

.ct-author-name {
    font-family: var(--font-body);
    font-size: 0.9rem;
    font-weight: 700;
    color: var(--color-primary);
}

.ct-author-location {
    display: flex;
    align-items: center;
    gap: 5px;
    font-family: var(--font-body);
    font-size: 0.76rem;
    color: var(--color-text-muted);
}

.ct-verified {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    font-family: var(--font-body);
    font-size: 0.70rem;
    font-weight: 600;
    color: var(--color-primary);
    background: var(--color-primary-light);
    border: 1px solid var(--color-border);
    padding: 4px 10px;
    border-radius: 50px;
    align-self: flex-start;
}

/* ─── Responsive ─────────────────────────────────────────── */
@media (max-width: 900px) {
    .ct-grid {
        grid-template-columns: 1fr;
        gap: 18px;
    }
}

@media (max-width: 600px) {
    .cleaning-testi {
        padding: 64px 20px;
    }
}

@media (prefers-reduced-motion: reduce) {

    .ct-card,
    .ct-card::after {
        transition: none !important;
    }
}
</style>