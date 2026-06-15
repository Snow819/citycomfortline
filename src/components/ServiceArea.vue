<template>
  <section class="service-areas" id="areas">
    <div class="service-areas-container">

      <!-- Header -->
      <div class="areas-header" data-aos="fade-up">
        <div class="label-row">
          <span class="label-line"></span>
          <span class="section-label">{{ t('serviceAreas.label') }}</span>
          <span class="label-line"></span>
        </div>
        <h2 class="section-title">{{ t('serviceAreas.title') }}</h2>
        <p class="section-subtitle">{{ t('serviceAreas.boundary') }}</p>
      </div>

      <div class="areas-inner">

        <!-- Map -->
        <div class="map-wrap" data-aos="fade-right">
          <div id="map" class="map-container"></div>
          <a
            href="https://www.google.com/maps/place/Ottawa,+ON,+Canada/"
            target="_blank"
            class="view-map-link"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
              <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
            {{ t('serviceAreas.viewMap') }}
          </a>
        </div>

        <!-- Areas list -->
        <div class="areas-list-wrap" data-aos="fade-left">
          <div class="areas-list">
            <div
              v-for="(area, key, index) in sortedAreas"
              :key="index"
              class="area-item"
            >
              <svg class="pin-icon" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              <span>{{ area }}</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import AOS from 'aos'
