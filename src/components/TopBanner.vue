<template>
  <div class="top-banner" ref="bannerRef">
    <div class="banner-left">
      <a href="tel:+16138516775" class="banner-item">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.68A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/>
        </svg>
        <span>+1 (613) 851-6775</span>
      </a>

      <span class="banner-divider"></span>

      <a href="mailto:info@swiftcomfortline.ca" class="banner-item">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
          <polyline points="22,6 12,13 2,6"/>
        </svg>
        <span>info@swiftcomfortline.ca</span>
      </a>

      <span class="banner-divider"></span>

      <div class="banner-item">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
          <circle cx="12" cy="9" r="2.5"/>
        </svg>
        <span>Serving Communities Across Canada</span>
      </div>
    </div>

    <div class="banner-right">
      <a href="#" aria-label="Facebook" class="social-icon">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
        </svg>
      </a>
      <a href="#" aria-label="Instagram" class="social-icon">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
          <circle cx="12" cy="12" r="4"/>
          <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
        </svg>
      </a>
      <a href="#" aria-label="LinkedIn" class="social-icon">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
          <circle cx="4" cy="4" r="2"/>
        </svg>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopBanner',
  mounted() {
    this.notifyHeight()
    window.addEventListener('resize', this.notifyHeight)
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.notifyHeight)
  },
  methods: {
    notifyHeight() {
      const height = this.$refs.bannerRef ? this.$refs.bannerRef.offsetHeight : 0
      document.documentElement.style.setProperty('--banner-height', `${height}px`)
    },
  },
}
</script>

<style scoped>
.top-banner {
  background: #2D1B69;
  padding: 9px 40px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1001;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.banner-left {
  display: flex;
  align-items: center;
  gap: 6px;
  flex-wrap: wrap;
}

.banner-divider {
  width: 1px;
  height: 13px;
  background: rgba(255,255,255,0.2);
  display: inline-block;
  flex-shrink: 0;
}

.banner-item {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: rgba(255,255,255,0.75);
  text-decoration: none;
  font-family: 'DM Sans', sans-serif;
  font-size: 12.5px;
  font-weight: 400;
  padding: 4px 8px;
  border-radius: 4px;
  transition: color 0.2s ease;
  white-space: nowrap;
}

.banner-item svg {
  flex-shrink: 0;
  color: #C9A84C;
}

.banner-item:hover {
  color: rgba(255,255,255,0.95);
}

.banner-right {
  display: flex;
  align-items: center;
  gap: 8px;
}

.social-icon {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: rgba(255,255,255,0.08);
  border: 1px solid rgba(255,255,255,0.15);
  color: rgba(255,255,255,0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease;
}

.social-icon:hover {
  background: #C9A84C;
  color: #fff;
  border-color: #C9A84C;
}

@media (max-width: 768px) {
  .top-banner {
    padding: 7px 16px;
  }
  .banner-left .banner-item:last-child,
  .banner-left .banner-divider:last-of-type {
    display: none;
  }
  .banner-item span {
    font-size: 11.5px;
  }
}

@media (max-width: 480px) {
  .banner-left .banner-item:not(:first-child) {
    display: none;
  }
  .banner-divider {
    display: none;
  }
}
</style>