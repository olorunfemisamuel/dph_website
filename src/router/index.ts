import { createRouter, createWebHistory } from 'vue-router'

import InvestNow from '@/views/InvestNow.vue'
import HomePage from '@/views/HomePage.vue'
import AboutUs from '@/views/AboutUs.vue'
import LeadershipPage from '@/views/LeadershipPage.vue'
import AssetManangementPage from '@/views/AssetManangementPage.vue'
import InvestmentBankingPage from '@/views/InvestmentBankingPage.vue'
import PrivateEquityPage from '@/views/PrivateEquityPage.vue'
import SecuritiesPage from '@/views/SecuritiesPage.vue'
import TrusteesPage from '@/views/TrusteesPage.vue'
import ContactPage from '@/views/ContactPage.vue'
import CareerPage from '@/views/CareerPage.vue'

import Insightpage from '@/views/Insightpage.vue'
import InsightsExtendPage from '@/views/InsightsExtendPage.vue'
import MDMessagePage from '@/views/MDMessagePage.vue'


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

    {
    path: '/about',
    name: 'AboutUs',
    component: AboutUs,
    },
    {
      path: '/Leadership',
      name: 'LeadershipPage',
      component : LeadershipPage,
    },

    {
      path: '/Asset-Management',
      name: 'AssetManagementPage',
      component : AssetManangementPage,
    },
{
      path: '/Investment-Banking',
      name: 'InvestmentBankingPage',
     component: InvestmentBankingPage,
    },

  {
    path: '/Private-Equity',
    name: 'PrivateEquityPage',
    component: PrivateEquityPage,
  },

  {
    path: '/Securities-Trading',
    name: 'SecuritiesPage',
    component: SecuritiesPage,
  },

  {
    path: '/Trustees',
    name: 'TrusteesPage',
    component: TrusteesPage,
  },

  {
    path: '/contact',
    name: 'ContactPage',
    component: ContactPage,
  },

  {
    path: '/career',
    name: 'CareerPage',
    component: CareerPage,
  },

   {
    path: '/news-insights',
    name: 'InsightseExtendPage',
    component: InsightsExtendPage,
  },

 {
  path: '/Insight',
  name: 'InsightPage',
  component: Insightpage,
},

{
  path: '/MDmessage',
  name: 'MDmessage',
  component: MDMessagePage
}

  ],

  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
