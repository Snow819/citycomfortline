<template>
    <section class="cleaning-contact" id="contact">

        <!-- ── Decorative blobs ───────────────────────────────── -->
        <div class="cc-blob cc-blob--tr" aria-hidden="true"></div>
        <div class="cc-blob cc-blob--bl" aria-hidden="true"></div>

        <div class="cc-inner">

            <!-- ════════════════════════════════════════════════════
           LEFT — info
      ═════════════════════════════════════════════════════ -->
            <div class="cc-info" data-aos="fade-right" data-aos-duration="900">

                <div class="label-row">
                    <span class="label-line"></span>
                    <span class="section-label">{{ t('cleaningContact.label') }}</span>
                    <span class="label-line"></span>
                </div>

                <h2 class="cc-title">{{ t('cleaningContact.title') }}</h2>
                <p class="cc-subtitle">{{ t('cleaningContact.subtitle') }}</p>

                <!-- Phone CTA -->
                <a :href="'tel:' + rawPhone" class="cc-phone-cta">
                    <div class="cc-phone-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-width="2" stroke-linecap="round">
                            <path
                                d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.68A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" />
                        </svg>
                    </div>
                    <div class="cc-phone-text">
                        <span class="cc-phone-label">{{ t('cleaningContact.callUs') }}</span>
                        <span class="cc-phone-number">+1 (613) 851-6775</span>
                    </div>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                        stroke-linecap="round" class="cc-phone-arrow">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                    </svg>
                </a>

                <!-- Quick links row -->
                <div class="cc-quick-links">
                    <a href="mailto:info@swiftcomfortline.ca" class="cc-quick-link">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-width="2" stroke-linecap="round">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                            <polyline points="22,6 12,13 2,6" />
                        </svg>
                        info@swiftcomfortline.ca
                    </a>
                    <div class="cc-quick-link">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-width="2" stroke-linecap="round">
                            <circle cx="12" cy="12" r="10" />
                            <polyline points="12 6 12 12 16 14" />
                        </svg>
                        {{ t('cleaningContact.hours') }}
                    </div>
                </div>

                <!-- Trust list -->
                <div class="cc-trust-list">
                    <div class="cc-trust-item" v-for="(item, i) in trustItems" :key="i">
                        <span class="cc-trust-check">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#CC933A"
                                stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
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
            <div class="cc-form-wrap" data-aos="fade-left" data-aos-duration="900" data-aos-delay="100">

                <div class="cc-dot-texture" aria-hidden="true"></div>
                <div class="cc-gold-glow" aria-hidden="true"></div>

                <!-- Badge -->
                <div class="cc-form-badge">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="#e0aa54">
                        <path
                            d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    </svg>
                    {{ t('cleaningContact.formBadge') }}
                </div>

                <!-- Success state -->
                <transition name="fade-swap" mode="out-in">

                    <div v-if="submitted" key="success" class="cc-success">
                        <div class="cc-success-icon">
                            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#e0aa54"
                                stroke-width="2.5" stroke-linecap="round">
                                <polyline points="20 6 9 17 4 12" />
                            </svg>
                        </div>
                        <h3 class="cc-success-title">{{ t('cleaningContact.successTitle') }}</h3>
                        <p class="cc-success-text">{{ t('cleaningContact.successText') }}</p>
                        <button class="cc-reset-btn" @click="resetToForm">
                            {{ t('cleaningContact.sendAnother') }}
                        </button>
                    </div>

                    <form v-else key="form" @submit.prevent="handleSubmit" class="cc-form" novalidate>

                        <h3 class="cc-form-title">{{ t('cleaningContact.formTitle') }}</h3>

                        <!-- Service type selector -->
                        <div class="cc-form-group">
                            <label for="cc-service">{{ t('cleaningContact.serviceLabel') }}</label>
                            <select id="cc-service" v-model="form.service" :class="{ 'has-error': errors.service }"
                                @change="errors.service = ''">
                                <option value="" disabled>{{ t('cleaningContact.servicePlaceholder') }}</option>
                                <option v-for="opt in serviceOptions" :key="opt" :value="t(opt)">
                                    {{ t(opt) }}
                                </option>
                            </select>
                            <span v-if="errors.service" class="cc-field-error">{{ errors.service }}</span>
                        </div>

                        <!-- Name -->
                        <div class="cc-form-group">
                            <label for="cc-name">{{ t('cleaningContact.nameLabel') }}</label>
                            <input id="cc-name" type="text" v-model="form.name" :class="{ 'has-error': errors.name }"
                                :placeholder="t('cleaningContact.namePlaceholder')" @blur="validateField('name')" />
                            <span v-if="errors.name" class="cc-field-error">{{ errors.name }}</span>
                        </div>

                        <!-- Phone -->
                        <div class="cc-form-group">
                            <label for="cc-phone">{{ t('cleaningContact.phoneLabel') }}</label>
                            <input id="cc-phone" type="tel" v-model="form.phone" :class="{ 'has-error': errors.phone }"
                                :placeholder="t('cleaningContact.phonePlaceholder')" @blur="validateField('phone')" />
                            <span v-if="errors.phone" class="cc-field-error">{{ errors.phone }}</span>
                        </div>

                        <!-- Message -->
                        <div class="cc-form-group">
                            <label for="cc-message">{{ t('cleaningContact.messageLabel') }}</label>
                            <textarea id="cc-message" v-model="form.message" rows="3"
                                :class="{ 'has-error': errors.message }"
                                :placeholder="t('cleaningContact.messagePlaceholder')"
                                @blur="validateField('message')"></textarea>
                            <span v-if="errors.message" class="cc-field-error">{{ errors.message }}</span>
                        </div>

                        <!-- Honeypot -->
                        <div class="cc-honeypot" aria-hidden="true">
                            <input type="text" v-model="honeypot" tabindex="-1" autocomplete="off" />
                        </div>

                        <!-- Submit -->
                        <button type="submit" class="cc-submit" :disabled="loading" :aria-busy="loading">
                            <svg v-if="!loading" width="15" height="15" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" stroke-width="2" stroke-linecap="round">
                                <line x1="22" y1="2" x2="11" y2="13" />
                                <polygon points="22 2 15 22 11 13 2 9 22 2" />
                            </svg>
                            <span class="cc-spinner" v-else></span>
                            {{ loading ? t('cleaningContact.sending') : t('cleaningContact.submit') }}
                        </button>

                        <p class="cc-privacy">{{ t('cleaningContact.privacyNote') }}</p>

                    </form>

                </transition>

            </div>

        </div>
    </section>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import emailjs from '@emailjs/browser'
