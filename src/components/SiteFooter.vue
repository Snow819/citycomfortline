<template>
    <footer class="site-footer">

        <!-- ── Top accent line ───────────────────────────────── -->
        <div class="footer-accent" aria-hidden="true"></div>

        <!-- ── Main footer body ──────────────────────────────── -->
        <div class="footer-inner">

            <!-- Col 1 — Brand ───────────────────────────────────── -->
            <div class="footer-brand">
                <a href="#home" class="footer-logo" @click.prevent="scrollTo('home')">
                    <img src="@/assets/logo-m.svg" alt="Swift Comfort Line" class="footer-logo-img" />
                    <div class="footer-logo-text">
                        <span class="footer-logo-name">
                            Swift Comfort <span class="footer-logo-name--gold">Line</span>
                        </span>
                        <span class="footer-logo-tagline">{{ tagline }}</span>
                    </div>
                </a>

                <p class="footer-desc">{{ t('footer.desc') }}</p>

                <!-- Social links -->
                <div class="footer-socials">
                    <a v-for="social in socials" :key="social.label" :href="social.href" class="footer-social"
                        :aria-label="social.label" target="_blank" rel="noopener noreferrer">
                        <component :is="social.icon" />
                    </a>
                </div>

                <!-- Cleaning page shortcut -->
                <a href="/cleaning" class="footer-cleaning-link">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"
                        stroke-linecap="round" stroke-linejoin="round">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                        <polyline points="9 22 9 12 15 12 15 22" />
                    </svg>
                    {{ t('footer.cleaningLink') }}
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                        stroke-linecap="round">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                    </svg>
                </a>
            </div>

            <!-- Col 2 — Quick links ──────────────────────────────── -->
            <div class="footer-col">
                <h4 class="footer-col-title">{{ t('footer.quickLinks') }}</h4>
                <ul class="footer-links">
                    <li v-for="link in quickLinks" :key="link.id">
                        <a :href="'#' + link.id" class="footer-link" @click.prevent="scrollTo(link.id)">
                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                stroke-width="2.5" stroke-linecap="round">
                                <polyline points="9 18 15 12 9 6" />
                            </svg>
                            {{ t(link.label) }}
                        </a>
                    </li>
                </ul>
            </div>

            <!-- Col 3 — Services ────────────────────────────────── -->
            <div class="footer-col">
                <h4 class="footer-col-title">{{ t('footer.ourServices') }}</h4>
                <ul class="footer-links">
                    <li v-for="svc in serviceLinks" :key="svc">
                        <a href="#services" class="footer-link" @click.prevent="scrollTo('services')">
                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                stroke-width="2.5" stroke-linecap="round">
                                <polyline points="9 18 15 12 9 6" />
                            </svg>
                            {{ t(svc) }}
                        </a>
                    </li>
                </ul>
            </div>

            <!-- Col 4 — Contact ─────────────────────────────────── -->
            <div class="footer-col">
                <h4 class="footer-col-title">{{ t('footer.contactUs') }}</h4>
                <ul class="footer-contact-list">

                    <li>
                        <a :href="'tel:' + rawPhone" class="footer-contact-item">
                            <span class="footer-contact-icon">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#e0aa54"
                                    stroke-width="2" stroke-linecap="round">
                                    <path
                                        d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.68A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" />
                                </svg>
                            </span>
                            +1 (613) 851-6775
                        </a>
                    </li>

                    <li>
                        <a href="mailto:info@swiftcomfortline.ca" class="footer-contact-item">
                            <span class="footer-contact-icon">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#e0aa54"
                                    stroke-width="2" stroke-linecap="round">
                                    <path
                                        d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                    <polyline points="22,6 12,13 2,6" />
                                </svg>
                            </span>
                            info@swiftcomfortline.ca
                        </a>
                    </li>

                    <li>
                        <div class="footer-contact-item">
                            <span class="footer-contact-icon">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#e0aa54"
                                    stroke-width="2" stroke-linecap="round">
                                    <circle cx="12" cy="12" r="10" />
                                    <polyline points="12 6 12 12 16 14" />
                                </svg>
                            </span>
                            {{ t('footer.hours') }}
                        </div>
                    </li>

                    <li>
                        <div class="footer-contact-item">
                            <span class="footer-contact-icon">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#e0aa54"
                                    stroke-width="2" stroke-linecap="round">
                                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                                    <circle cx="12" cy="9" r="2.5" />
                                </svg>
                            </span>
                            {{ t('footer.location') }}
                        </div>
                    </li>

                </ul>
            </div>

        </div>

        <!-- ── Bottom bar ─────────────────────────────────────── -->
        <div class="footer-bottom">
            <div class="footer-bottom-inner">
                <p class="footer-copyright">
                    © {{ currentYear }} Swift Comfort Line. {{ t('footer.rights') }}
                </p>

                <div class="footer-legal">
                    <a href="/privacy" class="footer-legal-link">{{ t('footer.privacy') }}</a>
                    <span class="footer-legal-sep" aria-hidden="true">·</span>
                    <a href="/terms" class="footer-legal-link">{{ t('footer.terms') }}</a>
                </div>

                <!-- Back to top -->
                <button class="back-to-top" @click="scrollToTop" :aria-label="t('footer.backToTop')">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                        stroke-linecap="round">
                        <line x1="12" y1="19" x2="12" y2="5" />
                        <polyline points="5 12 12 5 19 12" />
                    </svg>
                    {{ t('footer.backToTop') }}
                </button>
            </div>
        </div>

    </footer>
