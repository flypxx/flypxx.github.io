import App from '../App'
import Vue from 'vue'
import Router from 'vue-router'

const Home = r => require.ensure([], () => r(require('../page/home/home')), 'home')
const Portal = r => require.ensure([], () => r(require('../page/portal/portal')), 'portal')
const Color = r => require.ensure([], () => r(require('../page/color/color')), 'color')

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
          path: '/portal',
          name: 'portal',
          component: Portal
        },
        {
          path: '/color',
          name: 'color',
          component: Color
        }
      ]
    }
  ],
  linkActiveClass: 'active'
})
