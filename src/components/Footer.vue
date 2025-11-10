<template>
  <footer class="footer" data-aos="fade-up" data-aos-duration="1000">
    <div class="footer-container">
      <!-- Logo & Description -->
      <div class="footer-about" data-aos="zoom-in" data-aos-delay="100">
        <img :src="logo" alt="City Comfort Line Logo" class="footer-logo-img" />
        <p>{{ t('footer.description') }}</p>
      </div>

      <!-- Quick Links -->
      <div class="footer-links" data-aos="fade-up" data-aos-delay="200">
        <h3>{{ t('footer.quickLinksTitle') }}</h3>
        <ul>
          <li><a href="#home">{{ t('footer.links.home') }}</a></li>
          <li><a href="#about">{{ t('footer.links.about') }}</a></li>
          <li><a href="#services">{{ t('footer.links.services') }}</a></li>
          <li><a href="#areas">{{ t('footer.links.serviceArea') }}</a></li>
          <li><a href="#testimonials">{{ t('footer.links.testimonial') }}</a></li>
        </ul>
      </div>

      <!-- Contact Info -->
      <div class="footer-contact" data-aos="fade-up" data-aos-delay="300">
        <h3>{{ t('footer.contactTitle') }}</h3>
        <p><i class="bi bi-geo-alt-fill"></i> {{ t('footer.address') }}</p>
        <p><i class="bi bi-telephone-fill"></i><a href="tel:+16138516775"> {{ t('footer.phone') }}</a></p>
        <p><i class="bi bi-envelope-fill"></i> {{ t('footer.email') }}</p>

        <div class="social-icons">
          <a href="#" title="Facebook"><i class="bi bi-facebook"></i></a>
          <a href="#" title="Instagram"><i class="bi bi-instagram"></i></a>
          <a href="#" title="Twitter"><i class="bi bi-twitter-x"></i></a>
          <a href="#" title="LinkedIn"><i class="bi bi-linkedin"></i></a>
        </div>
      </div>
    </div>

    <!-- Copyright -->
    <div class="footer-bottom">
      <p>© {{ new Date().getFullYear() }} Swift Comfort Line. {{ t('footer.rights') }}</p>
    </div>
  </footer>
</template>

<script setup>
import logo from "@/assets/Logo_dark.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { onMounted } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

onMounted(() => {
  AOS.init();
});
</script>

<style scoped>
.footer {
  background: #e3fae4;
  color: #444;
  padding: 80px 40px;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.footer-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  justify-content: center;
  align-items: start;
  text-align: start;
  max-width: 1200px;
  margin: 0 auto;
}

.footer-logo-img {
  width: 120px;
  height: 120px;
  margin-bottom: 8px;
}

.footer-about p {
  font-size: 0.95rem;
  line-height: 1.6;
  color: #333;
}

.footer-links h3,
.footer-contact h3 {
  color: #2e7d32;
  margin-bottom: 15px;
  font-size: 1.2rem;
  font-weight: 600;
}

.footer-links ul {
  list-style: none;
  padding: 0;
}

.footer-links li {
  margin: 8px 0;
}

.footer-links a {
  color: #333;
  text-decoration: none;
  transition: 0.3s;
}

.footer-links a:hover {
  color: #2e7d32;
}

.footer-contact p,
.footer-contact a {
  margin: 6px 0;
  color: #333;
  font-size: 0.95rem;
  text-decoration: none;
}

.footer-contact i {
  color: #2e7d32;
  margin-right: 8px;
  font-size: 1rem;
}

.social-icons {
  margin-top: 15px;
  display: flex;
  justify-content: start;
  gap: 15px;
}

.social-icons a {
  color: #2e7d32;
  font-size: 1.5rem;
  transition: transform 0.4s ease, color 0.4s ease, box-shadow 0.4s ease;
}

.social-icons a:hover {
  color: #1b5e20;
  transform: scale(1.3) rotate(10deg);
}

/* Footer bottom */
.footer-bottom {
  margin-top: 30px;
  padding-top: 30px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}

.footer-bottom p {
  font-size: 0.9rem;
  color: #555;
}

/* Responsive */
@media (max-width: 768px) {
  .footer-container {
    grid-template-columns: 1fr;
    text-align: start;
  }
}
</style>