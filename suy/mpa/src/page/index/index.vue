<template>
  <div id="app">
    <v-head></v-head>
    <login></login>
    <router-view></router-view>
  </div>
</template>

<script type="ecmascript-6">
import head from 'components/header/header'
import login from 'components/login/login'
export default {
  name: 'app',
  components: {
    'v-head': head,
    login
  }
}
</script>

<style >
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
