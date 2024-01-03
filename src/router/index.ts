import { createRouter, createWebHistory } from 'vue-router'

import { NOT_FOUND, REDIRECT } from './routes/base'
const modules = import.meta.glob('./routes/modules/*.ts', { eager: true })


const formatModules = (_modules: any, _result: any[]) => {
  Object.keys(_modules).forEach(key => {
    const mod = _modules[key].default
    const modList = Array.isArray(mod) ? [...mod] : [mod]
    console.log('modList', modList);
    _result.push(...modList)
  })
  return _result
}

const appMenus = formatModules(modules, [])
console.log(formatModules(modules, []));

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
    ...appMenus,
    NOT_FOUND,
    REDIRECT
  ]
})

export default router
