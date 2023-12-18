export const NOT_FOUND = {
  path: '/404',
  name: '404',
  component: () => import('@/views/exception/404.vue')
}

export const REDIRECT = {
  path: '/redirect',
  name: 'redirect',
  component: () => import('@/views/redirect/index.vue')
}

export const DEFAULT_LAYOUT = () => import('@/layout/default.vue')
