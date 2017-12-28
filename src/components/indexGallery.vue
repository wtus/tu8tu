<style lang="stylus" type="text/stylus" scoped>
  .indexGallery-component
    background white

  .scroll-item
    background-color white
    margin 40px
    border-top-right-radius 2%
    border-top-left-radius 2%

  .showShadow
    box-shadow 1px 2px 15px #e1e2e0

  .text0
    font-size: 17px; /*no*/
    color #555
    padding-left 10px
    margin-top 35px
    text-overflow: ellipsis;
    width 400px
    overflow hidden

  .text1
    margin-top 2px
    padding-left 10px
    font-size: 15px; /*no*//*不要在最后一行否则会被格式化*/
    color #999
    margin-bottom 35px
    position relative
    .playNum
      position absolute
      right 3px
</style>

<template>
  <div class="indexGallery-component">
    <scroll-view :scrollX="true">
      <div class="flex">
        <div v-for="(item ,index) in mData"
             :class="mShowShadow?'showShadow':''"
             class="scroll-item flex-column">
          <div class="div1" :style="cusStyle">
            <img class="br-2" :src="item.image">
          </div>
          <div class="text0" v-text="item.text0"></div>
          <div class="text1">
            <span v-text="item.text1"></span>
            <span class="playNum" v-if="item.text2">
              <i class="iconfont icon-play" style="line-height: 2px;vertical-align: middle"></i>
              <span v-text="item.text2"></span>
            </span>
          </div>
        </div>
      </div>
    </scroll-view>
  </div>
</template>

<script>
  import ScrollView from "../components/scroll-view.vue";

  export default {
    name: 'indexGallery',
    components: {
      ScrollView
    },
    props: {
      mData: {type: Array, required: true},
      mText0: {type: String, default: "标题"},
      mText1: {type: String, default: "标题"},
      mPicWidth: {type: Number, default: 7},
      mPicHeight: {type: Number, default: 4},
      mShowShadow: {type: Boolean, default: false},
    },
    mounted() {
    },
    created() {
    },
    activated() {
    },
    deactivated() {
    },
    computed: {
      cusStyle() {
        return {
          'width': `${this.mPicWidth}rem`,
          'height': `${this.mPicHeight}rem`,
        };
      },
    },
    data() {
      return {}
    },
    methods: {},
    watch: {}
  };

</script>


