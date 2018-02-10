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

</style>

<template>
  <div class="water-fall-component" :style="{width:`${(mWidth-40)/108}rem`}">
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
      mColumn: {type: Number, default: 2},
      mSpace: {type: Number, default: 0},
      mWidth: {type: Number, default: 1004},
    },
    mounted() {
      setTimeout(() => {
        this.calcPosition()
        console.log("1111111111")
      }, 1000)
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
        let column = this.mColumn
        let columHeights = new Array(column) //用来保存每一列的当前起始高度
        for (let i = 0; i < column; i++) {
          columHeights[i] = 0
        }
        this.alpha = NP.divide(1, column)

        let rem = parseFloat(window.getComputedStyle(document.documentElement)["fontSize"].replace("px", ""))
        let containerWidth = this.$refs.container.clientWidth
        let space = this.mSpace
        let imgs = this.$refs.container.children
        for (let i = 0; i < imgs.length; i++) {
          let columnIndex = i % column
          let eleItem = imgs[i]

          eleItem.style.position = `absolute`
          eleItem.style.width = `${(containerWidth) / column / rem}rem`
          eleItem.style.top = `${columHeights[columnIndex]}rem`
          if (columnIndex !== 0) {
            console.log(columnIndex / column + space / 108)
            //eleItem.style.left = `${(columnIndex / column + space / (1004)) * 100}%`
            eleItem.style.left = `${(containerWidth) / column / rem * columnIndex + space / 108}rem`
          } else {
            eleItem.style.left = `0%`
          }
          columHeights[columnIndex] += imgs[i].clientHeight / rem + space / 108
        }

        /***
         * 总结一下
         * 计算 rem
         *  1 已经渲染的px （除以）/window.rem
         *  2 设计稿上的px(属性里来的) （除以）/设计稿宽度的10分之一
         *  3 两个计算出的rem 可以相加减
         *
         * */
      },
      setElement(ele, i, columnIndex) {
        var imgEle = ele.getElementsByTagName('test')[0]

        var alpha = imgEle.height / imgEle.width
        var alpha2 = this.$refs.container.clientWidth / this.mColumn - this.mSpace / rem
        ele.style.width = `${alpha2}px`
        ele.style.height = `${alpha * alpha2}px`
        ele.style.top = `${i[columnIndex]}` + 'px'
        ele.style.left = `${columnIndex / this.column * 100}%`
      }
    }
  };

</script>


