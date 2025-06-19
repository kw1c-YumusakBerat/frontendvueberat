import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import News from '../views/News.vue'
import Shop from '../views/Shop.vue'
import Cart from '../views/Cart.vue'
import Contact from '../views/Contact.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/news', name: 'News', component: News },
  { path: '/shop', name: 'Shop', component: Shop },
  { path: '/cart', name: 'Cart', component: Cart },
  { path: '/contact', name: 'Contact', component: Contact },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
