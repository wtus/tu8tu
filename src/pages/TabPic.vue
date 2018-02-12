<style lang="stylus" type="text/stylus" scoped>
  .TabPic-component {
    height 1700px
    background-color #eee
  }

  .tabBar0
    height 170px
    position relative
    background-color white
    .tab0
      font-size: 20px; /*no*/
      color black
      width 150px
      height 100%
      padding-bottom -6px
    .activied
      color green
      border-bottom 12px solid green
    img
      position absolute
      width 55px
      height 55px
      right 45px
      bottom 63px

  .tabBar1
    height 130px
    background-color white

  .wall
    margin-left 40px
    margin-top 40px

</style>

<template>
  <div class="TabPic-component flex-column">
    <div class="flex-center tabBar0">
      <div class="tab0 flex-center activied">定制</div>
      <div class="tab0 flex-center">全景</div>
      <div class="tab0 flex-center">套图</div>
      <div class="tab0 flex-center">单图</div>
      <img src="static/ic_search.png" alt="">
    </div>
    <divider mType="0"></divider>
    <div class="flex tabBar1">
      <div class=" flex-1 flex-center">风格</div>
      <div class=" flex-1 flex-center">空间</div>
    </div>

    <water-fall :mColumn="2" :mSpace="40" class="wall" ref="waterFall">
      <picItem
        v-for="item in picList"
        :mPicUrl="item.imgUrl"
        :mAvatar="item.avatar"
        :mText0="item.text0"
        class="test"
        :mPicWidth="482"></picItem>
    </water-fall>
  </div>
</template>

<script>
  import picItem from '../components/picItem.vue'
  import waterFall from '../components/water-fall.vue'

  export default {
    name: 'TabPic',
    props: {},
    components: {
      picItem, waterFall
    },
    mounted() {
      var vue = this
      this.$api.getGalleryCustomData().then((data) => {
        console.log(data.data[0].comment)
        vue.picList = data.data.map(function (it) {
          return {
            'imgUrl': it.imgUrlTobato,
            'avatar': it.facePic,
            'text0': it.nick
          }
        })
        setTimeout(function () {
          this.$refs.waterFall.calcPosition()
        }, 20)
      }).catch((err) => {
        console.log(err)
      })
    },
    computed: {},
    data() {
      return {
        picList: []
      }
    },
    methods: {}
  };

</script>