import 'aos/dist/aos.css'
import { onMounted, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

const { t, tm } = useI18n()

const areasData = computed(() => tm('serviceAreas.areas'))

const sortedAreas = computed(() => {
  const areas = Object.values(areasData.value)
  return areas.sort((a, b) => a.localeCompare(b))
})

const serviceAreas = [
  { name: 'Ottawa',         coords: [45.4215, -75.6993] },
  { name: 'Arnprior',       coords: [45.4334, -76.3525] },
  { name: 'Barrhaven',      coords: [45.2810, -75.7395] },
  { name: 'Brockville',     coords: [44.5895, -75.6858] },
  { name: 'Carleton Place', coords: [45.1368, -76.1374] },
  { name: 'Carp',           coords: [45.3500, -76.0333] },
  { name: 'Cornwall',       coords: [45.0270, -74.7349] },
  { name: 'Embrun',         coords: [45.2700, -75.3500] },
  { name: 'Gatineau',       coords: [45.4765, -75.7013] },
  { name: 'Kanata',         coords: [45.3041, -75.9075] },
  { name: 'Kemptville',     coords: [45.0167, -75.6500] },
  { name: 'Manotick',       coords: [45.2300, -75.6800] },
  { name: 'Merrickville',   coords: [44.9168, -75.8333] },
  { name: 'Orleans',        coords: [45.4668, -75.5127] },
  { name: 'Osgoode',        coords: [45.1441, -75.5980] },
  { name: 'Pembroke',       coords: [45.8267, -77.1107] },
  { name: 'Perth',          coords: [44.9000, -76.2500] },
  { name: 'Rockland',       coords: [45.5501, -75.2912] },
  { name: 'Russell',        coords: [45.2603, -75.3636] },
  { name: 'Smiths Falls',   coords: [44.9029, -76.0215] },
  { name: 'Stittsville',    coords: [45.2561, -75.9076] },
  { name: 'Wakefield',      coords: [45.6434, -75.9188] },
]

// Purple/gold SVG pin
const svgPin = encodeURIComponent(`
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="36" viewBox="0 0 28 36">
    <path d="M14 0C6.27 0 0 6.27 0 14c0 10.5 14 22 14 22S28 24.5 28 14C28 6.27 21.73 0 14 0z" fill="#2D1B69"/>
    <circle cx="14" cy="14" r="6" fill="#C9A84C"/>
  </svg>
`)

const markerIcon = L.divIcon({
  html: `<img src="data:image/svg+xml,${svgPin}" width="28" height="36" />`,
  iconSize: [28, 36],
  iconAnchor: [14, 36],
  popupAnchor: [0, -38],
  className: '',
})

onMounted(() => {
  AOS.init({ duration: 800, once: true })

  const map = L.map('map', {
    center: [45.4215, -75.6993],
    zoom: 8,
    zoomControl: true,
  })

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map)

  serviceAreas.forEach((area, i) => {
    setTimeout(() => {
      L.marker(area.coords, { icon: markerIcon })
        .addTo(map)
        .bindPopup(`<b style="font-family:sans-serif;color:#2D1B69">${area.name}</b>`)
    }, i * 100)
  })
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lora:wght@700&family=DM+Sans:wght@300;400;500;600&display=swap');

/* ─── Section ───────────────────────────────────────────── */
.service-areas {
  background: #faf9ff;
  padding: 90px 40px;
}

.service-areas-container {
  max-width: 1200px;
  margin: 0 auto;
}

/* ─── Header ────────────────────────────────────────────── */
.areas-header {
  text-align: center;
  margin-bottom: 48px;
}

.label-row {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  margin-bottom: 14px;
}

.label-line {
  width: 32px;
  height: 1px;
  background: #C9A84C;
}

.section-label {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #C9A84C;
}

.section-title {
  font-family: 'Lora', Georgia, serif;
  font-size: clamp(1.9rem, 3.2vw, 2.6rem);
  font-weight: 700;
  color: #2D1B69;
  margin-bottom: 14px;
}

.section-subtitle {
  font-family: 'DM Sans', sans-serif;
  font-size: 1rem;
  color: #5a5a7a;
  max-width: 540px;
  margin: 0 auto;
  line-height: 1.7;
}

/* ─── Inner layout ──────────────────────────────────────── */
.areas-inner {
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  gap: 32px;
  align-items: start;
}

/* ─── Map ───────────────────────────────────────────────── */
.map-wrap {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.map-container {
  height: 440px;
  border-radius: 18px;
  overflow: hidden;
  border: 1px solid rgba(45,27,105,0.08);
  box-shadow: 0 12px 40px rgba(45,27,105,0.1);
}

.view-map-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  align-self: flex-start;
  background: #2D1B69;
  color: #ffffff;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.85rem;
  font-weight: 600;
  padding: 11px 24px;
  border-radius: 50px;
  text-decoration: none;
  transition: background 0.2s ease, transform 0.2s ease;
}

.view-map-link:hover {
  background: #C9A84C;
  transform: translateY(-2px);
}

/* ─── Areas list ────────────────────────────────────────── */
.areas-list-wrap {
  background: #ffffff;
  border: 1px solid rgba(45,27,105,0.08);
  border-radius: 18px;
  padding: 28px;
  height: 440px;
  overflow-y: auto;
}

.areas-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}

.area-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 11px 14px;
  background: #faf9ff;
  border-radius: 9px;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.875rem;
  color: #2D1B69;
  font-weight: 500;
  transition: background 0.2s ease;
}

.area-item:hover {
  background: rgba(201,168,76,0.1);
}

.pin-icon {
  color: #C9A84C;
  flex-shrink: 0;
}

/* Custom scrollbar for areas list */
.areas-list-wrap::-webkit-scrollbar { width: 5px; }
.areas-list-wrap::-webkit-scrollbar-track { background: #faf9ff; border-radius: 3px; }
.areas-list-wrap::-webkit-scrollbar-thumb { background: rgba(45,27,105,0.2); border-radius: 3px; }

/* ─── Responsive ────────────────────────────────────────── */
@media (max-width: 1024px) {
  .areas-inner {
    grid-template-columns: 1fr;
  }

  .map-container { height: 360px; }
  .areas-list-wrap { height: auto; max-height: 320px; }
}

@media (max-width: 600px) {
  .service-areas { padding: 64px 20px; }

  .areas-list {
    grid-template-columns: 1fr;
  }

  .map-container { height: 280px; }
}
</style>