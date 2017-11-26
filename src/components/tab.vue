<template>
  <div class="tab-component">
    <div v-show="selected"><slot></slot></div>
  </div>
</template>

<script>

  export default {
    name: 'tab',
    props: {
      title: {type: String, required: true},
      selected: {type: Boolean, default: false},
    },
    mounted() {
    },
    computed: {
    },
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
