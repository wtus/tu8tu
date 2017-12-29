<style lang="stylus" type="text/stylus" scoped>
  .TabPic-component {
    height 1700px
    background-color #eee
  }
  .tabBar0
    height 170px
    position relative
    .tab0
      font-size : 20px;/*no*/
      color black
    img
      position absolute
      right 45px
      bottom 63px

  .tabBar1
    height 130px

  .wall
    margin-left  40px
    margin-top 40px

</style>

<template>
  <div class="TabPic-component flex-column">
    <div class="flex-center tabBar0">
      <div class="tab0">定制</div>
      <div class="tab0">全景</div>
      <div class="tab0">套图</div>
      <div class="tab0">单图</div>
      <img src="static/ic_search.png" alt="">
    </div>
    <divider mType="1"></divider>
    <div class="flex tabBar1">
      <div class=" flex-1 flex-center">风格</div>
      <div class=" flex-1 flex-center">空间</div>
    </div>
    <water-fall :column="2" :space="40" class="wall">
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


