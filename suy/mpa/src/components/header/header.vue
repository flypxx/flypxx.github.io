<template>
  <div class="header">
    <div class="avatar">
      <img src="../../../static/img/logo.png">
    </div>
    <div class="name">{{ msg }}</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'title'
    }
  }
}
</script>

<style scoped>
.header {
  display: flex;
  line-height: 80px;
  height: 80px;
  border-bottom: 1px solid #fcfcfc;
}
.avatar {
  flex: 0 0 80px;
  margin: 0 20px;
  width: 80px;
  height: 80px;
}
.avatar img {
  width: 80px;
  height: 80px;
}
.name {
  flex: 1;
  text-align: center;
}
</style>
