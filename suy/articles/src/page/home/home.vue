<template>
  <div class="home">
    <v-header :title="pageInfo.title"></v-header>
  </div>
</template>
<script type="ecmascript-6">
  import Header from 'components/header/header'
  export default {
    components: {
      'v-header': Header
    },
    data() {
      return {
        pageInfo: {
          title: '主页'
        }
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">

</style>
