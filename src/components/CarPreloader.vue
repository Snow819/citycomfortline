<template>
  <transition name="fade">
    <div v-if="visible" class="preloader" role="status" aria-live="polite">

      <div class="scene">
        <!-- Animated emblem -->
        <div class="emblem">
          <!-- Concentric breathing rings -->
          <svg class="rings" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <circle class="ring ring-1" cx="100" cy="100" r="90" />
            <circle class="ring ring-2" cx="100" cy="100" r="70" />
            <circle class="ring ring-3" cx="100" cy="100" r="50" />
          </svg>

          <!-- Two interlocking arcs forming an abstract embrace -->
          <svg class="embrace" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path class="arc arc-a" d="M 60 140 A 50 50 0 1 1 140 140" />
            <path class="arc arc-b" d="M 70 150 A 45 45 0 1 1 130 150" />
          </svg>

          <!-- Logo at center -->
          <img :src="logo" alt="Swift Comfort Line logo" class="emblem-logo" />

          <!-- Orbiting heart -->
          <div class="orbit">
            <div class="orbit-dot">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#C9A84C">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
              </svg>
            </div>
          </div>
        </div>

        <!-- Brand -->
        <div class="brand-block">
          <p class="brand-name">
            Swift Comfort <span class="gold">Line</span>
          </p>
          <p class="brand-tagline">{{ tagline }}</p>
        </div>

        <!-- Progress bar -->
        <div class="progress-track">
          <div class="progress-fill"></div>
        </div>
      </div>

      <span class="visually-hidden">Loading — Swift Comfort Line</span>
    </div>
  </transition>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import logo from '@/assets/Logo_light.png'

const visible = ref(true)
const tagline = 'Non-Medical Support Services'

onMounted(() => {
  window.addEventListener('load', () => {
    setTimeout(() => (visible.value = false), 250)
  }, { once: true })

  setTimeout(() => (visible.value = false), 3200)
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lora:wght@600;700&family=DM+Sans:wght@400;500&display=swap');

/* ─── Overlay ───────────────────────────────────────────── */
.preloader {
  position: fixed;
  inset: 0;
  background: #2D1B69;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

/* Subtle dot texture */
.preloader::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: radial-gradient(rgba(255,255,255,0.035) 1px, transparent 1px);
  background-size: 32px 32px;
  pointer-events: none;
}

/* Gold ambient glow */
.preloader::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 600px;
  height: 600px;
  transform: translate(-50%, -50%);
  background: radial-gradient(circle, rgba(201,168,76,0.1) 0%, transparent 60%);
  pointer-events: none;
}

/* ─── Scene ─────────────────────────────────────────────── */
.scene {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 36px;
}

/* ─── Emblem ────────────────────────────────────────────── */
.emblem {
  position: relative;
  width: 180px;
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Breathing rings */
.rings {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.ring {
  fill: none;
  stroke-width: 1;
  transform-origin: 100px 100px;
}

.ring-1 {
  stroke: rgba(201,168,76,0.25);
  animation: breathe 3s ease-in-out infinite;
}

.ring-2 {
  stroke: rgba(201,168,76,0.35);
  animation: breathe 3s ease-in-out infinite 0.4s;
}

.ring-3 {
  stroke: rgba(255,255,255,0.18);
  animation: breathe 3s ease-in-out infinite 0.8s;
}

@keyframes breathe {
  0%, 100% { transform: scale(0.94); opacity: 0.5; }
  50%       { transform: scale(1.04); opacity: 1; }
}

/* Embrace arcs — rotating slowly */
.embrace {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  animation: rotate 12s linear infinite;
}

@keyframes rotate {
  to { transform: rotate(360deg); }
}

.arc {
  fill: none;
  stroke-linecap: round;
}

.arc-a {
  stroke: #C9A84C;
  stroke-width: 2.5;
  stroke-dasharray: 180 220;
  opacity: 0.8;
}

.arc-b {
  stroke: rgba(255,255,255,0.45);
  stroke-width: 2;
  stroke-dasharray: 140 200;
  opacity: 0.6;
}

/* Center logo */
.emblem-logo {
  position: relative;
  z-index: 3;
  width: 72px;
  height: 72px;
  object-fit: contain;
  border-radius: 50%;
  background: rgba(255,255,255,0.07);
  padding: 10px;
  animation: pulse-logo 3s ease-in-out infinite;
}

@keyframes pulse-logo {
  0%, 100% { transform: scale(1); }
  50%       { transform: scale(1.06); }
}

/* Orbiting heart */
.orbit {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  animation: rotate 6s linear infinite;
}

.orbit-dot {
  position: absolute;
  top: 4px;
  left: 50%;
  transform: translateX(-50%);
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #2D1B69;
  border: 1.5px solid rgba(201,168,76,0.4);
  display: flex;
  align-items: center;
  justify-content: center;
}

/* ─── Brand text ────────────────────────────────────────── */
.brand-block {
  text-align: center;
}

.brand-name {
  font-family: 'Lora', Georgia, serif;
  font-size: 1.3rem;
  font-weight: 700;
  color: #ffffff;
  letter-spacing: 0.02em;
  margin: 0 0 6px;
}

.gold { color: #C9A84C; }

.brand-tagline {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.7rem;
  font-weight: 500;
  color: rgba(255,255,255,0.45);
  letter-spacing: 0.18em;
  text-transform: uppercase;
  margin: 0;
}

/* ─── Progress bar ──────────────────────────────────────── */
.progress-track {
  width: 160px;
  height: 3px;
  background: rgba(255,255,255,0.1);
  border-radius: 3px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  width: 0%;
  background: linear-gradient(to right, #C9A84C, #f0d896);
  border-radius: 3px;
  animation: fillProgress 3s ease-out forwards;
}

@keyframes fillProgress {
  to { width: 100%; }
}

/* ─── Fade transition ───────────────────────────────────── */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* ─── Reduced motion ────────────────────────────────────── */
@media (prefers-reduced-motion: reduce) {
  .ring, .embrace, .orbit, .emblem-logo, .progress-fill {
    animation: none;
  }
  .progress-fill { width: 100%; }
}

/* ─── Responsive ────────────────────────────────────────── */
@media (max-width: 480px) {
  .emblem { width: 140px; height: 140px; }
  .emblem-logo { width: 56px; height: 56px; }
  .brand-name { font-size: 1.1rem; }
}

/* ─── Accessibility ─────────────────────────────────────── */
.visually-hidden {
  position: absolute;
  left: -9999px;
}
</style>