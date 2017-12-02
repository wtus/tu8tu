<style lang="stylus" type="text/stylus" scoped>
  @import "../../static/comment.styl"
  .companyItem-component {
    background-color darkgray
    display flex
    flex-direction column
  }

  .test1
  .design
    display flex
    justify-content space-between

  .price
    background-color #c7c63a
    wuCenter()

  .design
    flex-direction column

  .free
    background-color #0e94e2

  .famous
    background-color #3be23a
  .test1
    height 20%

  .test2
    height 20%
    background-color #ff67cd
    display grid
    max-width 600px
    grid-template-columns  300px 200px 100px
    grid-template-rows 100px 50px

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

    <div class="test2">
      <div class="grid-item1"></div>
      <div class="grid-item2"></div>
      <div class="grid-item3"></div>
      <div class="grid-item4"></div>
      <div class="grid-item5"></div>
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