import Swal from 'sweetalert2'
import AOS from 'aos'
import 'aos/dist/aos.css'

const { t } = useI18n()

const rawPhone = '+16138516775'

const trustItems = [
    'cleaningContact.trust1',
    'cleaningContact.trust2',
    'cleaningContact.trust3',
    'cleaningContact.trust4',
]

const serviceOptions = [
    'cleaningServices.home.title',
    'cleaningServices.office.title',
    'cleaningServices.deep.title',
    'cleaningServices.moveIn.title',
    'cleaningServices.airbnb.title',
]

/* ── Form state ──────────────────────────────────────────── */
const form = reactive({ service: '', name: '', phone: '', message: '' })
const errors = reactive({ service: '', name: '', phone: '', message: '' })
const honeypot = ref('')
const loading = ref(false)
const submitted = ref(false)

/* ── Validation ──────────────────────────────────────────── */
const PHONE_RE = /^[\d\s+().-]{7,20}$/

const validateField = (field) => {
    if (field === 'name') errors.name = form.name.trim().length < 2 ? t('cleaningContact.errors.name') : ''
    if (field === 'phone') errors.phone = !PHONE_RE.test(form.phone.trim()) ? t('cleaningContact.errors.phone') : ''
    if (field === 'message') errors.message = form.message.trim().length < 5 ? t('cleaningContact.errors.message') : ''
}

