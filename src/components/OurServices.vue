<template>
    <div class="services-wrapper">
      <div class="services-container">
        <h1 class="main-title">Our Services</h1>
        <p class="main-subtitle">Comprehensive moving and cleaning solutions for your needs</p>
        
        <div class="accordions-grid">
          <!-- Moving Services Accordion -->
          <div class="accordion-section">
            <div class="section-header">
              <svg class="section-icon moving-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <rect x="1" y="3" width="15" height="13"></rect>
                <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                <circle cx="5.5" cy="18.5" r="2.5"></circle>
                <circle cx="18.5" cy="18.5" r="2.5"></circle>
              </svg>
              <h2 class="section-title">Moving Services</h2>
            </div>
            
            <div class="accordion">
              <div 
                v-for="(item, index) in movingServices" 
                :key="index"
                class="accordion-item"
              >
                <button 
                  @click="toggleMoving(index)"
                  class="accordion-header"
                >
                  <span class="accordion-title-text">{{ item.title }}</span>
                  <svg 
                    class="accordion-icon"
                    :class="{ 'rotated': openMovingIndex === index }"
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>
                
                <div 
                  class="accordion-content"
                  :class="{ 'open': openMovingIndex === index }"
                >
                  <div class="accordion-content-inner">
                    {{ item.content }}
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          <!-- Cleaning Services Accordion -->
          <div class="accordion-section">
            <div class="section-header">
              <svg class="section-icon cleaning-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M12 3v18"></path>
                <path d="m8 5 4-2 4 2"></path>
                <path d="M7.5 7.5 4 11l3.5 3.5"></path>
                <path d="M16.5 7.5 20 11l-3.5 3.5"></path>
              </svg>
              <h2 class="section-title">Cleaning Services</h2>
            </div>
            
            <div class="accordion">
              <div 
                v-for="(item, index) in cleaningServices" 
                :key="index"
                class="accordion-item"
              >
                <button 
                  @click="toggleCleaning(index)"
                  class="accordion-header"
                >
                  <span class="accordion-title-text">{{ item.title }}</span>
                  <svg 
                    class="accordion-icon"
                    :class="{ 'rotated': openCleaningIndex === index }"
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>
                
                <div 
                  class="accordion-content"
                  :class="{ 'open': openCleaningIndex === index }"
                >
                  <div class="accordion-content-inner">
                    {{ item.content }}
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
  import { ref } from 'vue';
  
  const openMovingIndex = ref(null);
  const openCleaningIndex = ref(null);
  
  const movingServices = [
    {
      title: "Residential Moving",
      content: "Moving to a new home? We handle moves of all sizes, from apartments to family homes. Our experienced team manages packing, loading, transportation, and unloading efficiently."
    },
    {
      title: "Apartment & Condo Moves",
      content: "Skilled at navigating high-rise buildings, elevators, tight hallways, and building regulations with ease and professionalism."
    },
    {
      title: "Office & Commercial Moving",
      content: "Minimize business disruption with our professional office relocation services. We handle sensitive equipment and ensure quick setup at your new location."
    },
    {
      title: "Packing & Unpacking",
      content: "Save time with our full-service packing. We supply high-quality boxes and materials to protect your belongings during transit."
    },
    {
      title: "Furniture Disassembly & Reassembly",
      content: "Complimentary service for beds, desks, and dining tables. We arrive equipped with tools to handle assembly efficiently and safely."
    },
    {
      title: "Specialty Item Moving",
      content: "Expert handling of pianos, treadmills, antiques, and fragile artwork with specialized equipment and extra care."
    },
    {
      title: "Internal Moves",
      content: "Furniture rearranging within your home or office, plus assistance with loading and unloading rental trucks or storage containers."
    },
    {
      title: "Local & Long-Distance Moves",
      content: "Seamless moving services whether you're staying local or relocating across the country."
    },
    {
      title: "Storage Solutions",
      content: "Secure, flexible storage options available for short-term or long-term needs between moves."
    }
  ];
  
  const cleaningServices = [
    {
      title: "Post-Move Cleaning",
      content: "Thorough cleaning of your old or new home after moving. We handle all rooms, ensuring spotless results for your fresh start."
    },
    {
      title: "Deep Cleaning",
      content: "Comprehensive cleaning service covering every corner, including baseboards, windows, appliances, and hard-to-reach areas."
    },
    {
      title: "Residential Cleaning",
      content: "Regular or one-time cleaning for homes of any size. Customizable packages to fit your specific needs and schedule."
    },
    {
      title: "Commercial Cleaning",
      content: "Professional office and workspace cleaning to maintain a productive, hygienic environment for your business."
    },
    {
      title: "Carpet & Upholstery Cleaning",
      content: "Advanced cleaning techniques to remove stains, odors, and allergens from carpets, rugs, and furniture."
    },
    {
      title: "Window Cleaning",
      content: "Interior and exterior window cleaning for streak-free, crystal-clear results that brighten your space."
    }
  ];
  
  const toggleMoving = (index) => {
    openMovingIndex.value = openMovingIndex.value === index ? null : index;
  };
  
  const toggleCleaning = (index) => {
    openCleaningIndex.value = openCleaningIndex.value === index ? null : index;
  };
  </script>
  
  <style scoped>
  .services-wrapper {
    min-height: 100vh;
    background: white;
    padding: 48px 24px;
  }
  
  .services-container {
    max-width: 1400px;
    margin: 0 auto;
  }
  
  .main-title {
    font-size: 2.5rem;
    font-weight: bold;
    color: #111827;
    text-align: center;
    margin-bottom: 16px;
  }
  
  .main-subtitle {
    color: #6b7280;
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
    color: #2563eb;
  }
  
  .section-title {
    font-size: 1.5rem;
    font-weight: bold;
    color: #111827;
  }
  
  .accordion {
    background: white;
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
    background: #f9fafb;
  }
  
  .accordion-title-text {
    font-weight: 600;
    color: #111827;
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