<style lang="stylus" type="text/stylus">
  .TabHome-component {
  }

</style>

<template>
  <div class="TabHome-component">
    <slide>
      <div v-for="item in carouselList">
        <a href="item.linkurl">
          <img :src="item.imgurl">
        </a>
      </div>
    </slide>
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


