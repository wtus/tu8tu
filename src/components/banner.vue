<template>
  <div class="banner-component">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="x in listImg" :style="{ backgroundImage: 'url(' + x + ')' }">1</div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'

  export default {
    name: 'banner',
    props: {
      listImg: {
        type: [Array],
        required: true
      }
    },
    mounted() {
      var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        autoplay: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        on: {
          tap: function () {
            console.log(swiper.activeIndex)
          }
        }
      });
    },
    computed: {},
    methods: {}
  };

</script>

<style>
  .banner-component {
    background-color: white;
  }
</style>
