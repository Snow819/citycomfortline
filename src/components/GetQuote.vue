<template>
  <div class="form-wrapper" id="get-quote">
    <div class="form-container">
      <!-- Initial Landing View -->
      <div v-if="currentStep === 'landing'" class="landing-view">
        <h2>{{ t("getQuote.title") }}</h2>
        <p class="description">{{ t("getQuote.landingDescription") }}</p>
        <button @click="currentStep = 'selectService'" class="cta-button">
          {{ t("getQuote.getQuoteButton") }}
        </button>
      </div>

      <!-- Service Selection View -->
      <div v-else-if="currentStep === 'selectService'" class="service-selection">
        <button @click="currentStep = 'landing'" class="back-button">
          <i class="bi bi-arrow-left"></i> {{ t("getQuote.back") }}
        </button>
        <h2>{{ t("getQuote.selectServiceTitle") }}</h2>
        <p class="subtitle">{{ t("getQuote.selectServiceSubtitle") }}</p>
        <div class="service-cards">
          <div class="service-card" @click="selectService('cleaning')">
            <i class="bi bi-droplet-fill icon"></i>
            <h3>{{ t("getQuote.cleaningServiceTitle") }}</h3>
            <p>{{ t("getQuote.cleaningServiceDescription") }}</p>
          </div>
          <div class="service-card" @click="selectService('moving')">
            <i class="bi bi-truck icon"></i>
            <h3>{{ t("getQuote.movingServiceTitle") }}</h3>
            <p>{{ t("getQuote.movingServiceDescription") }}</p>
          </div>
          <div class="service-card" @click="selectService('chauffeur')">
            <i class="bi bi-person-circle icon"></i>
            <h3>{{ t("getQuote.chauffeurServiceTitle") }}</h3>
            <p>{{ t("getQuote.chauffeurServiceDescription") }}</p>
          </div>
        </div>
      </div>

      <!-- Form View -->
      <div v-else-if="currentStep === 'form'" class="form-view">
        <button @click="currentStep = 'selectService'" class="back-button">
          <i class="bi bi-arrow-left"></i> {{ t("getQuote.back") }}
        </button>
        <h2>
          {{
            form.serviceType === 'cleaning'
              ? t("getQuote.cleaningRequestTitle")
              : form.serviceType === 'moving'
              ? t("getQuote.movingRequestTitle")
              : t("getQuote.chauffeurRequestTitle")
          }}
        </h2>

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

          <!-- Phone -->
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
          <div class="form-group full-width">
            <label for="email">{{ t("getQuote.email") }}</label>
            <input
              type="email"
              id="email"
              v-model="form.email"
              required
              :placeholder="t('getQuote.emailPlaceholder')"
            />
          </div>

          <!-- Date -->
          <div class="form-group full-width">
            <label for="date">{{ t("getQuote.date") }}</label>
            <input type="date" id="date" v-model="form.date" required />
          </div>

          <!-- Cleaning Fields -->
          <template v-if="form.serviceType === 'cleaning'">
            <div class="form-group full-width">
              <label for="cleaningAddress">{{ t("getQuote.cleaningAddress") }}</label>
              <input
                type="text"
                id="cleaningAddress"
                v-model="form.cleaningAddress"
                required
                :placeholder="t('getQuote.cleaningAddressPlaceholder')"
              />
            </div>
            <div class="form-group">
              <label for="cleaningType">{{ t("getQuote.cleaningType") }}</label>
              <select id="cleaningType" v-model="form.cleaningType" required>
                <option disabled value="">{{ t("getQuote.selectCleaningType") }}</option>
                <option>{{ t("getQuote.standardCleaning") }}</option>
                <option>{{ t("getQuote.deepCleaning") }}</option>
                <option>{{ t("getQuote.moveInOutCleaning") }}</option>
                <option>{{ t("getQuote.commercialCleaning") }}</option>
              </select>
            </div>
            <div class="form-group">
              <label for="cleaningRooms">{{ t("getQuote.cleaningRooms") }}</label>
              <input
                type="number"
                id="cleaningRooms"
                v-model="form.cleaningRooms"
                min="1"
                required
                :placeholder="t('getQuote.cleaningRoomsPlaceholder')"
              />
            </div>
            <div class="form-group full-width">
              <label for="additionalCleaningDetails">{{ t("getQuote.additionalCleaningDetails") }}</label>
              <textarea
                id="additionalCleaningDetails"
                v-model="form.additionalCleaningDetails"
                :placeholder="t('getQuote.additionalDetailsPlaceholder')"
              ></textarea>
            </div>
          </template>

          <!-- Moving Fields -->
          <template v-if="form.serviceType === 'moving'">
            <div class="form-group">
              <label for="movingFrom">{{ t("getQuote.movingFrom") }}</label>
              <input
                type="text"
                id="movingFrom"
                v-model="form.movingFrom"
                required
                :placeholder="t('getQuote.movingFromPlaceholder')"
              />
            </div>
            <div class="form-group">
              <label for="movingTo">{{ t("getQuote.movingTo") }}</label>
              <input
                type="text"
                id="movingTo"
                v-model="form.movingTo"
                required
                :placeholder="t('getQuote.movingToPlaceholder')"
              />
            </div>
            <div class="form-group full-width">
              <label for="movingRooms">{{ t("getQuote.movingRooms") }}</label>
              <input
                type="number"
                id="movingRooms"
                v-model="form.movingRooms"
                min="1"
                required
                :placeholder="t('getQuote.movingRoomsPlaceholder')"
              />
            </div>
            <div class="form-group full-width">
              <label for="additionalMovingDetails">{{ t("getQuote.additionalMovingDetails") }}</label>
              <textarea
                id="additionalMovingDetails"
                v-model="form.additionalMovingDetails"
                :placeholder="t('getQuote.additionalDetailsPlaceholder')"
              ></textarea>
            </div>
          </template>

          <!-- Chauffeur Fields -->
          <template v-if="form.serviceType === 'chauffeur'">
            <div class="form-group full-width">
              <label for="chauffeurType">{{ t("getQuote.chauffeurType") }}</label>
              <select id="chauffeurType" v-model="form.chauffeurType" required>
                <option disabled value="">{{ t("getQuote.selectChauffeurType") }}</option>
                <option>{{ t("getQuote.chauffeurDoctor") }}</option>
                <option>{{ t("getQuote.chauffeurHospital") }}</option>
                <option>{{ t("getQuote.chauffeurPharmacy") }}</option>
                <option>{{ t("getQuote.chauffeurCompanion") }}</option>
                <option>{{ t("getQuote.chauffeurDoorToDoor") }}</option>
              </select>
            </div>
            <div class="form-group">
              <label for="chauffeurPickup">{{ t("getQuote.chauffeurPickup") }}</label>
              <input
                type="text"
                id="chauffeurPickup"
                v-model="form.chauffeurPickup"
                required
                :placeholder="t('getQuote.chauffeurPickupPlaceholder')"
              />
            </div>
            <div class="form-group">
              <label for="chauffeurDropoff">{{ t("getQuote.chauffeurDropoff") }}</label>
              <input
                type="text"
                id="chauffeurDropoff"
                v-model="form.chauffeurDropoff"
                required
                :placeholder="t('getQuote.chauffeurDropoffPlaceholder')"
              />
            </div>
            <div class="form-group full-width">
              <label for="chauffeurTime">{{ t("getQuote.chauffeurTime") }}</label>
              <input
                type="time"
                id="chauffeurTime"
                v-model="form.chauffeurTime"
                required
              />
            </div>
            <div class="form-group full-width">
              <label>
                <input
                  type="checkbox"
                  v-model="form.chauffeurCompanionNeeded"
                  style="margin-right: 8px; width: auto;"
                />
                {{ t("getQuote.chauffeurCompanionNeeded") }}
              </label>
            </div>
            <div class="form-group full-width">
              <label for="additionalChauffeurDetails">{{ t("getQuote.additionalChauffeurDetails") }}</label>
              <textarea
                id="additionalChauffeurDetails"
                v-model="form.additionalChauffeurDetails"
                :placeholder="t('getQuote.additionalDetailsPlaceholder')"
              ></textarea>
            </div>
          </template>

          <button type="submit" :disabled="loading" class="submit-button">
            {{ loading ? t("getQuote.sending") : t("getQuote.submit") }}
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
import emailjs from '@emailjs/browser'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

