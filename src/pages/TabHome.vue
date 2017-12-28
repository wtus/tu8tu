<style lang="stylus" type="text/stylus">
  .TabHome-component {
    background-color #eee
    overflow hidden
  }

  slide
    height 620px

  img
    height 100%
    width 100%

  .selectionBar
    height 200px
    background-color white
    padding-top 20px

  .cardList
    padding-bottom 40px
    background-color white
    .card1
      height 420px
      width 490px
    .col2
      margin-left 30px
      height 420px
      .card2
        width 476px
        height 193px
      .card3
        width 476px
        height 193px

  .login
    font-size 20px /*no*/
    height 135px
    width 1010px
    background-color white
    margin-top 50px
    margin-bottom 10px
    box-shadow 0 2px 0 3px #999

  .loginText
    color #999
    margin-bottom 40px

  .toolbar
    width 10rem
    height 168px
    background-color rgba(53, 193, 132, 0)
    position fixed
    top 0

    .searchBar
      width 800px
      height 100px
      background-color white
      color white
      div:nth-child(1)
        color black
        img
          width 55px
          height 55px
          margin 0 30px
        span
          font-size: 16px; /*no*/
          vertical-align middle
          line-height 2
          color black
      div:nth-child(2)
        color #35c184
        padding-right 10px
        span
          line-height 2
          font-size: 13px; /*no*/
          vertical-align middle
          display inline-block
        .icon-to-right
          vertical-align middle

    .item
      margin 0 30px
      img
        width 60px
        height 60px
      span
        font-size 10px /*no*/
        color white
        margin-top 5px


</style>

<template>
  <div class="TabHome-component">
    <scroll-view :scrollY="true" :isListenScroll="true" wrapperHeight="100vh" @scroll="onScroll">
      <!--轮播图-->
      <slide :autoPlay="true" :loop="true" ref="slide">
        <div v-for="item in carouselList">
          <a :href="item.linkurl">
            <img :src="item.imgurl">
          </a>
        </div>
      </slide>
      <!--选项-->
      <div class="selectionBar flex fjc-around fai-center">
        <picTitle imgText="学装修" imgUrl="static/index_list_head_tag_xzx.png"></picTitle>
        <picTitle imgText="找设计" imgUrl="static/index_list_head_tag_zsj.png"></picTitle>
        <picTitle imgText="看日记" imgUrl="static/index_list_head_tag_krj.png"></picTitle>
        <picTitle imgText="提问题" imgUrl="static/index_list_head_tag_twt.png"></picTitle>
        <picTitle imgText="逛商城" imgUrl="static/index_list_head_tag_gsc.png"></picTitle>
      </div>
      <!--三个广告-->
      <!--todo 这里从列表里面读数据会报错 cardList-->
      <div class="cardList flex fjc-center">
        <img :src="cardList[0].image" alt="" class="card1">
        <div class="flex-column fjc-between col2">
          <img :src="cardList[1].image" alt="" class="card2">
          <img :src="cardList[2].image" alt="" class="card3">
        </div>
      </div>
      <divider mType="1"></divider>
      <!--装修案例-->
      <indexTitle mTitle="装修案例"></indexTitle>
      <indexGallery
        :mIsShowSmallPic="true"
        mSmallPic="static/index_list_item_3d.png"
        :mData="caseList"></indexGallery>
      <divider mType="0"></divider>
      <!--土巴兔原创设计-->
      <indexTitle mTitle="土巴兔原创设计"></indexTitle>
      <indexGallery
        :mIsShowSmallPic="true"
        mSmallPic="static/index_list_item_video.png"
        :mData="designList"></indexGallery>
      <divider mType="1"></divider>
      <!--学装修-->
      <indexTitle mTitle="学装修"></indexTitle>
      <indexGallery :mData="learnList" :mPicWidth="4" :mPicHeight="2" :mShowShadow="true"></indexGallery>
      <!--装修进度-->
      <indexProcess></indexProcess>
      <divider mType="1"></divider>
      <!--日记-->
      <indexTitle mTitle="日记"></indexTitle>
      <indexGallery :mData="diaryList" :mPicWidth="7" :mPicHeight="3" :mShowShadow="true" :mIsDiary="true"></indexGallery>
      <divider mType="1"></divider>
      <!--问答专区-->
      <indexTitle mTitle="问答专区" :isQuestionTitle="true"></indexTitle>
      <!--登陆-->
      <div class="flex-column fjc-center fai-center">
        <span class="login flex-center br-2">登录</span>
        <span class="loginText">登录后，推荐可以更准确哦~</span>
      </div>
    </scroll-view>

    <!--搜索栏-->
    <div class="toolbar flex fjc-between fai-center" ref="toolbar">
      <div class="item flex-center-column">
        <img src="static/index_ke_in.png" alt="">
        <span>客服</span>
      </div>
      <div class="searchBar br-10px flex fjc-between fai-center">
        <div>
          <img src="static/index_head_calculator.png" alt="">
          <span>10秒装修报价</span>
        </div>
        <div>
          <span>立即估算</span>
          <i class="iconfont icon-to-right"></i>
        </div>
      </div>
      <div class="item flex-center-column">
        <img src="static/index_msg_n.png" alt="">
        <span>消息</span>
      </div>
    </div>

  </div>
</template>

<script>


  import Slide from '../components/slide.vue'
  import indexTitle from "../components/indexTitle.vue";
  import indexGallery from "../components/indexGallery.vue";
  import indexProcess from "../components/indexProcess.vue";

  export default {
    components: {
      'slide': Slide,
      indexTitle,
      indexGallery,
      indexProcess
    },
    name: 'TabHome',
    props: {},
    mounted() {
      var vue = this
      this.$api.getCarouselData().then(function (data) {
        vue.carouselList = (data.data.bannerInfo)
      }).catch(function (err) {
        console.log(err)
      })

      this.$api.getIndexData().then(function (data) {
        vue.cardList = (data.data.cardList[0].data)
        vue.caseList = (data.data.cardList[1].data).map((it) => {
          return {
            'image': it.cover, "text0": `${it.area}㎡/${it.style_name}/${it.house_type_name}/${it.zxtype_name}`,
            "text1": `${it.province} ${it.address}`
          }
        })
        vue.designList = (data.data.cardList[2].data).map(function (it) {
          return {
            'image': it.image, "text0": `${it.address}•${it.district}`,
            "text1": `设计师:${it.designer}`
          }
        })
        vue.learnList = (data.data.cardList[3].data).map(function (it) {
          return {
            'image': it.image, "text0": `${it.title}`,
            "text1": `讲师:${it.sjs_guest}`,
            "text2": `${it.visitnum}`,
          }
        })
        vue.diaryList = (data.data.cardList[4].data).map(function (it) {
          return {
            'image': it.cover_image, "text0": `${it.area}㎡/`,
            "text1": `${it.owner_name}`,
            "text2": `${it.diary_content}`,
            "avatar":`${it.owner_avatar?it.owner_avatar:'static/icon_head_photo_default.png'}`,
            "name":`${it.name}`
          }
        })

        console.log(vue.data.data.cardList[4].data)
      }).catch(function (err) {
        console.log(err)
      })
    },
    computed: {},
    data() {
      return {
        carouselList: [],
        cardList: [],
        caseList: [],
        designList: [],
        learnList: [],
        diaryList: [],
      }
    },
    methods: {
      onScroll(pos) {
        console.log(pos.y / -this.$refs.slide.clientHeight)
        this.$refs.toolbar.style.backgroundColor = `rgba(53, 193, 132, ${(pos.y / -186)})`
      }
    }
  };

</script>


