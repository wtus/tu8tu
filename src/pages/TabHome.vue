<style lang="stylus" type="text/stylus" scoped>
  .TabHome-component {
    margin: 20px;
  }

  a
    border: 1px solid red
    padding: 8px 0
    text-decoration: none
    font-size 15px
    border-radius 40px
    width 100px
    height 50px
    min-height 1px

</style>

<template>
  <div class="TabHome-component">

  </div>
</template>

<script>

  import Carousel from "../components/carousel.vue";

  export default {
    components: {Carousel},
    name: 'TabHome',
    props: {},
    mounted() {
      var vue = this
      this.$api.getCarouselData().then(function (data) {
        vue.carouselList = (data.data.bannerInfo)
      }).catch(function (err) {
        console.log(err)
      })
    },
    computed: {},
    data() {
      return {
        carouselList: []
      }
    },
    methods: {}
  };

</script>


