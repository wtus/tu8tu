<style lang="stylus" scoped>
    .TabHome-component {

    }
</style>

<template>
    <div class="TabHome-component">
      首页<br><br>首页<br><br><br><br>首页<br><br><br><br>首页<br><br><br><br>首页<br><br><br><br>首页<br><br><br><br>首页<br><br><br><br>首页<br><br><br><br>首页<br><br><br><br>首页<br><br><br><br>首页<br><br><br><br>首页<br><br><br><br>
    </div>
</template>

<script>

    export default {
        name: 'TabHome',
        props: {},
        mounted() {
          //shit
          this.$api.getCarouselData().then(function (da) {
            console.log(da)
          }).catch(function (err) {

            console.log(err)
          })
        },
        computed: {},
        data() {
            return {}
        },
        methods: {}
    };

</script>


