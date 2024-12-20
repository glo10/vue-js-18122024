import { createRouter, createWebHistory } from 'vue-router'
import { routes as nav} from './routes'
import type { RouteType } from '@/types/route'
let routes: RouteType[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue')
  },
  ...nav,
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/auth/LoginView.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not.found',
    component: () => import('@/views/other/404NotFoundView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path !== '/' && to.meta.requiresAuth && !sessionStorage.getItem('token')) {
    next({ name: 'login' })
  } else {
    next()
  }
})
export default router
