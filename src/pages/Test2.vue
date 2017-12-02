startX: 0,
<style lang="stylus" type="text/stylus" scoped>
  .test2-component {
    background-color black
    display flex
    height 100vh
    flex-direction column
  }

  .wrapper
    background-color cyan
    overflow hidden
    flex 1

  .navbar
    background-color #007aff
    height 10%

</style>

<template>
  <div class="test2-component">
    <div class="wrapper" ref="wrapper">
      <ul class="content" ref="content">
        <li v-for="x in 60" class="ccc" ref="ccc">x{{x}}<br></li>
      </ul>
    </div>
    <div class="navbar"></div>
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
      setTimeout(()=>{
        this.slide = new BScroll(this.$refs.wrapper, {});
        console.log(this.slide)
        this.slide.on('scrollEnd', this.finish)
      },500)

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
      }
    }
  };

</script>


