<template>
  <div class="tabbar-component">
    <div class="tabs">
      <ul>
        <li v-for="tab in tabs" :class="{'is-active':tab.isActive===true}"
            @click="selectTab(tab.tabTitle)"
        >{{tab.tabTitle}}
        </li>
      </ul>
    </div>
    <div>
      <slot></slot>
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

<style scoped>
  .tabbar-component {
    background-color: white;
    width: 100px;
    height: 70px;
  }

  ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
    list-style: none;
  }

  li {
    display: inline-block;
  }

  .is-active {
    color: red;
  }
</style>
