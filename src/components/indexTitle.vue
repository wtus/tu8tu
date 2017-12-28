<style lang="stylus" type="text/stylus" scoped>
  .indexTitle-component
    display flex
    justify-content space-between
    align-items center
    padding 56px 40px
    background-color white
    div
      span.title
        font-size: 21px; /*no*/
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
    <div>
      <span class="title">{{mTitle}}</span>
      <span class="more" v-if="isQuestionTitle">已有<span style="color: #35c184">6611871</span>为用户得到解答</span>
    </div>
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
      isQuestionTitle: {type: Boolean, default: false},
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


