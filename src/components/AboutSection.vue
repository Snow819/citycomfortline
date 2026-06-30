<template>
  <section class="about-section" id="about">

    <!-- ── Decorative blobs ───────────────────────────────── -->
    <div class="blob blob--tr" aria-hidden="true"></div>
    <div class="blob blob--bl" aria-hidden="true"></div>
    <div class="dot-grid" aria-hidden="true"></div>

    <div class="about-inner">

      <!-- ════════════════════════════════════════════════════
           LEFT — text content
      ═════════════════════════════════════════════════════ -->
      <div class="about-content">

        <!-- Eyebrow badge -->
        <div class="about-badge" data-aos="fade-up" data-aos-duration="700">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="#CC933A">
            <!-- #CC933A = --color-gold -->
            <path
              d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
          <span>{{ $t('about.label') }}</span>
        </div>

        <!-- Headline -->
        <h2 class="about-title" data-aos="fade-up" data-aos-duration="700" data-aos-delay="60">
          {{ $t('about.title') }}
        </h2>

        <!-- Body paragraphs -->
        <p class="about-text" data-aos="fade-up" data-aos-duration="700" data-aos-delay="120">
          {{ $t('about.paragraph1') }}
        </p>
        <p class="about-text" data-aos="fade-up" data-aos-duration="700" data-aos-delay="160">
          {{ $t('about.paragraph2') }}
        </p>

        <!-- Pull-quote -->
        <blockquote class="about-quote" data-aos="fade-up" data-aos-duration="700" data-aos-delay="210">
          <span class="quote-mark">"</span>
          {{ $t('about.quote') }}
        </blockquote>

        <!-- Mission pillars — 3 quick value chips -->
        <div class="mission-chips" data-aos="fade-up" data-aos-duration="700" data-aos-delay="260">
          <div class="mission-chip" v-for="(chip, i) in missionChips" :key="i">
            <component :is="chip.icon" />
            <span>{{ $t(chip.label) }}</span>
          </div>
        </div>

        <!-- Stats row -->
        <div class="about-stats" data-aos="fade-up" data-aos-duration="700" data-aos-delay="310">
          <div class="about-stat" v-for="(s, i) in stats" :key="i">
            <span class="stat-value">{{ s.value }}</span>
            <span class="stat-label">{{ $t(s.label) }}</span>
          </div>
        </div>

        <!-- CTA -->
        <div class="about-actions" data-aos="fade-up" data-aos-duration="700" data-aos-delay="360">
          <a href="#contact" class="btn-gold" @click.prevent="scrollTo('contact')">
            {{ $t('about.cta') }}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
              stroke-linecap="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
          <a href="tel:+16138516775" class="btn-ghost">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"
              stroke-linecap="round">
              <path
                d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.68A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" />
            </svg>
            {{ $t('about.callUs') }}
          </a>
        </div>

      </div>

      <!-- ════════════════════════════════════════════════════
           CENTRE — photo stack
      ═════════════════════════════════════════════════════ -->
      <div class="about-photo-col" data-aos="fade-up" data-aos-duration="900" data-aos-delay="100">

        <!-- Decorative frame ring -->
        <div class="photo-ring" aria-hidden="true"></div>

        <div class="photo-frame">
          <img src="../assets/about.png" alt="Swift Comfort Line caregiver with client" class="about-photo" />

          <!-- Floating experience badge -->
          <div class="exp-badge">
            <span class="exp-number">5<sup>+</sup></span>
            <span class="exp-label">{{ $t('about.expLabel') }}</span>
          </div>

          <!-- Floating availability pill -->
          <div class="avail-pill">
            <span class="avail-dot"></span>
            {{ $t('about.availPill') }}
          </div>
        </div>

        <!-- Second smaller accent photo placeholder — remove if not needed -->
        <div class="photo-accent" aria-hidden="true">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
            <path
              d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
              fill="#CC933A" opacity="0.9" />
          </svg>
          <span>{{ $t('about.accentLabel') }}</span>
        </div>

      </div>

      <!-- ════════════════════════════════════════════════════
           RIGHT — contact card
      ═════════════════════════════════════════════════════ -->
      <div class="about-card" data-aos="fade-left" data-aos-duration="900" data-aos-delay="200">

        <!-- Card header -->
        <div class="card-header">
          <div class="card-header-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#CC933A" stroke-width="1.8"
              stroke-linecap="round">
              <!-- #CC933A = --color-gold -->
              <path
                d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.68A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" />
            </svg>
          </div>
          <div>
            <h3 class="card-title">{{ $t('about.cardTitle') }}</h3>
            <p class="card-sub">{{ $t('about.cardSub') }}</p>
          </div>
        </div>

        <!-- Divider -->
        <div class="card-divider">
          <span class="divider-line"></span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="#CC933A">
            <path
              d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
          <span class="divider-line"></span>
        </div>

        <!-- Contact list -->
        <ul class="card-contact-list">

          <li class="card-contact-item">
            <a href="tel:+16138516775" class="contact-link">
              <div class="card-icon">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#45137D" stroke-width="2"
                  stroke-linecap="round">
                  <!-- #45137D = --color-primary -->
                  <path
                    d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.68A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" />
                </svg>
              </div>
              <div class="contact-text">
                <span class="contact-label">{{ $t('about.contact.phoneLabel') }}</span>
                <span class="contact-value">+1 (613) 851-6775</span>
              </div>
            </a>
          </li>

          <li class="card-contact-item">
            <a href="mailto:info@swiftcomfortline.ca" class="contact-link">
              <div class="card-icon">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#45137D" stroke-width="2"
                  stroke-linecap="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div class="contact-text">
                <span class="contact-label">{{ $t('about.contact.emailLabel') }}</span>
                <span class="contact-value">info@swiftcomfortline.ca</span>
              </div>
            </a>
          </li>

          <li class="card-contact-item">
            <div class="contact-link">
              <div class="card-icon">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#45137D" stroke-width="2"
                  stroke-linecap="round">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                  <circle cx="12" cy="9" r="2.5" />
                </svg>
              </div>
              <div class="contact-text">
                <span class="contact-label">{{ $t('about.contact.locationLabel') }}</span>
                <span class="contact-value">{{ $t('about.contact.locationValue') }}</span>
              </div>
            </div>
          </li>

          <li class="card-contact-item">
            <div class="contact-link">
              <div class="card-icon">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#45137D" stroke-width="2"
                  stroke-linecap="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <div class="contact-text">
                <span class="contact-label">{{ $t('about.contact.hoursLabel') }}</span>
                <span class="contact-value">{{ $t('about.contact.hoursValue') }}</span>
              </div>
            </div>
          </li>

        </ul>

        <!-- Urgency note -->
        <div class="card-urgency">
          <span class="urgency-dot"></span>
          <p class="urgency-text">{{ $t('about.urgency') }}</p>
        </div>

        <!-- CTA button -->
        <a href="#contact" class="card-cta" @click.prevent="scrollTo('contact')">
          {{ $t('about.cardBtn') }}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
            stroke-linecap="round">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </a>

        <!-- Trust chips below button -->
        <div class="card-trust">
          <span class="card-trust-chip">✓ No contracts</span>
          <span class="card-trust-chip">✓ Free assessment</span>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
