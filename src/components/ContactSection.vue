<template>
  <section class="contact-section" id="contact">

    <!-- ── Decorative blob ────────────────────────────────── -->
    <div class="blob blob--bl" aria-hidden="true"></div>

    <div class="contact-inner">

      <!-- ════════════════════════════════════════════════════
           LEFT — info
      ═════════════════════════════════════════════════════ -->
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
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round">
              <path
                d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.68A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" />
            </svg>
          </div>
          <div class="phone-text">
            <span class="phone-label">{{ t('contact.callUs') }}</span>
            <span class="phone-number">{{ t('contact.phone') }}</span>
          </div>
          <svg class="phone-arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            stroke-width="2.5" stroke-linecap="round">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </a>

        <!-- Secondary contact methods -->
        <div class="quick-links">
          <a :href="'mailto:' + email" class="quick-link">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#45137D" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round">
              <!-- #45137D = --color-primary -->
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            {{ email }}
          </a>
          <a href="#" class="quick-link" @click.prevent="scrollToHours">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#45137D" stroke-width="2"
              stroke-linecap="round">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            {{ t('contact.hoursValue') }}
          </a>
        </div>

        <!-- Trust list -->
        <div class="contact-trust">
          <div class="trust-item" v-for="(item, i) in trustItems" :key="i">
            <span class="trust-check">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#45137D" stroke-width="3"
                stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </span>
            <span>{{ t(item) }}</span>
          </div>
        </div>

      </div>

      <!-- ════════════════════════════════════════════════════
           RIGHT — form
      ═════════════════════════════════════════════════════ -->
      <div class="contact-form-wrap" data-aos="fade-left">

        <div class="dot-texture" aria-hidden="true"></div>
        <div class="gold-glow" aria-hidden="true"></div>

        <div class="form-badge">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="#e0aa54">
            <!-- #e0aa54 = --color-gold-bright -->
            <path
              d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
          {{ t('contact.formBadge') }}
        </div>

        <!-- ── Success state replaces the form after submit ── -->
        <transition name="fade-swap" mode="out-in">

          <div v-if="submitted" key="success" class="form-success">
            <div class="success-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#e0aa54" stroke-width="2.5"
                stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h3 class="success-title">{{ t('contact.successTitle') }}</h3>
            <p class="success-text">{{ t('contact.successText') }}</p>
            <button class="success-reset-btn" @click="resetToForm">
              {{ t('contact.sendAnother') }}
            </button>
          </div>

          <form v-else key="form" @submit.prevent="handleSubmit" class="contact-form" novalidate>
            <h3 class="form-title">{{ t('contact.formTitle') }}</h3>

            <!-- Name -->
            <div class="form-group">
              <label for="c-name">{{ t('contact.nameLabel') }}</label>
              <input id="c-name" type="text" v-model="form.name" required :class="{ 'has-error': errors.name }"
                :aria-invalid="!!errors.name" :placeholder="t('contact.namePlaceholder')"
                @blur="validateField('name')" />
              <span v-if="errors.name" class="field-error">{{ errors.name }}</span>
            </div>

            <!-- Phone -->
            <div class="form-group">
              <label for="c-phone">{{ t('contact.phoneLabel') }}</label>
              <input id="c-phone" type="tel" v-model="form.phone" required :class="{ 'has-error': errors.phone }"
                :aria-invalid="!!errors.phone" :placeholder="t('contact.phonePlaceholder')"
                @blur="validateField('phone')" />
              <span v-if="errors.phone" class="field-error">{{ errors.phone }}</span>
            </div>

            <!-- Message -->
            <div class="form-group">
              <label for="c-message">{{ t('contact.messageLabel') }}</label>
              <textarea id="c-message" v-model="form.message" required rows="4" :class="{ 'has-error': errors.message }"
                :aria-invalid="!!errors.message" :placeholder="t('contact.messagePlaceholder')"
                @blur="validateField('message')"></textarea>
              <span v-if="errors.message" class="field-error">{{ errors.message }}</span>
            </div>

            <!-- Honeypot — invisible to humans, catches bots -->
            <div class="honeypot" aria-hidden="true">
              <label for="c-website">Website</label>
              <input id="c-website" type="text" v-model="honeypot" tabindex="-1" autocomplete="off" />
            </div>

            <!-- Submit -->
            <button type="submit" class="submit-btn" :disabled="loading" :aria-busy="loading">
              <svg v-if="!loading" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="2" stroke-linecap="round">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
              <span class="spinner" v-else></span>
              {{ loading ? t('contact.sending') : t('contact.submit') }}
            </button>

            <!-- Privacy / consent microcopy -->
            <p class="form-privacy">{{ t('contact.privacyNote') }}</p>
          </form>

        </transition>

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
const email = 'info@swiftcomfortline.ca'

