// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import api from './api/api'
import store from './store'

import carousel from './components/carousel.vue'

Vue.config.productionTip = false;

Vue.mixin({
  beforeCreate() {
    if (!this.$api) {
      this.$api = api
    }
  }
});

Vue.component(carousel.name, carousel)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App},
  render: h => h(App)
});
