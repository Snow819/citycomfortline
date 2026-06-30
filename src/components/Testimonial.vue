<template>
  <section id="testimonials" class="testimonial-section">

    <!-- ── Decorative blobs ───────────────────────────────── -->
    <div class="blob blob--tr" aria-hidden="true"></div>
    <div class="blob blob--bl" aria-hidden="true"></div>

    <div class="testimonial-container">

      <!-- ── Header ────────────────────────────────────────── -->
      <div class="testimonial-header" data-aos="fade-up">
        <div class="label-row">
          <span class="label-line"></span>
          <span class="section-label">{{ $t('testimonials.label') }}</span>
          <span class="label-line"></span>
        </div>
        <h2 class="section-title">{{ $t('testimonials.title') }}</h2>
        <p class="section-subtitle">{{ $t('testimonials.subtitle') }}</p>
      </div>

      <!-- ── Summary stats bar ─────────────────────────────── -->
      <div class="stats-bar" data-aos="fade-up" data-aos-delay="60">
        <div class="stats-bar-item" v-for="(s, i) in summaryStats" :key="i">
          <span class="stats-bar-value">{{ s.value }}</span>
          <span class="stats-bar-label">{{ $t(s.label) }}</span>
        </div>

        <!-- Google / overall rating chip -->
        <div class="rating-chip">
          <div class="rating-stars">
            <svg v-for="n in 5" :key="n" width="14" height="14" viewBox="0 0 24 24">
              <polygon
                points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                fill="#CC933A" />
            </svg>
          </div>
          <span class="rating-score">5.0</span>
          <span class="rating-label">{{ $t('testimonials.ratingLabel') }}</span>
        </div>
      </div>

      <!-- ── Carousel ───────────────────────────────────────── -->
      <div class="carousel" @mouseenter="pauseAutoplay" @mouseleave="resumeAutoplay" data-aos="fade-up"
        data-aos-delay="100">
        <transition name="slide-fade" mode="out-in">
          <div :key="currentIndex" class="testimonial-grid">
            <div v-for="(testimonial, index) in visibleTestimonials" :key="`t-${currentIndex}-${index}`"
              class="testimonial-card" :class="{ 'testimonial-card--featured': index === 0 && currentIndex === 0 }">
              <!-- Top accent bar animates in on hover via CSS -->

              <!-- Card header row -->
              <div class="card-head">
                <!-- Quote icon -->
                <div class="quote-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="#CC933A">
                    <!-- #CC933A = --color-gold -->
                    <path
                      d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
                  </svg>
                </div>

                <!-- Stars -->
                <div class="stars">
                  <svg v-for="n in 5" :key="n" width="15" height="15" viewBox="0 0 24 24">
                    <polygon
                      points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                      :fill="n <= testimonial.rating ? '#CC933A' : 'rgba(69,19,125,0.10)'" />
                  </svg>
                </div>
              </div>

              <!-- Testimonial text -->
              <p class="testimonial-text">"{{ $t(testimonial.text) }}"</p>

              <!-- Footer -->
              <div class="testimonial-footer">
                <div class="author-info">
                  <!-- Avatar initials -->
                  <div class="author-avatar">
                    {{ getInitials($t(testimonial.name)) }}
                  </div>

                  <div class="author-meta">
                    <h4 class="author-name">{{ $t(testimonial.name) }}</h4>
                    <p class="author-role">{{ $t(testimonial.role) }}</p>
                  </div>
                </div>

                <!-- Verified badge -->
                <div class="verified-badge">
                  <svg width="10" height="10" viewBox="0 0 24 24">
                    <path
                      d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                      fill="none" stroke="#45137D" stroke-width="2" />
                    <polyline points="9 12 11 14 15 10" stroke="#45137D" stroke-width="2.2" fill="none"
                      stroke-linecap="round" />
                  </svg>
                  {{ $t('testimonials.verified') }}
                </div>
              </div>
            </div>
          </div>
        </transition>

        <!-- ── Controls ─────────────────────────────────────── -->
        <div class="controls">
          <button class="ctrl-btn" @click="prevTestimonial" aria-label="Previous testimonial">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
              stroke-linecap="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <div class="dots" role="tablist" :aria-label="$t('testimonials.label')">
            <button v-for="(_, i) in dotCount" :key="i" class="dot" :class="{ active: i === activeDot }" role="tab"
              :aria-selected="i === activeDot" :aria-label="`Go to testimonial group ${i + 1}`"
              @click="goToSlide(i)"></button>
          </div>

          <button class="ctrl-btn" @click="nextTestimonial" aria-label="Next testimonial">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
              stroke-linecap="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>

        <!-- Progress bar under controls -->
        <div class="progress-track" aria-hidden="true">
          <div class="progress-fill" :style="{ width: progressWidth }"></div>
        </div>
      </div>

      <!-- ── Bottom CTA strip ───────────────────────────────── -->
      <div class="cta-strip" data-aos="fade-up" data-aos-delay="120">
        <p class="cta-strip-text">{{ $t('testimonials.ctaText') }}</p>
        <a href="#contact" class="cta-strip-btn" @click.prevent="scrollTo('contact')">
          {{ $t('testimonials.ctaBtn') }}
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
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import AOS from 'aos'
import 'aos/dist/aos.css'

