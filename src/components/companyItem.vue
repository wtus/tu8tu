<style lang="stylus" type="text/stylus" scoped>
  .companyItem
    padding 50px 40px
    background-color white

  .line0
    .pic
      width 216px
      height 156px
      border 1px solid #e1e2e0

  .logo
    height 38px
    width 38px
  .logo1
    width 118px

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
      <img :src="mData.imgUrl" class="pic">
      <div class="flex-column flex-1 rightPart" style="position: relative">
        <div>
          <span>{{mData.name}}</span>
          <img src="static/company_auth.png" class="logo logo1">
          <img src="static/company_1.png" class="logo">
          <span class="toRight" v-show="false">广告</span>
        </div>
        <div>
          <span>设计案例：{{mData.caseNum}}</span>
          <span>  日记：{{mData.diaryNum}}</span>
          <span class="toRight">{{mData.distance}}</span>
        </div>
      </div>
    </div>

    <div class="line1 flex fai-top">
      <div class="col0 flex-column fai-center">
        <rankbar :sore="mData.totalScore" :starSize="5"></rankbar>
        <span class="commentNum">({{mData.commentNum}}条评论)</span>
      </div>
      <div class="rightPart">
        <div v-for="x in mData.logoMsg" class="flex fai-center logoImgDiv">
          <img :src="x.logo" class="logoImg">
          <span>{{x.msg}}</span>
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


