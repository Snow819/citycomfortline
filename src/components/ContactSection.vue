<template>
  <section class="contact-section" id="contact">
    <div class="contact-inner">

      <!-- Left: info -->
      <div class="contact-info" data-aos="fade-right">
        <div class="label-row">
          <span class="label-line"></span>
          <span class="section-label">{{ t('contact.label') }}</span>
          <span class="label-line"></span>
        </div>

        <h2 class="contact-title">{{ t('contact.title') }}</h2>
        <p class="contact-subtitle">{{ t('contact.subtitle') }}</p>

        <!-- Big phone CTA -->
        <a :href="'tel:' + rawPhone" class="phone-cta">
          <div class="phone-icon-wrap">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.68A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/>
            </svg>
          </div>
          <div>
            <span class="phone-label">{{ t('contact.callUs') }}</span>
            <span class="phone-number">{{ t('contact.phone') }}</span>
          </div>
          <svg class="phone-arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
            <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
          </svg>
        </a>

        <!-- Trust list -->
        <div class="contact-trust">
          <div class="trust-item" v-for="(item, i) in trustItems" :key="i">
            <span class="trust-check">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#45137D" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            </span>
            <span>{{ t(item) }}</span>
          </div>
        </div>
      </div>

      <!-- Right: form -->
      <div class="contact-form-wrap" data-aos="fade-left">
        <div class="form-badge">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
          {{ t('contact.formBadge') }}
        </div>

        <form @submit.prevent="handleSubmit" class="contact-form" novalidate>
          <h3 class="form-title">{{ t('contact.formTitle') }}</h3>

          <div class="form-group">
            <label for="c-name">{{ t('contact.nameLabel') }}</label>
            <input
              id="c-name"
              type="text"
              v-model="form.name"
              required
              :placeholder="t('contact.namePlaceholder')"
            />
          </div>

          <div class="form-group">
            <label for="c-phone">{{ t('contact.phoneLabel') }}</label>
            <input
              id="c-phone"
              type="tel"
              v-model="form.phone"
              required
              :placeholder="t('contact.phonePlaceholder')"
            />
          </div>

          <div class="form-group">
            <label for="c-message">{{ t('contact.messageLabel') }}</label>
            <textarea
              id="c-message"
              v-model="form.message"
              required
              rows="4"
              :placeholder="t('contact.messagePlaceholder')"
            ></textarea>
          </div>

          <button type="submit" class="submit-btn" :disabled="loading">
            <svg v-if="!loading" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
              <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
            </svg>
            <span class="spinner" v-else></span>
            {{ loading ? t('contact.sending') : t('contact.submit') }}
          </button>
        </form>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useI18n } from 'vue-i18n'
import emailjs from '@emailjs/browser'
import Swal from 'sweetalert2'

const { t } = useI18n()

const rawPhone = '+16138516775'

const trustItems = [
  'trust.item1',
  'trust.item2',
  'trust.item3',
  'trust.item4',
]

const form = reactive({ name: '', phone: '', message: '' })
const loading = ref(false)

const resetForm = () => {
  form.name = ''
  form.phone = ''
  form.message = ''
}

const handleSubmit = async () => {
  loading.value = true
  try {
    const SERVICE_ID  = 'service_43u0keo'
    const TEMPLATE_ID = 'template_uz6z09w'
    const PUBLIC_KEY  = 'HqGKm1H0vhqeb0y1z'

    emailjs.init(PUBLIC_KEY)

    await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
      name:    form.name,
      phone:   form.phone,
      message: form.message,
    })

    Swal.fire({
      icon: 'success',
      title: 'Message Sent!',
      text: 'Thank you! We will get back to you shortly.',
      confirmButtonColor: '#45137D',
      timer: 3000,
      showConfirmButton: true,
    })

    resetForm()
  } catch (error) {
    console.error('EmailJS Error:', error)
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong. Please try again or call us directly.',
      confirmButtonColor: '#45137D',
    })
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>

/* ─── Section ───────────────────────────────────────────── */
.contact-section {
  background: #ffffff;
  padding: 90px 40px;
}

.contact-inner {
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 72px;
  align-items: center;
}

/* ─── Left info ─────────────────────────────────────────── */
.label-row {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 14px;
}

.label-line {
  width: 32px;
  height: 1px;
  background: var(--color-gold);
}

.section-label {
  font-family: var(--font-body);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--color-gold);
}

.contact-title {
  font-family: var(--font-display);
  font-size: clamp(1.9rem, 3.2vw, 2.6rem);
  font-weight: 700;
  color: var(--color-primary);
  line-height: 1.25;
  margin-bottom: 14px;
}

