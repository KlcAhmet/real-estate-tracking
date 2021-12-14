import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/appointment',
    name: 'Appointment',
    component: () => import('@/views/Appointment'),
  },
  {
    path: '/newappointment',
    name: 'New-appointment',
    component: () => import('@/views/New-appointment'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
