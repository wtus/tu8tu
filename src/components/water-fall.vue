
<style lang="stylus" type="text/stylus" scoped>
  @import "../../static/common.styl"
  .water-fall-component {
  }

  .container
    position relative
    .item
      position absolute
      transition transform .1s
      img:hover
        cursor pointer
      .des
        position absolute
        color white
        bottom 0
        background-color gray
        width 100%

  /*效果*/
  /* Common style */
  figure {
    position: absolute;
    z-index: 1;
    display: inline-block;
    overflow: hidden;
    margin: -0.135em;
    background: #3085a3;
    text-align: center;
    cursor: pointer;
  }

  figure img {
    position: relative;
    display: block;
    height: 100%;
    width 100%
  }

  figure figcaption {
    color: #fff;
    text-transform: uppercase;
    font-size: 1.25em;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }

  figure figcaption::before,
  figure figcaption::after {
    pointer-events: none;
  }

  figure figcaption,
  figure a {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  /* Anchor will cover the whole item by default */
  /* For some effects it will show as a button */
  figure a {
    z-index: 1000;
    text-indent: 200%;
    white-space: nowrap;
    font-size: 0;
    opacity: 0;
  }

  figure h2 {
    word-spacing: -0.15em;

    font-weight: 300;
  }

  figure h2 span {
    font-weight: 800;
  }

  figure h2,
  figure p {
    margin: 0;
  }

  figure p {
    letter-spacing: 1px;
    font-size: 68.5%;
  }

  /*---------------*/
  /***** Bubba *****/
  /*---------------*/
  figure.effect-bubba img {
    opacity: 0.9;
    -webkit-transition: opacity 0.35s;
    transition: opacity 0.35s;
  }

  figure.effect-bubba:hover img {
    opacity: 0.4;
  }

  figure.effect-bubba figcaption::before,
  figure.effect-bubba figcaption::after {
    position: absolute;
    top: 30px;
    right: 30px;
    bottom: 30px;
    left: 30px;
    content: '';
    opacity: 0;
    -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
    transition: opacity 0.35s, transform 0.35s;
  }

  figure.effect-bubba figcaption::before {
    border-top: 1px solid #fff;
    border-bottom: 1px solid #fff;
    -webkit-transform: scale(0, 1);
    transform: scale(0, 1);
  }

  figure.effect-bubba figcaption::after {
    border-right: 1px solid #fff;
    border-left: 1px solid #fff;
    -webkit-transform: scale(1, 0);
    transform: scale(1, 0);
  }

  figure.effect-bubba h2 {
    padding-top: 30%;
    -webkit-transition: -webkit-transform 0.35s;
    transition: transform 0.35s;
    -webkit-transform: translate3d(0, -20px, 0);
    transform: translate3d(0, -20px, 0);
  }

  figure.effect-bubba p {
    padding: 20px 2.5em;
    opacity: 0;
    -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
    transition: opacity 0.35s, transform 0.35s;
    -webkit-transform: translate3d(0, 20px, 0);
    transform: translate3d(0, 20px, 0);
  }

  figure.effect-bubba:hover figcaption::before,
  figure.effect-bubba:hover figcaption::after {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  figure.effect-bubba:hover h2,
  figure.effect-bubba:hover p {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }


</style>

<template>
  <div class="water-fall-component">
    <div class="container" ref="container">
      <!--<div v-for="(x,index) in list">
        <img :src="x.url" alt="">
        <span>盛大啥</span>
      </div>-->
      <figure class="effect-bubba" v-for="x in list">
        <img :src="x.imgUrl" alt="img06"/>
        <figcaption>
          <h2>{{x.title}}</h2>
          <p>{{x.des}}</p>
          <a :href="x.url">View more</a>
        </figcaption>
      </figure>
    </div>
  </div>
</template>

<script>
  import NP from 'number-precision'

  export default {
    name: 'water-fall',
    props: {
      list: {type: Array, required: true},
      column: {type: Number, required: true},
      space: {type: Number, default: 2},
    },
    mounted() {
      setTimeout(() => {
        this.calcPosition()
      }, 20)
      let vue = this
      window.onresize = () => {
        return (() => {
          //vue.calcPosition()
        })()
      }
    },
    activated() {
    },
    deactivated() {
    },
    computed: {},
    data() {
      return {
        alpha: 1
      }
    },
    methods: {
      calcPosition() {
        var imgs = this.$refs.container.children
        console.log(imgs)
        var columHeights = new Array(this.column)
        for (let i = 0; i < this.column; i++) {
          columHeights[i] = 0
        }
        this.alpha = NP.divide(1, this.column)
        console.log(this.list)
        for (let i = 0; i < imgs.length; i++) {
          var rowIndex = i % this.column
          this.setElement(imgs[i], columHeights, rowIndex)
          columHeights[rowIndex] += imgs[i].getElementsByTagName('img')[0].height + this.space
        }
        console.log(columHeights)
      },
      setElement(ele, i, rowIndex) {
        var imgEle=ele.getElementsByTagName('img')[0]

        var alpha = imgEle.height / imgEle.width
        var alpha2 = this.$refs.container.clientWidth / this.column - this.space
        ele.style.width = `${alpha2}px`
        ele.style.height = `${alpha * alpha2}px`
        ele.style.top = `${i[rowIndex]}` + 'px'
        ele.style.left = `${rowIndex / this.column * 100}%`
      }
    }
  };

</script>


