<template>
  <section class="hero-section" data-aos="fade-in">
    <!-- Video Background -->
    <div class="video-background">
      <!-- Poster image for instant display while video loads -->
      <video 
        v-if="videoSrc" 
        ref="heroVideo"
        autoplay 
        muted 
        loop 
        playsinline 
        preload="auto"
        class="hero-video"
        :poster="posterSrc"
      >
        <source :src="videoSrc" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div v-else class="fallback-background"></div>
      <!-- Dark overlay -->
      <div class="video-overlay"></div>
    </div>

    <!-- Hero Content -->
    <div class="hero-content" data-aos="fade-up" data-aos-delay="300">
      <img src="@/assets/Logo_light.png" alt="City Comfort Line Logo" class="hero-logo" />

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
import heroVideo from '@/assets/moving.mp4'
import heroPoster from '@/assets/Logo_dark.png'

export default {
  name: 'HeroSection',
  setup() {
    const { t, locale } = useI18n()
    return { t, locale }
  },
  data() {
    return {
      videoSrc: heroVideo,
      posterSrc: heroPoster,
      textLines: ['hero.title1','hero.title3'],
      buttons: [
        { 
          text: 'hero.button1', 
          class: 'primary', 
          action: () => this.scrollToSection('services')
        },
        { 
          text: 'hero.button2', 
          class: 'secondary', 
          action: () => this.scrollToSection('get-quote')
        },
      ],
    }
  },
  mounted() {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    })
    
    // Preload video for faster display
    if (this.$refs.heroVideo) {
      this.$refs.heroVideo.load()
    }
  },
  methods: {
    scrollDown() {
      window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
    },
    scrollToSection(sectionId) {
      const element = document.getElementById(sectionId)
      if (element) {
        const offset = 100 
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - offset

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
      }
    }
  },
}
</script>

<style scoped>
.hero-section {
  position: relative;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  background-color: #1a1a1a;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Backgrounds */
.video-background {
  position: absolute;
  inset: 0;
  z-index: 1;
  background-color: #1a1a1a; /* Fallback while loading */
}

.hero-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.9; /* Increased from 0.35 for sharper HD look */
  filter: grayscale(0%) brightness(0.9) contrast(1.1); /* Removed grayscale, enhanced contrast */
  image-rendering: -webkit-optimize-contrast;
  image-rendering: crisp-edges;
}

.fallback-background {
  width: 100%;
  height: 100%;
  background: #1a1a1a;
}

/* Dark overlay */
.video-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.5) 0%,
    rgba(0, 0, 0, 0.6) 50%,
    rgba(0, 0, 0, 0.7) 100%
  );
  pointer-events: none;
}

/* Content */
.hero-content {
  margin-top: 5%;
  position: relative;
  z-index: 10;
  text-align: center;
  color: #fff;
  padding: 80px 40px;
}

.hero-logo {
  width: 200px;
  height: 200px;
  margin-bottom: 15px;
  filter: drop-shadow(0 8px 16px rgba(0, 0, 0, 0.6));
}

/* Text */
.hero-text {
  font-size: clamp(2rem, 3vw, 4.5rem);
  font-weight: 800;
  color: #Ff9a00; 
  text-transform: uppercase;
  letter-spacing: 1px;
  margin: 0.5rem 0;
  text-shadow: 2px 4px 8px rgba(0, 0, 0, 0.8);
}

/* Subtitle */
.hero-subtitle {
  font-size: 1.2rem;
  max-width: 700px;
  margin: 1.5rem auto;
  color: #f5f5f5;
  text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.7);
}

/* Buttons */
.cta-buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 2.5rem;
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
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
}

.cta-btn.primary {
  background: linear-gradient(135deg, #Ff9a00, #ecc140);
  color: #1a1a1a;
}

.cta-btn.secondary {
  border: 2px solid #Ff9a00;
  color: #Ff9a00;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
}

.cta-btn:hover {
  transform: translateY(-3px) scale(1.03);
  box-shadow: 0 8px 30px rgba(255, 154, 0, 0.5);
}

.cta-btn.primary:hover {
  background: linear-gradient(135deg, #f1d87a, #c3a84e);
  color: #000;
}

.cta-btn.secondary:hover {
  background: #Ff9a00;
  color: #1a1a1a;
  border-color: #Ff9a00;
}

/* Scroll indicator */
.scroll-indicator {
  margin-top: 3rem;
  cursor: pointer;
  display: inline-block;
}

.scroll-text {
  display: block;
  font-size: 0.85rem;
  color: #f5f5f5;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.7);
}

.scroll-arrow {
  display: flex;
  justify-content: center;
}

.scroll-arrow svg {
  color: #Ff9a00;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.5));
  animation: arrowBounce 2s infinite;
}

@keyframes arrowBounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(8px);
  }
}

/* Responsive */
@media (max-width: 768px) {
  .hero-content {
    margin-top: 50%;
    padding: 60px 20px;
  }

  .hero-logo {
    width: 140px;
    height: 140px;
  }

  .hero-text {
    font-size: clamp(1.5rem, 5vw, 2.5rem);
  }

  .hero-subtitle {
    font-size: 1rem;
    padding: 0 1rem;
  }

  .cta-buttons {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .cta-btn {
    width: 100%;
    max-width: 300px;
  }
}

/* Video loading optimization */
@media (prefers-reduced-motion: reduce) {
  .hero-video {
    animation: none;
  }
}
</style>