const trustItems = [
  'trust.item1',
  'trust.item2',
  'trust.item3',
  'trust.item4',
]

/* ── Form state ──────────────────────────────────────────── */
const form = reactive({ name: '', phone: '', message: '' })
const errors = reactive({ name: '', phone: '', message: '' })
const honeypot = ref('')          // bot trap — must stay empty
const loading = ref(false)
const submitted = ref(false)

/* ── Validation ──────────────────────────────────────────── */
const PHONE_RE = /^[\d\s+().-]{7,20}$/

const validateField = (field) => {
  if (field === 'name') {
    errors.name = form.name.trim().length < 2 ? t('contact.errors.name') : ''
  }
  if (field === 'phone') {
    errors.phone = !PHONE_RE.test(form.phone.trim()) ? t('contact.errors.phone') : ''
  }
  if (field === 'message') {
    errors.message = form.message.trim().length < 10 ? t('contact.errors.message') : ''
  }
}

const validateAll = () => {
  validateField('name')
  validateField('phone')
  validateField('message')
  return !errors.name && !errors.phone && !errors.message
}

/* ── Reset ───────────────────────────────────────────────── */
const resetForm = () => {
  form.name = ''
  form.phone = ''
  form.message = ''
  errors.name = ''
  errors.phone = ''
  errors.message = ''
}

const resetToForm = () => {
  submitted.value = false
}

/* ── Submit ──────────────────────────────────────────────── */
const handleSubmit = async () => {
  // Bot caught — silently pretend success, do not send
  if (honeypot.value) {
    submitted.value = true
    return
  }

  if (!validateAll()) return

  loading.value = true
  try {
    /*
      EmailJS IDs read from environment variables rather than hardcoded.
      Add these to your .env file:
        VITE_EMAILJS_SERVICE_ID=service_43u0keo
        VITE_EMAILJS_TEMPLATE_ID=template_uz6z09w
        VITE_EMAILJS_PUBLIC_KEY=HqGKm1H0vhqeb0y1z
      The public key is designed to be exposed client-side, but using
      env vars keeps config out of source control diffs and lets you
      swap keys per environment (dev / staging / prod) without code changes.
    */
    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    emailjs.init(PUBLIC_KEY)

    await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
      name: form.name,
      phone: form.phone,
      message: form.message,
    })

    submitted.value = true
    resetForm()

    // Toast as a secondary confirmation — the inline success state is primary
    Swal.fire({
      icon: 'success',
      title: t('contact.swalSuccessTitle'),
      text: t('contact.swalSuccessText'),
      confirmButtonColor: '#45137D',
      timer: 3000,
      showConfirmButton: true,
    })
  } catch (error) {
    console.error('EmailJS Error:', error)
    Swal.fire({
      icon: 'error',
      title: t('contact.swalErrorTitle'),
      text: t('contact.swalErrorText'),
      confirmButtonColor: '#45137D',
    })
  } finally {
    loading.value = false
  }
}

