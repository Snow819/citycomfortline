<template>
  <footer class="footer">
    <div class="footer-inner">

      <!-- Top grid -->
      <div class="footer-grid">

        <!-- Brand -->
        <div class="footer-brand">
          <div class="footer-logo-row">
            <img src="@/assets/Logo.svg" alt="Swift Comfort Line" class="footer-logo" />
            <div class="footer-logo-text">
              <span class="footer-logo-name">Swift Comfort <span class="gold">Line</span></span>
              <span class="footer-logo-divider"></span>
              <span class="footer-logo-tagline">{{ t('footer.tagline') }}</span>
            </div>
          </div>
          <p class="footer-desc">{{ t('footer.description') }}</p>
          <div class="social-icons">
            <a href="#" title="Facebook" aria-label="Facebook">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
            </a>
            <a href="#" title="Instagram" aria-label="Instagram">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
            </a>
            <a href="#" title="LinkedIn" aria-label="LinkedIn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div class="footer-col">
          <h4 class="footer-heading">{{ t('footer.quickLinksTitle') }}</h4>
          <ul class="footer-links">
            <li><a href="#home" @click.prevent="scrollTo('home')">{{ t('footer.links.home') }}</a></li>
            <li><a href="#about" @click.prevent="scrollTo('about')">{{ t('footer.links.about') }}</a></li>
            <li><a href="#services" @click.prevent="scrollTo('services')">{{ t('footer.links.services') }}</a></li>
            <li><a href="#areas" @click.prevent="scrollTo('areas')">{{ t('footer.links.serviceArea') }}</a></li>
            <li><a href="#testimonials" @click.prevent="scrollTo('testimonials')">{{ t('footer.links.testimonial') }}</a></li>
          </ul>
        </div>

        <!-- Services -->
        <div class="footer-col">
          <h4 class="footer-heading">{{ t('footer.servicesTitle') }}</h4>
          <ul class="footer-links">
            <li><a href="#services" @click.prevent="scrollTo('services')">{{ t('ourServices.companionship.title') }}</a></li>
            <li><a href="#services" @click.prevent="scrollTo('services')">{{ t('ourServices.homeSupport.title') }}</a></li>
            <li><a href="#services" @click.prevent="scrollTo('services')">{{ t('ourServices.transportation.title') }}</a></li>
          </ul>
        </div>

        <!-- Contact -->
        <div class="footer-col">
          <h4 class="footer-heading">{{ t('footer.contactTitle') }}</h4>
          <ul class="footer-contact-list">
            <li>
              <span class="contact-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.68A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/></svg>
              </span>
              <a href="tel:+16138516775" class="contact-link">{{ t('footer.phone') }}</a>
            </li>
            <li>
              <span class="contact-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              </span>
              <a href="mailto:info@swiftcomfortline.ca" class="contact-link">{{ t('footer.email') }}</a>
            </li>
            <li>
              <span class="contact-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/></svg>
              </span>
              <span>{{ t('footer.address') }}</span>
            </li>
          </ul>

          <a href="#contact" class="footer-cta" @click.prevent="scrollTo('contact')">
            {{ t('footer.cta') }}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
              <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
            </svg>
          </a>
        </div>

      </div>

      <!-- Bottom bar -->
      <div class="footer-bottom">
        <p>© {{ new Date().getFullYear() }} Swift Comfort Line. {{ t('footer.rights') }}</p>
        <div class="footer-bottom-links">
          <a href="#">{{ t('footer.privacy') }}</a>
          <span class="dot">·</span>
          <a href="#">{{ t('footer.terms') }}</a>
        </div>
      </div>

    </div>
  </footer>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const scrollTo = (id) => {
  const el = document.getElementById(id)
  if (!el) return
  const top = el.getBoundingClientRect().top + window.pageYOffset - 100
  window.scrollTo({ top, behavior: 'smooth' })
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lora:wght@600;700&family=DM+Sans:wght@300;400;500;600&display=swap');

/* ─── Footer shell ───────────────────────────────────────── */
.footer {
  background: #2D1B69;
  position: relative;
  overflow: hidden;
}

/* Dot texture */
.footer::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px);
  background-size: 32px 32px;
  pointer-events: none;
}

/* Gold glow */
.footer::after {
  content: '';
  position: absolute;
  bottom: -80px;
  right: -60px;
  width: 420px;
  height: 320px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(201,168,76,0.1) 0%, transparent 65%);
  pointer-events: none;
}

