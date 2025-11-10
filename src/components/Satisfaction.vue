<template>
    <section ref="stripRef" class="satisfaction-strip">
      <div class="stats">
        <div class="stat" v-for="(stat, i) in stats" :key="i">
          <i :class="stat.icon"></i>
          <span class="number">
            {{ Math.floor(stat.current) }}<span v-if="stat.suffix">{{ stat.suffix }}</span>
          </span>
          <span class="label">{{ t(stat.labelKey) }}</span>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref, onMounted, onBeforeUnmount } from 'vue'
  import { useI18n } from 'vue-i18n'
  
  const { t } = useI18n()
  
  // Numbers stay static; labels come from translations
  const stats = ref([
    { icon: 'fas fa-briefcase', labelKey: 'satisfaction.years', target: 5, current: 0, suffix: '+' },
    { icon: 'fas fa-smile', labelKey: 'satisfaction.clients', target: 100, current: 0, suffix: '%' },
    { icon: 'fas fa-truck-moving', labelKey: 'satisfaction.moves', target: 180, current: 0, suffix: '+' },
    { icon: 'fas fa-building', labelKey: 'satisfaction.relocated', target: 80, current: 0, suffix: '+' },
    { icon: 'fas fa-users', labelKey: 'satisfaction.referral', target: 97, current: 0, suffix: '%' }
  ])
  
  const stripRef = ref(null)
  const hasAnimated = ref(false)
  
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
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) startAnimation()
      },
      { threshold: 0.4 }
    )
    if (stripRef.value) observer.observe(stripRef.value)
    onBeforeUnmount(() => observer.disconnect())
  })
  </script>
  
  <style scoped>
  .satisfaction-strip {
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0,0,0,0.4);
    padding: 1.5rem 1rem;
    font-weight: 700;
    overflow: hidden;
    text-align: center;
  }
  
  .stats {
    display: flex;
    flex-wrap: nowrap;
    gap: 2.5rem;
  }
  
  .stat {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    font-size: 1rem;
  }
  
  .stat i {
    color: #2e7d32;
    font-size: 1.3rem;
  }

  .stat i:hover {
  color: #Ff9a00;
  transform: scale(1.1) rotate(10deg);
}
  
  .number {
    font-weight: bold;
    font-size: 1.1rem;
  }
  
  .label {
    font-size: 0.95rem;
    opacity: 0.9;
  }
  
  /* Responsive */
  @media (max-width: 768px) {
    .stats {
      flex-wrap: wrap;
      gap: 1.5rem;
    }
  
    .stat {
      flex: 1 1 45%;
      justify-content: center;
      font-size: 0.9rem;
    }
  
    .stat i {
      font-size: 1.1rem;
    }
  
    .number {
      font-size: 1rem;
    }
  
    .label {
      font-size: 0.85rem;
    }
  }
  
  @media (max-width: 480px) {
    .stat {
      flex: 1 1 100%;
    }
  }
  </style>
  