const { t } = useI18n()

/* ── Testimonial data ────────────────────────────────────── */
const testimonials = [
  { text: 'testimonials.items.1.text', name: 'testimonials.items.1.name', role: 'testimonials.items.1.role', rating: 5 },
  { text: 'testimonials.items.2.text', name: 'testimonials.items.2.name', role: 'testimonials.items.2.role', rating: 5 },
  { text: 'testimonials.items.3.text', name: 'testimonials.items.3.name', role: 'testimonials.items.3.role', rating: 5 },
  { text: 'testimonials.items.4.text', name: 'testimonials.items.4.name', role: 'testimonials.items.4.role', rating: 5 },
  { text: 'testimonials.items.5.text', name: 'testimonials.items.5.name', role: 'testimonials.items.5.role', rating: 5 },
  { text: 'testimonials.items.6.text', name: 'testimonials.items.6.name', role: 'testimonials.items.6.role', rating: 5 },
  { text: 'testimonials.items.7.text', name: 'testimonials.items.7.name', role: 'testimonials.items.7.role', rating: 5 },
  { text: 'testimonials.items.8.text', name: 'testimonials.items.8.name', role: 'testimonials.items.8.role', rating: 5 },
]

/* ── Summary stats ───────────────────────────────────────── */
const summaryStats = [
  { value: '200+', label: 'testimonials.stat1' },
  { value: '5.0★', label: 'testimonials.stat2' },
  { value: '98%', label: 'testimonials.stat3' },
  { value: '100%', label: 'testimonials.stat4' },
]

/* ── Responsive per-page ─────────────────────────────────── */
/*
  perPage drives how many cards show per carousel frame.
  We fix it at 2 for SSR safety; on mobile the CSS grid
  already collapses to 1 column so only one is visible anyway.
*/
const perPage = 2

const currentIndex = ref(0)
let interval = null

/* Visible slice */
const visibleTestimonials = computed(() => {
  const result = []
  for (let i = 0; i < perPage; i++) {
    result.push(testimonials[(currentIndex.value + i) % testimonials.length])
  }
  return result
})

/* Dots — one per page-group */
const dotCount = computed(() => Math.ceil(testimonials.length / perPage))
const activeDot = computed(() => Math.floor(currentIndex.value / perPage))

/* Progress bar width (0 → 100% across full loop) */
const progressWidth = computed(() => {
  const total = testimonials.length
  const pct = ((currentIndex.value + perPage) / total) * 100
  return `${Math.min(pct, 100)}%`
})

/* ── Navigation ──────────────────────────────────────────── */
const nextTestimonial = () => {
  currentIndex.value = (currentIndex.value + perPage) % testimonials.length
}

const prevTestimonial = () => {
  currentIndex.value =
    (currentIndex.value - perPage + testimonials.length) % testimonials.length
}

const goToSlide = (i) => {
  currentIndex.value = i * perPage
  restartAutoplay()
}

