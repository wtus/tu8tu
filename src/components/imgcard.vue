<template>
  <div class="imgcard-component">
    <img src="http://p2.qhimgs4.com/t019b6dbbac0d09c8bd.webp" style="width: 120px ;height:80px" alt="">
    <span>问问我能</span>
  </div>
</template>

<script>

  export default {
    name: 'imgcard',
    props: {},
    mounted() {
    },
    computed: {},
    methods: {}
  };

</script>

<style scoped>
  .imgcard-component {
    background-color: #46ff75;
    justify-content: space-between;
    align-items: center;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border-radius: 10px;
    border: 1px #ff5c8e solid;
    box-shadow: 0 1px 5px #888888;
  }

  .imgcard-component span {
    margin: 10px;
  }

  .imgcard-component img {
    z-index: 1;
  }

</style>