import { onMounted, defineComponent, h } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

/*
  SVG attributes cannot read CSS custom properties cross-browser.
  Hex values hardcoded to main.css tokens:
    #45137D  = --color-primary
    #320e5c  = --color-primary-dark
    #CC933A  = --color-gold
    #e0aa54  = --color-gold-bright
*/

/* ── Mission chip icons ──────────────────────────────────── */
const IconHeart = defineComponent({
  render: () => h('svg', {
    width: 14, height: 14, viewBox: '0 0 24 24',
    fill: '#CC933A',
  }, [
    h('path', { d: 'M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z' }),
  ]),
})

const IconShield = defineComponent({
  render: () => h('svg', {
    width: 14, height: 14, viewBox: '0 0 24 24',
    fill: 'none', stroke: '#CC933A', 'stroke-width': '2', 'stroke-linecap': 'round',
  }, [
    h('path', { d: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z' }),
  ]),
})

const IconStar = defineComponent({
  render: () => h('svg', {
    width: 14, height: 14, viewBox: '0 0 24 24',
    fill: '#CC933A',
  }, [
    h('polygon', { points: '12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2' }),
  ]),
})

const missionChips = [
  { icon: IconHeart, label: 'about.chip1' },
  { icon: IconShield, label: 'about.chip2' },
  { icon: IconStar, label: 'about.chip3' },
]

const stats = [
  { value: '200+', label: 'about.stat1' },
  { value: '98%', label: 'about.stat2' },
  { value: '5+', label: 'about.stat3' },
  { value: '24/7', label: 'about.stat4' },
]

onMounted(() => {
  AOS.init({ duration: 860, once: true, easing: 'ease-out-cubic', offset: 50 })
})

const scrollTo = (id) => {
  const el = document.getElementById(id)
  if (!el) return
  window.scrollTo({
    top: el.getBoundingClientRect().top + window.pageYOffset - 100,
    behavior: 'smooth',
  })
}
</script>

<style scoped>
/* ─── Section ───────────────────────────────────────────── */
.about-section {
  background: var(--color-primary);
  /* #45137D */
  padding: 100px 40px 110px;
  overflow: hidden;
  position: relative;
}

/* ─── Decorative elements ───────────────────────────────── */

/* Dot-grid texture */
.dot-grid {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(rgba(255, 255, 255, 0.045) 1px, transparent 1px);
  background-size: 28px 28px;
  pointer-events: none;
}

/* Gold radial top-right */
.blob--tr {
  position: absolute;
  top: -120px;
  right: -120px;
  width: 480px;
  height: 480px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(204, 147, 58, 0.18) 0%, transparent 65%);
  pointer-events: none;
}

/* Soft purple bottom-left */
.blob--bl {
  position: absolute;
  bottom: -140px;
  left: -140px;
  width: 420px;
  height: 420px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(93, 27, 168, 0.35) 0%, transparent 65%);
  pointer-events: none;
}

