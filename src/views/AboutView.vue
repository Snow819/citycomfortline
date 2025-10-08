<template>
  <section class="about-section">
    <div class="container">
      <!-- TEXT fades in from the left -->
      <div 
        class="about-content" 
        data-aos="fade-left" 
        data-aos-duration="1200"
      >
        <h1 class="title">{{ $t('about.title') }}</h1>
        <p class="text" v-html="$t('about.paragraph1')"></p>
        <p class="text" v-html="$t('about.paragraph2')"></p>
        <p class="text" v-html="$t('about.paragraph3')"></p>
        <p class="text quote"><em>{{ $t('about.quote') }}</em></p>
      </div>

      <!-- LOGO fades in from the right -->
      <div 
        class="about-image" 
        data-aos="fade-right" 
        data-aos-duration="1200"
      >
        <img 
          src="@/assets/logo.png" 
          alt="City Comfort Line Logo" 
          class="zoom-animation"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init({
  duration: 1200,
  once: true
})
</script>

<style scoped>
.about-section {
  background: #E8F5E9;
  padding: 100px 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  max-width: 1200px;
  gap: 40px;
}

/* === TEXT CONTENT === */
.about-content {
  color: #333;
}

.title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 20px;
  color: #c4a962; 
  text-transform: uppercase;
}

.text {
  line-height: 1.7;
  font-size: 1rem;
  margin-bottom: 18px;
  color: #444;
}

.highlight {
  color: #c4a962;
  font-weight: 600;
}

.quote {
  margin-top: 30px;
  font-size: 1rem;
  color: #555;
  border-left: 4px solid #c4a962;
  padding-left: 15px;
  font-style: italic;
}

/* === LOGO IMAGE === */
.zoom-animation {
  width: 100%;
  height: auto;
  animation: zoomInOut 3s ease-in-out infinite;
}

@keyframes zoomInOut {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.07); }
}

/* === RESPONSIVE === */
@media (max-width: 992px) {
  .container {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .about-image {
    order: -1;
  }

  .quote {
    text-align: center;
    border-left: none;
    border-top: 3px solid #c4a962;
    padding-top: 10px;
    padding-left: 0;
  }
}
</style>