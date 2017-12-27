<style lang="stylus" type="text/stylus" scoped>
  .indexGallery-component
    background white

  .scroll-item
    background-color white
    padding-left 40px

  .text0
    font-size: 17px; /*no*/
    color #555
    margin-top 35px

  .text1
    margin-top 2px
    font-size: 15px; /*no*//*不要在最后一行否则会被格式化*/
    color #999
    margin-bottom 35px
</style>

<template>
  <div class="indexGallery-component">
    <scroll-view :scrollX="true">
      <div class="flex">
        <div v-for="(item ,index) in mData" class="scroll-item flex-column">
          <div class="div1" :style="cusStyle">
            <img class="br-2" :src="item.image">
          </div>
          <div class="text0" v-text="item.text0"></div>
          <div class="text1" v-text="item.text1"></div>
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
      mPicWidth:{type: Number, default: 7},
      mPicHeight:{type: Number, default: 4},
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
      cusStyle () {
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


