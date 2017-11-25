<template>
  <div class="rankbar-component">
    <div class="rank-bar">
      <span class="rank-start"></span>
      <span class="rank-start"></span>
      <span class="rank-start"></span>
      <span class="rank-start"></span>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'rankbar',
    props: {},
    mounted() {
    },
    computed: {},
    methods: {}
  };

</script>

<style scoped>
  .rankbar-component {
    background-color: white;
  }

  .rank-bar {
    height: 50px;
  }

  .rank-start {
    width: 10px;
    display: inline-block;
    height:10px;
    background-size: cover;
    background-repeat:no-repeat;
    background-image: url("../assets/ic_star_on.png");
  }
</style>
