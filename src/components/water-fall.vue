<style lang="stylus" type="text/stylus" scoped>
  @import "../../static/common.styl"
  .water-fall-component {
    width 963px
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

</style>

<template>
  <div class="water-fall-component">
    <div class="container" ref="container">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import NP from 'number-precision'

  export default {
    name: 'water-fall',
    props: {
      column: {type: Number, default: 2},
      space: {type: Number, default: 0},
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
        console.log(imgs)
        var columHeights = new Array(this.column) //用来保存每一列的当前起始高度
        for (let i = 0; i < this.column; i++) {
          columHeights[i] = 0
        }
        this.alpha = NP.divide(1, this.column)
        for (let i = 0; i < imgs.length; i++) {
          var rowIndex = i % this.column
          console.log(rowIndex / this.column * 100)
          var rem = parseFloat(window.getComputedStyle(document.documentElement)["fontSize"].replace("px", ""))
          imgs[i].style.position = `absolute`
          imgs[i].style.width = `${(this.$refs.container.clientWidth) / this.column / rem}rem`
          if(rowIndex!==0) {
            console.log(rowIndex / this.column+this.space/108)
            imgs[i].style.left = `${(rowIndex / this.column+this.space/(1080)) * 100}%`
          }else {
            imgs[i].style.left = `0%`
          }
          imgs[i].style.top = `${columHeights[rowIndex]}rem`
//          this.setElement(imgs[i], columHeights, rowIndex)
          columHeights[rowIndex] += imgs[i].clientHeight/rem + this.space/108
          console.log(columHeights)
          /***
           * 总结一下
           * 计算 rem
           *  1 已经渲染的px （除以）/window.rem
           *  2 设计稿上的px （除以）/设计稿宽度的10分之一
           *  3 两个计算出的rem 可以相加减
           *
           * */
        }
      },
      setElement(ele, i, rowIndex) {
        var imgEle = ele.getElementsByTagName('test')[0]

        var alpha = imgEle.height / imgEle.width
        var alpha2 = this.$refs.container.clientWidth / this.column - this.space/rem
        ele.style.width = `${alpha2}px`
        ele.style.height = `${alpha * alpha2}px`
        ele.style.top = `${i[rowIndex]}` + 'px'
        ele.style.left = `${rowIndex / this.column * 100}%`
      }
    }
  };

</script>


