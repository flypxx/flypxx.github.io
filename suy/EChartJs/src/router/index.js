import Vue from 'vue'
import Router from 'vue-router'
import demoNo1 from 'components/demoNo1/demoNo1'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/demoNo1',
      name: 'demoNo1',
      component: demoNo1
    }
  ]
})
