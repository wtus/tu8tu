<style lang="stylus" scoped>
  .TabHome-component {
  }
</style>

<template>
  <div class="TabHome-component">
    <!--<carousel :listImg="carouselList"></carousel>-->
    <companyItem></companyItem>
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


