<template>
  <section class="testimonial-section" data-aos="fade-up" data-aos-duration="1000">
    <h2 class="section-title">What Our Clients Say</h2>

    <div class="carousel">
      <transition name="fade" mode="out-in">
        <div :key="currentIndex" class="testimonial-card" data-aos="zoom-in" data-aos-duration="800">
          <p class="testimonial-text">
            "{{ testimonials[currentIndex].text }}"
          </p>
          <div class="testimonial-author">
            <div>
              <h4>{{ testimonials[currentIndex].name }}</h4>
              <p>{{ testimonials[currentIndex].role }}</p>
            </div>
          </div>
        </div>
      </transition>

      <div class="controls">
        <button @click="prevTestimonial">‹</button>
        <button @click="nextTestimonial">›</button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";

const testimonials = [
  {
    text: "City Comfort Line gave me the best experience ever! Booking was fast and seamless.",
    name: "Oluwatobi Adebayo",
    role: "Customer",
  },
  {
    text: "Professional drivers and top-notch service. I highly recommend them!",
    name: "Mary Johnson",
    role: "Frequent Traveler",
  },
  {
    text: "I was impressed with how clean and comfortable the vehicle was. Great service overall!",
    name: "James Okoro",
    role: "Business Executive",
  },
];

const currentIndex = ref(0);
let interval = null;

const nextTestimonial = () => {
  currentIndex.value = (currentIndex.value + 1) % testimonials.length;
};

const prevTestimonial = () => {
  currentIndex.value =
    (currentIndex.value - 1 + testimonials.length) % testimonials.length;
};

// Auto change every 4 seconds
onMounted(() => {
  AOS.init();
  interval = setInterval(nextTestimonial, 4000);
});

onUnmounted(() => {
  clearInterval(interval);
});
</script>

<style scoped>
.testimonial-section {
  text-align: center;
  padding: 80px 20px;
  background: #e3fae4;
}

.section-title {
  font-size: 2rem;
  font-weight: 700;
  color: #444;
  margin-bottom: 40px;
}

.carousel {
  position: relative;
  max-width: 600px;
  margin: 0 auto;
}

.testimonial-card {
  background: linear-gradient(135deg, #E8F5E9, #A5D6A7);
  padding: 30px 25px;
  border-radius: 20px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.4s ease, box-shadow 0.4s ease;
}

.testimonial-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
}

.testimonial-text {
  font-size: 1.1rem;
  font-style: italic;
  line-height: 1.7;
  color: #333;
  margin-bottom: 25px;
}

.testimonial-author {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
}

.testimonial-author h4 {
  font-size: 1.1rem;
  color: #212121;
  margin: 0;
}

.testimonial-author p {
  margin: 0;
  font-size: 0.9rem;
  color: #666;
}

.controls {
  margin-top: 25px;
}

.controls button {
  background: #E8F5E9;
  color: #212121;
  border: none;
  margin: 0 8px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 1.2rem;
  transition: 0.3s ease;
}

.controls button:hover {
  background: #A5D6A7;
}

/* Animations */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.6s, transform 0.6s;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

/* Responsive */
@media (max-width: 768px) {
  .testimonial-card {
    padding: 25px 15px;
  }

  .testimonial-text {
    font-size: 1rem;
  }
}
</style>