<style lang="stylus" type="text/stylus" scoped>
  .test6-component {
  }
</style>

<template>
  <div class="test6-component">
    <water-fall :list="list" :column="4"></water-fall>
  </div>
</template>

<script>

  export default {
    name: 'test6',
    props: {},
    mounted() {
      this.list = [
        {url: './static/images/1.jpg', height: 800, width: 1280},
        {url: './static/images/2.jpg', height: 1134, width: 808},
        {url: './static/images/3.jpg', height: 800, width: 1280},
        {url: './static/images/5.jpg', height: 509, width: 800},
        {url: './static/images/4.jpg', height: 1000, width: 660},
        {url: './static/images/6.jpg', height: 750, width: 500},
        {url: './static/images/7.jpg', height: 1050, width: 1680},
        {url: './static/images/8.jpg', height: 3548, width: 440},
        {url: './static/images/9.jpg', height: 519, width: 800},
        {url: './static/images/1.jpg', height: 800, width: 1280},
        {url: './static/images/2.jpg', height: 1134, width: 808},
        {url: './static/images/3.jpg', height: 800, width: 1280},
        {url: './static/images/4.jpg', height: 1000, width: 660},
        {url: './static/images/5.jpg', height: 509, width: 800},
        {url: './static/images/6.jpg', height: 750, width: 500},
        {url: './static/images/7.jpg', height: 1050, width: 1680},
        {url: './static/images/3.jpg', height: 800, width: 1280},
        {url: './static/images/4.jpg', height: 1000, width: 660},
        {url: './static/images/5.jpg', height: 509, width: 800},
        {url: './static/images/6.jpg', height: 750, width: 500},
        {url: './static/images/9.jpg', height: 519, width: 800},
        {url: './static/images/1.jpg', height: 800, width: 1280},
        {url: './static/images/2.jpg', height: 1134, width: 808},
        {url: './static/images/3.jpg', height: 800, width: 1280},
        {url: './static/images/4.jpg', height: 1000, width: 660},
        {url: './static/images/5.jpg', height: 509, width: 800},
        {url: './static/images/6.jpg', height: 750, width: 500},
        {url: './static/images/7.jpg', height: 1050, width: 1680},
        {url: './static/images/9.jpg', height: 519, width: 800},
        {url: './static/images/1.jpg', height: 800, width: 1280},
        {url: './static/images/2.jpg', height: 1134, width: 808},
        {url: './static/images/3.jpg', height: 800, width: 1280},
        {url: './static/images/4.jpg', height: 1000, width: 660},
        {url: './static/images/5.jpg', height: 509, width: 800},
        {url: './static/images/6.jpg', height: 750, width: 500},
        {url: './static/images/7.jpg', height: 1050, width: 1680},
      ]
    },
    activated() {
    },
    deactivated() {
    },
    computed: {},
    data() {
      return {
        list: []
      }
    },
    methods: {}
  };

</script>


