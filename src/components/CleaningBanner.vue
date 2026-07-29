<template>
    <div class="cleaning-banner" role="complementary">
        <p class="cb-text">
            {{ t('cleaningBanner.message') }}
            <a href="/cleaning" class="cb-link">
                {{ t('cleaningBanner.linkText') }}
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                    stroke-linecap="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                </svg>
            </a>
        </p>
    </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<style scoped>
/*
  Slim secondary banner that sits between TopBanner and Navbar.
  Uses --banner-height offset so it stacks correctly.
  z-index 999 — below navbar (1000) and TopBanner (1001).
*/
.cleaning-banner {
    position: fixed;
    top: calc(var(--banner-height, 38px) + 84px);
    left: 0;
    width: 100%;
    z-index: 999;
    background: var(--color-gold-light);
    border-bottom: 1px solid rgba(204, 147, 58, 0.25);
    padding: 7px 40px;
    text-align: center;
}

.cb-text {
    font-family: var(--font-body);
    font-size: 0.80rem;
    color: var(--color-text-muted);
    display: inline-flex;
    align-items: center;
    gap: 8px;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0;
}

.cb-link {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    color: var(--color-gold-dark);
    font-weight: 700;
    text-decoration: underline;
    text-underline-offset: 2px;
    transition: color 0.2s ease;
}

.cb-link:hover {
    color: var(--color-primary);
}

.cb-link svg {
    transition: transform 0.2s ease;
}

.cb-link:hover svg {
    transform: translateX(3px);
}

@media (max-width: 600px) {
    .cleaning-banner {
        padding: 6px 16px;
        font-size: 0.73rem;
    }
}
</style>