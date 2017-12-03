<style lang="stylus" scoped>
  .test4-component {
    background-color: white;
  }

  .wrapper
    overflow hidden
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
          text-align center
        em
          display inline-block
          width 100%
          text-align center
</style>

<template>
  <div class="test4-component">

    <div class="wrapper" ref="wrapper">
      <div class="content" ref="content">
        <li v-for="x in 300">
          <a href="">
            <img src="https://p3.ssl.qhimg.com/t015584deefe3d02084.jpg" alt="">
          </a>
          <em>大怪兽</em>
        </li>
      </div>
    </div>

    <div class="wrapper" ref="wrapper2">
      <div class="content" ref="content2">
        <li v-for="x in 300">
          <a href="">
            <img src="https://p3.ssl.qhimg.com/t015584deefe3d02084.jpg" alt="">
          </a>
          <em>小怪兽</em>
        </li>
      </div>
    </div>

    <div @click="goToPage(5)">测试点击滚动</div>
    <scroll-view>
      <li v-for="x in 300">
        <a href="">
          <img src="https://p3.ssl.qhimg.com/t015584deefe3d02084.jpg" alt="">
        </a>
        <em>小怪兽</em>
      </li>
    </scroll-view>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import ScrollView from "../components/scroll-view.vue";

  export default {
    components: {ScrollView},
    name: 'test4',
    props: {},
    mounted() {
      this.$nextTick(() => {
        this.children = this.$refs.content.children
        let width = 0
        for (let i = 0; i < this.children.length; i++) {
          width += this.children[i].clientWidth
        }
        this.$refs.content.style.width = width + 'px'
        this.$refs.content2.style.width = width + 'px'
        this.scroll = new BScroll(this.$refs.wrapper, {
          scrollX: true,
          probeType: 1,
          click:true
        })
        this.scroll2 = new BScroll(this.$refs.wrapper2, {
          scrollX: true,
          probeType: 1,
          click:true
        })
        this.scroll.on('scroll', (x, y) => {
          console.log(x)
          console.log(y)

        })
      })
    },
    computed: {},
    data() {
      return {}
    },
    methods: {
      goToPage(x) {
        this.scroll.scrollTo(-100,0,400)
        console.log("执行难‘")
      }
    }
  };

</script>


