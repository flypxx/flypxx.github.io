<template>
  <div class="personal">
    <div class="page-detail">
      <h1>welcome to {{pageInfo.name}}'s personal page</h1>
    </div>
  </div>
</template>

<script type="ecmascript-6">
  import store from 'vuexpath/store'
  import { mapState } from 'vuex'
  export default {
    computed: {
      ...mapState(['pageInfo'])
    },
    store
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
