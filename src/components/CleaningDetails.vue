<template>
    <section class="detail-section">
        <div class="detail-media">
            <img :src="kitchenImage" :alt="t('cleaning.details.imageAlt')" class="detail-img" />
        </div>

        <div class="detail-content">
            <h2 class="detail-title">{{ t('cleaning.details.title') }}</h2>
            <span class="detail-divider"></span>
            <p class="detail-text">{{ t('cleaning.details.subtitle') }}</p>

            <ul class="detail-checklist">
                <li class="detail-item" v-for="(item, i) in checklistKeys" :key="i">
                    <span class="check-icon">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="20 6 9 17 4 12" />
                        </svg>
                    </span>
                    <span>{{ t(item) }}</span>
                </li>
            </ul>
        </div>
    </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import kitchenImage from '@/assets/cleaningimg.png'

const { t } = useI18n()

const checklistKeys = [
    'cleaning.details.item1',
    'cleaning.details.item2',
    'cleaning.details.item3',
    'cleaning.details.item4',
]
</script>

<style scoped>
.detail-section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: stretch;
    min-height: 520px;
}

/* ─── Media ──────────────────────────────────────────────── */
.detail-media {
    position: relative;
    overflow: hidden;
}

.detail-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

/* ─── Content ────────────────────────────────────────────── */
.detail-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: var(--color-bg-soft);
    padding: 64px 72px;
}

.detail-title {
    font-family: var(--font-display);
    font-size: clamp(1.8rem, 3vw, 2.4rem);
    font-weight: 700;
    color: var(--color-primary);
    line-height: 1.25;
}

.detail-divider {
    display: block;
    width: 56px;
    height: 2px;
    background: var(--color-gold);
    margin: 22px 0;
}

.detail-text {
    font-family: var(--font-body);
    font-size: 1rem;
    color: var(--color-text-muted);
    line-height: 1.75;
    max-width: 420px;
    margin-bottom: 30px;
}

/* ─── Checklist ──────────────────────────────────────────── */
.detail-checklist {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.detail-item {
    display: flex;
    align-items: center;
    gap: 14px;
    font-family: var(--font-body);
    font-size: 0.98rem;
    font-weight: 500;
    color: var(--color-text);
}

.check-icon {
    width: 28px;
    height: 28px;
    flex-shrink: 0;
    border-radius: 50%;
    background: var(--color-primary);
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
}

/* ─── Responsive ─────────────────────────────────────────── */
@media (max-width: 900px) {
    .detail-section {
        grid-template-columns: 1fr;
        min-height: auto;
    }

    .detail-media {
        aspect-ratio: 4 / 3;
    }

    .detail-content {
        padding: 48px 28px;
    }

    .detail-text {
        max-width: none;
    }
}

@media (max-width: 480px) {
    .detail-content {
        padding: 40px 20px;
    }
}
</style>