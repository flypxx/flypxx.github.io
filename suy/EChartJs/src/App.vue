<template>
  <div id="app">
    <v-header></v-header>
    <div class="page-container">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import header from 'components/header/header'
export default {
  components: {
    'v-header': header
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .page-container
    margin-top 80px
</style>
