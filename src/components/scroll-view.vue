<style lang="stylus" scoped>
  .wrapper
    overflow hidden
    .content
      display flex
      white-space nowrap
</style>

<template>
  <div class="scroll-view-component">
    <div class="wrapper" ref="wrapper">
      <div class="content" ref="content">
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
      scrollX: {type: Boolean, default: true},
      scrollY: {type: Boolean, default: true},
      click: {type: Boolean, default: true},
    },
    mounted() {
      this.$nextTick(() => {
        this._initWidth()
        this._initHeight()
        this._initScroll()

      })
    },
    computed: {},
    data() {
      return {}
    },
    methods: {
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

      },
      _initScroll() {
        this.scroll = new BScroll(this.$refs.wrapper, {
          scrollX: this.scrollX,
          scrollY: this.scrollY,
          click: this.click,
        })
      }
    }
  };

</script>


