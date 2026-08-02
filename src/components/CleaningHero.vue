<template>
    <section class="cleaning-hero" id="home">

        <!-- ── Background carousel ───────────────────────────── -->
        <div class="slides-track">
            <transition name="slide-bg-fade">
                <div class="hero-bg" :key="currentSlide"
                    :style="{ backgroundImage: `url(${slides[currentSlide].image})` }">
                    <div class="hero-bg-overlay"></div>
                </div>
            </transition>
        </div>

        <!-- ── Content card ──────────────────────────────────── -->
        <div class="hero-inner">
            <div class="hero-card" :key="contentKey">

                <!-- Eyebrow badge -->
                <div class="hero-badge">
                    <span class="badge-dot"></span>
                    {{ t(slides[currentSlide].badge) }}
                </div>

                <!-- Headline -->
                <h1 class="hero-headline">
                    {{ t(slides[currentSlide].line1) }}
                    <span class="hero-headline--accent">{{ t(slides[currentSlide].line2) }}</span>
                </h1>

                <!-- Subtitle -->
                <p class="hero-subtitle">{{ t(slides[currentSlide].subtitle) }}</p>

                <!-- Buttons -->
                <div class="hero-buttons">
                    <a href="#contact" class="btn-primary" @click.prevent="scrollTo('contact')">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-width="2.2" stroke-linecap="round">
                            <path
                                d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.68A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" />
                        </svg>
                        {{ t('cleaningHero.cta1') }}
                    </a>

                    <a href="#services" class="btn-outline" @click.prevent="scrollTo('cleaning-services')">
                        {{ t('cleaningHero.cta2') }}
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-width="2.4" stroke-linecap="round">
                            <line x1="5" y1="12" x2="19" y2="12" />
                            <polyline points="12 5 19 12 12 19" />
                        </svg>
                    </a>

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

        <!-- ── Arrow navigation ──────────────────────────────── -->
        <button class="carousel-arrow carousel-arrow--left" @click="prevSlide" aria-label="Previous slide">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                stroke-linecap="round">
                <polyline points="15 18 9 12 15 6" />
            </svg>
        </button>
        <button class="carousel-arrow carousel-arrow--right" @click="nextSlide" aria-label="Next slide">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                stroke-linecap="round">
                <polyline points="9 18 15 12 9 6" />
            </svg>
        </button>

        <!-- ── Progress dots ─────────────────────────────────── -->
        <div class="carousel-dots">
            <button v-for="(s, i) in slides" :key="i" class="carousel-dot" :class="{ active: i === currentSlide }"
                @click="goToSlide(i)" :aria-label="`Go to slide ${i + 1}`"></button>
        </div>

    </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'

/* ── Local cleaning images ───────────────────────────────── */
import CleaningImage1 from '@/assets/cleaning/CleaningImage1.png'
import CleaningImage2 from '@/assets/cleaning/CleaningImage2.png'
import CleaningImage3 from '@/assets/cleaning/CleaningImage3.png'
import CleaningImage4 from '@/assets/cleaning/CleaningImage4.png'
import CleaningImage5 from '@/assets/cleaning/CleaningImage5.png'

const { t } = useI18n()

const trustItems = [
    'cleaningHero.trust1',
    'cleaningHero.trust2',
    'cleaningHero.trust3',
]

/* ── 5 carousel slides ───────────────────────────────────── */
const slides = [
    {
        image: CleaningImage1,
        badge: 'cleaningHero.slides.1.badge',
        line1: 'cleaningHero.slides.1.line1',
        line2: 'cleaningHero.slides.1.line2',
        subtitle: 'cleaningHero.slides.1.subtitle',
    },
    {
        image: CleaningImage2,
        badge: 'cleaningHero.slides.2.badge',
        line1: 'cleaningHero.slides.2.line1',
        line2: 'cleaningHero.slides.2.line2',
        subtitle: 'cleaningHero.slides.2.subtitle',
    },
    {
        image: CleaningImage3,
        badge: 'cleaningHero.slides.3.badge',
        line1: 'cleaningHero.slides.3.line1',
        line2: 'cleaningHero.slides.3.line2',
        subtitle: 'cleaningHero.slides.3.subtitle',
    },
    {
        image: CleaningImage4,
        badge: 'cleaningHero.slides.4.badge',
        line1: 'cleaningHero.slides.4.line1',
        line2: 'cleaningHero.slides.4.line2',
        subtitle: 'cleaningHero.slides.4.subtitle',
    },
    {
        image: CleaningImage5,
        badge: 'cleaningHero.slides.5.badge',
        line1: 'cleaningHero.slides.5.line1',
        line2: 'cleaningHero.slides.5.line2',
        subtitle: 'cleaningHero.slides.5.subtitle',
    },
]

/* ── Reactive state ──────────────────────────────────────── */
const currentSlide = ref(0)
const contentKey = ref(0)
let autoplayTimer = null
const SLIDE_DURATION = 5500

const startAutoplay = () => {
    clearInterval(autoplayTimer)
    autoplayTimer = setInterval(() => {
        currentSlide.value = (currentSlide.value + 1) % slides.length
        contentKey.value++
    }, SLIDE_DURATION)
}

const nextSlide = () => {
    currentSlide.value = (currentSlide.value + 1) % slides.length
    contentKey.value++
    startAutoplay()
}

const prevSlide = () => {
    currentSlide.value = (currentSlide.value - 1 + slides.length) % slides.length
    contentKey.value++
    startAutoplay()
}

const goToSlide = (i) => {
    currentSlide.value = i
    contentKey.value++
    startAutoplay()
}

