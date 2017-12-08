<style lang="stylus" type="text/stylus" scoped>
  .water-fall-component {
  }

  .container
    position relative
    img
      position absolute
      transition transform .2s
      &:hover
        transform scale(0.9)
        cursor pointer
</style>

<template>
  <div class="water-fall-component">
    <div class="container" ref="container">
      <img v-for="(x,index) in list" :src="x.url" alt="">
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
      space: {type: Number, default:10},
    },
    mounted() {
      setTimeout(() => {
        this.calcPosition()
      }, 20)
      let vue = this
      window.onresize = () => {
        return (() => {
          vue.calcPosition()
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
        var columHeights = new Array(this.column)
        for (let i = 0; i < this.column; i++) {
          columHeights[i] = 0
        }
        this.alpha = NP.divide(1, this.column)
        for (let i = 0; i < imgs.length; i++) {
          var rowIndex = i % this.column
          this.setElement(imgs[i], columHeights, rowIndex)
          columHeights[rowIndex] += imgs[i].height+this.space
        }
      },
      setElement(ele, i, rowIndex) {
        var alpha = ele.height / ele.width
        var alpha2 = this.$refs.container.clientWidth / this.column-this.space
        ele.style.width = `${alpha2}px`
        ele.style.height = `${alpha * alpha2}px`
        ele.style.top = `${i[rowIndex]}` + 'px'
        ele.style.left = `${rowIndex / this.column * 100}%`
      }
    }
  };

</script>


