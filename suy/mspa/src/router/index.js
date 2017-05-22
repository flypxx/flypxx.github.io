import App from '../App'
import Vue from 'vue'
import Router from 'vue-router'

const Home = r => require.ensure([], () => r(require('../page/home/home')), 'home')
const Promote = r => require.ensure([], () => r(require('../page/Promote/Promote')), 'Promote')
const Login = r => require.ensure([], () => r(require('../page/Login/Login')), 'Login')
const Personal = r => require.ensure([], () => r(require('../page/Personal/Personal')), 'Personal')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: App,
      children: [
        {
          path: 'promote',
          name: 'promote',
          component: Promote
        },
        {
          path: 'login',
          name: 'login',
          component: Login
        },
        {
          path: 'personal',
          name: 'personal',
          component: Personal
        },
        {
          path: 'home',
          name: 'home',
          component: Home
        }
      ]
    }
  ],
  linkActiveClass: 'active'
})