.footer-inner {
  position: relative;
  z-index: 2;
  max-width: 1200px;
  margin: 0 auto;
  padding: 72px 40px 0;
}

/* ─── Grid ───────────────────────────────────────────────── */
.footer-grid {
  display: grid;
  grid-template-columns: 1.6fr 1fr 1fr 1.2fr;
  gap: 48px;
  padding-bottom: 48px;
  border-bottom: 1px solid rgba(255,255,255,0.08);
}

/* ─── Brand ──────────────────────────────────────────────── */
.footer-logo-row {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 18px;
}

.footer-logo {
  width: 70px;
  height: 70px;
  border-radius: 50px;
  object-fit: contain;
}

.footer-logo-text {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.footer-logo-name {
  font-family: 'Lora', Georgia, serif;
  font-size: 1.05rem;
  font-weight: 700;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 0.01em;
}

.gold { color: #C9A84C; }

.footer-logo-divider {
  display: block;
  width: 100%;
  height: 1.5px;
  background: linear-gradient(to right, #C9A84C, transparent);
  margin: 3px 0;
}

.footer-logo-tagline {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.65rem;
  color: rgba(255,255,255,0.4);
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.footer-desc {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.875rem;
  font-weight: 300;
  color: rgba(255,255,255,0.55);
  line-height: 1.75;
  max-width: 290px;
  margin-bottom: 24px;
}

/* ─── Social ─────────────────────────────────────────────── */
.social-icons {
  display: flex;
  gap: 10px;
}

.social-icons a {
  width: 38px;
  height: 38px;
  border-radius: 10px;
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.1);
  color: rgba(255,255,255,0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease;
}

.social-icons a:hover {
  background: #C9A84C;
  border-color: #C9A84C;
  color: #2D1B69;
}

/* ─── Headings ───────────────────────────────────────────── */
.footer-heading {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.74rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #C9A84C;
  margin-bottom: 22px;
}

/* ─── Links ──────────────────────────────────────────────── */
.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 11px;
}

.footer-links a {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.875rem;
  color: rgba(255,255,255,0.55);
  text-decoration: none;
  transition: color 0.2s ease, padding-left 0.2s ease;
}

.footer-links a:hover {
  color: #ffffff;
  padding-left: 4px;
}

/* ─── Contact list ───────────────────────────────────────── */
.footer-contact-list {
  list-style: none;
  padding: 0;
  margin: 0 0 24px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.footer-contact-list li {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.85rem;
  color: rgba(255,255,255,0.55);
  line-height: 1.5;
}

.contact-icon {
  flex-shrink: 0;
  color: #C9A84C;
  margin-top: 2px;
}

.contact-link {
  color: rgba(255,255,255,0.55);
  text-decoration: none;
  transition: color 0.2s ease;
}

.contact-link:hover { color: #C9A84C; }

/* ─── Footer CTA ─────────────────────────────────────────── */
.footer-cta {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #C9A84C;
  color: #2D1B69;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.85rem;
  font-weight: 700;
  padding: 11px 24px;
  border-radius: 50px;
  text-decoration: none;
  transition: background 0.2s ease, transform 0.2s ease;
}

.footer-cta:hover {
  background: #ffffff;
  transform: translateY(-2px);
}

.footer-cta svg { transition: transform 0.2s ease; }
.footer-cta:hover svg { transform: translateX(4px); }

/* ─── Bottom bar ─────────────────────────────────────────── */
.footer-bottom {
  padding: 24px 0 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 8px;
}

.footer-bottom p {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.8rem;
  color: rgba(255,255,255,0.35);
  margin: 0;
}

.footer-bottom-links {
  display: flex;
  align-items: center;
  gap: 10px;
}

.footer-bottom-links a {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.8rem;
  color: rgba(255,255,255,0.35);
  text-decoration: none;
  transition: color 0.2s ease;
}

.footer-bottom-links a:hover { color: #C9A84C; }

.footer-bottom-links .dot {
  color: rgba(255,255,255,0.2);
}

/* ─── Responsive ─────────────────────────────────────────── */
@media (max-width: 1024px) {
  .footer-grid {
    grid-template-columns: 1fr 1fr;
  }

  .footer-brand {
    grid-column: 1 / -1;
  }

  .footer-desc { max-width: 100%; }
}

@media (max-width: 600px) {
  .footer-inner { padding: 56px 24px 0; }

  .footer-grid {
    grid-template-columns: 1fr;
    gap: 36px;
  }

  .footer-bottom {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
}
</style>