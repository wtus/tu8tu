<style lang="stylus" type="text/stylus" scoped>
  .indexTitle-component
    display flex
    justify-content space-between
    align-items center
    padding 56px 40px
    margin-top 35px
    background-color white
    span.title
      font-size: 22px; /*no*/
      vertical-align middle
      color black
    span.more
      color #999
      font-size: 14px; /*no*/
      vertical-align middle
      line-height 2px
</style>

<template>
  <div class="indexTitle-component">
    <span class="title">{{mTitle}}</span>
    <span class="more">更多<i class="iconfont icon-right-arrow"></i></span>
  </div>
</template>

<script>

  export default {
    name: 'indexTitle',
    components: {},
    props: {
      mTitle: {type: String, default: "标题"},
      mShowMore: {type: Boolean, default: true},
    },
    mounted() {
    },
    created() {
    },
    activated() {
    },
    deactivated() {
    },
    computed: {},
    data() {
      return {}
    },
    methods: {},
    watch: {}
  };

</script>


