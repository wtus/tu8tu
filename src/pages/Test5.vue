<style lang="stylus" type="text/stylus" scoped>
  @import "../../static/common.styl"
  .test5-component
    height 100vh
    background-color brown
    .content
      flex 1
      overflow hidden
      background-color green
      .weixin
        justify-content space-between
        align-items center
        .name
          flex 1
          :nth-child(2)
            color grey

    .bottombar
      wh(h:20vh)
      background-color grey
</style>

<template>
  <div class="test5-component flex-column">
    <div class="content">
      <div class="weixin flex ">
        <img src="https://p2.ssl.qhimg.com/t018e403adcbd89a68a.jpg" alt="">
        <div class="name flex-cloumn">
          <div>算法学习二群</div>
          <div>旅途：晓得老</div>
        </div>
        <div>
          <div class="time">
            <div>昨天</div>
            <div><i class="fa fa-flag"></i></div>
          </div>
        </div>
      </div>

      <div class="company flex-column">
        <div class="flex fai-center">
          <img src="https://p2.ssl.qhimg.com/t018e403adcbd89a68a.jpg" width="36px" height="36px" alt="">
          <div class="flex-column flex-1">
            <span>技术打法</span>
            <span>设计案例</span>
          </div>
        </div>
        <div class="flex">
          <div style="width: 36px">星级</div>
          <div class="flex-column flex-1">
            <span>1</span>
            <span>2</span>
            <span>3</span>
          </div>
        </div>
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


