<style lang="stylus" type="text/stylus" scoped>
  .divider-component {
  }

  .divider-line
    height 5px

  .divider-bar
    height 35px
</style>

<template>
  <div class="divider-component">
    <div v-if="mType==='0'" class="divider-line"></div>
    <div v-if="mType==='1'" class="divider-bar"></div>
  </div>
</template>

<script>

  export default {
    name: 'divider',
    components: {},
    props: {
      mType: {type: String, default: "0"}, //类型 0-分割线 1-分割条
      mColor: {type: String, default: "#eee"}, //颜色
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


