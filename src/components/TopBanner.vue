<template>
  <transition name="slide">
    <div v-show="showBanner" class="top-banner" ref="bannerRef">
      <div class="banner-container">
        <a
          href="https://maps.google.com/?q=1338+Wellington+St+West+Unit+10+Ottawa+Ontario+K1Y+3B7"
          target="_blank"
          class="banner-item"
        >
          <i class="fas fa-map-marker-alt"></i>
          <span>1338 Wellington St West, Unit 10, Ottawa, Ontario K1Y 3B7</span>
        </a>
        <a href="tel:+16138516775" class="banner-item">
          <i class="fas fa-phone"></i>
          <span>+1 (613) 851-6775</span>
        </a>
        <a href="mailto:info@swiftcomfortline.ca" class="banner-item">
          <i class="fas fa-envelope"></i>
          <span>info@swiftcomfortline.ca</span>
        </a>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'TopBanner',
  data() {
    return {
      showBanner: true,
      lastScrollPosition: 0,
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll, { passive: true })
    this.notifyHeight()
    window.addEventListener('resize', this.notifyHeight)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
    window.removeEventListener('resize', this.notifyHeight)
  },
  methods: {
    handleScroll() {
      const current = Math.max(0, window.pageYOffset || document.documentElement.scrollTop)
      if (current < this.lastScrollPosition) {
        this.showBanner = true
      } else if (current > 100) {
        this.showBanner = false
      }
      this.lastScrollPosition = current
      this.notifyHeight()
    },
    notifyHeight() {
      const height = this.showBanner && this.$refs.bannerRef
        ? this.$refs.bannerRef.offsetHeight
        : 0
      document.documentElement.style.setProperty('--banner-height', `${height}px`)
    },
  },
}
</script>

<style scoped>
.top-banner {
  background: #ffffff;
  color: #212121;
  padding: 12px 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1001;
  border-bottom: 1px solid #e0e0e0;
  width: 100%;
}

.banner-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  padding: 0 20px;
  flex-wrap: wrap;
}

.banner-item {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #212121;
  text-decoration: none;
  font-size: 14px;
  transition: background 0.3s ease, color 0.3s ease, transform 0.3s ease;
  padding: 6px 12px;
  border-radius: 6px;
}

.banner-item:hover {
  background: #f5f5f5;
  color: #1b5e20;
  transform: translateY(-1px);
}

.banner-item i {
  font-size: 16px;
  color: #1b5e20;
  opacity: 0.9;
}

.banner-item span {
  font-weight: 500;
  letter-spacing: 0.3px;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease, opacity 0.3s ease;
}
.slide-enter-from {
  transform: translateY(-100%);
  opacity: 0;
}
.slide-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}

@media (max-width: 768px) {
  .top-banner {
    padding: 8px 0;
  }
  .banner-container {
    flex-direction: column;
    gap: 10px;
    text-align: center;
  }
  .banner-item {
    width: 100%;
    justify-content: center;
    padding: 8px;
  }
  .banner-item span {
    font-size: 13px;
  }
}

@media (max-width: 480px) {
  .banner-item i {
    font-size: 14px;
  }
  .banner-item span {
    font-size: 12px;
  }
}
</style>