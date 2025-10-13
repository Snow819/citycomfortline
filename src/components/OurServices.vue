<template>
    <div class="services-wrapper" data-aos="fade-up" data-aos-duration="800">
        <div class="services-container">
            <h1 class="main-title" data-aos="fade-down" data-aos-duration="1000" data-aos-once="false">
                {{ $t('ourServices.title') }}
            </h1>

            <p class="main-subtitle" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000"
                data-aos-once="false">
                {{ $t('ourServices.subtitle') }}
            </p>

            <div class="accordions-grid">
                <!-- Moving Services Accordion -->
                <div class="accordion-section" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="300"
                    data-aos-once="false">
                    <div class="section-header" data-aos="zoom-in" data-aos-delay="400">
                        <svg class="section-icon moving-icon" width="32" height="32" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor">
                            <rect x="1" y="3" width="15" height="13"></rect>
                            <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                            <circle cx="5.5" cy="18.5" r="2.5"></circle>
                            <circle cx="18.5" cy="18.5" r="2.5"></circle>
                        </svg>
                        <h2 class="section-title" data-aos="fade-left" data-aos-delay="450">
                            {{ $t('ourServices.moving.title') }}
                        </h2>
                    </div>

                    <div class="accordion">
                        <div v-for="(item, index) in movingServices" :key="index" class="accordion-item"
                            data-aos="fade-up" :data-aos-delay="100 * index" data-aos-duration="700"
                            data-aos-once="false">
                            <button @click="toggleMoving(index)" class="accordion-header">
                                <span class="accordion-title-text">{{ $t(item.title) }}</span>
                                <svg class="accordion-icon" :class="{ 'rotated': openMovingIndex === index }" width="20"
                                    height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <polyline points="6 9 12 15 18 9"></polyline>
                                </svg>
                            </button>

                            <div class="accordion-content" :class="{ 'open': openMovingIndex === index }">
                                <div class="accordion-content-inner">
                                    {{ $t(item.content) }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Cleaning Services Accordion -->
                <div class="accordion-section" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="300"
                    data-aos-once="false">
                    <div class="section-header" data-aos="zoom-in" data-aos-delay="400">
                        <svg class="section-icon cleaning-icon" width="32" height="32" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor">
                            <path d="M12 3v18"></path>
                            <path d="m8 5 4-2 4 2"></path>
                            <path d="M7.5 7.5 4 11l3.5 3.5"></path>
                            <path d="M16.5 7.5 20 11l-3.5 3.5"></path>
                        </svg>
                        <h2 class="section-title" data-aos="fade-right" data-aos-delay="450">
                            {{ $t('ourServices.cleaning.title') }}
                        </h2>
                    </div>

                    <div class="accordion">
                        <div v-for="(item, index) in cleaningServices" :key="index" class="accordion-item"
                            data-aos="fade-up" :data-aos-delay="100 * index" data-aos-duration="700"
                            data-aos-once="false">
                            <button @click="toggleCleaning(index)" class="accordion-header">
                                <span class="accordion-title-text">{{ $t(item.title) }}</span>
                                <svg class="accordion-icon" :class="{ 'rotated': openCleaningIndex === index }"
                                    width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <polyline points="6 9 12 15 18 9"></polyline>
                                </svg>
                            </button>

                            <div class="accordion-content" :class="{ 'open': openCleaningIndex === index }">
                                <div class="accordion-content-inner">
                                    {{ $t(item.content) }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

const openMovingIndex = ref(null)
const openCleaningIndex = ref(null)

const movingServices = [
    { title: 'ourServices.moving.items.residential.title', content: 'ourServices.moving.items.residential.content' },
    { title: 'ourServices.moving.items.apartment.title', content: 'ourServices.moving.items.apartment.content' },
    { title: 'ourServices.moving.items.office.title', content: 'ourServices.moving.items.office.content' },
    { title: 'ourServices.moving.items.packing.title', content: 'ourServices.moving.items.packing.content' },
    { title: 'ourServices.moving.items.furniture.title', content: 'ourServices.moving.items.furniture.content' },
    { title: 'ourServices.moving.items.specialty.title', content: 'ourServices.moving.items.specialty.content' },
    { title: 'ourServices.moving.items.internal.title', content: 'ourServices.moving.items.internal.content' },
    { title: 'ourServices.moving.items.local.title', content: 'ourServices.moving.items.local.content' },

]

const cleaningServices = [
    { title: 'ourServices.cleaning.items.postMove.title', content: 'ourServices.cleaning.items.postMove.content' },
    { title: 'ourServices.cleaning.items.deep.title', content: 'ourServices.cleaning.items.deep.content' },
    { title: 'ourServices.cleaning.items.residential.title', content: 'ourServices.cleaning.items.residential.content' },
    { title: 'ourServices.cleaning.items.commercial.title', content: 'ourServices.cleaning.items.commercial.content' },
    { title: 'ourServices.cleaning.items.carpet.title', content: 'ourServices.cleaning.items.carpet.content' },
    { title: 'ourServices.cleaning.items.window.title', content: 'ourServices.cleaning.items.window.content' },
]

const toggleMoving = (index) => {
    openMovingIndex.value = openMovingIndex.value === index ? null : index
}

const toggleCleaning = (index) => {
    openCleaningIndex.value = openCleaningIndex.value === index ? null : index
}

onMounted(() => {
    AOS.init({
        duration: 1000,
        once: false,
        mirror: true,
        easing: 'ease-in-out',
        offset: 120,
    });
})
</script>

<style scoped>
.services-wrapper {
    background: #A5D6A7;
    padding: 80px 40px;
    overflow-x: hidden;
}

.services-container {
    max-width: 1200px;
    margin: 0 auto;
}

.main-title {
    font-size: 2.5rem;
    font-weight: bold;
    color: #444;
    text-align: center;
    margin-bottom: 16px;
}

.main-subtitle {
    color: #333;
    text-align: center;
    margin-bottom: 48px;
    font-size: 1.125rem;
}

.accordions-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 32px;
}

@media (min-width: 1024px) {
    .accordions-grid {
        grid-template-columns: 1fr 1fr;
    }
}

.accordion-section {
    width: 100%;
}

.section-header {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 24px;
}

.section-icon {
    margin-right: 12px;
    stroke-width: 2;
}

.moving-icon {
    color: #0d9488;
}

.cleaning-icon {
    color: #0d9488;
}

.section-title {
    font-size: 1.5rem;
    font-weight: bold;
    color: #444;
}

.accordion {
    background: #f9fafb;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    border: 1px solid #e5e7eb;
}

.accordion-item {
    border-bottom: 1px solid #d1d5db;
}

.accordion-item:last-child {
    border-bottom: none;
}

.accordion-header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px;
    background: white;
    border: none;
    cursor: pointer;
    transition: background 0.2s ease;
    text-align: left;
}

.accordion-header:hover {
    background: #e5e7eb;
}

.accordion-title-text {
    font-weight: 600;
    color: #444;
    font-size: 1rem;
}

.accordion-icon {
    color: #0d9488;
    transition: transform 0.3s ease;
    flex-shrink: 0;
    margin-left: 12px;
    stroke-width: 2;
}

.accordion-icon.rotated {
    transform: rotate(180deg);
}

.accordion-content {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease, opacity 0.3s ease;
    opacity: 0;
    background: #f9fafb;
}

.accordion-content.open {
    max-height: 400px;
    opacity: 1;
}

.accordion-content-inner {
    padding: 16px;
    color: #374151;
    line-height: 1.6;
    font-size: 0.875rem;
}

@media (max-width: 768px) {
    .main-title {
        font-size: 2rem;
    }

    .section-title {
        font-size: 1.25rem;
    }

    .accordion-header {
        padding: 14px;
    }

    .accordion-title-text {
        font-size: 0.9rem;
    }
}
</style>