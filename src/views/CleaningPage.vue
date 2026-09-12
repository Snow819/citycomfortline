<template>
    <div>
        <TopBanner />
        <Navbar page="cleaning" />
        <CleaningHero />
        <CleaningAbout />
        <!-- <CleaningDetails /> -->
        <CleaningServices />
        <CleaningTestimonials />
        <CleaningCTA />
        <CleaningContact />
        <SiteFooter tagline="Professional Cleaning Services" page="cleaning" />
    </div>
</template>

<script setup>
import { usePageMeta } from '@/composables/usePageMeta'
usePageMeta({
  title: 'Professional House Cleaning Services in Ottawa | Swift Comfort Line',
  description: 'Affordable, trusted house cleaning in Ottawa, Nepean, Kanata & Barrhaven — weekly, bi-weekly, deep, move-in and move-out cleaning for homes and apartments.',
  keywords: 'house cleaning services Ottawa, home cleaning Ottawa, residential cleaning Ottawa, professional cleaners Ottawa, apartment cleaning Ottawa, deep cleaning services Ottawa, move in cleaning Ottawa, move out cleaning Ottawa, affordable house cleaning Ottawa, weekly cleaning service Ottawa, bi weekly cleaning Ottawa, cleaning services near me Ottawa, trusted home cleaners Ottawa',
  ogTitle: 'Professional House Cleaning Services in Ottawa | Swift Comfort Line',
  ogDescription: 'Affordable, trusted house cleaning in Ottawa, Nepean, Kanata & Barrhaven. Weekly, bi-weekly, deep, move-in and move-out cleaning.',
  twitterTitle: 'Professional House Cleaning Services in Ottawa | Swift Comfort Line',
  twitterDescription: 'Affordable, trusted house cleaning in Ottawa, Nepean, Kanata & Barrhaven. Weekly, bi-weekly, deep, move-in and move-out cleaning.'
})
import TopBanner from '@/components/TopBanner.vue'
import Navbar from '@/components/Navbar.vue'
import CleaningHero from '@/components/CleaningHero.vue'
import CleaningAbout from '@/components/CleaningAbout.vue'
// import CleaningDetails from '@/components/CleaningDetails.vue'
import CleaningServices from '@/components/CleaningServices.vue'
import CleaningTestimonials from '@/components/CleaningTestimonials.vue'
import CleaningCTA from '@/components/CleaningCTA.vue'
import CleaningContact from '@/components/CleaningContact.vue'
import SiteFooter from '@/components/SiteFooter.vue'
</script>