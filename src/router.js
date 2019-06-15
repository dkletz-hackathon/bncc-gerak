import Vue from 'vue'
import Router from 'vue-router'
import HomePage from './views/HomePage'
import LoginPage from "./views/LoginPage"

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage
    },
    {
      path: '/place',
      name: 'place',
      component: () => import(/* webpackChunkName: "about" */ './views/PlacePage')
    }
  ]
})
