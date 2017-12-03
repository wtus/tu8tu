startX: 0,
<style lang="stylus" type="text/stylus" scoped>
  .test2-component {
    background-color black
    display flex
    flex-direction column
    height 100vh
  }

  .wrapper
    background-color cyan
    overflow hidden
    flex 1

  .navbar
    background-color #007aff
    height 10%
    display flex
    a
      flex 1
      text-align center


</style>

<template>
  <div class="test2-component">
    <div class="wrapper" ref="wrapper">
      <div class="content wheel" ref="content">
        <div v-for="x in 3000" @click="goto(x)" class="ccc">x{{x}}<br></div>
      </div>
    </div>
    <div class="navbar">
      <a href="s1">  <i class="fa fa-flag"></i><div>1</div></a>

      <a href="s2">2</a>
      <a href="a3">3</a>
      <a href="4">4</a>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    name: 'test2',
    props: {},
    mounted() {
      if (!this.$refs.wrapper) {
        return
      }
      setTimeout(() => {
        this.slide = new BScroll(this.$refs.wrapper, {
        });
        console.log(this.slide)
        this.slide.on('scrollEnd', this.finish)
      }, 500)

    },
    activated() {
    },
    deactivated() {
    },
    computed: {},
    data() {
      return {}
    },
    methods: {
      finish() {
        console.log('完成')
      },
      goto(x) {
        console.log(x)
        this.slide && this.slide.goToPage(0, 100, 400)
      }
    }
  };

</script>


