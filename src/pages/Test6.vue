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
          imgUrl: 'http://ww1.sinaimg.cn/large/006rV8gJgy1fmdrujuzkwj30zk0m8gny.jpg',
          title: "敬请期待",
          des: "描述。。。",
          url: 'https://wuht.coding.me/'
        },
        {
          imgUrl: 'http://ww1.sinaimg.cn/large/006rV8gJgy1fmdrzb76a0j30sg0zkjyj.jpg',
          title: "敬请期待",
          des: "描述。。。"
        },
        {
          imgUrl: 'http://ww1.sinaimg.cn/large/006rV8gJgy1fmdq0ao5jbj30id0hogox.jpg',
          title: "敬请期待",
          des: "描述。。。"
        },
        {
          imgUrl: 'http://ww1.sinaimg.cn/large/006rV8gJgy1fmdq0amwitj30i90catav.jpg',
          title: "敬请期待",
          des: "描述。。。"
        }, {
          imgUrl: 'http://ww1.sinaimg.cn/large/006rV8gJgy1fmdruk8o5jj30ku112dl3.jpg',
          title: "敬请期待",
          des: "描述。。。"
        }, {
          imgUrl: 'http://ww1.sinaimg.cn/large/006rV8gJgy1fmdrujz6vij30k00zk7af.jpg',
          title: "敬请期待",
          des: "描述。。。"
        }, {
          imgUrl: 'http://ww1.sinaimg.cn/large/006rV8gJgy1fmdrutjqffj30yi1pcnpd.jpg',
          title: "敬请期待",
          des: "描述。。。"
        }, {
          imgUrl: 'http://ww1.sinaimg.cn/large/006rV8gJgy1fmdrujyfkij30k00xkgow.jpg',
          title: "敬请期待",
          des: "描述。。。"
        },
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


