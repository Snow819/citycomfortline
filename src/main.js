import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createI18n } from 'vue-i18n'
import "bootstrap-icons/font/bootstrap-icons.css";
import "leaflet.smooth_marker_bouncing";

// Import languages
import en from './locales/en.json'
import fr from './locales/fr.json'
import zh from './locales/zh.json'

// Get saved language from localStorage or default to 'en'
const savedLang = localStorage.getItem('lang') || 'en'

// Create i18n instance
const i18n = createI18n({
  legacy: false,
  locale: savedLang, // use saved language
  fallbackLocale: 'en',
  messages: { en, fr, zh },
  allowComposition: true,
  missingWarn: false,
  fallbackWarn: false,
  warnHtmlInMessage: 'off', 
})

const app = createApp(App)
app.use(router)
app.use(i18n)
app.mount('#app')
