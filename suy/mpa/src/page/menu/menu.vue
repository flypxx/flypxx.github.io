<template>
  <div id="app">
    <v-head></v-head>
    <item></item>
    <router-view></router-view>
  </div>
</template>

<script type="ecmascript-6">
import head from 'components/header/header'
import item from 'components/item/item'
export default {
  name: 'app',
  components: {
    'v-head': head,
    item
  }
}
</script>

<style>
@import '../../common/css/reset.css';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