/* ─── Inner grid: [text] [photo] [card] ─────────────────── */
.about-inner {
  position: relative;
  z-index: 2;
  max-width: 1220px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.15fr 1fr 380px;
  gap: 52px;
  align-items: center;
}

/* ════════════════════════════════════════════════════════════
   LEFT — text content
═════════════════════════════════════════════════════════════ */

/* ─── Eyebrow badge ──────────────────────────────────────── */
.about-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--color-gold-bright);
  background: rgba(204, 147, 58, 0.13);
  border: 1px solid rgba(204, 147, 58, 0.28);
  font-family: var(--font-body);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.13em;
  text-transform: uppercase;
  padding: 5px 14px 5px 9px;
  border-radius: 50px;
  backdrop-filter: blur(4px);
  margin-bottom: 20px;
}

/* ─── Title ──────────────────────────────────────────────── */
.about-title {
  font-family: var(--font-display);
  color: #ffffff;
  font-size: clamp(1.9rem, 3vw, 2.75rem);
  font-weight: 700;
  line-height: 1.18;
  margin-bottom: 22px;
  /* Subtle warm text shadow for depth */
  text-shadow: 0 2px 18px rgba(0, 0, 0, 0.25);
}

/* ─── Body text ──────────────────────────────────────────── */
.about-text {
  font-family: var(--font-body);
  font-size: 0.95rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.80);
  line-height: 1.82;
  margin-bottom: 14px;
  max-width: 500px;
}

/* ─── Pull-quote ─────────────────────────────────────────── */
.about-quote {
  position: relative;
  font-family: var(--font-display);
  font-style: italic;
  font-size: 1rem;
  color: var(--color-gold-bright);
  border-left: 3px solid var(--color-gold);
  padding: 10px 0 10px 20px;
  margin: 26px 0 28px;
  line-height: 1.65;
  max-width: 460px;
}

.quote-mark {
  font-size: 3rem;
  line-height: 0;
  vertical-align: -0.6rem;
  color: var(--color-gold);
  opacity: 0.45;
  margin-right: 2px;
  font-family: var(--font-display);
}

/* ─── Mission chips ──────────────────────────────────────── */
.mission-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 28px;
}

.mission-chip {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  background: rgba(255, 255, 255, 0.07);
  border: 1px solid rgba(255, 255, 255, 0.14);
  backdrop-filter: blur(6px);
  color: rgba(255, 255, 255, 0.88);
  font-family: var(--font-body);
  font-size: 0.78rem;
  font-weight: 500;
  padding: 7px 14px;
  border-radius: 50px;
  transition: background 0.2s ease, border-color 0.2s ease;
}

.mission-chip:hover {
  background: rgba(204, 147, 58, 0.14);
  border-color: rgba(204, 147, 58, 0.38);
}

