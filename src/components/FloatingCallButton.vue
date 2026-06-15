<template>
  <transition name="fade">
    <a
      v-if="showButton"
      :href="'tel:' + phone"
      class="call-btn-floating"
      aria-label="Call Now"
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.68A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/>
      </svg>
      <span class="btn-text">Call Now</span>
    </a>
  </transition>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const phone = '+16138516775'
const showButton = ref(false)

const handleScroll = () => {
  showButton.value = window.scrollY > 600
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@500&display=swap');

.call-btn-floating {
  position: fixed;
  bottom: 30px;
  right: 30px;
  background: #2D1B69;
  color: white;
  padding: 16px;
  border-radius: 50px;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0;
  font-family: 'DM Sans', sans-serif;
  font-size: 15px;
  font-weight: 500;
  text-decoration: none;
  box-shadow: 0 4px 20px rgba(45,27,105,0.4);
  transition: all 0.3s ease;
  z-index: 1000;
  overflow: hidden;
  white-space: nowrap;
}

.call-btn-floating svg {
  width: 22px;
  height: 22px;
  stroke: white;
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

.call-btn-floating:hover {
  background: #C9A84C;
  padding-right: 24px;
  box-shadow: 0 6px 28px rgba(201,168,76,0.45);
}

.call-btn-floating:hover .btn-text {
  max-width: 100px;
  opacity: 1;
  margin-left: 10px;
}

.call-btn-floating:hover svg {
  transform: rotate(10deg);
}

/* Pulse ring animation — gold */
.call-btn-floating::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 50px;
  border: 2px solid rgba(201,168,76,0.5);
  animation: ring 2.5s ease-out infinite;
}

@keyframes ring {
  0%   { transform: scale(1); opacity: 0.7; }
  70%  { transform: scale(1.35); opacity: 0; }
  100% { transform: scale(1.35); opacity: 0; }
}

/* Fade transition */
.fade-enter-active,
.fade-leave-active { transition: opacity 0.3s ease; }
.fade-enter-from,
.fade-leave-to { opacity: 0; }

@media (max-width: 768px) {
  .call-btn-floating {
    bottom: 20px;
    right: 20px;
    padding: 14px;
  }

  .call-btn-floating svg {
    width: 20px;
    height: 20px;
  }
}
</style>