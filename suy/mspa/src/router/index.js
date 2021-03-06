import App from '../App'
import Vue from 'vue'
import Router from 'vue-router'

const Home = r => require.ensure([], () => r(require('../page/home/home')), 'home')
const Promote = r => require.ensure([], () => r(require('../page/Promote/Promote')), 'promote')
const Login = r => require.ensure([], () => r(require('../page/Login/Login')), 'login')
const Personal = r => require.ensure([], () => r(require('../page/Personal/Personal')), 'personal')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: App,
      children: [
        {
          path: '',
          redirect: '/home'
        },
        {
          path: '/home',
          name: 'home',
          component: Home
        },
        {
          path: '/promote',
          name: 'promote',
          component: Promote
        },
        {
          path: '/login',
          name: 'login',
          component: Login
        },
        {
          path: '/personal',
          name: 'personal',
          component: Personal
        }
      ]
    }
  ],
  linkActiveClass: 'active'
})
