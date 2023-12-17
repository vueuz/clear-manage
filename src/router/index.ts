import { createRouter, createWebHistory } from 'vue-router'

import { NOT_FOUND, REDIRECT } from './routes/base'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: "login"
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login/index.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/views/register/index.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/views/home/index.vue')
    },
    NOT_FOUND,
    REDIRECT
  ]
})

export default router
