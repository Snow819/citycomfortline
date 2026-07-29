<template>
    <div>
        <TopBanner />
        <Navbar page="healthcare" />
        <CleaningBanner />
        <HeroSection />
        <AboutSection />
        <OurServices />
        <Testimonial />
        <ServiceArea />
        <Satisfaction />
        <ContactSection />
        <SiteFooter tagline="Non-Medical Support Services" page="healthcare" />
    </div>
</template>

<script setup>
import { usePageTitle } from '@/composables/usePageTitle'
import CleaningBanner from '@/components/CleaningBanner.vue'
usePageTitle('Non-Medical Senior Support Services | Swift Comfort Line')
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