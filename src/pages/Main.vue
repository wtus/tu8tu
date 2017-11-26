<template>

  <tabbar class="tabbar">
    <tab tabTitle="首页" nIcon="./static/main_tab_home_n.png" aIcon="./static/main_tab_home_p.png">
      <TabHome></TabHome>
    </tab>
    <tab tabTitle="图库" nIcon="../static/main_tab_pic_n.png" aIcon="../static/main_tab_pic_p.png"><TabPic></TabPic></tab>
    <tab tabTitle="新房" nIcon="../static/icon_newhouse_p.png" aIcon="../static/icon_newhouse_p.png"><TabHome></TabHome></tab>
    <tab tabTitle="装修公司" nIcon="../static/main_tab_company_n.png" aIcon="../static/main_tab_company_p.png" ><div style="background-color: cyan">
      <TabCompany></TabCompany></div>
    </tab>
    <tab tabTitle="我的"  nIcon="../static/main_tab_my_n.png" aIcon="../static/main_tab_my_p.png"><TabMe></TabMe></tab>

  </tabbar>
</template>

<script>
  export default {
    components: {},
    name: 'Main',
    data() {
      return {}
    },
    mounted() {

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