/* ── Helper: scroll to footer hours if present ───────────── */
const scrollToHours = () => {
  const el = document.getElementById('footer')
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style scoped>
/*
  All colors come from main.css :root tokens — nothing redefined here.
  SVG fill/stroke attributes that cannot read CSS vars use hardcoded hex
  matching the token exactly:
    #45137D  = --color-primary
    #CC933A  = --color-gold
    #e0aa54  = --color-gold-bright
*/

/* ─── Section ───────────────────────────────────────────── */
.contact-section {
  position: relative;
  background: var(--color-bg);
  padding: 100px 40px 110px;
  overflow: hidden;
}

.blob--bl {
  position: absolute;
  bottom: -160px;
  left: -160px;
  width: 460px;
  height: 460px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(204, 147, 58, 0.07) 0%, transparent 70%);
  pointer-events: none;
  z-index: 0;
}

.contact-inner {
  position: relative;
  z-index: 1;
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 72px;
  align-items: center;
}

/* ════════════════════════════════════════════════════════════
   LEFT — info
═════════════════════════════════════════════════════════════ */
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
  margin-bottom: 32px;
}

/* ─── Phone CTA ─────────────────────────────────────────── */
.phone-cta {
  display: flex;
  gap: 16px;
  background: var(--color-bg-soft);
  border: 1.5px solid var(--color-border);
  border-radius: var(--radius-md);
  align-items: center;
  padding: 20px 24px;
  text-decoration: none;
  transition: border-color 0.22s ease, box-shadow 0.22s ease, transform 0.22s ease;
  margin-bottom: 22px;
}

.phone-cta:hover {
  border-color: var(--color-gold);
  box-shadow: 0 8px 28px rgba(204, 147, 58, 0.16);
  transform: translateY(-2px);
}

.phone-icon-wrap {
  width: 52px;
  height: 52px;
  border-radius: var(--radius-sm);
  background: var(--color-primary);
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.phone-text {
  display: flex;
  flex-direction: column;
}

.phone-label {
  font-family: var(--font-body);
  font-size: 0.75rem;
  color: var(--color-text-muted);
  margin-bottom: 2px;
}

.phone-number {
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

/* ─── Quick links (email / hours) ────────────────────────── */
.quick-links {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 28px;
}

.quick-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-body);
  font-size: 0.83rem;
  font-weight: 500;
  color: var(--color-text-muted);
  background: var(--color-bg-soft);
  border: 1px solid var(--color-border);
  padding: 8px 14px;
  border-radius: 50px;
  text-decoration: none;
  transition: border-color 0.2s ease, color 0.2s ease, background 0.2s ease;
}

.quick-link:hover {
  border-color: rgba(204, 147, 58, 0.35);
  color: var(--color-primary);
  background: var(--color-primary-light);
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
  background: rgba(204, 147, 58, 0.12);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

/* ════════════════════════════════════════════════════════════
   RIGHT — form card
═════════════════════════════════════════════════════════════ */
.contact-form-wrap {
  position: relative;
  background: var(--color-primary);
  border-radius: var(--radius-lg);
  padding: 44px 40px;
  overflow: hidden;
  box-shadow: var(--shadow-lg);
}

.dot-texture {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(rgba(255, 255, 255, 0.035) 1px, transparent 1px);
  background-size: 28px 28px;
  pointer-events: none;
}

.gold-glow {
  position: absolute;
  bottom: -60px;
  right: -60px;
  width: 260px;
  height: 260px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(204, 147, 58, 0.16) 0%, transparent 65%);
  pointer-events: none;
}

.form-badge {
  position: relative;
  z-index: 2;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(204, 147, 58, 0.13);
  border: 1px solid rgba(204, 147, 58, 0.32);
  color: var(--color-gold-bright);
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
  margin-bottom: 22px;
}

.contact-form {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: 16px;
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
  color: rgba(255, 255, 255, 0.72);
  letter-spacing: 0.02em;
}

input,
textarea {
  font-family: var(--font-body);
  font-size: 0.95rem;
  color: #ffffff;
  background: rgba(255, 255, 255, 0.06);
  border: 1.5px solid rgba(255, 255, 255, 0.14);
  border-radius: var(--radius-sm);
  padding: 13px 16px;
  transition: border-color 0.2s ease, background 0.2s ease;
  outline: none;
  resize: vertical;
}

input::placeholder,
textarea::placeholder {
  color: rgba(255, 255, 255, 0.36);
  font-weight: 300;
}

