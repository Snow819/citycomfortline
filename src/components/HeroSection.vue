<template>
  <section class="hero-section">
    <!-- Video Background -->
    <div class="video-background">
      <video v-if="videoSrc" autoplay muted loop playsinline class="hero-video">
        <source :src="videoSrc" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <!-- Gradient fallback -->
      <div v-else class="fallback-background"></div>
      <div class="video-overlay"></div>
    </div>

    <!-- Hero Content -->
    <div class="hero-content">
      <img src="@/assets/logo.png" alt="City Comfort Line Logo" class="hero-logo" />

      <div class="text-container">
        <h1 v-for="(line, index) in textLines" :key="index" class="hero-text" :class="{ 'drop-in': isLoaded }"
          :style="{ animationDelay: `${0.2 + index * 0.15}s` }">
          {{ line }}
        </h1>
      </div>

      <p class="hero-subtitle" :class="{ 'fade-up': isLoaded }"
        :style="{ animationDelay: `${0.2 + textLines.length * 0.15}s` }">
        {{ subtitle }}
      </p>

      <div class="cta-buttons">
        <button v-for="(button, index) in buttons" :key="index" class="cta-btn"
          :class="[button.class, { 'scale-in': isLoaded }]"
          :style="{ animationDelay: `${0.4 + textLines.length * 0.15 + index * 0.1}s` }"
          @click="button.action">
          <span class="btn-text">{{ button.text }}</span>
        </button>
      </div>

      <!-- Scroll Indicator -->
      <div class="scroll-indicator" :class="{ 'bounce-in': isLoaded }"
        :style="{ animationDelay: `${0.8 + textLines.length * 0.15}s` }" @click="scrollDown">
        <span class="scroll-text">Scroll to explore</span>
        <div class="scroll-arrow">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import heroVideo from "@/assets/hero-video.mp4";

export default {
  name: "HeroSection",
  data() {
    return {
      isLoaded: false,
      videoSrc: heroVideo,
      textLines: [
        "City Comfort Line",
        "Your Trusted Partner",
        "in Home Care & Logistics",
      ],
      subtitle:
        "Reliable, caring, and efficient — we handle your home, transport, and comfort needs with excellence.",
      buttons: [
        { text: "Our Services", class: "primary", action: () => console.log("Navigate to services") },
        { text: "Contact Us", class: "secondary", action: () => console.log("Navigate to contact") },
      ],
    };
  },
  mounted() {
    setTimeout(() => (this.isLoaded = true), 200);
  },
  methods: {
    scrollDown() {
      window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
    },
  },
};
</script>


<style scoped>
.hero-section {
  position: relative;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  background-color: #003f3d;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Backgrounds */
.video-background {
  position: absolute;
  inset: 0;
  z-index: 0;
}
.hero-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.5;
}
.fallback-background {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #003f3d, #00796b, #004d40);
  animation: gradientShift 12s ease infinite;
}
@keyframes gradientShift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}
.video-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 20, 20, 0.6);
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
.text-container {
  margin-bottom: 2rem;
}
.hero-text {
  font-size: clamp(2rem, 4vw, 5rem);
  font-weight: 800;
  color: #ffd700; /* gold accent */
  text-transform: uppercase;
  letter-spacing: 1px;
  opacity: 0;
  transform: translateY(-80px);
}
.hero-text.drop-in {
  animation: dropIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}
@keyframes dropIn {
  0% { opacity: 0; transform: translateY(-80px) rotateX(-90deg); }
  100% { opacity: 1; transform: translateY(0) rotateX(0); }
}

/* Subtitle */
.hero-subtitle {
  font-size: 1.2rem;
  max-width: 700px;
  margin: 0 auto 2rem;
  color: #e0f2f1;
  opacity: 0;
}
.hero-subtitle.fade-up {
  animation: fadeUp 0.9s ease forwards;
}
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
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
  transition: all 0.3s ease;
  opacity: 0;
}
.cta-btn.primary {
  background: linear-gradient(135deg, #00796b, #26a69a);
  color: white;
}
.cta-btn.secondary {
  background: transparent;
  border: 2px solid #ffd700;
  color: #ffd700;
}
.cta-btn.scale-in {
  animation: scaleIn 0.6s ease forwards;
}
@keyframes scaleIn {
  from { opacity: 0; transform: scale(0.8); }
  to { opacity: 1; transform: scale(1); }
}
.cta-btn:hover {
  transform: translateY(-4px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
}

/* Scroll indicator */
.scroll-indicator {
  margin-top: 3rem;
  animation: bounceIn 1s ease forwards;
  opacity: 0;
}
.scroll-indicator.bounce-in {
  opacity: 1;
}
.scroll-text {
  font-size: 0.75rem;
  color: #b2dfdb;
  margin-bottom: 0.5rem;
}
.scroll-arrow svg {
  color: #ffd700;
  animation: arrowBounce 2s infinite;
}
@keyframes arrowBounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(6px); }
}

/* Responsive */
@media (max-width: 768px) {
  .hero-logo { width: 120px; }
  .hero-text { font-size: clamp(1.8rem, 8vw, 3.5rem); }
  .hero-subtitle { font-size: 1rem; padding: 0 1rem; }
  .cta-buttons { flex-direction: column; }
  .cta-btn { width: 100%; max-width: 280px; }
}
</style>