export default {
  name: 'ServiceForm',
  setup() {
    const { t, locale } = useI18n()
    locale.value = localStorage.getItem('lang') || 'en'

    const currentStep = ref('landing')

    const form = ref({
      name: '',
      phone: '',
      email: '',
      date: '',
      serviceType: '',

      // Cleaning
      cleaningAddress: '',
      cleaningType: '',
      cleaningRooms: null,
      additionalCleaningDetails: '',

      // Moving
      movingFrom: '',
      movingTo: '',
      movingRooms: null,
      additionalMovingDetails: '',

      // Chauffeur
      chauffeurType: '',
      chauffeurPickup: '',
      chauffeurDropoff: '',
      chauffeurTime: '',
      chauffeurCompanionNeeded: false,
      additionalChauffeurDetails: '',
    })

    const loading = ref(false)

    const selectService = (type) => {
      form.value.serviceType = type
      currentStep.value = 'form'
    }

    const resetForm = () => {
      for (const key in form.value) {
        if (key !== 'serviceType') {
          if (key.includes('Rooms')) form.value[key] = null
          else if (key === 'chauffeurCompanionNeeded') form.value[key] = false
          else form.value[key] = ''
        }
      }
    }

    const handleSubmit = async () => {
      loading.value = true
      try {
        const SERVICE_ID = 'service_43u0keo'
        const TEMPLATE_ID = 'template_uz6z09w'
        const PUBLIC_KEY = 'HqGKm1H0vhqeb0y1z'

        emailjs.init(PUBLIC_KEY)

        await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
          name: form.value.name,
          phone: form.value.phone,
          email: form.value.email,
          date: form.value.date,
          serviceType: form.value.serviceType,

          // Cleaning
          cleaningAddress: form.value.cleaningAddress || 'N/A',
          cleaningType: form.value.cleaningType || 'N/A',
          cleaningRooms: form.value.cleaningRooms || 'N/A',
          additionalCleaningDetails: form.value.additionalCleaningDetails || 'N/A',

          // Moving
          movingFrom: form.value.movingFrom || 'N/A',
          movingTo: form.value.movingTo || 'N/A',
          movingRooms: form.value.movingRooms || 'N/A',
          additionalMovingDetails: form.value.additionalMovingDetails || 'N/A',

          // Chauffeur
          chauffeurType: form.value.chauffeurType || 'N/A',
          chauffeurPickup: form.value.chauffeurPickup || 'N/A',
          chauffeurDropoff: form.value.chauffeurDropoff || 'N/A',
          chauffeurTime: form.value.chauffeurTime || 'N/A',
          chauffeurCompanionNeeded: form.value.chauffeurCompanionNeeded ? 'Yes' : 'No',
          additionalChauffeurDetails: form.value.additionalChauffeurDetails || 'N/A',
        })

        Swal.fire({
          icon: 'success',
          title: 'Request Sent!',
          text: 'Thank you! We will get back to you shortly.',
          confirmButtonColor: '#1b5e20',
          timer: 3000,
          showConfirmButton: true,
        })

        resetForm()
        currentStep.value = 'landing'
      } catch (error) {
        console.error('EmailJS Error:', error)
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong! Please try again.',
          confirmButtonColor: '#1b5e20',
          footer: 'If the problem persists, please contact us directly.',
        })
      } finally {
        loading.value = false
      }
    }

    return { t, form, currentStep, selectService, handleSubmit, loading }
  },
}
</script>

