<template>
  <div id="app">
    <!-- Preloader disabled per client request — instant load, no white flash -->
    <!-- <CarPreloader /> -->

    <!-- Fixed UI -->
    <TopBanner />
    <Navbar />
    <FloatingCallButton />

    <!-- Page sections -->
    <main>
      <HeroSection />
      <AboutSection />
      <OurServices />
      <ServiceArea />
      <Testimonial />
      <ContactSection />
    </main>

    <Footer />
  </div>
</template>

<script setup>
// import CarPreloader     from '@/components/CarPreloader.vue'
import TopBanner          from '@/components/TopBanner.vue'
import Navbar              from '@/components/Navbar.vue'
import FloatingCallButton from '@/components/FloatingCallButton.vue'
import HeroSection        from '@/components/HeroSection.vue'
import AboutSection       from '@/components/AboutSection.vue'
import OurServices        from '@/components/OurServices.vue'
import ServiceArea        from '@/components/ServiceArea.vue'
import Testimonial        from '@/components/Testimonial.vue'
import ContactSection     from '@/components/ContactSection.vue'
import Footer             from '@/components/Footer.vue'
</script>

<style>
html {
  scroll-behavior: smooth;
  overflow-x: hidden;
}
</style>