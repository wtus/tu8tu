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
      color black
      font-size 45px
    span.more
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
    <div class="cardList flex fjc-center">
      <img :src="cardList.data[0].image" alt="" class="card1">
      <div class="flex-column fjc-between col2">
        <img :src="cardList.data[1].image" alt="" class="card2">
        <img :src="cardList.data[2].image" alt="" class="card3">
      </div>
    </div>
    <!--装修案例-->
    <div class="decorationCase">
      <span class="title">装修案例</span>
      <span class="more">更多</span>
    </div>
    <scroll-view :scrollX="true">

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
        vue.cardList = (data.data.cardList[0])
        console.log(vue.cardList.data[0].image)
      }).catch(function (err) {
        console.log(err)
      })
    },
    computed: {},
    data() {
      return {
        carouselList: [],
        cardList: []
      }
    },
    methods: {}
  };

</script>


