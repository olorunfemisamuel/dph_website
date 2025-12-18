import { createRouter, createWebHistory } from 'vue-router'

import InvestNow from '@/views/InvestNow.vue'
import HomePage from '@/views/HomePage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage,
    },
    {
      path: '/invest-now',
      name: 'InvestNow',
      component: InvestNow,
    },
  ],
})

export default router
