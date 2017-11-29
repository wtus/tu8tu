<style lang="stylus" type="text/stylus" scoped>
  .tabbar-component {
  }

  .tabs
    background-color #6cff3c
    display flex
    position fixed
    bottom 0
    margin-top 100px
    height 10%
    & > div > div
    & > div
      display flex
      justify-content center
      align-items center
      flex-direction column
    & > div
      flex-direction row
      .newHome
        background-image url("../assets/icon_newhouse_n.png")
        background-size contain
        display flex
        justify-content center
        align-items center
        background-color red
        width 70px
        height 70px
        border-radius 50%
        border 5px solid #6cff3c
        margin-bottom 20px
        box-shadow 0px -3px 5px red
        &.is-active
          margin-bottom 0
          width 70px * 0.8
          height @width
          box-shadow 0px 0px 5px red

  .is-active {
    color: red;
  }
</style>

<template>
  <div class="tabbar-component">
    <slot></slot>

    <div class="tabs">
      <div v-for="tab in tabs" :class="{'is-active':tab.isActive===true}"
           @click="selectTab(tab.tabTitle)">
        <div v-if="tab.tabTitle=='新房'" class="newHome" :class="{'is-active':tab.isActive===true}"></div>
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
      this.tabs = this.$children
      this.tabs[0].isActive = true
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

