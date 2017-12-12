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
        {
          imgUrl: 'http://ww1.sinaimg.cn/large/006rV8gJgy1fmdpyrur3oj30nn0ba77m.jpg',
          title: "标题",
          des: "描述。。。",
          url:'https://wuht.coding.me/'
        },
        {
          imgUrl: 'http://ww1.sinaimg.cn/large/006rV8gJgy1fmdq0amwitj30i90catav.jpg',
          title: "标题2",
          des: "描述。。。"
        },
        {
          imgUrl: 'http://ww1.sinaimg.cn/large/006rV8gJgy1fmdq0ao5jbj30id0hogox.jpg',
          title: "标题3",
          des: "描述。。。"
        },
        {
          imgUrl: 'http://ww1.sinaimg.cn/large/006rV8gJgy1fmdq0aporbj30q50dkgrw.jpg',
          title: "标题4",
          des: "描述。。。"
        },
        {imgUrl: './static/images/1.jpg'},
//        {url: './static/images/2.jpg'},
//        {url: './static/images/3.jpg'},
//        {url: './static/images/5.jpg'},
//        {url: './static/images/4.jpg'},
//        {url: './static/images/6.jpg'},
//        {url: './static/images/7.jpg'},
//        {url: './static/images/8.jpg'},
//        {url: './static/images/9.jpg'},
//        {url: './static/images/1.jpg'},
//        {url: './static/images/2.jpg'},
//        {url: './static/images/3.jpg'},
//        {url: './static/images/4.jpg'},
//        {url: './static/images/5.jpg'},
//        {url: './static/images/6.jpg'},
//        {url: './static/images/7.jpg'},
//        {url: './static/images/3.jpg'},
//        {url: './static/images/4.jpg'},
//        {url: './static/images/5.jpg'},
//        {url: './static/images/6.jpg'},
//        {url: './static/images/9.jpg'},
//        {url: './static/images/1.jpg'},
//        {url: './static/images/2.jpg'},
//        {url: './static/images/3.jpg'},
//        {url: './static/images/4.jpg'},
//        {url: './static/images/5.jpg'},
//        {url: './static/images/6.jpg'},
//        {url: './static/images/7.jpg'},
//        {url: './static/images/9.jpg'},
//        {url: './static/images/1.jpg'},
//        {url: './static/images/2.jpg'},
//        {url: './static/images/3.jpg'},
//        {url: './static/images/4.jpg'},
//        {url: './static/images/5.jpg'},
//        {url: './static/images/6.jpg'},
//        {url: './static/images/7.jpg'},
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


