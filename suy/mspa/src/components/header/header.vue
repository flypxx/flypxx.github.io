<template>
  <div class="header">
    <div class="avatar">
      <img src="../../../static/img/logo.png" alt="" class="avatar-img">
    </div>
    <div class="title">
      page title
    </div>
  </div>
</template>
<script type="ecmascript-6">
export default {
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.header
  display flex
  height 80px
  width 100%
  .avatar
    flex 0 0 100px
    width 80px
    height 80px
    img
      width 80px
      height 80px
      border-radius 50%
  .title
    flex 1
    line-height 80px
    height 80px
    text-align center
    font-size 24px
</style>
