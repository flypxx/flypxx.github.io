<template>
  <div class="home">
    <div class="page-message">
      <h1>Welcome to the home page</h1>
      <button type="button" @click.stop.prevent="loginAccount()">login</button>
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
      console.log('the home page')
    },
    computed: {
      ...mapState(["pageInfo"])
    },
    data() {
      return {
      }
    },
    methods: {
      loginAccount() {
        console.log(this.pageInfo)
        if (!this.pageInfo.login) {
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
.home
  font-size 20px
  color #c2344f
</style>
