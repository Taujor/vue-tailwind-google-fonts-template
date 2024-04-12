import { createRouter, createWebHistory } from 'vue-router'
import Landing from '../views/Landing.vue'
import About from '../views/About.vue'
import OurProcess from '../views/OurProcess.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Landing
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/process',
      name: 'ourProcess',
      component: OurProcess
    },
  ]
})

export default router