<template>
  <div class="page-header">
    <div class="nav">
      <div class="avatar">
        <img src="/static/img/page.jpeg">
      </div>
      <div class="title">ECharts.js数据可视化Demo</div>
      <div class="menu">
        <div class="menu-item">
          <div class="menu-item-title">
            example
          </div>
          <ul class="demo-list" v-show="showDemoList">
            <li class="demo-item" v-for="demo in demoList">
              <router-link :to="demo.pathName"><span>{{demo.name}}</span></router-link>
            </li>
          </ul>
        </div>
      </div>
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
        demoList: [
          {
            'name': 'demoNo.1',
            'pathName': 'demoNo1'
          },
          {
            'name': 'demoNo.2',
            'pathName': 'demoNo2'
          }
        ],
        showDemoList: false
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
.page-header
  position fixed
  top 0
  left 0
  height 80px
  width 100%
  background-color rgba(255, 255, 255, 0.8)
  border-bottom 1px solid rgba(0, 0, 0, 0.05)
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
    .menu
      flex 1
      height 100%
      .menu-item
        width 80px
        .menu-item-title
          line-height 60px
          text-align center
          color rgb(224, 105, 62)
          cursor pointer
          &.active
            background-color rgb(231, 139, 106)
            color #fff
          &:hover
            background-color rgb(224, 105, 62)
            color #fff
        .demo-list
          line-height 30px
          font-size 12px
          min-width 90px
          background-color rgb(224, 105, 62)
          .demo-item
            padding 0 10px
            a
              color #fff
    .user
      flex 0 0 60px
      width 60px
      height 60px
      .avatar-container
        width 100%
        height 100%
        img
          width 60px
          height 60px
          border-radius 50%

</style>