/* ─── Stats row ──────────────────────────────────────────── */
.about-stats {
  display: flex;
  align-items: center;
  gap: 0;
  margin-bottom: 32px;
  padding: 20px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
}

.about-stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3px;
  flex: 1;
  padding: 0 12px;
  border-right: 1px solid rgba(255, 255, 255, 0.12);
  text-align: center;
}

.about-stat:last-child {
  border-right: none;
}

.stat-value {
  font-family: var(--font-display);
  font-size: 1.7rem;
  font-weight: 700;
  color: var(--color-gold-bright);
  line-height: 1;
  /* Warm luminance */
  text-shadow: 0 0 20px rgba(224, 170, 84, 0.35);
}

.stat-label {
  font-family: var(--font-body);
  font-size: 0.68rem;
  color: rgba(255, 255, 255, 0.58);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  line-height: 1.3;
  text-align: center;
}

/* ─── Action buttons ─────────────────────────────────────── */
.about-actions {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}

.btn-gold {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: linear-gradient(135deg, var(--color-gold-bright), var(--color-gold), var(--color-gold-dark));
  color: var(--color-primary-deep);
  font-family: var(--font-body);
  font-size: 0.88rem;
  font-weight: 700;
  padding: 14px 30px;
  border-radius: 50px;
  text-decoration: none;
  box-shadow:
    0 8px 28px rgba(204, 147, 58, 0.42),
    inset 0 1px 0 rgba(255, 255, 255, 0.22);
  transition: transform 0.22s ease, box-shadow 0.22s ease;
}

.btn-gold:hover {
  transform: translateY(-3px);
  box-shadow:
    0 14px 38px rgba(204, 147, 58, 0.52),
    inset 0 1px 0 rgba(255, 255, 255, 0.22);
}

.btn-gold svg {
  transition: transform 0.2s ease;
}

.btn-gold:hover svg {
  transform: translateX(4px);
}

.btn-ghost {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(255, 255, 255, 0.07);
  color: #ffffff;
  font-family: var(--font-body);
  font-size: 0.88rem;
  font-weight: 600;
  padding: 12px 26px;
  border-radius: 50px;
  border: 1.5px solid rgba(255, 255, 255, 0.30);
  text-decoration: none;
  backdrop-filter: blur(6px);
  transition: all 0.22s ease;
}

.btn-ghost:hover {
  background: rgba(255, 255, 255, 0.13);
  border-color: rgba(255, 255, 255, 0.55);
  transform: translateY(-2px);
}

/* ════════════════════════════════════════════════════════════
   CENTRE — photo
═════════════════════════════════════════════════════════════ */
.about-photo-col {
  position: relative;
  /* Extra top padding makes room for the ring above the photo */
  padding-top: 24px;
}

/* Decorative offset ring behind photo */
.photo-ring {
  position: absolute;
  top: 0;
  left: 18px;
  right: -18px;
  bottom: 18px;
  border-radius: var(--radius-lg);
  border: 2px solid rgba(204, 147, 58, 0.22);
  pointer-events: none;
  z-index: 0;
}

.photo-frame {
  position: relative;
  z-index: 1;
  border-radius: var(--radius-lg);
  overflow: visible;
  /* badges hang outside */
}

.about-photo {
  width: 100%;
  height: 500px;
  object-fit: cover;
  object-position: center top;
  border-radius: var(--radius-lg);
  display: block;
  box-shadow:
    var(--shadow-lg),
    0 0 0 1px rgba(204, 147, 58, 0.15);
}

/* ─── Experience badge ───────────────────────────────────── */
.exp-badge {
  position: absolute;
  bottom: -22px;
  left: -22px;
  z-index: 3;
  background: linear-gradient(135deg, var(--color-gold-bright), var(--color-gold));
  border-radius: var(--radius-md);
  padding: 18px 22px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3px;
  box-shadow:
    0 10px 32px rgba(204, 147, 58, 0.46),
    inset 0 1px 0 rgba(255, 255, 255, 0.25);
  animation: floatBadge 3.5s ease-in-out infinite;
}

@keyframes floatBadge {

  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-7px);
  }
}

.exp-number {
  font-family: var(--font-display);
  font-size: 2rem;
  font-weight: 700;
  color: #ffffff;
  line-height: 1;
}

.exp-number sup {
  font-size: 1rem;
  vertical-align: super;
}

.exp-label {
  font-family: var(--font-body);
  font-size: 0.68rem;
  color: rgba(255, 255, 255, 0.88);
  text-align: center;
  line-height: 1.35;
}

