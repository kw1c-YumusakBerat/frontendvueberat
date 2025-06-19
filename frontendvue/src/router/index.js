import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import OverOns from '../views/OverOns.vue'
import Producten from '../views/Producten.vue'
import Nieuws from '../views/News.vue'
import Contact from '../views/Contact.vue'
import NewsDetail from '../views/NewsDetail.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/over', name: 'OverOns', component: OverOns },
  { path: '/producten', name: 'Producten', component: Producten },
  { path: '/nieuws', name: 'Nieuws', component: Nieuws },
  { path: '/nieuws/:id', name: 'NewsDetail', component: NewsDetail, props: true },
  { path: '/contact', name: 'Contact', component: Contact },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