<style scoped>
.form-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 80px 40px;
  min-height: 100vh;
  background: #fff;
}

.form-container {
  width: 100%;
  max-width: 700px;
  background: rgba(30, 30, 30, 0.4);
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow: 0 4px 32px rgba(0, 0, 0, 0.18);
  padding: 50px;
  border-radius: 12px;
  color: #fff;
  transition: all 0.3s ease;
}

.landing-view {
  text-align: center;
}

.landing-view h2 {
  font-size: 2.5rem;
  margin-bottom: 20px;
  font-weight: 700;
}

.description {
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 40px;
  color: #e0e0e0;
}

.cta-button {
  background: linear-gradient(135deg, #a5d6a7, #e8f5e9);
  color: #212121;
  font-weight: bold;
  font-size: 1.2rem;
  border: none;
  padding: 16px 48px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 16px rgba(165, 214, 167, 0.4);
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 24px rgba(165, 214, 167, 0.6);
}

.service-selection {
  text-align: center;
}

.service-selection h2 {
  font-size: 2rem;
  margin-bottom: 10px;
}

.subtitle {
  color: #e0e0e0;
  margin-bottom: 40px;
  font-size: 1.1rem;
}

.service-cards {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
}

.service-card {
  background: rgba(255, 255, 255, 0.1);
  padding: 40px 30px;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.service-card:hover {
  background: rgba(165, 214, 167, 0.2);
  border-color: #a5d6a7;
  transform: translateY(-4px);
}

.service-card .icon {
  font-size: 4rem;
  margin-bottom: 20px;
  color: #a5d6a7;
}

.service-card h3 {
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.service-card p {
  color: #e0e0e0;
}

.back-button {
  background: transparent;
  color: #a5d6a7;
  border: none;
  padding: 8px 0;
  margin-bottom: 20px;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.3s ease;
  text-align: left;
  display: flex;
  align-items: center;
  gap: 6px;
}

.back-button:hover {
  color: #e8f5e9;
}

.form-view h2 {
  text-align: center;
  margin-bottom: 30px;
  font-weight: 700;
  font-size: 1.8rem;
}

.moving-form {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group.full-width {
  grid-column: span 2;
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
  border: none;
  background: #fff;
  color: #222;
  font-size: 15px;
  transition: all 0.3s ease;
}

input:focus,
select:focus,
textarea:focus {
  outline: 2px solid #1b5e20;
}

textarea {
  min-height: 100px;
  resize: vertical;
}

.submit-button {
  grid-column: span 2;
  background: linear-gradient(135deg, #a5d6a7, #e8f5e9);
  color: #212121;
  font-weight: bold;
  border: none;
  padding: 14px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  margin-top: 10px;
}

.submit-button:hover {
  background: linear-gradient(50deg, #e8f5e9 30%, #a5d6a7 100%);
}

.submit-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

@media (max-width: 768px) {
  .form-container {
    padding: 30px 20px;
  }

  .landing-view h2 {
    font-size: 2rem;
  }

  .description {
    font-size: 1rem;
  }

  .service-cards {
    grid-template-columns: 1fr;
  }

  .moving-form {
    grid-template-columns: 1fr;
  }

  .form-group.full-width,
  .submit-button {
    grid-column: span 1;
  }
}

@media (min-width: 769px) {
  .service-cards {
    grid-template-columns: 1fr 1fr;
  }
}
</style>