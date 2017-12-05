<style lang="stylus" type="text/stylus" scoped>
  @import "../../static/common.styl"
  .test5-component {
  }

  .content
    width 100px
    height 200px
    background-color #3be23a
    .tst1
      background-color slategrey
      wh(20px,80px)
</style>

<template>
  <div class="test5-component">
    <div class="content">
      <div class="tst1">vfbh</div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'test5',
    props: {},
    mounted() {
    },
    activated() {
    },
    deactivated() {
    },
    computed: {},
    data() {
      return {}
    },
    methods: {}
  };

</script>


