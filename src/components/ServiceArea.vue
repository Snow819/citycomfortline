<template>
  <section class="service-areas" data-aos="fade-up">
    <h2 class="section-title">Areas We Serve</h2>

    <!-- Interactive Map -->
    <div id="map" class="map-container" data-aos="zoom-in"></div>

    <a
      href="https://www.google.com/maps/place/Ottawa,+ON,+Canada/"
      target="_blank"
      class="view-map-link"
    >
      🌐 View Larger Map
    </a>

    <!-- Areas List -->
    <div class="areas-list" data-aos="fade-up" data-aos-delay="200">
      <div
        v-for="(area, index) in sortedAreas"
        :key="index"
        class="area-item"
        data-aos="zoom-in"
        data-aos-delay="100"
      >
        <i class="bi bi-geo-alt-fill"></i>
        <span>{{ area }}</span>
      </div>
    </div>
  </section>
</template>

<script setup>
import AOS from "aos";
import "aos/dist/aos.css";
import { onMounted, computed } from "vue";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const areas = [
  "Arnprior",
  "Barrhaven",
  "Brockville",
  "Carleton Place",
  "Carp",
  "Cornwall",
  "Emburn",
  "Gatineau",
  "Kanata",
  "Kemptville",
  "Manotick",
  "Merrickville",
  "Orleans",
  "Osgoode",
  "Ottawa",
  "Pembroke",
  "Perth",
  "Rockland",
  "Russell",
  "Smith Falls",
  "Stittsville",
  "Wakefield",
];

const serviceAreas = [
  { name: "Ottawa", coords: [45.4215, -75.6993] },
  { name: "Arnprior", coords: [45.4334, -76.3525] },
  { name: "Barrhaven", coords: [45.281, -75.7395] },
  { name: "Brockville", coords: [44.5895, -75.6858] },
  { name: "Carleton Place", coords: [45.1368, -76.1374] },
  { name: "Gatineau", coords: [45.4765, -75.7013] },
  { name: "Kanata", coords: [45.3041, -75.9075] },
  { name: "Kemptville", coords: [45.0167, -75.65] },
  { name: "Manotick", coords: [45.23, -75.68] },
  { name: "Orleans", coords: [45.4668, -75.5127] },
  { name: "Stittsville", coords: [45.2561, -75.9076] },
  { name: "Osgoode", coords: [45.1441, -75.598] },
  { name: "Smith Falls", coords: [44.9029, -76.0215] },
  { name: "Cornwall", coords: [45.027, -74.7349] },
  { name: "Wakefield", coords: [45.6434, -75.9188] },
  { name: "Russell", coords: [45.2603, -75.3636] },
  { name: "Pembroke", coords: [45.8267, -77.1107] },
  { name: "Carp", coords: [45.35, -76.0333] },
  { name: "Merrickville", coords: [44.9168, -75.8333] },
  { name: "Rockland", coords: [45.5501, -75.2912] },
  { name: "Perth", coords: [44.9, -76.25] },
  { name: "Emburn", coords: [45.27, -75.35] },
];

const markerIcon = L.icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
  iconSize: [30, 30],
  iconAnchor: [15, 30],
  popupAnchor: [0, -25],
});

const sortedAreas = computed(() => [...areas].sort());

onMounted(() => {
  AOS.init({ duration: 800, once: true });

  // Initialize Leaflet Map
  const map = L.map("map", {
    center: [45.4215, -75.6993], // Ottawa
    zoom: 8,
    zoomControl: true,
  });

  // Add tile layer
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);

  // Add markers
  serviceAreas.forEach((area) => {
    const marker = L.marker(area.coords, { icon: markerIcon })
      .addTo(map)
      .bindPopup(`<b>${area.name}</b>`);

    // Marker animation on click
    marker.on("click", () => {
      marker.setBounceOptions({ bounceHeight: 30, bounceSpeed: 54 }).bounce(2);
    });
  });
});
</script>

<style scoped>
.service-areas {
  padding: 80px 30px;
  text-align: center;
  background-color: #f9fdf9;
}

.section-title {
  font-size: 2rem;
  font-weight: 700;
  color: #2e7d32;
  margin-bottom: 30px;
}

/* Map styling */
.map-container {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 40px;
  height: 450px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.view-map-link {
  display: inline-block;
  margin-bottom: 40px;
  background: #2e7d32;
  color: #fff;
  padding: 8px 14px;
  border-radius: 6px;
  font-size: 0.9rem;
  text-decoration: none;
  transition: background 0.3s ease;
}

.view-map-link:hover {
  background: #1b5e20;
}

/* Areas List */
.areas-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
  justify-content: center;
  max-width: 900px;
  margin: 0 auto;
}

.area-item {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background: #e8f5e9;
  color: #333;
  border-radius: 12px;
  padding: 10px 15px;
  transition: all 0.3s ease;
  font-weight: 500;
  font-size: 1rem;
}

.area-item i {
  color: #2e7d32;
  margin-right: 10px;
  font-size: 1.3rem;
  transition: transform 0.3s ease;
}

/* Icon animation */
.area-item:hover i {
  transform: scale(1.2) rotate(10deg);
}

/* Hover effect */
.area-item:hover {
  background: #c8e6c9;
}

/* Responsive */
@media (max-width: 768px) {
  .service-areas {
    padding: 60px 20px;
  }

  .section-title {
    font-size: 1.6rem;
  }

  .area-item {
  /* text-align: start; */
    justify-content: center;
  }
}
</style>
