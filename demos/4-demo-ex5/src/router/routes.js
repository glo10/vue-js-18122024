import HomeView from '../views/HomeView.vue'
export default [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
        path: '/list',
        name: 'list',
        component: () => import('../views/ListView.vue')
      },
    {
      path: '/add',
      name: 'add',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/AddView.vue')
    }
  ]