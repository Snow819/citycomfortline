<template>
    <div>
        <TopBanner />
        <Navbar page="healthcare" />
        <!-- <CleaningBanner /> -->
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
import { usePageMeta } from '@/composables/usePageMeta'
// import CleaningBanner from '@/components/CleaningBanner.vue'
usePageMeta({
  title: 'Senior Support Services in Ottawa | Companion Care & Transportation | Swift Comfort Line',
  description: 'Trusted non-medical senior support in Ottawa, Nepean, Kanata & Barrhaven — companion care, medical appointment transportation, errands, and in-home check-ins.',
  keywords: 'senior support services Ottawa, non medical senior care Ottawa, senior home support Ottawa, senior companion care Ottawa, elderly assistance Ottawa, senior transportation Ottawa, medical appointment transportation Ottawa seniors, errands for seniors Ottawa, affordable senior transportation Ottawa, private senior companion Ottawa, help for elderly parents Ottawa, trusted senior care services Ottawa',
  ogTitle: 'Swift Comfort Line – Senior Support Services in Ottawa',
  ogDescription: 'Non-medical senior support in Ottawa. Same trusted caregiver every visit for transportation, home help, and companionship.',
  twitterTitle: 'Swift Comfort Line – Senior Support Services in Ottawa',
  twitterDescription: 'Non-medical senior support in Ottawa. Transportation, home help, and companionship from a trusted caregiver.'
})
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