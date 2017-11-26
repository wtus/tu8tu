<template>
  <div class="tab-component">
    <div v-show="isActive">
      <slot></slot>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'tab',
    props: {
      tabTitle: {type: String, required: true},
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
    background-color: white;
  }
</style>
