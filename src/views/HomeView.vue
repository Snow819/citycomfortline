<script setup>
import Navbar from '@/components/Navbar.vue'
import HeroSection from '@/components/HeroSection.vue'
import GetQuote from '@/components/GetQuote.vue'
// You can later import AboutSection, ServicesSection, etc.
</script>

<template>
  <main>
    <Navbar />

    <!-- HERO SECTION -->
    <section id="home">
      <HeroSection />
    </section>

    <!-- ABOUT SECTION -->
    <section id="about" class="page-section">
      <h2>About Us</h2>
      <p>
        We are City Comfort Line — your trusted moving and cleaning partner. 
        Our professional team ensures seamless relocations and spotless spaces.
      </p>
    </section>

    <!-- SERVICES SECTION -->
    <section id="services" class="page-section">
      <h2>Our Services</h2>
      <ul>
        <li>Residential and commercial moving</li>
        <li>Deep cleaning and sanitization</li>
        <li>Packing and unpacking assistance</li>
        <li>Furniture setup and disposal</li>
      </ul>
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
  </main>
</template>

<style scoped>
/* Smooth scroll behavior */
html {
  scroll-behavior: smooth;
}

/* Add some section spacing and layout */
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
