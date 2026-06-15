<template>
  <section class="about-section" id="about">
    <div class="about-inner">

      <!-- Left: text -->
      <div class="about-content" data-aos="fade-right" data-aos-duration="1000">

        <div class="about-badge">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="#C9A84C">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
          <span>{{ $t('about.label') }}</span>
        </div>

        <h2 class="about-title">{{ $t('about.title') }}</h2>

        <p class="about-text">{{ $t('about.paragraph1') }}</p>
        <p class="about-text">{{ $t('about.paragraph2') }}</p>

        <blockquote class="about-quote">{{ $t('about.quote') }}</blockquote>

        <a href="#contact" class="about-cta" @click.prevent="scrollTo('contact')">
          {{ $t('about.cta') }}
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
            <line x1="5" y1="12" x2="19" y2="12"/>
            <polyline points="12 5 19 12 12 19"/>
          </svg>
        </a>
      </div>

      <!-- Center: photo -->
      <div class="about-photo-wrap" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
        <div class="about-photo-frame">
          <img
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=85&auto=format&fit=crop&crop=faces"
            alt="Seniors living happily at home"
            class="about-photo"
          />
          <!-- Experience badge over photo -->
          <div class="experience-badge">
            <span class="exp-number">5+</span>
            <span class="exp-label">Years of<br/>Trusted Care</span>
          </div>
        </div>
      </div>

      <!-- Right: contact card -->
      <div class="about-card" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
        <h3 class="card-title">{{ $t('about.cardTitle') }}</h3>
        <div class="card-divider">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="#C9A84C">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
        </div>

        <div class="card-contact-list">
          <a href="tel:+16138516775" class="card-contact-item">
            <div class="card-icon card-icon--purple">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.68A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/>
              </svg>
            </div>
            <span>+1 (613) 851-6775</span>
          </a>

          <a href="mailto:info@swiftcomfortline.ca" class="card-contact-item">
            <div class="card-icon card-icon--purple">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </div>
            <span>info@swiftcomfortline.ca</span>
          </a>

          <div class="card-contact-item">
            <div class="card-icon card-icon--purple">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                <circle cx="12" cy="9" r="2.5"/>
              </svg>
            </div>
            <span>Serving Communities Across Canada</span>
          </div>
        </div>

        <a href="#contact" class="card-cta" @click.prevent="scrollTo('contact')">
          {{ $t('about.cardBtn') }}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
            <line x1="5" y1="12" x2="19" y2="12"/>
            <polyline points="12 5 19 12 12 19"/>
          </svg>
        </a>
      </div>

    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

onMounted(() => {
  AOS.init({ duration: 900, once: true, easing: 'ease-in-out' })
})

const scrollTo = (id) => {
  const el = document.getElementById(id)
  if (!el) return
  const top = el.getBoundingClientRect().top + window.pageYOffset - 100
  window.scrollTo({ top, behavior: 'smooth' })
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,600;0,700;1,600&family=DM+Sans:wght@300;400;500;600&display=swap');

/* ─── Section ───────────────────────────────────────────── */
.about-section {
  background: #2D1B69;
  padding: 90px 40px;
  overflow: hidden;
  position: relative;
}

/* Subtle pattern overlay */
.about-section::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px);
  background-size: 32px 32px;
  pointer-events: none;
}

/* Gold glow top right */
.about-section::after {
  content: '';
  position: absolute;
  top: -80px;
  right: -80px;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(201,168,76,0.12) 0%, transparent 65%);
  pointer-events: none;
}

/* ─── Inner grid ────────────────────────────────────────── */
.about-inner {
  position: relative;
  z-index: 2;
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 360px;
  gap: 48px;
  align-items: center;
}

/* ─── Left: text ────────────────────────────────────────── */
.about-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #C9A84C;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 18px;
}

.about-title {
  font-family: 'Lora', Georgia, serif;
  font-size: clamp(1.8rem, 3vw, 2.6rem);
  font-weight: 700;
  color: #ffffff;
  line-height: 1.2;
  margin-bottom: 20px;
}

.about-text {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.95rem;
  font-weight: 300;
  color: rgba(255,255,255,0.72);
  line-height: 1.8;
  margin-bottom: 14px;
}

