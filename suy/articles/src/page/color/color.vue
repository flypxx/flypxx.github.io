<template>
  <div class="color">
    <div class="color-box">
      <div v-for="color in colorArr" class="color-block colorBlock" style="background-color: {{color}}">{{color}}</div>
    </div>
  </div>
</template>
<script type="ecmascript-6">
  export default {
    data() {
      return {
        colorArr: [
          '#211d36',
          '#443e65',
          '#07111b',
          '#005f3c',
          '#449d44',
          '#f6f6f6',
          '#d9edf7'
        ]
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
.color
  width 100%
  height 100%
  background-color #efefef
  .color-box
    width 80%
    height 100%
    margin-left 10%
    background-color #cfcfcf
    padding 20px
  .color-block
    width 160px
    height 40px
    border-radius 5px
    line-height 40px
    margin 8px
    text-align center
    color #fff
    cursor pointer
    display inline-block
</style>
