<style lang="stylus" type="text/stylus" scoped>
  .picItem-component {
  }

  .picItem
    border-radius 5px
    overflow hidden
    box-shadow: 2px 2px 13px #333333

  img
    width 482px

  .avatar
    width 65px
    height 65px
    border-radius 50%
    margin-right 10px

  .belowContent
    width 482px
    background-color white
    height: 65px
    color #666
    padding 40px 0
</style>

<template>
  <div class="picItem-component">
    <div class="flex-column picItem">
      <img :src="mPicUrl"
           :style="imgStyle">
      <div class="flex fai-center belowContent" v-if="mShowContent">
        <div style="margin-left: 10px">
          <img class="avatar" :src="mAvatar" alt="" v-if="mShowAvatar">
          <span v-text="mText0"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'picItem',
    components: {},
    props: {
      mPicWidth: {type: Number, default: 482},
      mPicUrl: {type: String, default: "https://pic1.shejiben.com/case/2017/10/14/20171014180038-48e21292.jpg"},
      mAvatar: {type: String, default: "https://pic.shejiben.com/user/72/sjb_headphoto_8349972.jpg?1510816574"},
      mText0: {type: String, default: "xxx设计"},
      mShowContent: {type: Boolean, default: true},
      mShowAvatar: {type: Boolean, default: true},
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
      imgStyle() {
        return {
          width: `${this.mPicWidth / 108}rem`
        };
      }
    },
    data() {
      return {}
    },
    methods: {},
    watch: {}
  };

</script>