const validateAll = () => {
    errors.service = !form.service ? t('cleaningContact.errors.service') : ''
    validateField('name')
    validateField('phone')
    validateField('message')
    return !errors.service && !errors.name && !errors.phone && !errors.message
}

const resetForm = () => {
    form.service = ''; form.name = ''; form.phone = ''; form.message = ''
    errors.service = ''; errors.name = ''; errors.phone = ''; errors.message = ''
}

const resetToForm = () => { submitted.value = false }

/* ── Submit ──────────────────────────────────────────────── */
const handleSubmit = async () => {
    if (honeypot.value) { submitted.value = true; return }
    if (!validateAll()) return

    loading.value = true
    try {
        const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
        const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
        const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

        emailjs.init(PUBLIC_KEY)
        await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
            service: form.service,
            name: form.name,
            phone: form.phone,
            message: form.message,
        })

        submitted.value = true
        resetForm()

        Swal.fire({
            icon: 'success',
            title: t('cleaningContact.swalSuccessTitle'),
            text: t('cleaningContact.swalSuccessText'),
            confirmButtonColor: '#45137D',
            timer: 3000,
            showConfirmButton: true,
        })
    } catch (err) {
        console.error('EmailJS Error:', err)
        Swal.fire({
            icon: 'error',
            title: t('cleaningContact.swalErrorTitle'),
            text: t('cleaningContact.swalErrorText'),
            confirmButtonColor: '#45137D',
        })
    } finally {
        loading.value = false
    }
}

onMounted(() => {
    AOS.init({ duration: 860, once: true, easing: 'ease-out-cubic', offset: 50 })
})
</script>

<style scoped>
/*
  All colors from main.css tokens.
  SVG hardcoded hex:
    #CC933A = --color-gold
    #e0aa54 = --color-gold-bright
    #45137D = --color-primary
*/

/* ─── Section ───────────────────────────────────────────── */
.cleaning-contact {
    position: relative;
    background: var(--color-bg);
    padding: 100px 40px 110px;
    overflow: hidden;
}

.cc-blob {
    position: absolute;
    border-radius: 50%;
    pointer-events: none;
    z-index: 0;
}

.cc-blob--tr {
    top: -140px;
    right: -140px;
    width: 440px;
    height: 440px;
    background: radial-gradient(circle, rgba(204, 147, 58, 0.07) 0%, transparent 70%);
}

.cc-blob--bl {
    bottom: -140px;
    left: -140px;
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, rgba(69, 19, 125, 0.06) 0%, transparent 70%);
}

/* ─── Inner grid ────────────────────────────────────────── */
.cc-inner {
    position: relative;
    z-index: 1;
    max-width: 1100px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 72px;
    align-items: center;
}

/* ════════════════════════════════════════════════════════
   LEFT — info
═══════════════════════════════════════════════════════ */
.label-row {
    display: flex;
    align-items: center;
    gap: 14px;
    margin-bottom: 14px;
}

.label-line {
    width: 28px;
    height: 1px;
    background: var(--color-gold);
}

.section-label {
    font-family: var(--font-body);
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.13em;
    text-transform: uppercase;
    color: var(--color-gold);
}

.cc-title {
    font-family: var(--font-display);
    font-size: clamp(1.9rem, 3vw, 2.5rem);
    font-weight: 700;
    color: var(--color-primary);
    line-height: 1.22;
    margin-bottom: 14px;
}

.cc-subtitle {
    font-family: var(--font-body);
    font-size: 1rem;
    color: var(--color-text-muted);
    line-height: 1.75;
    margin-bottom: 28px;
}

/* Phone CTA */
.cc-phone-cta {
    display: flex;
    align-items: center;
    gap: 14px;
    background: var(--color-bg-soft);
    border: 1.5px solid var(--color-border);
    border-radius: var(--radius-md);
    padding: 18px 22px;
    text-decoration: none;
    margin-bottom: 18px;
    transition: border-color 0.22s ease, box-shadow 0.22s ease, transform 0.22s ease;
}

