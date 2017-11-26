<template>
  <div class="home">
    <h2>tab</h2>
    <tabbar>
      <tab tabTitle="1">fsaddd</tab>
      <tab tabTitle="2">ssss</tab>
      <tab tabTitle="3">aaa</tab>
      <tab tabTitle="4">tttt</tab>
    </tabbar>
    <h2>星评条</h2>
    <rankbar :sore="2.6" :starSize="5"></rankbar>
    <h2>imgcard</h2>
    <imgcard></imgcard>
    <h2>textimg</h2>
    <textimg></textimg>
    <h2>轮播2</h2>
    <carousel2 :listImg="imgs"></carousel2>
    <h1>{{ msg }}</h1>
    <carousel :listImg="imgs"></carousel>

  </div>
</template>

<script>
  import Rankbar from "../components/rankbar.vue";
  import Tabbar from "../components/tabbar.vue";

  export default {
    components: {
      Tabbar,
      Rankbar
    },
    name: 'HelloWorld',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        imgs: [
          'http://p2.qhimgs4.com/t019b6dbbac0d09c8bd.webp',
          'http://p2.qhimgs4.com/t01f2cac3bc74649fdf.webp',
          'http://p2.qhimgs4.com/t01bcabe58e36233cf4.webp',
          'http://p2.qhimgs4.com/t01ab6aa04e05d255de.webp',
          'http://p2.qhimgs4.com/t01af8c081559d502d6.webp',
        ]
      }
    },
    mounted() {
      this.$api.getDecorationConpanyList().then(function (data) {
        console.log(data)
      }).catch(function (err) {
        console.log('错误i')
        console.log(err)
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  * {
    margin: 0;
    padding: 0;
  }

  .home {

    display: flex;
    align-items: center;
    flex-direction: column;
  }

</style>
