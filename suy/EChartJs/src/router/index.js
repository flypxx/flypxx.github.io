import Vue from 'vue'
import Router from 'vue-router'
import demoNo1 from 'components/demoNo1/demoNo1'
import demoNo2 from 'components/demoNo2/demoNo2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/demoNo1',
      name: 'demoNo1',
      component: demoNo1
    },
    {
      path: '/demoNo2',
      name: 'demoNo2',
      component: demoNo2
    }
  ]
})
