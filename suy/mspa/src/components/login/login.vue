<template>
  <div class="login">
    <div class="page-container">
      <h1>user login</h1>
      <div class="user-message">
        <input type="text" v-model="pageInfo.name" placeholder="enter your name">
      </div>
      <div class="user-message">
        <input type="text" v-model="pageInfo.deviceId" placeholder="enter your deviceId">
      </div>
      <div class="user-message">
        <input type="text" v-model="pageInfo.phone" placeholder="enter your phone">
      </div>
      <button type="button" class="submit-btn" @click.stop.prevent="loginAccount()">login</button>
    </div>
  </div>
</template>

<script type="ecmascript-6">
  import store from 'vuexpath/store'
  import router from 'routerpath/index'
  // import { mapState, mapActions, mapMutations } from 'vuex'
  export default {
    data() {
      return {
        pageInfo: {
          name: '',
          deviceId: '',
          phone: ''
        }
      }
    },
    methods: {
      loginAccount() {
        store.commit('login', this.pageInfo)
        if (store.state.pageInfo.login) {
          router.push('promote')
        }
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
