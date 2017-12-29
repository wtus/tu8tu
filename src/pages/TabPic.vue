<style lang="stylus" type="text/stylus" scoped>
  .TabPic-component {
    background-color #999
    height 1700px
  }

</style>

<template>
  <div class="TabPic-component flex">
    <picItem :mPicWidth="482" ></picItem>
  </div>
</template>

<script>
  import picItem from '../components/picItem.vue'

  export default {
    name: 'TabPic',
    props: {},
    components: {
      picItem
    },
    mounted() {
    },
    computed: {},
    data() {
      return {}
    },
    methods: {}
  };

</script>


