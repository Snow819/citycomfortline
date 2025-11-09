<template>
  <div class="form-wrapper" id="get-quote">
    <div class="form-container">
      <h2>{{ t("getQuote.title") }}</h2>

      <form @submit.prevent="handleSubmit" class="moving-form">
        <!-- Name -->
        <div class="form-group">
          <label for="name">{{ t("getQuote.name") }}</label>
          <input
            type="text"
            id="name"
            v-model="form.name"
            required
            :placeholder="t('getQuote.namePlaceholder')"
          />
        </div>

        <!-- Phone Number -->
        <div class="form-group">
          <label for="phone">{{ t("getQuote.phone") }}</label>
          <input
            type="tel"
            id="phone"
            v-model="form.phone"
            required
            :placeholder="t('getQuote.phonePlaceholder')"
          />
        </div>

        <!-- Email -->
        <div class="form-group">
          <label for="email">{{ t("getQuote.email") }}</label>
          <input
            type="email"
            id="email"
            v-model="form.email"
            required
            :placeholder="t('getQuote.emailPlaceholder')"
          />
        </div>

        <!-- Confirm Email -->
        <div class="form-group">
          <label for="confirmEmail">{{ t("getQuote.confirmEmail") }}</label>
          <input
            type="email"
            id="confirmEmail"
            v-model="form.confirmEmail"
            required
            :placeholder="t('getQuote.confirmEmailPlaceholder')"
          />
          <p v-if="emailMismatch" class="error-text">{{ t("getQuote.emailMismatch") }}</p>
        </div>

        <!-- Address -->
        <div class="form-group">
          <label for="from">{{ t("getQuote.from") }}</label>
          <input
            type="text"
            id="from"
            v-model="form.from"
            required
            :placeholder="t('getQuote.fromPlaceholder')"
          />
        </div>

        <div class="form-group">
          <label for="to">{{ t("getQuote.to") }}</label>
          <input
            type="text"
            id="to"
            v-model="form.to"
            required
            :placeholder="t('getQuote.toPlaceholder')"
          />
        </div>

        <div class="form-group">
          <label for="date">{{ t("getQuote.date") }}</label>
          <input type="date" id="date" v-model="form.date" required />
        </div>

        <!-- Choose Service Type -->
        <div class="form-group">
          <label>{{ t("getQuote.chooseServiceType") }}</label>
          <div class="service-options">
            <button
              type="button"
              :class="{ active: form.serviceType === 'cleaning' }"
              @click="form.serviceType = 'cleaning'"
            >
              Cleaning
            </button>
            <button
              type="button"
              :class="{ active: form.serviceType === 'moving' }"
              @click="form.serviceType = 'moving'"
            >
              Moving
            </button>
          </div>
        </div>

        <!-- Cleaning Form -->
        <template v-if="form.serviceType === 'cleaning'">
          <div class="form-group">
            <label for="cleaningAddress">Cleaning Address</label>
            <input
              type="text"
              id="cleaningAddress"
              v-model="form.cleaningAddress"
              placeholder="Enter cleaning location"
            />
          </div>

          <div class="form-group">
            <label for="cleaningType">Type of Cleaning</label>
            <select id="cleaningType" v-model="form.cleaningType">
              <option disabled value="">Select cleaning type</option>
              <option>Standard Cleaning</option>
              <option>Deep Cleaning</option>
              <option>Move-out / Move-in Cleaning</option>
              <option>Commercial Cleaning</option>
            </select>
          </div>

          <div class="form-group">
            <label for="cleaningRooms">Number of Rooms</label>
            <input
              type="number"
              id="cleaningRooms"
              v-model="form.cleaningRooms"
              min="1"
              placeholder="Enter number of rooms"
            />
          </div>

          <div class="form-group">
            <label for="additionalCleaningDetails">Additional Requirements</label>
            <textarea
              id="additionalCleaningDetails"
              v-model="form.additionalCleaningDetails"
              placeholder="Describe what more you want using professional terminologies"
            ></textarea>
          </div>
        </template>

        <!-- Moving Form -->
        <template v-if="form.serviceType === 'moving'">
          <div class="form-group">
            <label for="movingRooms">Number of Rooms</label>
            <input
              type="number"
              id="movingRooms"
              v-model="form.movingRooms"
              min="1"
              placeholder="Enter number of rooms"
            />
          </div>

          <div class="form-group">
            <label for="movingFrom">Moving From</label>
            <input
              type="text"
              id="movingFrom"
              v-model="form.movingFrom"
              placeholder="Enter current location"
            />
          </div>

          <div class="form-group">
            <label for="movingTo">Moving To</label>
            <input
              type="text"
              id="movingTo"
              v-model="form.movingTo"
              placeholder="Enter destination"
            />
          </div>

          <div class="form-group">
            <label for="additionalMovingDetails">Additional Requirements</label>
            <textarea
              id="additionalMovingDetails"
              v-model="form.additionalMovingDetails"
              placeholder="Describe what more you want using professional terminologies"
            ></textarea>
          </div>
        </template>

        <!-- Toast Notification -->
        <transition name="fade">
          <div v-if="toast.show" :class="['toast-inline', toast.type]">
            {{ toast.message }}
          </div>
        </transition>

        <!-- Submit -->
        <button type="submit" :disabled="emailMismatch || loading">
          {{ loading ? t("getQuote.sending") : t("getQuote.submit") }}
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import emailjs from "emailjs-com";
import { ref, watch } from "vue";
import { useI18n } from "vue-i18n";

