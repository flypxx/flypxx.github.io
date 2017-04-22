<template>
  <div class="page-header">
    <div class="nav">
      <div class="avatar">
        <img src="/static/img/page.jpeg">
      </div>
      <div class="title">ECharts.js数据可视化Demo</div>
      <ul class="menu">
        <li class="demo-list"></li>
      </ul>
      <div class="user">
        <div class="avatar-container">
          <img src="/static/img/avatar.jpeg">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        demoLiat: [
          {
            'name': 'demoNo.1',
            'pathName': 'demoNo1'
          }
        ]
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
.page-header
  // position fixed
  top 0
  left 0
  height 80px
  width 100%
  background-color rgba(255, 255, 255, 0.8)
  .nav
    display flex
    margin 0 auto
    padding 10px 0
    width 80%
    height 60px
    .avatar
      flex 0 0 60px
      width 60px
      height 60px
      img
        width 60px
        height 60px
        border-radius 50%
    .title
      flex 1
      padding-left 20px
      line-height 60px
      font-size 20px
      color rgb(224, 105, 62)
      font-weight 500
</style>
