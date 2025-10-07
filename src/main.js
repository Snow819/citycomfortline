import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createI18n } from 'vue-i18n'

// Import languages
import en from './locales/en.json'
import fr from './locales/fr.json'
import zh from './locales/zh.json'

// Create i18n instance
const i18n = createI18n({
  legacy: false,
  locale: 'en', 
  fallbackLocale: 'en',
  messages: { en, fr, zh }
})

const savedLang = localStorage.getItem('lang') || 'en'




const app = createApp(App)
app.use(router)
app.use(i18n)
app.mount('#app')
