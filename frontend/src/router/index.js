import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import toyApp from '../views/toy-app.vue'
import toyEdit from '../views/toy-edit.vue'

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/toy',
      name: 'toy-app',
      component: toyApp
    },
    {
      path: '/toy/edit/:toyId?',
      name: 'toy-edit',
      component: toyEdit
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
