import Vue from 'vue'
import Router from 'vue-router'
import Detail from 'components/detail/detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/detail',
      name: 'detail',
      component: Detail
    }
  ]
})
