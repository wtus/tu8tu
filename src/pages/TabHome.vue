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




</style>

<template>
  <div class="TabHome-component">
    <!--轮播图-->
    <slide :autoPlay="true" :loop="true">
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
    <!--装修案例-->
    <indexTitle mTitle="装修案例"></indexTitle>
    <indexGallery :mData="caseList"></indexGallery>
    <!--土巴兔原创设计-->
    <indexTitle mTitle="土巴兔原创设计"></indexTitle>
    <indexGallery :mData="designList"></indexGallery>
    <!--装修进度-->
    <indexProcess></indexProcess>
    <!--登陆-->
    <div class="flex-column fjc-center fai-center">
      <span class="login flex-center br-2">登录</span>
      <span class="loginText">登录后，推荐可以更准确哦~</span>
    </div>
  </div>
</template>

<script>


  import Slide from '../components/slide.vue'
  import ScrollView from "../components/scroll-view.vue";
  import indexTitle from "../components/indexTitle.vue";
  import indexGallery from "../components/indexGallery.vue";
  import indexProcess from "../components/indexProcess.vue";

  export default {
    components: {
      ScrollView,
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
        vue.diaryList = (data.data.cardList[4].data).map(function (it) {
          return {
            'image': it.cover_image, "text0": `${it.area}㎡/${it.style[0].value} ${it.style[1].value}`,
            "text1": `${it.owner_name}`,
            "text2": `${it.diary_content}`
          }
        })

        console.log(vue.designList)
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
        diaryList: [],
      }
    },
    methods: {}
  };

</script>


