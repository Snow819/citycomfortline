import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import router from './router'
import App from './App.vue'
import './assets/main.css'

import en from './locales/en.json'
import fr from './locales/fr.json'
import zh from './locales/zh.json'

const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem('lang') || 'en',
  fallbackLocale: 'en',
  messages: { en, fr, zh },
})

createApp(App)
  .use(router)
  .use(i18n)
  .mount('#app')
