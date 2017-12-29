<style lang="stylus" type="text/stylus" scoped>
  .TabPic-component {
    height 1700px
  }

</style>

<template>
  <div class="TabPic-component flex">
    <water-fall :column="2">
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


