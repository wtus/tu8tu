<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style lang="stylus" type="text/stylus">
  * {
    padding: 0;
    margin: 0;
    font-family "Microsoft YaHei"
  }
  @import "../static/common.styl"
</style>
