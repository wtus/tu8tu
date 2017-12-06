<style lang="stylus" type="text/stylus" scoped>
  @import "../../static/common.styl"
  .test5-component
    height 100vh
    .content
      flex 1
      overflow hidden
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
      <!--公司-->
      <div class="company flex-column" style="background-color: #e2d9e2">
        <div class="flex fai-center">
          <img src="https://p2.ssl.qhimg.com/t018e403adcbd89a68a.jpg" width="80px" height="80px" alt="">
          <div class="flex-column flex-1">
            <div class="flex">
              <span>公司</span>
              <span class="flex-1"></span>
              <span>广告</span>
            </div>
            <div class="flex">
              <span>设计案例：150</span>
              <span>装修日记：50</span>
              <span class="flex-1"></span>
              <span>1192.km</span>
            </div>
          </div>
        </div>
        <div class="flex">
          <div style="width: 80px">
            <div class="flex-column fai-center">
              <span>星星</span>
              <span>(2009评价)</span>
            </div>
          </div>
          <div class="flex-column flex-1">
            <span>1</span>
            <span>2</span>
            <span>3</span>
          </div>
        </div>
      </div>
      <!--三张图-->
      <div class="adpic flex-column"></div>
    </div>
    <div class="bottombar flex-center">底部栏</div>
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


