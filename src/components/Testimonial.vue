<template>
  <section id="testimonials" class="testimonial-section">
    <div class="testimonial-container">

      <!-- Header -->
      <div class="testimonial-header" data-aos="fade-up">
        <div class="label-row">
          <span class="label-line"></span>
          <span class="section-label">{{ $t('testimonials.label') }}</span>
          <span class="label-line"></span>
        </div>
        <h2 class="section-title">{{ $t('testimonials.title') }}</h2>
      </div>

      <!-- Carousel -->
      <div class="carousel" @mouseenter="pauseAutoplay" @mouseleave="resumeAutoplay">
        <transition name="slide-fade" mode="out-in">
          <div :key="currentIndex" class="testimonial-grid">
            <div
              v-for="(testimonial, index) in visibleTestimonials"
              :key="`t-${currentIndex}-${index}`"
              class="testimonial-card"
            >
              <!-- Quote icon -->
              <div class="quote-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="#C9A84C">
                  <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z"/>
                </svg>
              </div>

              <p class="testimonial-text">{{ $t(testimonial.text) }}</p>

              <div class="testimonial-footer">
                <div class="stars">
                  <span v-for="n in 5" :key="n" :class="n <= testimonial.rating ? 'star filled' : 'star'">★</span>
                </div>
                <div class="author-info">
                  <div class="author-avatar">{{ getInitials($t(testimonial.name)) }}</div>
                  <div>
                    <h4 class="author-name">{{ $t(testimonial.name) }}</h4>
                    <p class="author-role">{{ $t(testimonial.role) }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>

        <!-- Controls -->
        <div class="controls">
          <button @click="prevTestimonial" aria-label="Previous">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="15 18 9 12 15 6"/></svg>
          </button>

          <div class="dots">
            <span
              v-for="(_, i) in dotCount"
              :key="i"
              class="dot"
              :class="{ active: i === activeDot }"
              @click="goToSlide(i)"
            ></span>
          </div>

          <button @click="nextTestimonial" aria-label="Next">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="9 18 15 12 9 6"/></svg>
          </button>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

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

const currentIndex = ref(0)
let interval = null

const visibleTestimonials = computed(() => [
  testimonials[currentIndex.value],
  testimonials[(currentIndex.value + 1) % testimonials.length],
])

const dotCount = computed(() => Math.ceil(testimonials.length / 2))
const activeDot = computed(() => Math.floor(currentIndex.value / 2))

const nextTestimonial = () => {
  currentIndex.value = (currentIndex.value + 2) % testimonials.length
}

const prevTestimonial = () => {
  currentIndex.value = (currentIndex.value - 2 + testimonials.length) % testimonials.length
}

const goToSlide = (i) => { currentIndex.value = i * 2 }

const startAutoplay = () => {
  if (interval) clearInterval(interval)
  interval = setInterval(nextTestimonial, 5000)
}

const pauseAutoplay = () => { if (interval) { clearInterval(interval); interval = null } }
const resumeAutoplay = () => { startAutoplay() }

const getInitials = (name) => {
  if (!name) return ''
  return name.split(' ').map(n => n[0]).slice(0, 2).join('').toUpperCase()
}

const handleKey = (e) => {
  if (e.key === 'ArrowLeft')  { prevTestimonial(); pauseAutoplay(); resumeAutoplay() }
  if (e.key === 'ArrowRight') { nextTestimonial(); pauseAutoplay(); resumeAutoplay() }
}

onMounted(() => {
  AOS.init({ once: true, duration: 900 })
  startAutoplay()
  window.addEventListener('keydown', handleKey)
})

onUnmounted(() => {
  pauseAutoplay()
  window.removeEventListener('keydown', handleKey)
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lora:wght@600;700&family=DM+Sans:wght@300;400;500;600&display=swap');

/* ─── Section ───────────────────────────────────────────── */
.testimonial-section {
  background: #ffffff;
  padding: 90px 40px;
  overflow: hidden;
}

.testimonial-container {
  max-width: 1100px;
  margin: 0 auto;
}

/* ─── Header ────────────────────────────────────────────── */
.testimonial-header {
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
  background: #C9A84C;
}

.section-label {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #C9A84C;
}

.section-title {
  font-family: 'Lora', Georgia, serif;
  font-size: clamp(1.9rem, 3.2vw, 2.6rem);
  font-weight: 700;
  color: #2D1B69;
}

/* ─── Grid ──────────────────────────────────────────────── */
.testimonial-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
}

/* ─── Card ──────────────────────────────────────────────── */
.testimonial-card {
  background: #faf9ff;
  border: 1px solid rgba(45,27,105,0.08);
  border-radius: 18px;
  padding: 36px 32px;
  display: flex;
  flex-direction: column;
  gap: 22px;
  transition: box-shadow 0.25s ease, transform 0.25s ease;
}

.testimonial-card:hover {
  box-shadow: 0 12px 36px rgba(45,27,105,0.1);
  transform: translateY(-3px);
}

/* Quote icon */
.quote-icon {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: rgba(201,168,76,0.1);
  display: flex;
  align-items: center;
  justify-content: center;
}

/* ─── Text ──────────────────────────────────────────────── */
.testimonial-text {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.975rem;
  font-weight: 300;
  line-height: 1.8;
  color: #3a3a5a;
  flex: 1;
}

/* ─── Footer ────────────────────────────────────────────── */
.testimonial-footer {
  display: flex;
  flex-direction: column;
  gap: 14px;
  border-top: 1px solid rgba(45,27,105,0.08);
  padding-top: 18px;
}

.stars {
  display: flex;
  gap: 2px;
}

.star {
  font-size: 1rem;
  color: rgba(45,27,105,0.15);
}

.star.filled {
  color: #C9A84C;
}

.author-info {
  display: flex;
  align-items: center;
  gap: 12px;
}

.author-avatar {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: #2D1B69;
  color: #ffffff;
  font-family: 'Lora', Georgia, serif;
  font-size: 0.85rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.author-name {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.95rem;
  font-weight: 600;
  color: #2D1B69;
  margin: 0;
}

.author-role {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.8rem;
  color: #8a8aaa;
  margin: 0;
}

/* ─── Controls ──────────────────────────────────────────── */
.controls {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 40px;
}

.controls button {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 1.5px solid rgba(45,27,105,0.12);
  background: #ffffff;
  color: #2D1B69;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.2s ease, border-color 0.2s ease, transform 0.2s ease, color 0.2s ease;
}

.controls button:hover {
  background: #2D1B69;
  border-color: #2D1B69;
  color: #ffffff;
  transform: scale(1.08);
}

/* ─── Dots ──────────────────────────────────────────────── */
.dots {
  display: flex;
  gap: 8px;
  align-items: center;
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(45,27,105,0.15);
  cursor: pointer;
  transition: background 0.2s ease, transform 0.2s ease;
}

.dot.active {
  background: #C9A84C;
  transform: scale(1.3);
}

/* ─── Transition ────────────────────────────────────────── */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: opacity 0.4s ease, transform 0.4s ease;
}

.slide-fade-enter-from { opacity: 0; transform: translateY(16px); }
.slide-fade-leave-to   { opacity: 0; transform: translateY(-16px); }

/* ─── Responsive ────────────────────────────────────────── */
@media (max-width: 768px) {
  .testimonial-section { padding: 64px 20px; }

  .testimonial-grid {
    grid-template-columns: 1fr;
  }

  .testimonial-card {
    padding: 28px 22px;
  }
}
</style>