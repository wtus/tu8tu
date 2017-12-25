<style lang="stylus" type="text/stylus" scoped>
  .TabHome-component {
  }
  .test
    background-color darkcyan
    height 620px


</style>

<template>
  <div class="TabHome-component">
    <div class="test"></div>
  </div>
</template>

<script>


  import Slide from '../components/slide.vue'

  export default {
    components: {
      'slide':Slide
    },
    name: 'TabHome',
    props: {},
    mounted() {
      var vue = this
      this.$api.getCarouselData().then(function (data) {
        vue.carouselList = (data.data.bannerInfo)
        console.log(data.data)
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


