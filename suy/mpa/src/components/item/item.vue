<template>
  <div class="item">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to item'
    }
  }
}
</script>

<style scoped>
h1{
  font-weight: normal;
}
</style>