/* ── Autoplay ────────────────────────────────────────────── */
const startAutoplay = () => {
  if (interval) clearInterval(interval)
  interval = setInterval(nextTestimonial, 5500)
}
const pauseAutoplay = () => { if (interval) { clearInterval(interval); interval = null } }
const resumeAutoplay = () => startAutoplay()
const restartAutoplay = () => { pauseAutoplay(); startAutoplay() }

/* ── Helpers ─────────────────────────────────────────────── */
const getInitials = (name) => {
  if (!name) return ''
  return name.split(' ').map(n => n[0]).slice(0, 2).join('').toUpperCase()
}

const scrollTo = (id) => {
  const el = document.getElementById(id)
  if (!el) return
  window.scrollTo({
    top: el.getBoundingClientRect().top + window.pageYOffset - 100,
    behavior: 'smooth',
  })
}

/* ── Keyboard navigation ─────────────────────────────────── */
const handleKey = (e) => {
  if (e.key === 'ArrowLeft') { prevTestimonial(); restartAutoplay() }
  if (e.key === 'ArrowRight') { nextTestimonial(); restartAutoplay() }
}

onMounted(() => {
  AOS.init({ once: true, duration: 860, easing: 'ease-out-cubic', offset: 50 })
  startAutoplay()
  window.addEventListener('keydown', handleKey)
})

onUnmounted(() => {
  pauseAutoplay()
  window.removeEventListener('keydown', handleKey)
})
</script>

<style scoped>
/*
  All colors come from main.css :root tokens — nothing redefined here.
  SVG fill/stroke attributes that cannot read CSS vars use hardcoded hex
  matching the token exactly:
    #CC933A  = --color-gold
    #e0aa54  = --color-gold-bright
    #45137D  = --color-primary
    #320e5c  = --color-primary-dark
    #1A0535  = --color-primary-deep
*/

/* ─── Section ───────────────────────────────────────────── */
.testimonial-section {
  position: relative;
  background: var(--color-bg-soft);
  padding: 100px 40px 110px;
  overflow: hidden;
}

/* ─── Decorative blobs ──────────────────────────────────── */
.blob {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  z-index: 0;
}

.blob--tr {
  top: -160px;
  right: -160px;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(204, 147, 58, 0.09) 0%, transparent 70%);
}

.blob--bl {
  bottom: -160px;
  left: -160px;
  width: 460px;
  height: 460px;
  background: radial-gradient(circle, rgba(69, 19, 125, 0.07) 0%, transparent 70%);
}

/* ─── Container ─────────────────────────────────────────── */
.testimonial-container {
  position: relative;
  z-index: 1;
  max-width: 1100px;
  margin: 0 auto;
}

/* ─── Header ────────────────────────────────────────────── */
.testimonial-header {
  text-align: center;
  margin-bottom: 44px;
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
  margin-bottom: 12px;
}

.section-subtitle {
  font-family: var(--font-body);
  font-size: 1rem;
  color: var(--color-text-muted);
  max-width: 500px;
  margin: 0 auto;
  line-height: 1.75;
}

/* ─── Summary stats bar ─────────────────────────────────── */
.stats-bar {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0;
  background: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: 22px 32px;
  margin-bottom: 48px;
  box-shadow: var(--shadow-sm);
  flex-wrap: wrap;
}

.stats-bar-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3px;
  padding: 0 28px;
  border-right: 1px solid var(--color-border);
  text-align: center;
}

.stats-bar-item:last-of-type {
  border-right: 1px solid var(--color-border);
  /* before rating chip */
}

.stats-bar-value {
  font-family: var(--font-display);
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--color-primary);
  line-height: 1;
}

.stats-bar-label {
  font-family: var(--font-body);
  font-size: 0.68rem;
  color: var(--color-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

/* Overall rating chip */
.rating-chip {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 28px;
}

.rating-stars {
  display: flex;
  gap: 2px;
}

.rating-score {
  font-family: var(--font-display);
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--color-gold);
  line-height: 1;
}

.rating-label {
  font-family: var(--font-body);
  font-size: 0.72rem;
  color: var(--color-text-muted);
  line-height: 1.3;
  max-width: 60px;
}

/* ─── Carousel ──────────────────────────────────────────── */
.carousel {
  position: relative;
}

/* ─── 2-column testimonial grid ─────────────────────────── */
.testimonial-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin-bottom: 32px;
}

