<script setup>
import Navbar from '@/components/Navbar.vue';
import HeroSection from '@/components/HeroSection.vue';
import GetQuote from '@/components/GetQuote.vue';
import AboutView from '@/views/AboutView.vue';
import OurServices from '@/components/OurServices.vue';
import FloatingQuoteButton from '@/components/FloatingQuoteButton.vue'; 
</script>

<template>
  <main>
    <Navbar />

    <!-- HERO SECTION -->
    <section id="home">
      <HeroSection />
    </section>

    <!-- ABOUT SECTION -->
    <section id="about">
      <AboutView /> 
    </section>

    <!-- SERVICES SECTION -->
    <section id="services" class="page-section">
      <OurServices />
    </section>

    <!-- SERVICE AREAS SECTION -->
    <section id="areas" class="page-section">
      <h2>Service Areas</h2>
      <p>We serve all major cities including Lagos, Abuja, Port Harcourt, and beyond.</p>
    </section>

    <!-- TESTIMONIALS SECTION -->
    <section id="testimonials" class="page-section">
      <h2>What Our Clients Say</h2>
      <p>"City Comfort Line made our move stress-free and smooth!" – Grace A.</p>
    </section>

    <!-- GET QUOTE SECTION -->
    <section id="get-quote">
      <GetQuote />
    </section>

    <!-- FLOATING BUTTON -->
     <FloatingQuoteButton />
  </main>
</template>

<style scoped>
html {
  scroll-behavior: smooth;
}

.page-section {
  padding: 100px 20px;
  text-align: center;
  background: #f9f9f9;
  border-bottom: 1px solid #ddd;
}

.page-section:nth-child(even) {
  background: #ffffff;
}

h2 {
  font-size: 2rem;
  color: #00796b;
  margin-bottom: 20px;
}
</style>