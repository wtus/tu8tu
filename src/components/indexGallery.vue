<style lang="stylus" type="text/stylus" scoped>
  .indexGallery-component
    background white

  .scroll-item
    background-color white
    margin 40px
    border-top-right-radius 2%
    border-top-left-radius 2%
    .imgDiv
      position relative
      div:nth-child(2)
        span
          position absolute
          top 125px
          text-align center
          margin 0 auto
          width 600px
          display inline-block
          margin-left 50px
          margin-right  50px
          font-size :17px;/*no*/
          color white
          text-overflow ellipsis
          overflow hidden


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

  .diary
    margin 20px
    div:nth-child(1)
      font-size: 17px; /*no*/
      color black
      background-color white
    div:nth-child(2)
      font-size: 15px; /*no*/
      color #999
      background-color white
    img
      border-radius 50%
      width 115px
      height 115px
    & + span
      font-size: 16px; /*no*/
      margin-left 20px
      margin-top 30px
      white-space pre-wrap
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
</style>

<template>
  <div class="indexGallery-component">
    <scroll-view :scrollX="true">
      <div class="flex">
        <div v-for="(item ,index) in mData"
             :class="mShowShadow?'showShadow':''"
             class="scroll-item flex-column">
          <div class="imgDiv">
            <div class="div1" :style="cusStyle">
              <img class="br-2" :src="item.image">
            </div>
            <div class="flex-center">
              <span v-text="item.name"></span>
            </div>
            <!--<img src="static/index_list_item_video.png" alt="">-->
          </div>
          <div class="text0" v-text="item.text0" v-if="!mIsDiary"></div>
          <div class="text1" v-if="!mIsDiary">
            <span v-text="item.text1"></span>
            <span class="playNum" v-if="item.text2">
              <i class="iconfont icon-play" style="line-height: 2px;vertical-align: middle"></i>
              <span v-text="item.text2"></span>
            </span>
          </div>
          <!--日记-->
          <div v-if="mIsDiary">
            <div class="diary flex fai-center">
              <img :src="item.avatar" alt="" class="avatar">
              <div style="margin-left: 10px">
                <div v-text="item.text0"></div>
                <div v-text="item.text1"></div>
              </div>
            </div>
            <span v-text="item.text2"></span>
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
      mIsDiary: {type: Boolean, default: false},
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


