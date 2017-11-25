<template>
  <div class="carousel-component">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="x in listImg"
             :style="{ backgroundImage: 'url(' + x + ')' }"></div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'

  export default {
    name: 'carousel',
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
        loop:true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
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

<style >
  .carousel-component {
    background-color: #ff7786;
    width:100%;
  }
  .swiper-wrapper {
    background-color: white;
    width:100%;
    height:300px;
  }

  .swiper-slide {
    background-color: blueviolet;
    width: 100%;
    height:100%;
  }


  .swiper-pagination{
    display: flex;
    justify-content: flex-end;
  }
  .swiper-pagination-bullet{
    background: #3be23a
  }

  .swiper-pagination-bullet-active {
    background:white;
    width: 15px;
    border-radius: 20%;
  }

</style>
