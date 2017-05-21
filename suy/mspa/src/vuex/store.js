import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pageInfo: {
      phone: '15210881566',
      deviceId: '8080',
      name: 'Kwin',
      login: false
    }
  },
  mutations: {
    login(state, pageInfo) {
      state.pageInfo.login = true
      state.pageInfo.name = pageInfo.name
      state.pageInfo.deviceId = pageInfo.deviceId
      state.pageInfo.phone = pageInfo.phone
    },
    logout(state) {
      state.pageInfo.login = false
      state.pageInfo.name = ''
      state.pageInfo.deviceId = ''
      state.pageInfo.phone = ''
    }
  }
})
