import Vue from 'vue'
import Router from 'vue-router'
import Promote from 'components/promote/promote'
import Login from 'components/login/login'
import Personal from 'components/personal/personal'

Vue.use(Router)

export default new Router({
  routes: [
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
  ],
  linkActiveClass: 'active'
})
