<style lang="stylus" type="text/stylus" scoped>
  .tabbar-component {
  }

  .tabs
    background-color white
    display flex
    width 1080px
    position fixed
    bottom 0
    margin-top 100px
    height 10%
    & > div > div
    & > div
      display flex
      flex 1
      justify-content center
      align-items center
      flex-direction column
    & > div
      flex-direction row
      .newHome
        background-size contain
        display flex
        justify-content center
        align-items center
        width 40px
        height 80px
        .center
          width 180px
          height 180px
          margin-bottom 50px
        &.is-active
          margin-bottom 0
          width 70px * 0.8
          height @width

  .is-active {
    color: #35c184;
  }

  .cootent
    margin-bottom 120px
    overflow auto
</style>

<template>
  <div class="tabbar-component">
    <div class="cootent">
      <slot></slot>
    </div>

    <div class="tabs">
      <div v-for="tab in tabs" :class="{'is-active':tab.isActive===true}"
           @click="selectTab(tab.tabTitle)">

        <div v-if="tab.tabTitle=='新房'" class="newHome" :class="{'is-active':tab.isActive===true}">
          <img src="../assets/icon_newhouse_n.png" class="center" alt="">
        </div>

        <div v-else-if="tab.isActive===true">
          <div style="width: 24px;height: 24px;background-size:contain"
               :style="{ backgroundImage:  'url('+tab.aIcon+')'  }"></div>
          {{tab.tabTitle}}
        </div>

        <div v-else-if="tab.isActive===false">
          <div style="width: 24px;height: 24px;;background-size:contain"
               :style="{ backgroundImage:  'url('+tab.nIcon+')'  }"></div>
          {{tab.tabTitle}}
        </div>

      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'tabbar',
    props: {},
    mounted() {
      if (!('ontouchstart' in window)) {//检测 是不是移动设备
        this.$toast({
          mHeight:'100%',
          mWidth:'100%',
          msg: '请使用手机浏览器查看,或者使用浏览器调试模式查看',
          showQcode: true,
          duration: 10000
        }).show()
      }

      this.tabs = this.$children
      this.tabs.forEach(function (it) {
        it.isActive = true
      })
//      this.selectTab('首页')
    },
    computed: {},
    data() {
      return {
        tabs: []
      };
    },
    methods: {
      selectTab(selectName) {
        this.tabs.forEach(function (tab) {
          tab.isActive = (selectName == tab.tabTitle)
        })
      }
    }
  };

</script>

