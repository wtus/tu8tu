<style lang="stylus" type="text/stylus" scoped>
  .water-fall-component {
  }

  .container
    position relative
    img
      position absolute
</style>

<template>
  <div class="water-fall-component">
    <div class="container" ref="container">
      <img v-for="(x,index) in list" :src="x.url" alt="">
    </div>
  </div>
</template>

<script>

  export default {
    name: 'water-fall',
    props: {
      list: {type: Array, required: true},
      column: {type: Number, required: true},
    },
    mounted() {
      this.calcPosition()
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
      calcPosition() {
        var imgs = this.$refs.container.children;
        var alpha = 1 / this.column
          console.log(alpha)
        console.log("afhasu风扇灯")
        for (let i = 0; i < imgs.length; i++) {
          imgs[i].style.width = `${101/this.column}%`
        }
      }
    }
  };

</script>


