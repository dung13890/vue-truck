import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login')
    },
    {
      path: '/',
      name: 'main',
      component: () => import('@/views/Main'),
      children: [
        {
          path: 'home',
          name: 'home',
          component: () => import('@/views/main/Home')
        },
        {
          path: 'about',
          name: 'about',
          component: () => import('@/views/main/About')
        }
      ]
    },
    {
      path: '*',
      component: () => import('@/views/404')
    }
  ]
})
