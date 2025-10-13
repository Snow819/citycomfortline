<template>
    <div class="ServicesArea-wrapper">
        <div class="min-h-screen p-6 bg-gray-50 flex flex-col items-center">
      <!-- Language Switch -->
      <div class="flex justify-center gap-3 mb-5 flex-wrap">
        <button
          @click="setLanguage('en')"
          class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          English
        </button>
        <button
          @click="setLanguage('fr')"
          class="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
        >
          Français
        </button>
        <button
          @click="setLanguage('zh')"
          class="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
        >
          中文
        </button>
      </div>
  
      <!-- Title -->
      <h1 class="text-2xl md:text-3xl font-bold text-center mb-6">
        {{ $t('serviceAreas.title') }}
      </h1>
  
      <!-- Map -->
      <div id="map" class="w-full h-[500px] md:h-[600px] rounded-lg shadow-lg z-0"></div>
    </div>
    </div>
    
  </template>
  
  <script setup>
  import { onMounted } from 'vue'
  import { useI18n } from 'vue-i18n'
  import L from 'leaflet'
  import 'leaflet/dist/leaflet.css'
  
  const { locale, t } = useI18n()
  const setLanguage = (lang) => (locale.value = lang)
  
  // Locations with coordinates and colors
  const serviceAreas = [
    { name: 'Ottawa', coords: [45.4215, -75.6992], color: 'red' },
    { name: 'Arnprior', coords: [45.4348, -76.3546], color: 'blue' },
    { name: 'Barrhaven', coords: [45.2724, -75.7389], color: 'green' },
    { name: 'Brockville', coords: [44.5895, -75.6844], color: 'purple' },
    { name: 'Carleton Place', coords: [45.1390, -76.1313], color: 'orange' },
    { name: 'Gatineau', coords: [45.4773, -75.7010], color: 'teal' },
    { name: 'Kanata', coords: [45.2969, -75.9041], color: 'pink' },
    { name: 'Kemptville', coords: [45.0169, -75.6454], color: 'brown' },
    { name: 'Manotick', coords: [45.2273, -75.6926], color: 'cyan' },
    { name: 'Orleans', coords: [45.4811, -75.5129], color: 'gray' },
    { name: 'Stittsville', coords: [45.2585, -75.9219], color: '#ff6b6b' },
    { name: 'Osgoode', coords: [45.1475, -75.6078], color: '#3b82f6' },
    { name: 'Smiths Falls', coords: [44.9047, -76.0221], color: '#10b981' },
    { name: 'Cornwall', coords: [45.0181, -74.7282], color: '#f59e0b' },
    { name: 'Wakefield', coords: [45.6431, -75.9274], color: '#8b5cf6' },
    { name: 'Russell', coords: [45.2569, -75.3642], color: '#14b8a6' },
    { name: 'Pembroke', coords: [45.8266, -77.1106], color: '#f43f5e' },
    { name: 'Carp', coords: [45.3491, -76.0344], color: '#eab308' },
    { name: 'Merrickville', coords: [44.9189, -75.8358], color: '#6366f1' },
    { name: 'Rockland', coords: [45.5493, -75.2910], color: '#0ea5e9' },
    { name: 'Perth', coords: [44.8986, -76.2497], color: '#ec4899' },
    { name: 'Embrun', coords: [45.2745, -75.2675], color: '#22c55e' }
  ]
  
  onMounted(() => {
    // Initialize map
    const map = L.map('map', {
      zoomControl: true,
      scrollWheelZoom: false,
    }).setView([45.4215, -75.6992], 9)
  
    // Base map tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(map)
  
    // Add colored pins for each area
    serviceAreas.forEach(area => {
      const icon = L.divIcon({
        html: `<div style="background-color:${area.color};
                width:16px;height:16px;
                border-radius:50%;
                border:2px solid white;
                box-shadow:0 0 4px rgba(0,0,0,0.3);"></div>`,
        className: ''
      })
      L.marker(area.coords, { icon })
        .addTo(map)
        .bindPopup(`<strong>${area.name}</strong>`)
    })
  
    // Auto-fit all pins
    const group = L.featureGroup(serviceAreas.map(a => L.marker(a.coords)))
    map.fitBounds(group.getBounds().pad(0.2))
  })
  </script>
  
  <style scoped>
  .ServicesArea-wrapper{
    background: #e3fae4;
    overflow-x: hidden;
  }

  #map {
    height: 500px;
    width: 100%;
    border-radius: 0.75rem;
  }
  @media (max-width: 768px) {
    #map {
      height: 400px;
    }
  }
  </style>
  