/* ─── Card ──────────────────────────────────────────────── */
.testimonial-card {
  background: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: 32px 30px 26px;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 18px;
  box-shadow: var(--shadow-sm);
  transition: transform 0.32s ease, box-shadow 0.32s ease, border-color 0.32s ease;
}

/* Gold top bar — animates in on hover */
.testimonial-card::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(to right,
      var(--color-gold-bright),
      var(--color-gold),
      transparent);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.38s ease;
}

/* Warm shimmer fill */
.testimonial-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(145deg,
      rgba(204, 147, 58, 0.04) 0%,
      transparent 55%);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.32s ease;
}

.testimonial-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-lg);
  border-color: rgba(204, 147, 58, 0.30);
}

.testimonial-card:hover::after {
  transform: scaleX(1);
}

.testimonial-card:hover::before {
  opacity: 1;
}

/* ─── Card head (quote icon + stars) ────────────────────── */
.card-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* ─── Quote icon ─────────────────────────────────────────── */
.quote-icon {
  width: 48px;
  height: 48px;
  border-radius: var(--radius-md);
  background: linear-gradient(135deg,
      var(--color-gold-light),
      rgba(204, 147, 58, 0.05));
  border: 1px solid rgba(204, 147, 58, 0.18);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: transform 0.25s ease;
}

.testimonial-card:hover .quote-icon {
  transform: scale(1.08) rotate(-4deg);
}

/* ─── Stars ──────────────────────────────────────────────── */
.stars {
  display: flex;
  gap: 2px;
}

/* ─── Quote text ─────────────────────────────────────────── */
.testimonial-text {
  font-family: var(--font-body);
  font-size: 0.96rem;
  font-weight: 300;
  line-height: 1.82;
  color: var(--color-text-muted);
  flex: 1;
  font-style: italic;
}

/* ─── Footer ─────────────────────────────────────────────── */
.testimonial-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  border-top: 1px solid var(--color-border);
  padding-top: 18px;
  flex-wrap: wrap;
}

/* ─── Author info ─────────────────────────────────────────── */
.author-info {
  display: flex;
  align-items: center;
  gap: 12px;
}

.author-avatar {
  width: 46px;
  height: 46px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--color-primary), var(--color-primary-bright));
  color: #ffffff;
  font-family: var(--font-body);
  font-size: 0.85rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  box-shadow: 0 6px 18px rgba(69, 19, 125, 0.24);
  letter-spacing: 0.04em;
}

.author-meta {
  display: flex;
  flex-direction: column;
  gap: 1px;
}

.author-name {
  font-family: var(--font-body);
  font-size: 0.92rem;
  font-weight: 700;
  color: var(--color-primary);
  margin: 0;
  line-height: 1.25;
}

.author-role {
  font-family: var(--font-body);
  font-size: 0.78rem;
  color: var(--color-text-muted);
  margin: 0;
  line-height: 1.3;
}

/* ─── Verified badge ─────────────────────────────────────── */
.verified-badge {
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
  white-space: nowrap;
}

/* ─── Controls ───────────────────────────────────────────── */
.controls {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 18px;
  margin-bottom: 16px;
}

.ctrl-btn {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 1.5px solid var(--color-border);
  background: var(--color-bg);
  color: var(--color-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition:
    background 0.22s ease,
    border-color 0.22s ease,
    transform 0.22s ease,
    color 0.22s ease,
    box-shadow 0.22s ease;
  box-shadow: var(--shadow-sm);
}

.ctrl-btn:hover {
  background: linear-gradient(135deg, var(--color-primary), var(--color-primary-bright));
  border-color: transparent;
  color: #ffffff;
  transform: scale(1.08);
  box-shadow: var(--shadow-md);
}

/* ─── Dots ───────────────────────────────────────────────── */
.dots {
  display: flex;
  gap: 8px;
  align-items: center;
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--color-border);
  cursor: pointer;
  border: none;
  padding: 0;
  transition: background 0.22s ease, transform 0.22s ease, width 0.22s ease;
}

