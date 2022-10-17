import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import('../components/LoginCard.vue')
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import('../components/SignUp.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/Home.vue'),
    // component: () => import('../components/PostCard.vue')
  },
  {
    path: '/addpost',
    name: 'addPost',
    component: () => import('../views/AddPost.vue'),
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('../views/Profile.vue'),
  }
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
