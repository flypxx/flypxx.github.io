<template>
  <div class="detail">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'i am item\'s detail'
    }
  }
}
</script>

<style scoped>
.detail {
  color: #c2344b
}
h1{
  font-weight: normal;
}
</style>
