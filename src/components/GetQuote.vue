<template>
    <div class="form-wrapper">
      <div class="form-container">
        <h2>Get Your Moving Quote</h2>
  
        <form @submit.prevent="handleSubmit" class="moving-form">
          <!-- Email Address -->
        <div class="form-group">
          <label for="email">Email Address</label>
          <input
            type="email"
            id="email"
            v-model="form.email"
            required
            placeholder="Enter your email"
          />
        </div>
  
          <!-- Confirm Email Address -->
          <div class="form-group">
            <label for="confirmEmail">Confirm Email Address</label>
            <input
              type="email"
              id="confirmEmail"
              v-model="form.confirmEmail"
              required
              placeholder="Re-enter your email"
            />
            <p v-if="emailMismatch" class="error-text">Emails do not match</p>
          </div>
  
          <!-- Moving From -->
          <div class="form-group">
            <label for="from">Moving From</label>
            <input
              type="text"
              id="from"
              v-model="form.from"
              required
              placeholder="Enter current address"
            />
          </div>
  
          <!-- Moving To -->
          <div class="form-group">
            <label for="to">Moving To</label>
            <input
              type="text"
              id="to"
              v-model="form.to"
              required
              placeholder="Enter new address"
            />
          </div>
  
          <!-- Moving Date -->
          <div class="form-group">
            <label for="date">Moving Date</label>
            <input type="date" id="date" v-model="form.date" required />
          </div>
  
          <!-- Our Services -->
          <div class="form-group">
            <label for="service">Our Services</label>
            <select id="service" v-model="form.service" required>
              <option disabled value="">Select a service</option>
              <option>Residential Moving</option>
              <option>Commercial Moving</option>
              <option>Packing & Unpacking</option>
              <option>Storage Services</option>
              <option>Cleaning After Move</option>
            </select>
          </div>
  
          <!-- Button -->
          <button type="submit" :disabled="emailMismatch">Get Quote</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
import emailjs from "emailjs-com";
import { useI18n } from 'vue-i18n'


export default {
  name: "MovingForm",
  setup() {
    const { t, locale } = useI18n()

    return { t, locale }
  },  
  data() {
    return {
      form: {
        email: "",
        confirmEmail: "",
        from: "",
        to: "",
        date: "",
        service: "",
      },
      // currentLang: localStorage.getItem("lang") || "en"
    };
  },
  computed: {
    emailMismatch() {
      return (
        this.form.email &&
        this.form.confirmEmail &&
        this.form.email !== this.form.confirmEmail
      );
    },
  },
  methods: {
    // changeLanguage() {
    //   this.$i18n.locale = this.currentLang;
    //   localStorage.setItem("lang", this.currentLang);
    // },
    async handleSubmit() {
      if (this.emailMismatch) {
        alert("Please make sure both emails match.");
        return;
      }

      try {
        const SERVICE_ID = "your_service_id";
        const TEMPLATE_ID = "your_template_id";
        const PUBLIC_KEY = "your_public_key";

        const templateParams = {
          email: this.form.email,
          from: this.form.from,
          to: this.form.to,
          date: this.form.date,
          service: this.form.service,
        };

        await emailjs.send(
          SERVICE_ID,
          TEMPLATE_ID,
          templateParams,
          PUBLIC_KEY
        );

        alert("Your quote request has been sent successfully!");
        this.resetForm();
      } catch (error) {
        console.error("Email sending error:", error);
        alert("Failed to send the quote. Please try again later.");
      }
    },
    resetForm() {
      this.form = {
        email: "",
        confirmEmail: "",
        from: "",
        to: "",
        date: "",
        service: "",
      };
    },
  },
};
</script>
  
  <style scoped>
  /* ==== Layout Wrapper ==== */
  .form-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px 20px;
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


      <!-- Language Changer -->
      <!-- <div class="language-switcher">
        <label for="language">{{ $t("form.language") }}</label>
        <select id="language" v-model="currentLang" @change="changeLanguage">
          <option value="en">English</option>
          <option value="fr">Français</option>
          <option value="zh">中文</option>
        </select>
      </div> -->



<!-- <style scoped>
.language-switcher {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 15px;
}
.language-switcher label {
  margin-right: 8px;
  color: #ccc;
}
select {
  padding: 5px;
  border-radius: 5px;
}
</style> -->

  