.about-quote {
  font-family: 'Lora', Georgia, serif;
  font-style: italic;
  font-size: 0.95rem;
  color: #C9A84C;
  border-left: 3px solid #C9A84C;
  padding-left: 16px;
  margin: 24px 0 32px;
  line-height: 1.6;
}

.about-cta {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  border: 2px solid rgba(255,255,255,0.4);
  color: #ffffff;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  padding: 13px 28px;
  border-radius: 50px;
  text-decoration: none;
  transition: all 0.25s ease;
}

.about-cta:hover {
  background: rgba(255,255,255,0.1);
  border-color: #ffffff;
  transform: translateY(-2px);
}

.about-cta svg { transition: transform 0.2s ease; }
.about-cta:hover svg { transform: translateX(4px); }

/* ─── Center: photo ─────────────────────────────────────── */
.about-photo-wrap {
  position: relative;
}

.about-photo-frame {
  position: relative;
  border-radius: 20px;
  overflow: visible;
}

.about-photo {
  width: 100%;
  height: 480px;
  object-fit: cover;
  object-position: center top;
  border-radius: 20px;
  display: block;
  box-shadow: 0 24px 64px rgba(0,0,0,0.3);
}

/* Experience badge */
.experience-badge {
  position: absolute;
  bottom: -20px;
  left: -20px;
  background: #C9A84C;
  border-radius: 14px;
  padding: 16px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 8px 28px rgba(201,168,76,0.4);
  animation: floatBadge 3s ease-in-out infinite;
}

@keyframes floatBadge {
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(-6px); }
}

.exp-number {
  font-family: 'Lora', Georgia, serif;
  font-size: 1.8rem;
  font-weight: 700;
  color: #ffffff;
  line-height: 1;
}

.exp-label {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.7rem;
  color: rgba(255,255,255,0.85);
  text-align: center;
  line-height: 1.3;
  margin-top: 4px;
}

/* ─── Right: contact card ───────────────────────────────── */
.about-card {
  background: #ffffff;
  border-radius: 20px;
  padding: 36px 32px;
  box-shadow: 0 20px 56px rgba(0,0,0,0.2);
}

.card-title {
  font-family: 'Lora', Georgia, serif;
  font-size: 1.4rem;
  font-weight: 700;
  color: #2D1B69;
  text-align: center;
  margin-bottom: 16px;
}

.card-divider {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 24px;
}

.card-divider::before,
.card-divider::after {
  content: '';
  flex: 1;
  height: 1px;
  background: linear-gradient(to right, transparent, #C9A84C);
}

.card-divider::after {
  background: linear-gradient(to left, transparent, #C9A84C);
}

.card-contact-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 28px;
}

.card-contact-item {
  display: flex;
  align-items: center;
  gap: 14px;
  text-decoration: none;
  transition: opacity 0.2s ease;
}

.card-contact-item:hover { opacity: 0.75; }

.card-contact-item span {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.9rem;
  color: #3a3a5a;
  font-weight: 400;
}

.card-icon {
  width: 38px;
  height: 38px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.card-icon--purple {
  background: rgba(45,27,105,0.08);
  color: #2D1B69;
}

.card-cta {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  background: #C9A84C;
  color: #ffffff;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.9rem;
  font-weight: 600;
  padding: 14px;
  border-radius: 50px;
  text-decoration: none;
  box-shadow: 0 6px 20px rgba(201,168,76,0.35);
  transition: all 0.25s ease;
}

.card-cta:hover {
  background: #b8943e;
  transform: translateY(-2px);
  box-shadow: 0 10px 28px rgba(201,168,76,0.45);
}

/* ─── Responsive ────────────────────────────────────────── */
@media (max-width: 1100px) {
  .about-inner {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
  }

  .about-card {
    grid-column: 1 / -1;
    max-width: 480px;
    margin: 0 auto;
    width: 100%;
  }
}

@media (max-width: 768px) {
  .about-section { padding: 64px 20px; }

  .about-inner {
    grid-template-columns: 1fr;
    gap: 36px;
  }

  .about-photo { height: 320px; }

  .about-card { grid-column: 1; }

  .experience-badge {
    left: 50%;
    transform: translateX(-50%);
    bottom: -18px;
  }
}
</style>