const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (!el) return
    window.scrollTo({
        top: el.getBoundingClientRect().top + window.pageYOffset - 100,
        behavior: 'smooth',
    })
}

onMounted(() => {
    startAutoplay()
})

onUnmounted(() => {
    clearInterval(autoplayTimer)
})
</script>

<style scoped>
.cleaning-hero {
    position: relative;
    min-height: 100vh;
    display: flex;
    align-items: center;
    overflow: hidden;
    background: #0d1b2a;
}

/* ─── Background carousel ────────────────────────────────── */
.slides-track {
    position: absolute;
    inset: 0;
    z-index: 0;
}

.hero-bg {
    position: absolute;
    inset: 0;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-color: #0d1b2a;
    will-change: opacity;
    animation: kenBurns 6s ease-out forwards;
}

@keyframes kenBurns {
    from { transform: scale(1.06); }
    to { transform: scale(1.00); }
}

.slide-bg-fade-enter-active,
.slide-bg-fade-leave-active {
    transition: opacity 1s ease;
    position: absolute;
    inset: 0;
}

.slide-bg-fade-enter-from,
.slide-bg-fade-leave-to {
    opacity: 0;
}

.hero-bg-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(105deg,
            rgba(13, 27, 42, 0.96) 0%,
            rgba(13, 27, 42, 0.85) 40%,
            rgba(13, 27, 42, 0.45) 65%,
            rgba(13, 27, 42, 0.10) 100%);
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
    background: rgba(13, 27, 42, 0.72);
    border: 1px solid rgba(204, 147, 58, 0.20);
    border-radius: 20px;
    padding: 48px 44px;
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    box-shadow:
        0 24px 64px rgba(0, 0, 0, 0.45),
        inset 0 1px 0 rgba(255, 255, 255, 0.04);
    animation: cardFadeIn 0.6s ease both;
}

@keyframes cardFadeIn {
    from { opacity: 0; transform: translateY(16px); }
    to { opacity: 1; transform: translateY(0); }
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
    color: #CC933A;
    background: rgba(204, 147, 58, 0.12);
    border: 1px solid rgba(204, 147, 58, 0.30);
    padding: 5px 14px 5px 10px;
    border-radius: 50px;
    margin-bottom: 22px;
}

.badge-dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #CC933A;
    flex-shrink: 0;
    animation: pulseDot 2.5s ease-out infinite;
}

@keyframes pulseDot {
    0% { box-shadow: 0 0 0 0 rgba(204, 147, 58, 0.6); }
    60% { box-shadow: 0 0 0 7px rgba(204, 147, 58, 0); }
    100% { box-shadow: 0 0 0 0 rgba(204, 147, 58, 0); }
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

.hero-headline--accent {
    display: block;
    color: #CC933A;
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
    background: linear-gradient(to right, #CC933A, rgba(204, 147, 58, 0.3), transparent);
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
    margin-top: 0;
}

/* ─── Buttons ────────────────────────────────────────────── */
.hero-buttons {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
    gap: 10px;
    margin-bottom: 28px;
}

.btn-care {
    grid-column: 1 / -1;
}

.btn-primary {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    background: linear-gradient(135deg, #d4b050, #CC933A, #a8872d);
    color: #0d1b2a;
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
    color: #0d1b2a;
    border-color: #ffffff;
    transform: translateY(-2px);
}

.btn-outline svg { transition: transform 0.2s ease; }
.btn-outline:hover svg { transform: translateX(4px); }

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
    color: #CC933A;
    transform: translateY(-1px);
}

.btn-care svg { transition: transform 0.2s ease; }
.btn-care:hover svg { transform: scale(1.15); }

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
    background: #CC933A;
    flex-shrink: 0;
}

/* ─── Arrow navigation ──────────────────────────────────── */
.carousel-arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 5;
    width: 52px;
    height: 52px;
    border-radius: 50%;
    border: 1px solid rgba(204, 147, 58, 0.32);
    background: rgba(13, 27, 42, 0.55);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background 0.22s ease, border-color 0.22s ease, transform 0.22s ease;
}

.carousel-arrow:hover {
    background: #CC933A;
    border-color: #CC933A;
    color: #0d1b2a;
    transform: translateY(calc(-50% - 2px));
}

.carousel-arrow--left { left: 28px; }
.carousel-arrow--right { right: 28px; }

/* ─── Progress dots ─────────────────────────────────────── */
.carousel-dots {
    position: absolute;
    bottom: 32px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 5;
    display: flex;
    gap: 8px;
}

.carousel-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    border: none;
    background: rgba(255, 255, 255, 0.35);
    cursor: pointer;
    padding: 0;
    transition: background 0.22s ease, transform 0.22s ease, width 0.22s ease;
}

.carousel-dot.active {
    background: #CC933A;
    width: 22px;
    border-radius: 4px;
}

/* ─── Responsive ─────────────────────────────────────────── */
@media (max-width: 1024px) {
    .carousel-arrow { width: 44px; height: 44px; }
}

@media (max-width: 768px) {
    .hero-inner {
        padding: 120px 20px 100px;
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

    .carousel-arrow {
        width: 40px;
        height: 40px;
    }

    .carousel-arrow--left { left: 10px; }
    .carousel-arrow--right { right: 10px; }

    .carousel-dots { bottom: 20px; }
}

@media (max-width: 420px) {
    .hero-headline {
        font-size: 2rem;
    }
}

/* ─── Reduced motion ─────────────────────────────────────── */
@media (prefers-reduced-motion: reduce) {
    .badge-dot,
    .hero-bg,
    .hero-card {
        animation: none !important;
    }
}
</style>