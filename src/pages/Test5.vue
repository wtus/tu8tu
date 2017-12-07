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

      .loading
        overflow hidden
        svg
          animation r 2s linear infinite
        .circle
          animation ss 1.5s ease-in-out infinite
          /*stroke-dasharray 30 125*2
          stroke-dashoffset -30*/
    .bottombar
      wh(h:20vh)
      background-color grey


  @keyframes ss
    0%
      stroke-dasharray 1 125
      stroke-dashoffset 0;
    50%
      stroke-dasharray 100 125
      stroke-dashoffset -25;
    100%
      stroke-dasharray 100 126
      stroke-dashoffset -125;

  @keyframes r
    from
      transform rotate(0deg)
    to
      transform rotate(356deg)
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
      <!--svg-->
      <div class="loading" style="width: 300px;height: 300px">
        <svg class="svg" viewBox="0 0 50 50">
          <circle cx="25" cy="25" r="20" class="circle"
                  fill="none"
                  stroke-width="5%"
                  stroke="red"
                  stroke-linecap="round"
          ></circle>
        </svg>
      </div>


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


