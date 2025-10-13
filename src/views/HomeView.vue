<script setup>
import Navbar from '@/components/Navbar.vue';
import HeroSection from '@/components/HeroSection.vue';
import GetQuote from '@/components/GetQuote.vue';
import AboutView from '@/views/AboutView.vue';
import FloatingQuoteButton from '@/components/FloatingQuoteButton.vue';
import OurServices from '@/components/OurServices.vue';
import Testimonial from '@/components/Testimonial.vue';
import FooterSection from '@/components/FooterSection.vue';
import ServiceArea from '@/components/ServiceArea.vue';
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
    <section id="services">
      <OurServices />
    </section>

    <!-- SERVICE AREAS SECTION -->
    <section id="areas">
      <ServiceArea />
    </section>

    <!-- TESTIMONIALS SECTION -->
    <section id="testimonials">
      <Testimonial />
    </section>

    <!-- GET QUOTE SECTION -->
    <section id="get-quote">
      <GetQuote />
    </section>

    <!-- FOOTER SECTION -->
    <FooterSection />

    <!-- FLOATING BUTTON -->
    <FloatingQuoteButton />
  </main>
</template>

<style scoped>
html {
  scroll-behavior: smooth;
  overflow-x: hidden;
}
</style>
