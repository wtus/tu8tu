<template>
    <div class="tab-component" v-show="isActive">
      <slot v-show="isActive"></slot>
    </div>
</template>

<script>

  export default {
    name: 'tab',
    props: {
      tabTitle: {type: String, required: true},
      aIcon: {type: String, required: true},
      nIcon: {type: String, required: true},
      selected: {type: Boolean, default: false},
    },
    mounted() {
      this.isActive = this.selected
    },
    computed: {},
    data() {
      return {
        isActive: false
      };
    },
    methods: {}
  };

</script>

<style scoped>
  .tab-component {
  }
</style>