/* ─── Availability pill ──────────────────────────────────── */
.avail-pill {
  position: absolute;
  top: -16px;
  right: -16px;
  z-index: 3;
  display: flex;
  align-items: center;
  gap: 7px;
  background: rgba(26, 5, 53, 0.88);
  /* --color-primary-deep */
  border: 1px solid rgba(204, 147, 58, 0.35);
  color: rgba(255, 255, 255, 0.90);
  font-family: var(--font-body);
  font-size: 0.75rem;
  font-weight: 600;
  padding: 8px 16px;
  border-radius: 50px;
  backdrop-filter: blur(8px);
  white-space: nowrap;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
}

.avail-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #4ade80;
  /* green — intentional semantic colour, not a brand token */
  box-shadow: 0 0 6px rgba(74, 222, 128, 0.7);
  animation: pulse 2s ease-out infinite;
  flex-shrink: 0;
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(74, 222, 128, 0.55);
  }

  60% {
    box-shadow: 0 0 0 7px rgba(74, 222, 128, 0);
  }

  100% {
    box-shadow: 0 0 0 0 rgba(74, 222, 128, 0);
  }
}

/* ─── Small accent tile below photo ─────────────────────── */
.photo-accent {
  position: absolute;
  bottom: 50px;
  right: -28px;
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  background: var(--color-primary-dark);
  border: 1px solid rgba(204, 147, 58, 0.28);
  border-radius: var(--radius-sm);
  padding: 14px 16px;
  font-family: var(--font-body);
  font-size: 0.68rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.80);
  text-align: center;
  backdrop-filter: blur(8px);
  box-shadow: var(--shadow-md);
  white-space: nowrap;
  letter-spacing: 0.04em;
}

/* ════════════════════════════════════════════════════════════
   RIGHT — contact card
═════════════════════════════════════════════════════════════ */
.about-card {
  background: var(--color-bg);
  border-radius: var(--radius-lg);
  padding: 36px 30px 28px;
  box-shadow:
    var(--shadow-lg),
    0 0 0 1px rgba(69, 19, 125, 0.06);
  position: relative;
  overflow: hidden;
}

/* Gold accent strip top */
.about-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(to right, var(--color-gold-bright), var(--color-gold), transparent);
}

/* ─── Card header ────────────────────────────────────────── */
.card-header {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  margin-bottom: 18px;
}

