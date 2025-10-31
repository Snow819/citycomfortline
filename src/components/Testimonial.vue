<template>
  <section
    id="testimonials"
    class="testimonial-section"
    data-aos="fade-up"
    data-aos-duration="1000"
  >
    <h2 class="section-title">{{ $t('testimonials.title') }}</h2>

    <div
      class="carousel"
      @mouseenter="pauseAutoplay"
      @mouseleave="resumeAutoplay"
    >
      <transition name="fade" mode="out-in">
        <div :key="currentIndex" class="testimonial-grid">
          <div
            v-for="(testimonial, index) in visibleTestimonials"
            :key="`testimonial-${currentIndex}-${index}`"
            class="testimonial-card"
            data-aos="zoom-in"
            data-aos-duration="800"
            :data-aos-delay="index * 100"
          >
            <p class="testimonial-text">
              "{{ $t(testimonial.text) }}"
            </p>

            <div class="testimonial-author">
              <div>
                <h4>{{ $t(testimonial.name) }}</h4>
                <p>{{ $t(testimonial.role) }}</p>
                <div class="stars">
                  <span
                    v-for="n in 5"
                    :key="n"
                    :class="n <= testimonial.rating ? 'filled-star' : 'empty-star'"
                  >
                    ★
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>

      <div class="controls">
        <button @click="prevTestimonial" aria-label="Previous testimonials">‹</button>
        <button @click="nextTestimonial" aria-label="Next testimonials">›</button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue"
import AOS from "aos"
import "aos/dist/aos.css"

const testimonials = [
  { text: "testimonials.items.1.text", name: "testimonials.items.1.name", role: "testimonials.items.1.role", rating: 5 },
  { text: "testimonials.items.2.text", name: "testimonials.items.2.name", role: "testimonials.items.2.role", rating: 5 },
  { text: "testimonials.items.3.text", name: "testimonials.items.3.name", role: "testimonials.items.3.role", rating: 4 },
  { text: "testimonials.items.4.text", name: "testimonials.items.4.name", role: "testimonials.items.4.role", rating: 5 },
  { text: "testimonials.items.5.text", name: "testimonials.items.5.name", role: "testimonials.items.5.role", rating: 4 },
  { text: "testimonials.items.6.text", name: "testimonials.items.6.name", role: "testimonials.items.6.role", rating: 5 },
]

const currentIndex = ref(0)
let interval = null

const visibleTestimonials = computed(() => {
  const first = testimonials[currentIndex.value]
  const second = testimonials[(currentIndex.value + 1) % testimonials.length]
  return [first, second]
})

const nextTestimonial = () => {
  currentIndex.value = (currentIndex.value + 2) % testimonials.length
}

const prevTestimonial = () => {
  currentIndex.value = (currentIndex.value - 2 + testimonials.length) % testimonials.length
}

const startAutoplay = () => {
  if (interval) clearInterval(interval)
  interval = setInterval(nextTestimonial, 5000)
}

const pauseAutoplay = () => {
  if (interval) {
    clearInterval(interval)
    interval = null
  }
}

const resumeAutoplay = () => {
  startAutoplay()
}

const handleKey = (e) => {
  if (e.key === "ArrowLeft") {
    prevTestimonial()
    pauseAutoplay()
    resumeAutoplay()
  }
  if (e.key === "ArrowRight") {
    nextTestimonial()
    pauseAutoplay()
    resumeAutoplay()
  }
}

onMounted(() => {
  AOS.init({
    once: true,
    duration: 1000
  })
  startAutoplay()
  window.addEventListener("keydown", handleKey)
})

onUnmounted(() => {
  pauseAutoplay()
  window.removeEventListener("keydown", handleKey)
})
</script>

<style scoped>
.testimonial-section {
  text-align: center;
  padding: 80px 20px;
  background: #e3fae4;
  position: relative;
  overflow: hidden;
}

.section-title {
  font-size: 2rem;
  font-weight: 700;
  color: #444;
  margin-bottom: 40px;
}

.carousel {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
}

.testimonial-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  padding: 0 20px;
}

.testimonial-card {
  background: linear-gradient(135deg, #E8F5E9, #A5D6A7);
  padding: 30px 25px;
  border-radius: 20px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.4s ease, box-shadow 0.4s ease;
}

.testimonial-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
}

.testimonial-text {
  font-size: 1.1rem;
  font-style: italic;
  line-height: 1.7;
  color: #333;
  margin-bottom: 25px;
  min-height: 100px;
}

.testimonial-author {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  flex-direction: column;
}

.testimonial-author h4 {
  font-size: 1.1rem;
  color: #212121;
  margin: 0 0 5px 0;
}

.testimonial-author p {
  margin: 0 0 8px 0;
  font-size: 0.9rem;
  color: #666;
}

.stars {
  margin-top: 5px;
  letter-spacing: 2px;
}

.stars span {
  font-size: 1.2rem;
}

.filled-star {
  color: #FFD700;
}

.empty-star {
  color: #ddd;
}

.controls {
  margin-top: 30px;
}

.controls button {
  background: #E8F5E9;
  color: #212121;
  border: none;
  margin: 0 8px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 1.5rem;
  transition: all 0.3s ease;
  font-weight: bold;
}

.controls button:hover {
  background: #A5D6A7;
  transform: scale(1.1);
}

.controls button:active {
  transform: scale(0.95);
}

/* Animations */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.6s, transform 0.6s;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

/* Responsive */
@media (max-width: 768px) {
  .testimonial-section {
    padding: 60px 20px;
  }

  .testimonial-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .testimonial-card {
    padding: 25px 15px;
  }

  .testimonial-text {
    font-size: 1rem;
    min-height: auto;
  }

  .section-title {
    font-size: 1.75rem;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .carousel {
    max-width: 900px;
  }

  .testimonial-grid {
    gap: 25px;
  }
}
</style>