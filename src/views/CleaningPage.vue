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
import { usePageTitle } from '@/composables/usePageTitle'
usePageTitle('Professional Cleaning Services in Ottawa | Swift Comfort Line')
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