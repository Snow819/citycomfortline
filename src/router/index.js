import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import ContactView from '../views/ContactView.vue';
import ServiceView from '../views/ServiceView.vue';
import Navbar from '@/components/Navbar.vue'
import GetQuote from '@/components/GetQuote.vue';
import OurServices from '@/components/OurServices.vue';
import FloatingQuoteButton from '@/components/FloatingQuoteButton.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path:'/contact',
      name: 'Contact',
      component: ContactView,
    },
    {},
    {
      path: '/FloatingQuoteButton',
      name: 'FloatingQuoteButton',
      component: FloatingQuoteButton, 
    },
    {
      path: '/OurServices',
      name: 'OurServices',
      component: OurServices,
    },
    {
      path:'/GetQuote',
      name: 'GetQuote',
      component: GetQuote,
    },
    {
      path:'/Service',
      name: 'Service',
      component: ServiceView,
    },
    {
      path:'/Navbar',
      name: 'Navbar',
      component: Navbar,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router
