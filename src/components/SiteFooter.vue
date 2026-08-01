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

                <p class="footer-desc">{{ page === 'cleaning' ? t('footer.cleaningDesc') : t('footer.desc') }}</p>

                <!-- Social links -->
                <div class="footer-socials">
                    <a v-for="social in socials" :key="social.label" :href="social.href" class="footer-social"
                        :aria-label="social.label" target="_blank" rel="noopener noreferrer">
                        <component :is="social.icon" />
                    </a>
                </div>

                <!-- Cross-page shortcut — flips based on which page we're on -->
                <a :href="crossLink.href" class="footer-cleaning-link">
                    <component :is="crossLink.icon" />
                    {{ t(crossLink.label) }}
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
    /*
      page: 'healthcare' (default) or 'cleaning'
      Controls which cross-page link appears in the footer brand column.
      Healthcare page → shows "Our Cleaning Services" → /cleaning
      Cleaning page   → shows "Non-Medical Care Services" → /
    */
    page: {
        type: String,
        default: 'healthcare',
    },
})

/* Cross-link icon components */
const IconBroom = defineComponent({
    render: () => h('svg', {
        width: 13, height: 13, viewBox: '0 0 24 24',
        fill: 'none', stroke: 'currentColor',
        'stroke-width': '2.2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round',
    }, [
        h('path', { d: 'M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z' }),
        h('polyline', { points: '9 22 9 12 15 12 15 22' }),
    ]),
})

const IconHeart = defineComponent({
    render: () => h('svg', {
        width: 13, height: 13, viewBox: '0 0 24 24',
        fill: 'none', stroke: 'currentColor',
        'stroke-width': '2.2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round',
    }, [
        h('path', { d: 'M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z' }),
    ]),
})

/* Computed cross-link — reacts to the page prop */
const crossLink = computed(() => {
    if (props.page === 'cleaning') {
        return {
            href: '/',
            label: 'footer.careLink',
            icon: IconHeart,
        }
    }
    return {
        href: '/cleaning',
        label: 'footer.cleaningLink',
        icon: IconBroom,
    }
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

const IconWhatsApp = defineComponent({
    render: () => h('svg', {
        width: 16, height: 16, viewBox: '0 0 24 24',
        fill: '#e0aa54',
    }, [
        h('path', { d: 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z' }),
    ]),
})

const socials = [
    {
        label: 'Facebook',
        href: 'https://www.facebook.com/share/19AHAawKUf/?mibextid=wwXIfr',
        icon: IconFacebook,
    },
    {
        label: 'Instagram',
        href: 'https://instagram.com/swiftcomfortline',
        icon: IconInstagram,
    },
    {
        label: 'WhatsApp',
        href: 'https://wa.me/16138516775',
        icon: IconWhatsApp,
    },
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

const healthcareServiceLinks = [
    'ourServices.companionship.title',
    'ourServices.errands.title',
    'ourServices.mealPrep.title',
    'ourServices.housekeeping.title',
    'ourServices.transportation.title',
    'ourServices.respite.title',
]

const cleaningServiceLinks = [
    'cleaningServices.home.title',
    'cleaningServices.office.title',
    'cleaningServices.deep.title',
    'cleaningServices.moveIn.title',
    'cleaningServices.airbnb.title',
]

const serviceLinks = computed(() =>
    props.page === 'cleaning' ? cleaningServiceLinks : healthcareServiceLinks
)

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