.cc-phone-cta:hover {
    border-color: var(--color-gold);
    box-shadow: 0 8px 28px rgba(204, 147, 58, 0.14);
    transform: translateY(-2px);
}

.cc-phone-icon {
    width: 48px;
    height: 48px;
    border-radius: var(--radius-sm);
    background: var(--color-primary);
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
}

.cc-phone-text {
    display: flex;
    flex-direction: column;
    flex: 1;
}

.cc-phone-label {
    font-family: var(--font-body);
    font-size: 0.72rem;
    color: var(--color-text-muted);
    margin-bottom: 2px;
}

.cc-phone-number {
    font-family: var(--font-display);
    font-size: 1.35rem;
    font-weight: 700;
    color: var(--color-primary);
    letter-spacing: 0.01em;
}

.cc-phone-arrow {
    color: var(--color-gold);
    flex-shrink: 0;
}

/* Quick links */
.cc-quick-links {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 24px;
}

.cc-quick-link {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    font-family: var(--font-body);
    font-size: 0.82rem;
    font-weight: 500;
    color: var(--color-text-muted);
    background: var(--color-bg-soft);
    border: 1px solid var(--color-border);
    padding: 7px 13px;
    border-radius: 50px;
    text-decoration: none;
    transition: border-color 0.2s ease, color 0.2s ease;
}

a.cc-quick-link:hover {
    border-color: rgba(204, 147, 58, 0.35);
    color: var(--color-primary);
}

/* Trust list */
.cc-trust-list {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.cc-trust-item {
    display: flex;
    align-items: center;
    gap: 10px;
    font-family: var(--font-body);
    font-size: 0.88rem;
    color: var(--color-text-muted);
}

.cc-trust-check {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: var(--color-gold-light);
    border: 1px solid rgba(204, 147, 58, 0.22);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
}

/* ════════════════════════════════════════════════════════
   RIGHT — form card
═══════════════════════════════════════════════════════ */
.cc-form-wrap {
    position: relative;
    background: var(--color-primary);
    border-radius: var(--radius-lg);
    padding: 44px 40px;
    overflow: hidden;
    box-shadow: var(--shadow-lg);
}

.cc-dot-texture {
    position: absolute;
    inset: 0;
    background-image: radial-gradient(rgba(255, 255, 255, 0.035) 1px, transparent 1px);
    background-size: 28px 28px;
    pointer-events: none;
}

.cc-gold-glow {
    position: absolute;
    bottom: -60px;
    right: -60px;
    width: 260px;
    height: 260px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(204, 147, 58, 0.16) 0%, transparent 65%);
    pointer-events: none;
}

/* Gold top accent */
.cc-form-wrap::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(to right, var(--color-gold-bright), var(--color-gold), transparent);
}

.cc-form-badge {
    position: relative;
    z-index: 2;
    display: inline-flex;
    align-items: center;
    gap: 7px;
    background: rgba(204, 147, 58, 0.13);
    border: 1px solid rgba(204, 147, 58, 0.30);
    color: var(--color-gold-bright);
    font-family: var(--font-body);
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.10em;
    text-transform: uppercase;
    padding: 6px 16px;
    border-radius: 50px;
    margin-bottom: 20px;
}

.cc-form-title {
    position: relative;
    z-index: 2;
    font-family: var(--font-display);
    font-size: 1.35rem;
    font-weight: 700;
    color: #ffffff;
    margin-bottom: 20px;
}

/* ─── Form ───────────────────────────────────────────────── */
.cc-form {
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.cc-form-group {
    display: flex;
    flex-direction: column;
    gap: 6px;
}

label {
    font-family: var(--font-body);
    font-size: 0.80rem;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.72);
    letter-spacing: 0.02em;
}