.card-header-icon {
  width: 46px;
  height: 46px;
  border-radius: var(--radius-sm);
  background: var(--color-primary-light);
  border: 1px solid rgba(204, 147, 58, 0.18);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.card-title {
  font-family: var(--font-display);
  font-size: 1.22rem;
  font-weight: 700;
  color: var(--color-primary);
  margin: 0 0 3px;
  line-height: 1.25;
}

.card-sub {
  font-family: var(--font-body);
  font-size: 0.78rem;
  color: var(--color-text-muted);
  margin: 0;
  line-height: 1.4;
}

/* ─── Divider ────────────────────────────────────────────── */
.card-divider {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
}

.divider-line {
  flex: 1;
  height: 1px;
  background: linear-gradient(to right, transparent, var(--color-gold));
}

.card-divider :last-child .divider-line {
  background: linear-gradient(to left, transparent, var(--color-gold));
}

/* Second line (right side) */
.card-divider span:last-child {
  background: linear-gradient(to left, transparent, var(--color-gold));
}

/* ─── Contact list ───────────────────────────────────────── */
.card-contact-list {
  list-style: none;
  padding: 0;
  margin: 0 0 18px;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.card-contact-item {
  border-radius: var(--radius-sm);
  overflow: hidden;
  transition: background 0.2s ease;
}

.card-contact-item:hover {
  background: var(--color-bg-soft);
}

.contact-link {
  display: flex;
  align-items: center;
  gap: 13px;
  padding: 10px 8px;
  text-decoration: none;
  color: inherit;
}

.card-icon {
  width: 36px;
  height: 36px;
  border-radius: var(--radius-sm);
  background: var(--color-primary-light);
  border: 1px solid var(--color-border);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: background 0.2s ease, border-color 0.2s ease;
}

.card-contact-item:hover .card-icon {
  background: rgba(204, 147, 58, 0.10);
  border-color: rgba(204, 147, 58, 0.25);
}

.contact-text {
  display: flex;
  flex-direction: column;
  gap: 1px;
  min-width: 0;
}

.contact-label {
  font-family: var(--font-body);
  font-size: 0.67rem;
  font-weight: 700;
  color: var(--color-gold);
  text-transform: uppercase;
  letter-spacing: 0.09em;
}

.contact-value {
  font-family: var(--font-body);
  font-size: 0.875rem;
  color: var(--color-text);
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* ─── Urgency notice ─────────────────────────────────────── */
.card-urgency {
  display: flex;
  align-items: flex-start;
  gap: 9px;
  background: var(--color-bg-soft);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  padding: 10px 13px;
  margin-bottom: 18px;
}

.urgency-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--color-gold);
  flex-shrink: 0;
  margin-top: 5px;
  animation: pulse 2.5s ease-out infinite;
}

.urgency-text {
  font-family: var(--font-body);
  font-size: 0.78rem;
  color: var(--color-text-muted);
  line-height: 1.55;
  margin: 0;
}

/* ─── Card CTA ───────────────────────────────────────────── */
.card-cta {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  background: linear-gradient(135deg, var(--color-gold-bright), var(--color-gold));
  color: #ffffff;
  font-family: var(--font-body);
  font-size: 0.9rem;
  font-weight: 700;
  padding: 14px;
  border-radius: 50px;
  text-decoration: none;
  box-shadow:
    0 8px 24px rgba(204, 147, 58, 0.38),
    inset 0 1px 0 rgba(255, 255, 255, 0.20);
  transition: transform 0.22s ease, box-shadow 0.22s ease;
  margin-bottom: 12px;
}

.card-cta:hover {
  transform: translateY(-2px);
  box-shadow:
    0 14px 32px rgba(204, 147, 58, 0.48),
    inset 0 1px 0 rgba(255, 255, 255, 0.20);
}

.card-cta svg {
  transition: transform 0.2s ease;
}

.card-cta:hover svg {
  transform: translateX(4px);
}

/* ─── Trust chips under button ───────────────────────────── */
.card-trust {
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
}

.card-trust-chip {
  font-family: var(--font-body);
  font-size: 0.71rem;
  font-weight: 600;
  color: var(--color-text-muted);
  background: var(--color-bg-soft);
  border: 1px solid var(--color-border);
  padding: 4px 10px;
  border-radius: 50px;
}

/* ─── Responsive ────────────────────────────────────────── */
@media (max-width: 1100px) {
  .about-inner {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
    gap: 40px;
  }

  .about-card {
    grid-column: 1 / -1;
    max-width: 520px;
    margin: 0 auto;
    width: 100%;
  }

  .photo-accent {
    display: none;
  }
}

@media (max-width: 768px) {
  .about-section {
    padding: 64px 20px 80px;
  }

  .about-inner {
    grid-template-columns: 1fr;
    gap: 36px;
  }

  .about-photo {
    height: 340px;
  }

  .about-card {
    grid-column: 1;
    max-width: 100%;
  }

  .exp-badge {
    left: 50%;
    transform: translateX(-50%);
    bottom: -20px;
    animation: none;
  }

  .avail-pill {
    top: 12px;
    right: 12px;
    font-size: 0.68rem;
    padding: 6px 12px;
  }

  .photo-ring {
    display: none;
  }

  .about-stats {
    flex-wrap: wrap;
    gap: 16px;
    padding: 18px 0;
  }

  .about-stat {
    flex: 0 0 calc(50% - 8px);
    border-right: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.10);
    padding-bottom: 12px;
  }

  .about-stat:nth-child(odd) {
    border-right: 1px solid rgba(255, 255, 255, 0.10);
  }

  .about-stat:nth-last-child(-n+2) {
    border-bottom: none;
  }

  .about-actions {
    flex-direction: column;
    align-items: stretch;
  }

  .btn-gold,
  .btn-ghost {
    justify-content: center;
  }

  .mission-chips {
    gap: 6px;
  }
}

@media (max-width: 420px) {
  .about-title {
    font-size: 1.75rem;
  }

  .stat-value {
    font-size: 1.4rem;
  }
}

/* ─── Reduced motion ────────────────────────────────────── */
@media (prefers-reduced-motion: reduce) {

  .exp-badge,
  .avail-dot,
  .urgency-dot {
    animation: none !important;
  }
}
</style>