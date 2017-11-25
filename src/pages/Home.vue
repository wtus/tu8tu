<template>
  <div class="home">
    <h2>imgcard</h2>
    <imgcard ></imgcard>
    <h2>textimg</h2>
    <textimg ></textimg>
    <h2>轮播2</h2>
    <carousel2 :listImg="imgs"></carousel2>
    <h1>{{ msg }}</h1>
    <carousel :listImg="imgs"></carousel>


  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

*{
  margin: 0;
  padding: 0;
}
  .home{

    display: flex;
   align-items: center;
    flex-direction: column;
  }

</style>