.contact-subtitle {
  font-family: var(--font-body);
  font-size: 1rem;
  color: var(--color-text-muted);
  line-height: 1.75;
  margin-bottom: 36px;
}

/* ─── Phone CTA ─────────────────────────────────────────── */
.phone-cta {
  display: flex;
  gap: 16px;
  background: #faf9ff;
  border: 1.5px solid rgba(45,27,105,0.08);
  border-radius: 16px;
  align-items: center;
  padding: 20px 24px;
  text-decoration: none;
  transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;
  margin-bottom: 36px;
}

.phone-cta:hover {
  border-color: var(--color-gold);
  box-shadow: 0 8px 28px rgba(201,168,76,0.16);
  transform: translateY(-2px);
}

.phone-icon-wrap {
  width: 52px;
  height: 52px;
  border-radius: 14px;
  background: var(--color-primary);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.phone-label {
  display: block;
  font-family: var(--font-body);
  font-size: 0.75rem;
  color: var(--color-text-muted);
  margin-bottom: 2px;
}

.phone-number {
  display: block;
  font-family: var(--font-display);
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-primary);
  letter-spacing: 0.02em;
}

.phone-arrow {
  margin-left: auto;
  color: var(--color-gold);
  flex-shrink: 0;
}

/* ─── Trust list ────────────────────────────────────────── */
.contact-trust {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.trust-item {
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: var(--font-body);
  font-size: 0.92rem;
  color: var(--color-text-muted);
}

.trust-check {
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: rgba(201,168,76,0.12);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

/* ─── Form card ─────────────────────────────────────────── */
.contact-form-wrap {
  background: var(--color-primary);
  border-radius: 24px;
  padding: 44px 40px;
  position: relative;
  overflow: hidden;
}

/* Dot texture */
.contact-form-wrap::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px);
  background-size: 28px 28px;
  pointer-events: none;
}

/* Gold glow */
.contact-form-wrap::after {
  content: '';
  position: absolute;
  bottom: -60px;
  right: -60px;
  width: 260px;
  height: 260px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(201,168,76,0.15) 0%, transparent 65%);
  pointer-events: none;
}

.form-badge {
  position: relative;
  z-index: 2;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(201,168,76,0.12);
  border: 1px solid rgba(201,168,76,0.3);
  color: var(--color-gold);
  font-family: var(--font-body);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 6px 16px;
  border-radius: 50px;
  margin-bottom: 22px;
}

.form-title {
  position: relative;
  z-index: 2;
  font-family: var(--font-display);
  font-size: 1.4rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 24px;
}

.contact-form {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

label {
  font-family: var(--font-body);
  font-size: 0.8rem;
  font-weight: 500;
  color: rgba(255,255,255,0.7);
  letter-spacing: 0.02em;
}

input,
textarea {
  font-family: var(--font-body);
  font-size: 0.95rem;
  color: #ffffff;
  background: rgba(255,255,255,0.06);
  border: 1.5px solid rgba(255,255,255,0.12);
  border-radius: 10px;
  padding: 13px 16px;
  transition: border-color 0.2s ease, background 0.2s ease;
  outline: none;
  resize: vertical;
}

input::placeholder,
textarea::placeholder {
  color: rgba(255,255,255,0.35);
  font-weight: 300;
}

input:focus,
textarea:focus {
  border-color: var(--color-gold);
  background: rgba(255,255,255,0.09);
}

/* ─── Submit button ─────────────────────────────────────── */
.submit-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: var(--color-gold);
  color: var(--color-primary);
  font-family: var(--font-body);
  font-size: 0.95rem;
  font-weight: 700;
  border: none;
  padding: 15px 28px;
  border-radius: 50px;
  cursor: pointer;
  transition: background 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
  margin-top: 4px;
  box-shadow: 0 8px 24px rgba(201,168,76,0.25);
}

.submit-btn:hover:not(:disabled) {
  background: #ffffff;
  transform: translateY(-2px);
  box-shadow: 0 12px 32px rgba(201,168,76,0.35);
}

.submit-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

/* Loading spinner */
.spinner {
  width: 15px;
  height: 15px;
  border: 2px solid rgba(45,27,105,0.3);
  border-top-color: var(--color-primary);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
  flex-shrink: 0;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

/* ─── Responsive ────────────────────────────────────────── */
@media (max-width: 900px) {
  .contact-inner {
    grid-template-columns: 1fr;
    gap: 48px;
  }
}

@media (max-width: 600px) {
  .contact-section { padding: 64px 20px; }

  .contact-form-wrap { padding: 32px 24px; }

  .phone-number { font-size: 1.2rem; }

  .phone-cta { padding: 16px 18px; }
}
</style>