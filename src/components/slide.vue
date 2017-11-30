<style lang="stylus" type="text/stylus">
  .slide-component {
    min-height 1px
    background-color mediumvioletred
    height 300px
  }

  .slide-group
    display flex
    .slider-item
      a
        display block
        width: 100%
        overflow hidden
        text-decoration none
      img
        display block
        width 30%

  .dots
    transform translateZ(1px)
    display flex
    text-align: center
    font-size: 0
    position absolute
    right  0
    .dot
      background-color blueviolet
      width 24px
      margin 0 4px
      height @width
      cursor pointer
      border-radius 50%
    .active
      background-color #ff5c8e


</style>

<template>
  <div class="slide-component" ref="slide">
    <div class="slide-group" ref="slideGroup">
      <slot></slot>
    </div>
    <div class="dots" v-if="showDot">
      <span class="dot" v-for="(item,index) in dots"
            :class="{active:index==currentPageIndex}"
            @click="clickItem(index)"></span>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import {addClass} from '../assets/dom'

  export default {
    name: 'slide',
    props: {
      showDot: {
        type: Boolean,
        default: true
      },
      autoPlay: {
        type: Boolean,
        default: false
      },
      interval: {
        type: Number,
        default: 4000
      },
    },
    mounted() {
      setTimeout(() => {
        this._setSlideWidth()
        if (this.showDot) {
          this._initDots()
        }
        this._initSlide()
        if (this.autoPlay) {
          this._play()
        }
      }, 20)

      //添加windows 监听
      window.addEventListener('resize', () => {
        if (!this.slide || !this.slide.enabled) {
          return
        }

        clearTimeout(this.resizeTimer)
        this.resizeTimer = setTimeout(() => {
          if (this.slide.isInTransition) {
            this._onScrollEnd()
          } else if (this.autoplay) {
            this._play()
          }
          this.myrefresh()//调整窗口后 slide 要 refresh 同时重新这只宽度
        }, 60)
      })
    },
    activated() {
      console.log('activated')
      if (this.slide) {
        return
      }
      this.slide.enable()
      let pageIndex = this.slide.getCurrentPage().pageX
      if (pageIndex > this.dots.length) {
        pageIndex = pageIndex % this.dots.length
      }
      this.slide.goToPage(pageIndex, 0, 0)
      this.currentPageIndex = pageIndex
      if (this.autoplay) {
        this._play()
      }
    },
    deactivated() {
      this.slide.disable()
      clearTimeout(this.timer)
    },
    beforeDestroy() {
      this.slide.disable()
      clearTimeout(this.timer)
    },
    computed: {},
    data() {
      return {
        dots: [],
        currentPageIndex: 0
      }
    },
    methods: {
      _setSlideWidth(isResize) {
        this.children = this.$refs.slideGroup.children
        let width = 0
        let slideWidth = this.$refs.slide.clientWidth
        for (let i = 0; i < this.children.length; i++) {
          let child = this.children[i]
          addClass(child, 'slide-item')
          child.style.width = slideWidth + 'px'
          width += slideWidth
        }
        this.$refs.slideGroup.style.width = width + 'px'
      },
      _initDots() {
        this.dots = new Array(this.children.length)
      },
      _initSlide() {
        this.slide = new BScroll(this.$refs.slide, {
          scrollX: true,
          momentum: false,
          snap: {
            threshold: 0.3,
            speed: 600
          },
        })

        this.slide.on('scrollEnd', this._onScrollEnd)
        this.slide.on('touchEnd', () => {
          console.log('touchendtouchend')
          if (this.autoplay) {
            this._play()
          }
        })
      },
      _play() {
        let pageIndex = this.slide.getCurrentPage().pageX + 1
        clearTimeout(this.timer)
        this.timer = setTimeout(() => {
          this.slide.goToPage(pageIndex, 0, 400)
        }, this.interval)
      },
      _onScrollEnd() {
        console.log('_onScrollEnd')
        let pageIndex = this.slide.getCurrentPage().pageX
        this.currentPageIndex = pageIndex
        if (this.autoplay) {
          this._play()
        }
      },
      myrefresh() {
        this._setSlideWidth(true)
        this.slide.refresh()
      },
      clickItem(index) {
        console.log("Df")
        this.slide.goToPage(index, 0, 600)
      }
    }
  };

</script>




