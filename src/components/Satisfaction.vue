<template>
  <section ref="stripRef" class="satisfaction-strip">
    <div class="stats">
      <div class="stat" v-for="(stat, i) in stats" :key="i">
        <div class="stat-icon">
          <component :is="stat.icon" />
        </div>
        <div class="stat-text">
          <span class="number">
            {{ Math.floor(stat.current) }}<span v-if="stat.suffix">{{ stat.suffix }}</span>
          </span>
          <span class="label">{{ t(stat.labelKey) }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, defineComponent, h } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

// Inline SVG icon components — no Font Awesome needed
const IconHeart = defineComponent({ render: () => h('svg', { width: 22, height: 22, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, [h('path', { d: 'M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z' })]) })
const IconStar = defineComponent({ render: () => h('svg', { width: 22, height: 22, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, [h('polygon', { points: '12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2' })]) })
const IconUsers = defineComponent({ render: () => h('svg', { width: 22, height: 22, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, [h('path', { d: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2' }), h('circle', { cx: 9, cy: 7, r: 4 }), h('path', { d: 'M23 21v-2a4 4 0 0 0-3-3.87' }), h('path', { d: 'M16 3.13a4 4 0 0 1 0 7.75' })]) })
const IconClock = defineComponent({ render: () => h('svg', { width: 22, height: 22, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, [h('circle', { cx: 12, cy: 12, r: 10 }), h('polyline', { points: '12 6 12 12 16 14' })]) })
const IconShield = defineComponent({ render: () => h('svg', { width: 22, height: 22, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, [h('path', { d: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z' })]) })

const stats = ref([
  { icon: IconHeart, labelKey: 'satisfaction.seniors', target: 200, current: 0, suffix: '+' },
  { icon: IconStar, labelKey: 'satisfaction.satisfaction', target: 100, current: 0, suffix: '%' },
  { icon: IconUsers, labelKey: 'satisfaction.families', target: 150, current: 0, suffix: '+' },
  { icon: IconClock, labelKey: 'satisfaction.punctual', target: 98, current: 0, suffix: '%' },
  { icon: IconShield, labelKey: 'satisfaction.years', target: 5, current: 0, suffix: '+' },
])

const stripRef = ref(null)
const hasAnimated = ref(false)
let observer = null

const animateCount = (stat) => {
  const duration = 1500
  const frameRate = 16
  const totalFrames = duration / frameRate
  let frame = 0
  const interval = setInterval(() => {
    frame++
    stat.current = (stat.target / totalFrames) * frame
    if (frame >= totalFrames) {
      stat.current = stat.target
      clearInterval(interval)
    }
  }, frameRate)
}

const startAnimation = () => {
  if (hasAnimated.value) return
  hasAnimated.value = true
  stats.value.forEach((s, i) => setTimeout(() => animateCount(s), i * 150))
}

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => { if (entries[0].isIntersecting) startAnimation() },
    { threshold: 0.4 }
  )
  if (stripRef.value) observer.observe(stripRef.value)
})

onBeforeUnmount(() => {
  if (observer) observer.disconnect()
})
</script>

<style scoped>

/* ─── Strip ─────────────────────────────────────────────── */
.satisfaction-strip {
  background:
    linear-gradient(
      135deg,
      var(--color-primary) 0%,
      var(--color-primary-dark) 100%
    );

  padding: 34px 40px;
  position: relative;
  overflow: hidden;
}

.satisfaction-strip::before {
  content: '';
  position: absolute;
  inset: 0;

  background:
    radial-gradient(
      circle at 15% 50%,
      rgba(204,147,58,0.12),
      transparent 35%
    ),
    radial-gradient(
      circle at 85% 50%,
      rgba(204,147,58,0.08),
      transparent 40%
    );

  pointer-events: none;
}

.satisfaction-strip::after {
  content: '';

  position: absolute;

  top: 0;
  left: 0;

  width: 100%;
  height: 2px;

  background:
    linear-gradient(
      to right,
      transparent,
      var(--color-gold),
      transparent
    );
}

/* ─── Stats row ─────────────────────────────────────────── */
.stats {
  position: relative;
  z-index: 2;

  display: flex;
  justify-content: center;
  align-items: center;

  max-width: 1200px;
  margin: 0 auto;
}

/* ─── Single stat ───────────────────────────────────────── */
.stat {
  flex: 1;
transition: transform .3s ease
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 14px;

  padding: 18px 24px;

  position: relative;
}

.stat:last-child {
  border-right: none;
}

.stat:not(:last-child)::after {
  content: '';

  position: absolute;

  right: 0;
  top: 50%;

  transform: translateY(-50%);

  width: 1px;
  height: 60%;

  background:
    linear-gradient(
      transparent,
      rgba(255,255,255,0.18),
      transparent
    );
}

/* ─── Icon ──────────────────────────────────────────────── */
.stat-icon {
  width: 48px;
  height: 48px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 14px;

  background:
    rgba(204,147,58,0.12);

  color: var(--color-gold);

  flex-shrink: 0;
}

/* ─── Text ──────────────────────────────────────────────── */
.stat-text {
  display: flex;
  flex-direction: column;
}

.number {
  font-family: var(--font-display);

  font-size: 1.9rem;
  font-weight: 700;

  color: white;

  line-height: 1;
}

.label {
  font-family: var(--font-body);

  font-size: 0.8rem;

  color: rgba(255,255,255,0.7);

  margin-top: 4px;

  letter-spacing: .03em;
}

.stat:hover {
  transform: translateY(-4px);
}

.stat:hover .stat-icon {
  background: var(--color-gold);
  color: var(--color-primary);
}

/* ─── Responsive ────────────────────────────────────────── */
@media (max-width: 900px) {
  .stats {
    flex-wrap: wrap;
    gap: 24px;
  }

  .stat {
    flex: 1 1 40%;
    border-right: none;
    padding: 0 16px;
    justify-content: flex-start;
  }
}

@media (max-width: 480px) {
  .satisfaction-strip {
    padding: 24px 20px;
  }

  .stat {
    flex: 1 1 100%;
  }

  .number {
    font-size: 1.3rem;
  }
}
</style>