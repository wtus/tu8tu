<style lang="stylus" type="text/stylus" scoped>
  .companyItem
    padding 50px 40px

  .line0
    .pic
      width 216px
      height 156px
      border 1px solid #e1e2e0
    .logo
      height 38px

  .line1
    margin-top 25px

  .toRight
    position absolute
    right 0

  .col0
    width 216px
    .commentNum
      font-size: 12px; /*no*/
      color #ffb200

  .logoImg
    width 42px
    height 42px

  .rightPart
    margin-left 32px

  .logoImgDiv:not(:first-of-type)
    margin-top 20px

</style>

<template>
  <div class="companyItem flex-column">

    <div class="line0 flex fai-center">
      <img src="https://pic.to8to.com/user/8/headphoto_573608.jpg?1432272581" class="pic">
      <div class="flex-column flex-1 rightPart" style="position: relative">
        <div>
          <span>百川装饰</span>
          <img src="static/company_auth.png" class="logo">
          <img src="static/company_1.png" class="logo">
          <span class="toRight">广告</span>
        </div>
        <div>
          <span>案例</span>
          <span>日记</span>
          <span class="toRight">1175.km</span>
        </div>
      </div>
    </div>

    <div class="line1 flex fai-top">
      <div class="col0 flex-column fai-center">
        <rankbar :sore="4.8" :starSize="5"></rankbar>
        <span class="commentNum">(1条评论)</span>
      </div>
      <div class="rightPart">
        <div class="flex fai-center logoImgDiv">
          <img src="https://pic.to8to.com/hot/819_8560.png?1506570388" class="logoImg">
          <span>sssss</span>
        </div>
        <div class="flex fai-center logoImgDiv">
          <img src="https://pic.to8to.com/hot/819_8560.png?1506570388" class="logoImg">
          <span>sssss</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'companyItem',
    props: {
      mData: {}
    },
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


