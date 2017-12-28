<style lang="stylus" type="text/stylus">
  .scroll-view-component
    width 100vw

  .wrapper
    overflow hidden
    .content
      white-space nowrap
</style>

<template>
  <div class="scroll-view-component">
    <div class="wrapper" ref="wrapper" :style="{height:`${wrapperHeight}`}">
      <div class="content" ref="content" :class="scrollX?'flex':'flex-column'">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    name: 'scroll-view',
    props: {
      scrollX: {type: Boolean, default: false},
      scrollY: {type: Boolean, default: false},
      click: {type: Boolean, default: true},
      isListenScroll: {type: Boolean, default: false},
      isListenScrollEnd: {type: Boolean, default: false},
      probeType: {type: Number, default: 1},
      wrapperHeight: {type: String, default: "100%"},
    },
    mounted() {
      setTimeout(() => {
        this._initWidth()
        this._initHeight()
        this._initScroll()
      }, 20)
    },
    computed: {},
    data() {
      return {}
    },
    methods: {
      scrollTo() {
        this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments)
      },
      scrollToElement() {
        this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments)
      },
      _initWidth() {
        if (!this.scrollX) {
          return
        }
        let children = this.$refs.content.children
        let width = 0
        for (let i = 0; i < children.length; i++) {
          width += children[i].clientWidth
        }
        this.$refs.content.style.width = width + 'px'
      },
      _initHeight() {
        if (!this.scrollY) {
          return
        }
        let children = this.$refs.content.children
        let height = 0
        for (let i = 0; i < children.length; i++) {
          height += children[i].clientHeight
        }

        this.$refs.content.style.height = height + 'px'
        if (height < this.$refs.wrapper.clientHeight) {//如果高度不足也让她可以上下拖动
          this.$refs.content.style.height = (this.$refs.wrapper.clientHeight + 1) + 'px'
        }
      },
      _initScroll() {
        if (this.isListenScroll && this.probeType === 1) {
          this.probeType = 3
        }

        this.scroll = new BScroll(this.$refs.wrapper, {
          scrollX: this.scrollX,
          scrollY: this.scrollY,
          click: this.click,
          probeType: this.probeType,
        })

        if (this.isListenScroll) {
          let vue = this
          this.scroll.on('scroll', (pos) => {
            vue.$emit('scroll', pos)
          })
        }

        if (this.isListenScrollEnd) {
          let vue = this
          this.scroll.on('scrollEnd', () => {
            console.log('sa')
            vue.$emit('scrollEnd')
          })
        }
      }
    }
  };

</script>


