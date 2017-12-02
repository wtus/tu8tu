<style lang="stylus" type="text/stylus" scoped>
  .test2-component {
    background-color black
    display flex
    flex-direction column
    height 100vh
    width  100vw
  }

  .content
    flex 1
    background-color whitesmoke


  .navbar
    height 10%
    background-color #007aff

</style>

<template>
  <div class="test2-component">
    <div class="content" ref="content">
      <div v-for="x in 300">x{{x}}<br></div>
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
      setTimeout(()=>{
        this.slide = new BScroll(this.$refs.content, {
          scrollX: true,
          momentum: false,
        })
      },20)
    },
    activated() {
    },
    deactivated() {
    },
    computed: {},
    data() {
      return {}
    },
    methods: {}
  };

</script>


