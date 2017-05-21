<template>
  <div class="promote">
    <div class="page-message">
      <h1>Welcome {{pageInfo.name}}</h1>
      <p class="message-item">your phone is {{pageInfo.phone}}</p>
      <p class="message-item">your deviceId is {{pageInfo.deviceId}}</p>
      <button type="button" @click.stop.prevent="logoutAccount()">logout</button>
      <button type="button" @click.stop.prevent="personalPage()">personal page</button>
    </div>
  </div>
</template>

<script type="ecmascript-6">
  import store from 'vuexpath/store'
  import { mapState, mapActions, mapMutations } from 'vuex'
  import router from 'routerpath/index'
  export default {
    created() {
      this.checkLogin()
    },
    computed: {
      ...mapState(["pageInfo"])
    },
    data() {
      return {
      }
    },
    methods: {
      checkLogin() {
        console.log(this.pageInfo)
        if (!this.pageInfo.login) {
          router.push('login')
        }
      },
      logoutAccount() {
        store.commit('logout')
        if (!store.state.pageInfo.login) {
          router.push('login')
        }
      },
      personalPage() {
        if (store.state.pageInfo.login) {
          router.push('personal')
        } else {
          router.push('login')
        }
      }
    },
    store
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
