<template>
  <div class="carousel2-component">
    <div class="carousel-bar">
      <span>装修案例</span>
      <span>更多</span>
    </div>
    <div class="carousel2-swiper-container">
      <div class="swiper-wrapper">

        <div class="swiper-slide" v-for="x in listImg">
          <div class="slider-item">
            <div class="pic" :style="{ backgroundImage: 'url(' + x + ')' }">
              <img src="../assets/ic_tuku_normal.png" alt="">
            </div>
            <div class="text1">德州-华庭阳光</div>
            <div class="text2">设计师:畅想装饰</div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'

  export default {
    name: 'carousel2',
    props: {
      listImg: {
        type: [Array],
        required: true
      }
    },
    mounted() {
      var swiper = new Swiper('.carousel2-swiper-container', {
        slidesPerView: "auto",
        spaceBetween: 30,
        freeMode: true,
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

<style scoped>
  .carousel2-component {
    background-color: #ff7786;
    width: 100%;
  }

  .carousel-bar {
    margin: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .carousel-bar :nth-child(1) {
    color: blueviolet;
    font-size: x-large;
  }

  .carousel-bar :nth-child(2) {
    color: #e2d9e2;
  }

  .swiper-wrapper {
    background-color: white;
    width: 100%;
    height: 200px;
  }

  .swiper-slide {
    width: 65%;
    height: 100%;
  }

  .slider-item {
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: space-between;
  }

  .slider-item .pic {
    height: 150px;
    width: 100%;
    position: relative;
    border-radius: 6px;
  }

  .slider-item .pic img{
    bottom: 10px;
    right: 10px;
    position: absolute;
  }

  .text1 {

  }

  .text2 {
    color: #e2d9e2;
    font-size: x-small;
  }

</style>
