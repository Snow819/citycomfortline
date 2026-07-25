<template>
    <div>
        <TopBanner />
        <Navbar />
        <CleaningHero />
        <CleaningAbout />
        <!-- <CleaningDetails /> -->
        <CleaningServices />
        <CleaningTestimonials />
        <CleaningCTA />
        <CleaningContact />
        <SiteFooter tagline="Professional Cleaning" />
    </div>
</template>

<script setup>
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