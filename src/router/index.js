import { createRouter, createWebHashHistory } from 'vue-router'
import HomeCard from '../components/HomeCard.vue'
import SignUp from '../components/SignUp.vue'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'login',
    component: HomeCard
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUp
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  }
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
