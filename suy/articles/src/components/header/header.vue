<template>
  <div class="page-head">
    <h1>{{title}}</h1>
  </div>
</template>

<script type="ecmascript-6">
export default {
  props: {
    title: String
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.page-head
  width 100%
  height 88px
  line-height 88px
  text-align center
  color #fff
  background-color #ee3856
</style>
