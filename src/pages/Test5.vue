<style lang="stylus" type="text/stylus" scoped>
  @import "../../static/common.styl"
  .test5-component
    height 100vh
    background-color brown
    .content
      flex 1
      overflow hidden
      background-color green
      .item
        line-height 1.5
    .bottombar
      wh(h:20vh)
      background-color grey
</style>

<template>
  <div class="test5-component flex-column">
    <div class="content">
      <div class="item flex">
        <div class="flex-center">加拿大</div>
        <div>
          <span>span1</span>
          <span>span2</span>
          <div>div3</div>
        </div>
      </div>

      <div class="github">
        <span>java</span>
        <a href=""> <img height="20" src="https://avatars0.githubusercontent.com/u/914682?s=40&v=4" alt="">
          1888</a>
        <a href="">88888</a>
        <span>build by <a href="">
          <img  style="float: left" height="20px" src="https://avatars0.githubusercontent.com/u/914682?s=40&v=4" alt="">
          <img style="float: left" height="20px" src="https://avatars0.githubusercontent.com/u/914682?s=40&v=4" alt="">
          <img  style="float: left" height="20px" src="https://avatars0.githubusercontent.com/u/914682?s=40&v=4" alt="">
          <img  style="float: left" height="20px" src="https://avatars0.githubusercontent.com/u/914682?s=40&v=4" alt="">
          <img   style="float: left" height="20px" src="https://avatars0.githubusercontent.com/u/914682?s=40&v=4" alt="">
        </a></span>
        <span class="fright">290 stars this week</span>
      </div>

      <div>
        <img  height="20px" src="https://avatars0.githubusercontent.com/u/914682?s=40&v=4" alt="">
        <img  height="20px" src="https://avatars0.githubusercontent.com/u/914682?s=40&v=4" alt="">
        <img  height="20px" src="https://avatars0.githubusercontent.com/u/914682?s=40&v=4" alt="">

      </div>
    </div>
    <div class="bottombar">s</div>
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


