<template>
    <div>
        <TopBanner />
        <Navbar />
        <HeroSection />
        <AboutSection />
        <OurServices />
        <Testimonial />
        <ServiceArea />
        <Satisfaction />
        <ContactSection />
        <SiteFooter tagline="Non-Medical Support Services" />
    </div>
</template>

<script setup>
import TopBanner from '@/components/TopBanner.vue'
import Navbar from '@/components/Navbar.vue'
import HeroSection from '@/components/HeroSection.vue'
import AboutSection from '@/components/AboutSection.vue'
import OurServices from '@/components/OurServices.vue'
import Testimonial from '@/components/Testimonial.vue'
import ServiceArea from '@/components/ServiceArea.vue'
import Satisfaction from '@/components/Satisfaction.vue'
import ContactSection from '@/components/ContactSection.vue'
import SiteFooter from '@/components/SiteFooter.vue'
</script>