import { createRouter, createWebHistory } from 'vue-router'
import HealthcarePage from '@/views/HealthcarePage.vue'
import CleaningPage   from '@/views/CleaningPage.vue'

const routes = [
  {
    path: '/',
    name: 'healthcare',
    component: HealthcarePage,
  },
  {
    path: '/cleaning',
    name: 'cleaning',
    component: CleaningPage,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    return { top: 0, behavior: 'smooth' }
  },
})

export default router
