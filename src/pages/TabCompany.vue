<style lang="stylus" type="text/stylus" scoped>
  .TabCompany-component {
    background-color #eee
  }


</style>

<template>
  <div class="TabCompany-component">
    <companyItem></companyItem>

  </div>
</template>

<script>
  import companyItem from '../components/companyItem.vue'

  export default {
    name: 'TabCompany',
    components: {
      companyItem
    },
    props: {},
    mounted() {
      let vue = this
      /* this.$api.getDecorationConpanyList().then((data) => {
         vue.companyList = data.data.map(function (it) {
           return {
             'imgUrl': it.headPhoto, //标题图片
             'name': it.cname, //公司名称
             'caseNum': it.casenums, //设计案例
             'diaryNum': it.diaryNum, //装修日记
             'commentNum': it.commentnum, //评价数
             'distance': it.distance, //距离
             'hadCooperate': it.hadcooperate, //合作等级 像个奖牌一样的那一个
             'logoMsg': it.logoMsg,
             'totalScore': it.totalScore,
           }
         })
       }).catch(function (err) {
         console.log(err)
       })*/
    },
    computed: {},
    data() {
      return {
        companyList: []
      }
    },
    methods: {}
  };

</script>


