import { reactive } from 'vue'

const languageState = reactive({
  currentLanguage: 'en',
  selectedCountry: 'English'
})

export function useLanguage() {
  return languageState
}