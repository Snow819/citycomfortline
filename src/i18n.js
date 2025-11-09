// src/i18n.js
import { createI18n } from 'vue-i18n';
import en from './locales/en.json';
import fr from './locales/fr.json';
import zh from './locales/zh.json';

const messages = {
  en,
  fr,
  zh
};

const i18n = createI18n({
  legacy: false,           // Composition API style
  locale: 'en',            // default language
  messages,
  allowComposition: true,  // allows Composition API
  missingWarn: false,      // suppress missing key warnings
  fallbackWarn: false,     // suppress fallback warnings
  warnHtmlInMessage: 'off',
  messageCompiler: (msg) => msg // disables @-linked parsing
});

export default i18n;
