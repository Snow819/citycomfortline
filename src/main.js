import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createI18n } from 'vue-i18n'

// Import languages
import en from './locales/en.json'
import fr from './locales/fr.json'
import zh from './locales/zh.json'

const savedLang = localStorage.getItem('lang') || 'en'

const i18n = createI18n({
  legacy: false,
  locale: savedLang,
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