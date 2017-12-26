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
    <!---->
    <div class="selectionBar flex fjc-around fai-center">
      <div>s</div>
      <div>s</div>
      <div>s</div>
      <div>s</div>
    </div>
    <!--dddd-->
    <div class="cardList flex fjc-center">
      <img src="http://pic.to8to.com/attch/day_171010/1720383.gif" alt="" class="card1">
      <div class="flex-column fjc-between col2">
        <img src="http://pic.to8to.com/attch/day_171010/1389155.gif" alt="" class="card2">
        <img src="http://pic.to8to.com/attch/day_170908/1114570.png" alt="" class="card3">
      </div>
    </div>
  </div>
</template>

<script>


  import Slide from '../components/slide.vue'

  export default {
    components: {
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
        vue.cardList = (data.data.cardList)
        console.log(vue.cardList)
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