input:focus,
textarea:focus {
  border-color: var(--color-gold);
  background: rgba(255, 255, 255, 0.10);
}

input.has-error,
textarea.has-error {
  border-color: #f08b8b;
  background: rgba(240, 139, 139, 0.07);
}

.field-error {
  font-family: var(--font-body);
  font-size: 0.74rem;
  color: #f5a5a5;
  margin-top: 2px;
}

/* ─── Honeypot — hidden from real users, visible to bots ─── */
.honeypot {
  position: absolute;
  left: -9999px;
  width: 1px;
  height: 1px;
  overflow: hidden;
}

/* ─── Submit button ─────────────────────────────────────── */
.submit-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: linear-gradient(135deg, var(--color-gold-bright), var(--color-gold));
  color: var(--color-primary-deep);
  font-family: var(--font-body);
  font-size: 0.95rem;
  font-weight: 700;
  border: none;
  padding: 15px 28px;
  border-radius: 50px;
  cursor: pointer;
  transition: background 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease, opacity 0.2s ease;
  margin-top: 4px;
  box-shadow:
    0 8px 24px rgba(204, 147, 58, 0.30),
    inset 0 1px 0 rgba(255, 255, 255, 0.22);
}

.submit-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow:
    0 12px 32px rgba(204, 147, 58, 0.40),
    inset 0 1px 0 rgba(255, 255, 255, 0.22);
}

.submit-btn:disabled {
  opacity: 0.55;
  cursor: not-allowed;
  background: rgba(204, 147, 58, 0.45);
  box-shadow: none;
}

/* Loading spinner */
.spinner {
  width: 15px;
  height: 15px;
  border: 2px solid rgba(26, 5, 53, 0.25);
  border-top-color: var(--color-primary-deep);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
  flex-shrink: 0;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

/* ─── Privacy microcopy ──────────────────────────────────── */
.form-privacy {
  font-family: var(--font-body);
  font-size: 0.72rem;
  color: rgba(255, 255, 255, 0.50);
  text-align: center;
  line-height: 1.5;
  margin-top: 2px;
}

/* ─── Success state ──────────────────────────────────────── */
.form-success {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 28px 8px 12px;
}

.success-icon {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: rgba(204, 147, 58, 0.18);
  border: 1.5px solid rgba(204, 147, 58, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 18px;
}

.success-title {
  font-family: var(--font-display);
  font-size: 1.3rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 10px;
}

.success-text {
  font-family: var(--font-body);
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.75);
  line-height: 1.65;
  max-width: 320px;
  margin-bottom: 24px;
}

.success-reset-btn {
  background: rgba(255, 255, 255, 0.10);
  border: 1.5px solid rgba(255, 255, 255, 0.30);
  color: #ffffff;
  font-family: var(--font-body);
  font-size: 0.85rem;
  font-weight: 600;
  padding: 11px 26px;
  border-radius: 50px;
  cursor: pointer;
  transition: background 0.2s ease, border-color 0.2s ease;
}

.success-reset-btn:hover {
  background: rgba(255, 255, 255, 0.16);
  border-color: rgba(255, 255, 255, 0.5);
}

/* ─── Fade-swap transition (form ↔ success) ─────────────── */
.fade-swap-enter-active,
.fade-swap-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-swap-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.fade-swap-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* ─── Responsive ────────────────────────────────────────── */
@media (max-width: 900px) {
  .contact-inner {
    grid-template-columns: 1fr;
    gap: 48px;
  }
}

@media (max-width: 600px) {
  .contact-section {
    padding: 64px 20px 80px;
  }

  .contact-form-wrap {
    padding: 32px 24px;
  }

  .phone-number {
    font-size: 1.2rem;
  }

  .phone-cta {
    padding: 16px 18px;
  }
}

/* ─── Reduced motion ─────────────────────────────────────── */
@media (prefers-reduced-motion: reduce) {

  .spinner,
  .fade-swap-enter-active,
  .fade-swap-leave-active {
    transition: none !important;
    animation: none !important;
  }
}
</style>