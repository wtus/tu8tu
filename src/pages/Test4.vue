<style lang="stylus" scoped>
  .test4-component {
    background-color: white;
    width 90vw
  }

  .wrapper
    overflow hidden
    width 100vw
    .content
      white-space nowrap
      overflow hidden
      height 100px
      display flex
      cursor pointer
      li
        display inline-block
        div
          width 80px
          height 100px
          text-align center
        img
          display block
          width 80px
          height 80px
        em
          width 100%
          text-align center
</style>

<template>
  <div class="test4-component">
    <div class="wrapper" ref="wrapper">
      <div class="content" ref="content">
        <li>封杀点击福建师大附近啊</li>
        <li>封杀点击福建师大附近啊</li>
        <li>封杀点击福建师大附近啊</li>
        <li>封杀点击福建师大附近啊</li>
        <li>封杀点击福建师大附近啊</li>
        <li>封杀点击福建师大附近啊</li>
        <li>封杀点击福建师大附近啊</li>
        <li>封杀点击福建师大附近啊</li>
        <li>封杀点击福建师大附近啊</li>
        <li>封杀点击福建师大附近啊</li>
        <li>封杀点击福建师大附近啊</li>
        <li>封杀点击福建师大附近啊</li>
        <li>封杀点击福建师大附近啊</li>
        <li>封杀点击福建师大附近啊</li>
        <li>封杀点击福建师大附近啊</li>
        <li>封杀点击福建师大附近啊</li>
        <li>封杀点击福建师大附近啊</li>
        <li>封杀点击福建师大附近啊</li>
        <li>封杀点击福建师大附近啊</li>
        <li>封杀点击福建师大附近啊</li>
        <li>封杀点击福建师大附近啊</li>
        <li>封杀点击福建师大附近啊</li>
        <li>封杀点击福建师大附近啊</li>
        <li>封杀点击福建师大附近啊</li>
        <li>封杀点击福建师大附近啊</li>
        <li>封杀点击福建师大附近啊</li>
        <li>封杀点击福建师大附近啊</li>
        <li>封杀点击福建师大附近啊</li>
        <li>封杀点击福建师大附近啊</li>
        <li>封杀点击福建师大附近啊</li>
        <li>封杀点击福建师大附近啊</li>
        <li>封杀点击福建师大附近啊</li>
        <li>封杀点击福建师大附近啊</li>
        <li>封杀点击福建师大附近啊</li>
        <li>封杀点击福建师大附近啊</li>
        <li>封杀点击福建师大附近啊</li>
        <li>封杀点击福建师大附近啊</li>
        <li>封杀点击福建师大附近啊</li>
        <li>封杀点击福建师大附近啊</li>
        <li>封杀点击福建师大附近啊</li>
        <li>封杀点击福建师大附近啊</li>
        <li>封杀点击福建师大附近啊</li>
        <li>封杀点击福建师大附近啊</li>
        <li>封杀点击福建师大附近啊</li>
        <li>封杀点击福建师大附近啊</li>
        <li>封杀点击福建师大附近啊</li>
        <li>封杀点击福建师大附近啊</li>
        <li>封杀点击福建师大附近啊</li>
        <li>封杀点击福建师大附近啊</li>
        <li>封杀点击福建师大附近啊</li>
        <li>封杀点击福建师大附近啊aaa</li>
      </div>
    </div>

  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    name: 'test4',
    props: {},
    mounted() {
      this.$nextTick(() => {
        this.children = this.$refs.content.children
        let width = 0
        for (let i = 0; i < this.children.length; i++) {
          width += this.children[i].clientWidth
        }
        this.$refs.content.style.width = width+'px'
        this.scroll = new BScroll(this.$refs.wrapper, {
          scrollX: true
        })
        console.log(this.scroll)
      })
    },
    computed: {},
    data() {
      return {}
    },
    methods: {}
  };

</script>