.dot.active {
  background: var(--color-gold);
  transform: scale(1.25);
  /* Pill shape for active dot */
  width: 22px;
  border-radius: 4px;
  box-shadow: 0 0 8px rgba(204, 147, 58, 0.45);
}

/* ─── Progress bar ───────────────────────────────────────── */
.progress-track {
  height: 2px;
  background: var(--color-border);
  border-radius: 2px;
  overflow: hidden;
  max-width: 200px;
  margin: 0 auto;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(to right, var(--color-gold-bright), var(--color-gold));
  border-radius: 2px;
  transition: width 0.5s ease;
}

/* ─── Slide transition ───────────────────────────────────── */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: opacity 0.38s ease, transform 0.38s ease;
}

.slide-fade-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.slide-fade-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.slide-fade-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-16px);
}

/* ─── Bottom CTA strip ───────────────────────────────────── */
.cta-strip {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  margin-top: 52px;
  background: linear-gradient(135deg, var(--color-primary), var(--color-primary-bright));
  border-radius: var(--radius-lg);
  padding: 28px 36px;
  flex-wrap: wrap;
  box-shadow: var(--shadow-md);
}

.cta-strip-text {
  font-family: var(--font-display);
  font-size: clamp(1rem, 2vw, 1.25rem);
  font-weight: 700;
  font-style: italic;
  color: #ffffff;
  margin: 0;
  max-width: 480px;
  line-height: 1.5;
}

.cta-strip-btn {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  background: linear-gradient(135deg, var(--color-gold-bright), var(--color-gold));
  color: var(--color-primary-deep);
  font-family: var(--font-body);
  font-size: 0.9rem;
  font-weight: 700;
  padding: 14px 30px;
  border-radius: 50px;
  text-decoration: none;
  white-space: nowrap;
  box-shadow:
    0 8px 24px rgba(204, 147, 58, 0.40),
    inset 0 1px 0 rgba(255, 255, 255, 0.20);
  transition: transform 0.22s ease, box-shadow 0.22s ease;
}

.cta-strip-btn:hover {
  transform: translateY(-3px);
  box-shadow:
    0 14px 32px rgba(204, 147, 58, 0.50),
    inset 0 1px 0 rgba(255, 255, 255, 0.20);
}

.cta-strip-btn svg {
  transition: transform 0.2s ease;
}

.cta-strip-btn:hover svg {
  transform: translateX(4px);
}

/* ─── Reduced motion ────────────────────────────────────── */
@media (prefers-reduced-motion: reduce) {

  .testimonial-card,
  .testimonial-card::after,
  .testimonial-card::before,
  .quote-icon,
  .ctrl-btn,
  .dot,
  .progress-fill,
  .cta-strip-btn {
    transition: none !important;
    animation: none !important;
  }
}

/* ─── Tablet ─────────────────────────────────────────────── */
@media (max-width: 900px) {
  .stats-bar {
    gap: 16px 0;
    padding: 18px 20px;
  }

  .stats-bar-item {
    flex: 0 0 50%;
    padding: 10px 0;
    border-right: none;
    border-bottom: 1px solid var(--color-border);
  }

  .stats-bar-item:nth-child(odd) {
    border-right: 1px solid var(--color-border);
  }

  .stats-bar-item:last-of-type {
    border-bottom: 1px solid var(--color-border);
  }

  .rating-chip {
    flex: 0 0 100%;
    justify-content: center;
    padding: 10px 0 0;
    border-right: none;
  }
}

/* ─── Mobile ─────────────────────────────────────────────── */
@media (max-width: 768px) {
  .testimonial-section {
    padding: 64px 20px 80px;
  }

  .testimonial-grid {
    grid-template-columns: 1fr;
  }

  .testimonial-card {
    padding: 26px 22px 22px;
  }

  .cta-strip {
    flex-direction: column;
    align-items: flex-start;
    padding: 24px 22px;
  }

  .cta-strip-btn {
    width: 100%;
    justify-content: center;
  }
}
</style>