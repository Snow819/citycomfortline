<template>
  <div class="form-wrapper">
    <div class="form-container">
      <h2>{{ t("getQuote.title") }}</h2>

      <!-- Language Switcher -->
      <!-- <div class="language-switcher">
        <label for="language">{{ t("form.language") }}</label>
        <select id="language" v-model="currentLang" @change="changeLanguage">
          <option value="en">English</option>
          <option value="fr">Français</option>
          <option value="zh">中文</option>
        </select>
      </div> -->

      <form @submit.prevent="handleSubmit" class="moving-form">
        <!-- Email Address -->
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

        <!-- Confirm Email Address -->
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

        <!-- Moving From -->
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

        <!-- Moving To -->
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

        <!-- Moving Date -->
        <div class="form-group">
          <label for="date">{{ t("getQuote.date") }}</label>
          <input type="date" id="date" v-model="form.date" required />
        </div>

        <!-- Our Services -->
        <div class="form-group">
          <label for="service">{{ t("getQuote.service") }}</label>
          <select id="service" v-model="form.service" required>
            <option disabled value="">{{ t("getQuote.selectService") }}</option>
            <option>{{ t("getQuote.option1") }}</option>
            <option>{{ t("getQuote.option2") }}</option>
            <option>{{ t("getQuote.option3") }}</option>
            <option>{{ t("getQuote.option4") }}</option>
            <option>{{ t("getQuote.option5") }}</option>
          </select>
        </div>

        <!-- Button -->
        <button type="submit" :disabled="emailMismatch">
          {{ t("getQuote.submit") }}
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import emailjs from "emailjs-com";
import { useI18n } from "vue-i18n";
import { ref, watch } from "vue";

export default {
  name: "MovingForm",
  setup() {
    const { t, locale } = useI18n();
    const currentLang = ref(localStorage.getItem("lang") || "en");
    locale.value = currentLang.value;

    const changeLanguage = () => {
      locale.value = currentLang.value;
      localStorage.setItem("lang", currentLang.value);
    };

    const form = ref({
      email: "",
      confirmEmail: "",
      from: "",
      to: "",
      date: "",
      service: "",
    });

    const emailMismatch = ref(false);
    watch(
      () => [form.value.email, form.value.confirmEmail],
      ([email, confirm]) => {
        emailMismatch.value = email && confirm && email !== confirm;
      }
    );

    const handleSubmit = async () => {
      if (emailMismatch.value) {
        alert(t("getQuote.emailMismatch"));
        return;
      }

      try {
        const SERVICE_ID = "your_service_id";
        const TEMPLATE_ID = "your_template_id";
        const PUBLIC_KEY = "your_public_key";

        const templateParams = {
          email: form.value.email,
          from: form.value.from,
          to: form.value.to,
          date: form.value.date,
          service: form.value.service,
        };

        await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);

        alert(t("getQuote.success"));
        resetForm();
      } catch (error) {
        console.error("Email sending error:", error);
        alert(t("getQuote.failure"));
      }
    };

    const resetForm = () => {
      form.value = {
        email: "",
        confirmEmail: "",
        from: "",
        to: "",
        date: "",
        service: "",
      };
    };

    return { t, locale, currentLang, changeLanguage, form, emailMismatch, handleSubmit };
  },
};
</script>
  
  <style scoped>
  /* ==== Layout Wrapper ==== */
  .form-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    /* padding: 40px 20px; */
    min-height: 100vh;
    background: linear-gradient(160deg, #0d0d0d 30%, #1a1a1a 100%);
  }
  
  /* ==== Form Container ==== */
  .form-container {
    width: 100%;
    max-width: 480px;
    background: #181818;
    padding: 30px 25px;
    border-radius: 12px;
    box-shadow: 0 4px 25px rgba(0, 0, 0, 0.35);
    color: #fff;
    transition: all 0.3s ease;
  }
  
  h2 {
    text-align: center;
    margin-bottom: 20px;
    font-weight: 700;
    letter-spacing: 0.5px;
  }
  
  /* ==== Form Fields ==== */
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
    color: #ccc;
  }
  
  input,
  select {
    padding: 12px;
    border-radius: 6px;
    border: 1px solid #444;
    background: #222;
    color: #fff;
    font-size: 15px;
    transition: border-color 0.3s ease;
  }
  
  input:focus,
  select:focus {
    border-color: #26a69a;
    outline: none;
  }
  
  /* ==== Button ==== */
  button {
    background: linear-gradient(135deg, #00796b, #26a69a);
    color: #fff;
    border: none;
    padding: 12px;
    border-radius: 6px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  button:hover {
    background: linear-gradient(135deg, #00796b, #26a69a);
  }
  
  button:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  
  /* ==== Error Text ==== */
  .error-text {
    color: #ff6b6b;
    font-size: 0.85rem;
    margin-top: 4px;
  }
  
  /* ==== Responsive Design ==== */
  
  /* Tablets */
  @media (min-width: 640px) {
    .form-container {
      max-width: 600px;
      padding: 40px;
    }
  
    .moving-form {
      grid-template-columns: 1fr 1fr;
      gap: 20px;
    }
  
    .form-group:nth-child(1),
    .form-group:nth-child(2) {
      grid-column: span 1;
    }
  
    .form-group:nth-last-child(2),
    button {
      grid-column: span 2;
    }
  }
  
  /* Desktops */
  @media (min-width: 1024px) {
    .form-container {
      max-width: 700px;
      padding: 50px;
    }
  
    input,
    select {
      font-size: 16px;
    }
  
    button {
      font-size: 17px;
      padding: 14px;
    }
  }
  </style>


<!-- ============================================================================= -->


  <style scoped>
/* .form-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(160deg, #0d0d0d 30%, #1a1a1a 100%);
} */

.form-container {
  /* width: 100%; */
  padding: 30px 25px;
  /* box-shadow: 0 4px 25px rgba(0, 0, 0, 0.35); */
  /* color: #fff; */
  /* transition: all 0.3s ease; */
}

/* .language-switcher {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 15px;
}
.language-switcher label {
  margin-right: 8px;
  color: #ccc;
} */

/* h2 {
  text-align: center;
  margin-bottom: 20px;
  font-weight: 700;
  letter-spacing: 0.5px;
} */
</style> 