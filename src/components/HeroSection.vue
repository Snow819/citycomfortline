<template>
  <section class="hero-section" data-aos="fade-in">
    <!-- Video Background -->
    <div class="video-background">
      <video v-if="videoSrc" autoplay muted loop playsinline class="hero-video">
        <source :src="videoSrc" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div v-else class="fallback-background"></div>
      <div class="video-overlay"></div>
    </div>

    <!-- Hero Content -->
    <div class="hero-content" data-aos="fade-up" data-aos-delay="300">
      <img src="@/assets/logo.png" alt="City Comfort Line Logo" class="hero-logo" />

      <div class="text-container">
        <h1
          v-for="(line, index) in textLines"
          :key="index"
          class="hero-text"
          :style="{ animationDelay: `${0.2 + index * 0.15}s` }"
        >
          {{ t(line) }}
        </h1>
      </div>

      <p class="hero-subtitle" data-aos="fade-up" data-aos-delay="500">
        {{ t('hero.subtitle') }}
      </p>

      <div class="cta-buttons" data-aos="zoom-in" data-aos-delay="700">
        <button
          v-for="(button, index) in buttons"
          :key="index"
          class="cta-btn"
          :class="button.class"
          @click="button.action"
        >
          <span class="btn-text">{{ t(button.text) }}</span>
        </button>
      </div>

      <!-- Scroll Indicator -->
      <div class="scroll-indicator" @click="scrollDown" data-aos="fade-up" data-aos-delay="900">
        <span class="scroll-text">{{ t('hero.scroll') }}</span>
        <div class="scroll-arrow">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 5V19M12 19L5 12M12 19L19 12"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { useI18n } from 'vue-i18n'
import AOS from 'aos'
import 'aos/dist/aos.css'
import heroVideo from '@/assets/moving.MOV'

export default {
  name: 'HeroSection',
  setup() {
    const { t, locale } = useI18n()
    return { t, locale }
  },
  data() {
    return {
      videoSrc: heroVideo,
      textLines: ['hero.title1', 'hero.title2', 'hero.title3'],
      buttons: [
        { text: 'hero.button1', class: 'primary', action: () => console.log('Navigate to services') },
        { text: 'hero.button2', class: 'secondary', action: () => console.log('Navigate to contact') },
      ],
    }
  },
  mounted() {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    })
  },
  methods: {
    scrollDown() {
      window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
    },
  },
}
</script>

<style scoped>
.hero-section {
  position: relative;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  background-color: #2f2f2f;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Backgrounds */
.video-background {
  position: absolute;
  inset: 0;
  z-index: 1;
}

.hero-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.35;
  filter: grayscale(60%);
}

.fallback-background {
  width: 100%;
  height: 100%;
  background: #3a3a3a;
}

.video-overlay {
  position: absolute;
  inset: 0;
  background: rgba(25, 25, 25, 0.2);
}

/* Content */
.hero-content {
  margin-top: 5%;
  position: relative;
  z-index: 10;
  text-align: center;
  color: #fff;
  padding: 2rem;
}

.hero-logo {
  width: 160px;
  margin-bottom: 1.5rem;
  filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.3));
}

/* Text */
.hero-text {
  font-size: clamp(2rem, 3vw, 4.5rem);
  font-weight: 800;
  color: #e8c86f; 
  text-transform: uppercase;
  letter-spacing: 1px;
  margin: 0.5rem 0;
}

/* Subtitle */
.hero-subtitle {
  font-size: 1.2rem;
  max-width: 700px;
  margin: 1.5rem auto;
  color: #dcdcdc;
}

/* Buttons */
.cta-buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.cta-btn {
  padding: 1rem 2.5rem;
  border-radius: 50px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.4s ease;
  background: transparent;
  color: #fff;
  position: relative;
  overflow: hidden;
}

.cta-btn.primary {
  background: linear-gradient(135deg, #e8c86f, #bfa043);
  color: #1a1a1a;
}

.cta-btn.secondary {
  border: 2px solid #e8c86f;
  color: #e8c86f;
  background: transparent;
}

.cta-btn:hover {
  transform: translateY(-3px) scale(1.03);
  box-shadow: 0 0 25px rgba(232, 200, 111, 0.4);
}

.cta-btn.primary:hover {
  background: linear-gradient(135deg, #f1d87a, #c3a84e);
  color: #000;
}

.cta-btn.secondary:hover {
  background: #e8c86f;
  color: #1a1a1a;
}

/* Scroll indicator */
.scroll-indicator {
  margin-top: 3rem;
  cursor: pointer;
}

.scroll-text {
  font-size: 0.75rem;
  color: #dcdcdc;
  margin-bottom: 0.5rem;
}

.scroll-arrow svg {
  color: #e8c86f;
  animation: arrowBounce 2s infinite;
}

@keyframes arrowBounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(6px);
  }
}

/* Responsive */
@media (max-width: 768px) {
  .hero-logo {
    width: 120px;
  }

  .hero-text {
    font-size: clamp(1.8rem, 8vw, 3.5rem);
  }

  .hero-subtitle {
    font-size: 1rem;
    padding: 0 1rem;
  }

  .cta-buttons {
    flex-direction: column;
    align-items: center;
  }

  .cta-btn {
    width: 100%;
    max-width: 500px;
  }
}
</style>
