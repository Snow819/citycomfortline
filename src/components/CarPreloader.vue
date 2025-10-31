<template>
  <transition name="fade">
    <div v-if="visible" class="preloader" role="status" aria-live="polite">
      <div class="road">
        <!-- Moving Logo Car -->
        <img :src="logo" alt="City Comfort Line logo" class="car-logo" />

        <!-- Road Line -->
        <div class="road-line"></div>

        <!-- Circular Loader -->
        <div class="loader-container">
          <img :src="logo" alt="City Comfort Line logo" class="logo" />
          <div class="loader"></div>
        </div>

        <span class="visually-hidden">Loading — City Comfort Line</span>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref, onMounted } from "vue";
import logo from "@/assets/logo.png";

const visible = ref(true);

onMounted(() => {
  window.addEventListener(
    "load",
    () => {
      setTimeout(() => (visible.value = false), 400);
    },
    { once: true }
  );

  // fallback timeout
  setTimeout(() => (visible.value = false), 6000);
});
</script>

<style scoped>
/* --- Fullscreen Overlay --- */
.preloader {
  position: fixed;
  inset: 0;
  background: linear-gradient(180deg, #ffffff 0%, #eaffea 100%);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

/* --- Road Container --- */
.road {
  width: min(90vw, 900px);
  height: 200px;
  position: relative;
  text-align: center;
}

/* --- Moving Logo Car --- */
.car-logo {
  position: absolute;
  top: 40px;
  left: -30%;
  width: 120px;
  height: auto;
  animation: drive 4s cubic-bezier(0.25, 0.8, 0.25, 1) 1 forwards, bob 1.5s ease-in-out infinite;
  filter: drop-shadow(0 3px 6px rgba(0, 0, 0, 0.2));
}

@keyframes drive {
  0% {
    left: -30%;
    opacity: 0.8;
  }
  20% {
    opacity: 1;
  }
  80% {
    left: 60%;
    opacity: 1;
  }
  100% {
    left: 120%;
    opacity: 0;
  }
}

@keyframes bob {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-6px);
  }
}

/* --- Road Line --- */
.road-line {
  position: absolute;
  bottom: 25px;
  left: 0;
  width: 100%;
  height: 6px;
  background-image: repeating-linear-gradient(
    to right,
    #2e7d32 0px,
    #2e7d32 40px,
    transparent 40px,
    transparent 80px
  );
  animation: moveRoad 0.4s linear infinite;
  border-radius: 2px;
  opacity: 0.8;
}

@keyframes moveRoad {
  from {
    background-position-x: 0;
  }
  to {
    background-position-x: -80px;
  }
}

/* --- Circular Loader --- */
.loader-container {
  margin-top: 130px;
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
}

.logo {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  object-fit: contain;
  position: relative;
  z-index: 2;
}

/* --- Spinner Border --- */
.loader {
  position: absolute;
  width: 85px;
  height: 85px;
  border: 4px solid #c8e6c9;
  border-top-color: #2e7d32;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  z-index: 1;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

/* --- Fade Transition --- */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* --- Accessibility Text --- */
.visually-hidden {
  position: absolute;
  left: -9999px;
}
</style>
