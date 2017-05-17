<template>
  <div class="login">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to login'
    }
  }
}
</script>

<style scoped>
h1{
  font-weight: normal;
}
</style>