</template>

<script setup>
import { computed, defineComponent, h } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

/*
  Props:
  - tagline  — swaps the logo sub-text per page
    Healthcare page: "Non-Medical Support Services"
    Cleaning page:   "Professional Cleaning"
*/
const props = defineProps({
    tagline: {
        type: String,
        default: 'Non-Medical Support Services',
    },
})

const rawPhone = '+16138516775'
const currentYear = computed(() => new Date().getFullYear())

/* ── Social icon components ─────────────────────────────── */
/*
  SVG attributes cannot read CSS vars cross-browser.
  stroke="#e0aa54" = --color-gold-bright
*/
const IconFacebook = defineComponent({
    render: () => h('svg', {
        width: 16, height: 16, viewBox: '0 0 24 24',
        fill: 'none', stroke: '#e0aa54',
        'stroke-width': '2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round',
    }, [
        h('path', { d: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z' }),
    ]),
})

const IconInstagram = defineComponent({
    render: () => h('svg', {
        width: 16, height: 16, viewBox: '0 0 24 24',
        fill: 'none', stroke: '#e0aa54',
        'stroke-width': '2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round',
    }, [
        h('rect', { x: 2, y: 2, width: 20, height: 20, rx: 5, ry: 5 }),
        h('path', { d: 'M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z' }),
        h('line', { x1: 17.5, y1: 6.5, x2: 17.51, y2: 6.5 }),
    ]),
})

const IconLinkedin = defineComponent({
    render: () => h('svg', {
        width: 16, height: 16, viewBox: '0 0 24 24',
        fill: 'none', stroke: '#e0aa54',
        'stroke-width': '2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round',
    }, [
        h('path', { d: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z' }),
        h('rect', { x: 2, y: 9, width: 4, height: 12 }),
        h('circle', { cx: 4, cy: 4, r: 2 }),
    ]),
})

const IconTwitter = defineComponent({
    render: () => h('svg', {
        width: 16, height: 16, viewBox: '0 0 24 24',
        fill: 'none', stroke: '#e0aa54',
        'stroke-width': '2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round',
    }, [
        h('path', { d: 'M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z' }),
    ]),
})

const socials = [
    { label: 'Facebook', href: 'https://facebook.com', icon: IconFacebook },
    { label: 'Instagram', href: 'https://instagram.com', icon: IconInstagram },
    { label: 'LinkedIn', href: 'https://linkedin.com', icon: IconLinkedin },
    { label: 'Twitter/X', href: 'https://twitter.com', icon: IconTwitter },
]

/* ── Nav links ──────────────────────────────────────────── */
const quickLinks = [
    { id: 'home', label: 'navbar.home' },
    { id: 'about', label: 'navbar.about' },
    { id: 'services', label: 'navbar.services' },
    { id: 'areas', label: 'navbar.serviceAreas' },
    { id: 'testimonials', label: 'navbar.testimonials' },
    { id: 'contact', label: 'navbar.contact' },
]

const serviceLinks = [
    'ourServices.companionship.title',
    'ourServices.errands.title',
    'ourServices.mealPrep.title',
    'ourServices.housekeeping.title',
    'ourServices.transportation.title',
    'ourServices.respite.title',
]

/* ── Helpers ────────────────────────────────────────────── */
const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (!el) return
    window.scrollTo({
        top: el.getBoundingClientRect().top + window.pageYOffset - 100,
        behavior: 'smooth',
    })
}

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<style scoped>
/*
  All colors from main.css :root tokens.
  SVG stroke/fill use hardcoded hex matching tokens:
    #45137D  = --color-primary
    #320e5c  = --color-primary-dark
    #1A0535  = --color-primary-deep
    #CC933A  = --color-gold
    #e0aa54  = --color-gold-bright
*/

/* ─── Footer shell ──────────────────────────────────────── */
.site-footer {
    background: var(--color-primary-deep);
    /* #1A0535 */
    position: relative;
}

/* ─── Gold accent line at top ───────────────────────────── */
.footer-accent {
    width: 100%;
    height: 3px;
    background: linear-gradient(to right,
            transparent,
            var(--color-gold-bright),
            var(--color-gold),
            var(--color-gold-bright),
            transparent);
}

/* ─── Main grid ─────────────────────────────────────────── */
.footer-inner {
    max-width: 1240px;
    margin: 0 auto;
    padding: 64px 40px 48px;
    display: grid;
    grid-template-columns: 1.6fr 1fr 1fr 1.2fr;
    gap: 48px;
    align-items: start;
}

/* ─── Col 1 — Brand ─────────────────────────────────────── */
.footer-brand {
    display: flex;
    flex-direction: column;
    gap: 18px;
}

.footer-logo {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    text-decoration: none;
}

.footer-logo-img {
    width: 56px;
    height: 56px;
    object-fit: contain;
    /* Invert to white for dark background */
    filter: brightness(0) invert(1);
    opacity: 0.90;
    transition: opacity 0.2s ease;
}

.footer-logo:hover .footer-logo-img {
    opacity: 1;
}

.footer-logo-text {
    display: flex;
    flex-direction: column;
    gap: 2px;
}

.footer-logo-name {
    font-family: var(--font-display);
    font-size: 1.05rem;
    font-weight: 700;
    color: #ffffff;
    text-transform: uppercase;
    letter-spacing: 0.01em;
    line-height: 1.1;
}

.footer-logo-name--gold {
    color: var(--color-gold-bright);
}

.footer-logo-tagline {
    font-family: var(--font-body);
    font-size: 0.62rem;
    color: rgba(255, 255, 255, 0.45);
    letter-spacing: 0.1em;
    text-transform: uppercase;
}

.footer-desc {
    font-family: var(--font-body);
    font-size: 0.86rem;
    color: rgba(255, 255, 255, 0.52);
    line-height: 1.75;
    max-width: 280px;
    /* Override global p color */
    margin: 0;
}

/* ── Social icons ───────────────────────────────────────── */
.footer-socials {
    display: flex;
    gap: 8px;
}

.footer-social {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.12);
    background: rgba(255, 255, 255, 0.05);
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    transition: background 0.22s ease, border-color 0.22s ease, transform 0.22s ease;
}

.footer-social:hover {
    background: rgba(204, 147, 58, 0.18);
    border-color: rgba(204, 147, 58, 0.45);
    transform: translateY(-3px);
}

/* ── Cleaning page link ─────────────────────────────────── */
.footer-cleaning-link {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    font-family: var(--font-body);
    font-size: 0.80rem;
    font-weight: 600;
    color: var(--color-gold-bright);
    background: rgba(204, 147, 58, 0.10);
    border: 1px solid rgba(204, 147, 58, 0.28);
    padding: 8px 16px;
    border-radius: 50px;
    text-decoration: none;
    transition: background 0.22s ease, border-color 0.22s ease, transform 0.22s ease;
    align-self: flex-start;
}

.footer-cleaning-link:hover {
    background: rgba(204, 147, 58, 0.20);
    border-color: rgba(204, 147, 58, 0.55);
    transform: translateY(-2px);
}

.footer-cleaning-link svg:last-child {
    transition: transform 0.2s ease;
}

.footer-cleaning-link:hover svg:last-child {
    transform: translateX(3px);
}

/* ─── Nav columns ───────────────────────────────────────── */
.footer-col {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.footer-col-title {
    font-family: var(--font-body);
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--color-gold-bright);
    padding-bottom: 10px;
    border-bottom: 1px solid rgba(204, 147, 58, 0.20);
}

.footer-links {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.footer-link {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    font-family: var(--font-body);
    font-size: 0.86rem;
    color: rgba(255, 255, 255, 0.52);
    text-decoration: none;
    padding: 5px 0;
    transition: color 0.2s ease, gap 0.2s ease;
}

.footer-link svg {
    opacity: 0;
    flex-shrink: 0;
    transition: opacity 0.2s ease, transform 0.2s ease;
}

.footer-link:hover {
    color: var(--color-gold-bright);
    gap: 10px;
}

.footer-link:hover svg {
    opacity: 1;
    transform: translateX(2px);
}

/* ─── Contact list ──────────────────────────────────────── */
.footer-contact-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 14px;
}

.footer-contact-item {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    font-family: var(--font-body);
    font-size: 0.84rem;
    color: rgba(255, 255, 255, 0.52);
    text-decoration: none;
    line-height: 1.45;
    transition: color 0.2s ease;
}

a.footer-contact-item:hover {
    color: var(--color-gold-bright);
}

.footer-contact-icon {
    width: 30px;
    height: 30px;
    border-radius: var(--radius-sm);
    background: rgba(204, 147, 58, 0.10);
    border: 1px solid rgba(204, 147, 58, 0.20);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    margin-top: 1px;
}

/* ─── Bottom bar ────────────────────────────────────────── */
.footer-bottom {
    border-top: 1px solid rgba(255, 255, 255, 0.07);
}

.footer-bottom-inner {
    max-width: 1240px;
    margin: 0 auto;
    padding: 20px 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    flex-wrap: wrap;
}

.footer-copyright {
    font-family: var(--font-body);
    font-size: 0.78rem;
    color: rgba(255, 255, 255, 0.28);
    /* override global p color */
    margin: 0;
}

.footer-legal {
    display: flex;
    align-items: center;
    gap: 10px;
}

.footer-legal-link {
    font-family: var(--font-body);
    font-size: 0.78rem;
    color: rgba(255, 255, 255, 0.28);
    text-decoration: none;
    transition: color 0.2s ease;
}

.footer-legal-link:hover {
    color: rgba(255, 255, 255, 0.65);
}

.footer-legal-sep {
    color: rgba(255, 255, 255, 0.16);
    font-size: 0.8rem;
}

/* ── Back to top ────────────────────────────────────────── */
.back-to-top {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-family: var(--font-body);
    font-size: 0.78rem;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.45);
    background: rgba(255, 255, 255, 0.06);
    border: 1px solid rgba(255, 255, 255, 0.10);
    padding: 7px 14px;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.22s ease;
}

.back-to-top:hover {
    color: var(--color-gold-bright);
    background: rgba(204, 147, 58, 0.12);
    border-color: rgba(204, 147, 58, 0.35);
    transform: translateY(-2px);
}

.back-to-top svg {
    transition: transform 0.2s ease;
}

.back-to-top:hover svg {
    transform: translateY(-2px);
}

/* ─── Tablet ─────────────────────────────────────────────── */
@media (max-width: 1100px) {
    .footer-inner {
        grid-template-columns: 1fr 1fr;
        gap: 36px;
    }

    .footer-brand {
        grid-column: 1 / -1;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: flex-start;
        gap: 28px;
    }

    .footer-desc {
        max-width: 360px;
    }
}

/* ─── Mobile ─────────────────────────────────────────────── */
@media (max-width: 700px) {
    .footer-inner {
        grid-template-columns: 1fr;
        padding: 48px 22px 36px;
        gap: 32px;
    }

    .footer-brand {
        flex-direction: column;
        gap: 16px;
    }

    .footer-desc {
        max-width: 100%;
    }

    .footer-bottom-inner {
        padding: 18px 22px;
        flex-direction: column;
        align-items: flex-start;
        gap: 12px;
    }
}

/* ─── Reduced motion ─────────────────────────────────────── */
@media (prefers-reduced-motion: reduce) {

    .footer-social,
    .footer-cleaning-link,
    .footer-link,
    .back-to-top {
        transition: none !important;
    }
}
</style>