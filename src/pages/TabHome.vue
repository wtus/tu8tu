<style lang="stylus" type="text/stylus">
  .TabHome-component {
    background-color #eee
  }

  slide
    height 620px

  img
    height 100%
    width 100%

  .selectionBar
    height 200px
    background-color white

  .cardList
    padding 40px 0
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

  .decorationCase
    display flex
    justify-content space-between
    align-items center
    padding 56px 40px
    margin-top 35px
    background-color white
    span.title
      font-size: 22px; /*no*/
      color black
    span.more
      color #999

  .scroll-item
    background-color white
    padding-left 40px
    .div1
      width 721px
      height 432px
    .text0
      font-size: 17px; /*no*/
      color #555
    .text1
      margin-top 2px
      font-size: 15px; /*no*//*不要在最后一行否则会被格式化*/
      color #999


</style>

<template>
  <div class="TabHome-component">
    <!--轮播图-->
    <slide>
      <div v-for="item in carouselList">
        <a :href="item.linkurl">
          <img :src="item.imgurl">
        </a>
      </div>
    </slide>
    <!--选项-->
    <div class="selectionBar flex fjc-around fai-center">
      <div>s</div>
      <div>s</div>
      <div>s</div>
      <div>s</div>
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
    <div class="decorationCase">
      <span class="title">装修案例</span>
      <span class="more">更多</span>
    </div>
    <scroll-view :scrollX="true">
      <div class="flex">
        <div v-for="(item ,index) in caseList" class="scroll-item flex-column">
          <div class="div1">
            <img class="br-2" :src="item.cover"
                 alt="">
          </div>
          <div class="text0">{{getDecorationCaseText0(item)}}</div>
          <div class="text1">{{getDecorationCaseText1(item)}}</div>
        </div>
      </div>
    </scroll-view>
  </div>
</template>

<script>


  import Slide from '../components/slide.vue'
  import ScrollView from "../components/scroll-view.vue";

  export default {
    components: {
      ScrollView,
      'slide': Slide
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
        vue.caseList = (data.data.cardList[1].data)
        console.log(vue.caseList[0].cover)
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
      }
    },
    methods: {
      getDecorationCaseText0(item) {
        return `${item.area}㎡/${item.style_name}/${item.house_type_name}/${item.zxtype_name}`
      },
      getDecorationCaseText1(item) {
        return `${item.province} ${item.address}`
      }
    }
  };

</script>


