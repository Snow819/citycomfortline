 hero
<script setup>
import Navbar from '@/components/Navbar.vue';
import HeroSection from '@/components/HeroSection.vue';
</script>

<template>
  <main>
    <Navbar />
    <HeroSection />
    <h1>This is service page</h1>
  </main>
</template>
<template>
  <div class="service">
    <h1>This is Service Page</h1>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
main
