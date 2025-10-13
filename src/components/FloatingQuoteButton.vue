<template>
    <transition name="fade">
      <button 
        v-if="showButton" 
        @click="scrollToQuote" 
        class="quote-btn-floating"
        aria-label="Get Quote"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="16" y1="13" x2="8" y2="13"></line>
          <line x1="16" y1="17" x2="8" y2="17"></line>
        </svg>
        <span class="btn-text">Get Quote</span>
      </button>
    </transition>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from 'vue';
  
  const showButton = ref(false);
  
  const handleScroll = () => {
    // Show button after scrolling past hero section
    showButton.value = window.scrollY > 600;
  };
  
  const scrollToQuote = () => {
    const element = document.getElementById('get-quote'); // Match your section ID
    if (element) {
      const offset = 80; // Adjust based on navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    } else {
      console.error('Get quote section not found');
    }
  };
  
  onMounted(() => {
    window.addEventListener('scroll', handleScroll);
  });
  
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
  });
  </script>
  
  <style scoped>
  .quote-btn-floating {
    position: fixed;
    bottom: 30px;
    right: 30px;
    background: #A5D6A7;
    color: white;
    padding: 16px;
    border-radius: 50px;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0;
    font-size: 16px;
    font-weight: 600;
    box-shadow: 0 4px 20px rgba(0, 23, 22, 0.5);
    transition: all 0.3s ease;
    z-index: 1000;
    overflow: hidden;
    white-space: nowrap;
  }
  
  .quote-btn-floating svg {
    width: 24px;
    height: 24px;
    stroke: white;
    stroke-width: 2;
    flex-shrink: 0;
    transition: transform 0.3s ease;
  }
  
  .btn-text {
    max-width: 0;
    opacity: 0;
    overflow: hidden;
    transition: all 0.3s ease;
    margin-left: 0;
  }
  
  .quote-btn-floating:hover {
    padding-right: 24px;
    box-shadow: 0 6px 30px rgba(13, 148, 136, 0.7);
  }
  
  .quote-btn-floating:hover .btn-text {
    max-width: 120px;
    opacity: 1;
    margin-left: 10px;
  }
  
  .quote-btn-floating:hover svg {
    transform: rotate(5deg);
  }
  
  /* Fade transition */
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s ease;
  }
  
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
  
  /* Mobile adjustments */
  @media (max-width: 768px) {
    .quote-btn-floating {
      padding: 14px;
      bottom: 20px;
      right: 20px;
    }
  
    .quote-btn-floating svg {
      width: 22px;
      height: 22px;
    }
  
    .btn-text {
      font-size: 14px;
    }
  
    .quote-btn-floating:hover .btn-text {
      max-width: 100px;
    }
  }
  </style>