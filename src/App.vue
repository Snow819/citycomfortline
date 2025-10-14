<template>
  <div id="app">
    <transition name="fade">
      <!-- 🌟 Preloader -->
      <div v-if="loading" class="preloader">
        <div class="car-wrapper">
          <img :src="logo" alt="City Comfort Line" class="moving-car" />
          <div class="road-line"></div>
        </div>
        <div class="loader"></div>
      </div>

      <!-- 🌟 Main App -->
      <div v-else class="content">
        <Navbar />
        <router-view />
      </div>
    </transition>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import logo from "@/assets/logo.png";

export default {
  name: "App",
  components: { Navbar },
  data() {
    return {
      loading: true,
      logo,
    };
  },
  mounted() {
    // Preloader duration matches animation
    setTimeout(() => {
      this.loading = false;
    }, 3500);
  },
};
</script>

<style scoped>
/* ================================================
   🌟 PRELOADER STYLING
================================================= */
.preloader {
  position: fixed;
  inset: 0;
  background: linear-gradient(180deg, #ffffff, #f4fff4);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  overflow: hidden;
}

/* ✅ Car wrapper keeps car & road together */
.car-wrapper {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* 🚗 Moving logo (car) */
.moving-car {
  width: 180px;
  height: auto;
  animation: driveOnce 3s ease-in-out forwards, bob 1.5s ease-in-out infinite;
  filter: drop-shadow(0 6px 10px rgba(0, 0, 0, 0.2));
  image-rendering: crisp-edges;
  transform: scaleX(var(--car-direction, 1)); /* ✅ Face forward */
}

/* Automatically ensure car faces right (forward) */
.moving-car {
  --car-direction: 1;
}

/* 🛣️ Dashed Road Under Car */
.road-line {
  position: absolute;
  bottom: -10px;
  width: 60%;
  height: 4px;
  background-image: repeating-linear-gradient(
    to right,
    #2e7d32 0,
    #2e7d32 40px,
    transparent 40px,
    transparent 80px
  );
  animation: moveRoad 0.4s linear infinite;
  opacity: 0.8;
  border-radius: 2px;
}

/*  Spinner Below the Car */
.loader {
  margin-top: 100px;
  width: 55px;
  height: 55px;
  border: 4px solid #c8e6c9;
  border-top-color: #2e7d32;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

/* ================================================
   🌟 ANIMATIONS
================================================= */

/* 🚗 Car drives across once */
@keyframes driveOnce {
  0% {
    transform: translateX(-100vw) scaleX(var(--car-direction, 1));
    opacity: 0;
  }
  15% {
    opacity: 1;
  }
  85% {
    opacity: 1;
  }
  100% {
    transform: translateX(100vw) scaleX(var(--car-direction, 1));
    opacity: 0;
  }
}

/* 🫧 Soft bobbing motion */
@keyframes bob {
  0%, 100% {
    transform: translateY(0) scaleX(var(--car-direction, 1));
  }
  50% {
    transform: translateY(-6px) scaleX(var(--car-direction, 1));
  }
}

/* 🛣️ Road dashes move */
@keyframes moveRoad {
  from {
    background-position-x: 0;
  }
  to {
    background-position-x: -80px;
  }
}

/* 🔄 Spinner rotation */
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

/* ================================================
   🌟 TRANSITIONS
================================================= */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Fade-in main content */
.content {
  opacity: 0;
  animation: fadeIn 1s ease forwards;
  animation-delay: 0.3s;
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}
</style>
