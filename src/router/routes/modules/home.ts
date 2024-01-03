import { DEFAULT_LAYOUT } from '../base'

export default {
  path: '/home',
  name: 'Home',
  meta: {
    title: '首页'
  },
  component: DEFAULT_LAYOUT,
  redirect: '/home/dashboard',
  children: [
    {
      path: 'dashboard',
      name: 'Dashboard',
      meta: {
        title: '首页'
      },
      component: () => import('@/views/home/index.vue')
    }
  ]
}
