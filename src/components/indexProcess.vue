<style lang="stylus" type="text/stylus" scoped>
  .docProcess
    background-color white
    width 10rem
    .title
      color #999
      div
        display inline-block
        20 10px
        &:not(:last-of-type)
          border-right 1px solid #999
        span
          padding-right 10px
          display inline-block
          &.actived
            color #35c184

    .dots
      padding-bottom 10px
      span
        width 15px
        display block
        height 15px
        margin 0 5px
        background-color #999
        border-radius 50%
        &.actived
          background-color #35c184
    .processData .processItem
      padding-right 150px
      padding-top 50px
      padding-bottom 50px
</style>

<template>
  <div class="indexProcess-component">
    <div class="docProcess flex-center-column">
      <div class="title">
        <div></div>
        <div><span :class="activedIndex==0?'actived':''">装修前</span></div>
        <div><span :class="activedIndex==1?'actived':''">装修中</span></div>
        <div><span :class="activedIndex==2?'actived':''">装修后</span></div>
      </div>
      <scroll-view :scrollX="true" class="processData" :isListenScroll="true" @scroll="onScroll">
        <picTitle class="processItem" imgText="收房" imgUrl="static/decorate_line_icon01.png"></picTitle>
        <picTitle class="processItem" imgText="设计" imgUrl="static/decorate_line_icon02.png"></picTitle>
        <picTitle class="processItem" imgText="预算" imgUrl="static/decorate_line_icon03.png"></picTitle>
        <picTitle class="processItem" imgText="合同" imgUrl="static/decorate_line_icon04.png"></picTitle>
        <picTitle class="processItem" imgText="拆改" imgUrl="static/decorate_line_icon05.png"></picTitle>
        <picTitle class="processItem" imgText="水电" imgUrl="static/decorate_line_icon06.png"></picTitle>
        <picTitle class="processItem" imgText="防水" imgUrl="static/decorate_line_icon07.png"></picTitle>
        <picTitle class="processItem" imgText="泥瓦" imgUrl="static/decorate_line_icon08.png"></picTitle>
        <picTitle class="processItem" imgText="木工" imgUrl="static/decorate_line_icon09.png"></picTitle>
        <picTitle class="processItem" imgText="油漆" imgUrl="static/decorate_line_icon10.png"></picTitle>
        <picTitle class="processItem" imgText="竣工" imgUrl="static/decorate_line_icon11.png"></picTitle>
        <picTitle class="processItem" imgText="软装" imgUrl="static/decorate_line_icon12.png"></picTitle>
        <picTitle class="processItem" imgText="入住" imgUrl="static/decorate_line_icon13.png"></picTitle>
      </scroll-view>
      <div class="dots flex fjc-around">
        <span :class="activedIndex==0?'actived':''"></span>
        <span :class="activedIndex==1?'actived':''"></span>
        <span :class="activedIndex==2?'actived':''"></span>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'indexProcess',
    components: {},
    props: {},
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
      return {
        activedIndex: 0
      }
    },
    methods: {
      onScroll(pos) {
        let offsetX = -pos.x
        if (offsetX < 282 || offsetX < 0) {
          this.activedIndex = 0
        } else if (offsetX < 681) {
          this.activedIndex = 1
        } else {
          this.activedIndex = 2
        }
      }
    },
    watch: {}
  };

</script>