export default {
  name: "ServiceForm",
  setup() {
    const { t, locale } = useI18n();
    locale.value = localStorage.getItem("lang") || "en";

    const form = ref({
      name: "",
      phone: "",
      email: "",
      confirmEmail: "",
      from: "",
      to: "",
      date: "",
      serviceType: "",

      // Cleaning
      cleaningAddress: "",
      cleaningType: "",
      cleaningRooms: null,
      additionalCleaningDetails: "",

      // Moving
      movingRooms: null,
      movingFrom: "",
      movingTo: "",
      additionalMovingDetails: "",
    });

    const emailMismatch = ref(false);
    const loading = ref(false);

    watch(
      () => [form.value.email, form.value.confirmEmail],
      ([email, confirm]) => {
        emailMismatch.value = email && confirm && email !== confirm;
      }
    );

    const toast = ref({ show: false, message: "", type: "success" });
    const showToast = (message, type = "success") => {
      toast.value = { show: true, message, type };
      setTimeout(() => (toast.value.show = false), 4000);
    };

    const resetForm = () => {
      for (const key in form.value) form.value[key] = key.includes("Rooms") ? null : "";
    };

    const handleSubmit = async () => {
      if (emailMismatch.value) {
        showToast(t("getQuote.emailMismatch"), "error");
        return;
      }

      loading.value = true;
      try {
        const SERVICE_ID = "your_service_id";
        const TEMPLATE_ID = "your_template_id";
        const PUBLIC_KEY = "your_public_key";

        await emailjs.send(SERVICE_ID, TEMPLATE_ID, form.value, PUBLIC_KEY);
        showToast(t("getQuote.success"), "success");
        resetForm();
      } catch (error) {
        console.error(error);
        showToast(t("getQuote.failure"), "error");
      } finally {
        loading.value = false;
      }
    };

    return { t, form, emailMismatch, handleSubmit, toast, loading };
  },
};
</script>

<style scoped>
/* === Keep previous polished styles === */
.form-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 80px 40px;
  min-height: 100vh;
  background: linear-gradient(160deg, #E8F5E9 30%, #A5D6A7 100%);
}

.form-container {
  width: 100%;
  background: rgba(30,30,30,0.4);
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  border-bottom: 1px solid rgba(255,255,255,0.12);
  box-shadow: 0 4px 32px rgba(0,0,0,0.18);
  padding: 30px 25px;
  border-radius: 12px;
  color: #fff;
  transition: all 0.3s ease;
  position: relative;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
  font-weight: 700;
  letter-spacing: 0.5px;
}

.moving-form {
  display: grid;
  grid-template-columns: 1fr;
  gap: 18px;
}

.form-group {
  display: flex;
  flex-direction: column;
}

label {
  margin-bottom: 6px;
  font-weight: 600;
  color: #f1f1f1;
}

input,
select,
textarea {
  padding: 12px;
  border-radius: 6px;
  border: 1px solid #444;
  background: #fff;
  color: #222;
  font-size: 15px;
  transition: border-color 0.3s ease;
}

input:focus,
select:focus,
textarea:focus {
  border-color: #26a69a;
  outline: none;
}

/* Service type buttons */
.service-options {
  display: flex;
  gap: 10px;
}

.service-options button {
  flex: 1;
  padding: 12px;
  border-radius: 6px;
  border: 1px solid #444;
  background: #fff;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s;
}

.service-options button.active {
  background: #26a69a;
  color: #fff;
  border-color: #26a69a;
}

button[type="submit"] {
  background: linear-gradient(135deg, #A5D6A7, #E8F5E9);
  color: #212121;
  font-weight: bold;
  border: none;
  padding: 12px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
}

button[type="submit"]:hover {
  background: linear-gradient(50deg, #E8F5E9 30%, #A5D6A7 100%);
}

button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.error-text {
  color: #ff6b6b;
  font-size: 0.85rem;
  margin-top: 4px;
}

/* Toast */
.toast-inline {
  position: absolute;
  bottom: 70px;
  left: 50%;
  transform: translateX(-50%);
  padding: 12px 20px;
  border-radius: 6px;
  font-weight: bold;
  color: #fff;
  opacity: 0.95;
  z-index: 10;
}

.toast-inline.success {
  background-color: #4caf50;
}

.toast-inline.error {
  background-color: #f44336;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Responsive */
@media (min-width: 640px) {
  .form-container {
    max-width: 600px;
    padding: 40px;
  }
  .moving-form {
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }
  .form-group:nth-last-child(2),
  button {
    grid-column: span 2;
  }
}

@media (min-width: 1024px) {
  .form-container {
    max-width: 700px;
    padding: 50px;
  }
}
</style>