input,
textarea,
select {
    font-family: var(--font-body);
    font-size: 0.95rem;
    color: #ffffff;
    background: rgba(255, 255, 255, 0.07);
    border: 1.5px solid rgba(255, 255, 255, 0.14);
    border-radius: var(--radius-sm);
    padding: 12px 15px;
    transition: border-color 0.2s ease, background 0.2s ease;
    outline: none;
    resize: vertical;
    -webkit-appearance: none;
}

select option {
    background: var(--color-primary-dark);
    color: #ffffff;
}

input::placeholder,
textarea::placeholder {
    color: rgba(255, 255, 255, 0.35);
    font-weight: 300;
}

input:focus,
textarea:focus,
select:focus {
    border-color: var(--color-gold);
    background: rgba(255, 255, 255, 0.10);
}

input.has-error,
textarea.has-error,
select.has-error {
    border-color: #f08b8b;
    background: rgba(240, 139, 139, 0.07);
}

.cc-field-error {
    font-family: var(--font-body);
    font-size: 0.73rem;
    color: #f5a5a5;
}

/* Honeypot */
.cc-honeypot {
    position: absolute;
    left: -9999px;
    width: 1px;
    height: 1px;
    overflow: hidden;
}

/* Submit button */
.cc-submit {
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
    padding: 14px 28px;
    border-radius: 50px;
    cursor: pointer;
    margin-top: 4px;
    box-shadow:
        0 8px 24px rgba(204, 147, 58, 0.30),
        inset 0 1px 0 rgba(255, 255, 255, 0.22);
    transition: transform 0.22s ease, box-shadow 0.22s ease, opacity 0.2s ease;
}

.cc-submit:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow:
        0 12px 32px rgba(204, 147, 58, 0.40),
        inset 0 1px 0 rgba(255, 255, 255, 0.22);
}

.cc-submit:disabled {
    opacity: 0.55;
    cursor: not-allowed;
    background: rgba(204, 147, 58, 0.45);
    box-shadow: none;
}

.cc-spinner {
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

.cc-privacy {
    font-family: var(--font-body);
    font-size: 0.70rem;
    color: rgba(255, 255, 255, 0.45);
    text-align: center;
    line-height: 1.5;
    margin-top: 2px;
}

/* ─── Success state ──────────────────────────────────────── */
.cc-success {
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 24px 8px 8px;
    gap: 14px;
}

.cc-success-icon {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: rgba(204, 147, 58, 0.16);
    border: 1.5px solid rgba(204, 147, 58, 0.38);
    display: flex;
    align-items: center;
    justify-content: center;
}

.cc-success-title {
    font-family: var(--font-display);
    font-size: 1.25rem;
    font-weight: 700;
    color: #ffffff;
}

.cc-success-text {
    font-family: var(--font-body);
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.72);
    line-height: 1.65;
    max-width: 300px;
}

.cc-reset-btn {
    background: rgba(255, 255, 255, 0.10);
    border: 1.5px solid rgba(255, 255, 255, 0.28);
    color: #ffffff;
    font-family: var(--font-body);
    font-size: 0.85rem;
    font-weight: 600;
    padding: 10px 24px;
    border-radius: 50px;
    cursor: pointer;
    transition: background 0.2s ease;
}

.cc-reset-btn:hover {
    background: rgba(255, 255, 255, 0.16);
}

/* Fade swap transition */
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

/* ─── Responsive ─────────────────────────────────────────── */
@media (max-width: 900px) {
    .cc-inner {
        grid-template-columns: 1fr;
        gap: 48px;
    }
}

@media (max-width: 600px) {
    .cleaning-contact {
        padding: 64px 20px 80px;
    }

    .cc-form-wrap {
        padding: 32px 22px;
    }

    .cc-phone-number {
        font-size: 1.15rem;
    }
}

@media (prefers-reduced-motion: reduce) {

    .cc-spinner,
    .fade-swap-enter-active,
    .fade-swap-leave-active {
        transition: none !important;
        animation: none !important;
    }
}
</style>