<style lang="stylus" type="text/stylus" scoped>
  .img-item
    img
      width 85px
      height 85px

    span
      font-size: 1px; /*no*/
      margin-top 20px
</style>

<template>
  <div class="picTitle-component">
    <div class="img-item flex-center-column">
      <img :src="imgUrl" alt="">
      <span>{{imgText}}</span>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'picTitle',
    components: {},
    props: {
      imgUrl: {type: String, default: "static/index_list_head_tag_twt.png"},
      imgText: {type: String, default:"试试"},
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


