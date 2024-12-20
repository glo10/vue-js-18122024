import type { RouteType } from '@/types/route';

export const routes : Array<RouteType> = [
  {
    path: '/shop',
    name: 'faire ses courses',
    component: () => import('@/views/article/ShopView.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/suggestions',
    name: 'suggestions',
    component: () => import('@/views/openfoodfact/SuggestionView.vue')
  },
  {
    path: '/add',
    name: 'ajouter',
    component: () => import('@/views/article/AddView.vue'),
    meta: {
      requiresAuth: true
    }
  }
]