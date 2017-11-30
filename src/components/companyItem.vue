<style lang="stylus" type="text/stylus" scoped>
  @import "../../static/comment.styl"
  .companyItem-component {
    height 20%
    background-color darkgray
    display flex
  }

  .companyItem-component
  .design
    display flex

  .price
    background-color #c7c63a
    wuCenter()

  .design
    flex-direction column

  .free
    background-color #0e94e2

  .famous
    background-color #3be23a

</style>

<template>
  <div class="companyItem-component">
    <div class="test1">
      <div class="price">剪刀手了</div>
      <div class="design">
        <div class="free"></div>
        <div class="famous"></div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'companyItem',
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


