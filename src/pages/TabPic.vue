<style lang="stylus" type="text/stylus" scoped>
  .TabPic-component {
    background-color #0e94e2
    margin-bottom 20%
  }
</style>

<template>
  <div class="TabPic-component">
    <slide>
      <div v-for="item in items">
        <a href="item.linkUrl">
          <img :src="item.picUrl">
        </a>
      </div>
    </slide>
  </div>
</template>

<script>
  import Slide from '../components/slide.vue'

  export default {
    name: 'TabPic',
    props: {},
    components: {
      Slide
    },
    mounted() {
    },
    computed: {},
    data() {
      return {
        items: [
          {
            linkUrl: 'http://y.qq.com/w/album.html?albummid=0044K2vN1sT5mE',
            picUrl: 'http://y.gtimg.cn/music/photo_new/T003R720x288M000001YCZlY3aBifi.jpg',
            id: 11351
          },
          {
            linkUrl: 'https://y.qq.com/m/digitalbum/gold/index.html?_video=true&id=2197820&g_f=shoujijiaodian',
            picUrl: 'http://y.gtimg.cn/music/photo_new/T003R720x288M000004ckGfg3zaho0.jpg',
            id: 11372
          },
          {
            linkUrl: 'http://y.qq.com/w/album.html?albummid=001tftZs2RX1Qz',
            picUrl: 'http://y.gtimg.cn/music/photo_new/T003R720x288M00000236sfA406cmk.jpg',
            id: 11378
          },
          {
            linkUrl: 'https://y.qq.com/msa/218/0_4085.html',
            picUrl: 'http://y.gtimg.cn/music/photo_new/T003R720x288M000001s0BXx3Zxcwb.jpg',
            id: 11375
          },
          {
            linkUrl: 'https://y.qq.com/m/digitalbum/gold/index.html?_video=true&id=2195876&g_f=shoujijiaodian',
            picUrl: 'http://y.gtimg.cn/music/photo_new/T003R720x288M000002cwng4353HKz.jpg',
            id: 11287
          }
        ]
      }
    },
    methods: {}
  };

</script>


