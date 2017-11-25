<template>
  <div class="textimg-component">
    <img src="../assets/own_order.png" alt="">
    <span>购物车</span>
  </div>
</template>

<script>

  export default {
    name: 'textimg',
    props: {},
    mounted() {
    },
    computed: {},
    methods: {}
  };

</script>

<style scoped>
  .textimg-component {
    background-color: #7280ff;
    display: flex;
    width: 80px;
    height: 80px;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
  }
</style>
