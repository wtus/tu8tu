// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import api from './api/api'
import store from './store'

import carousel from './components/carousel.vue'
import carousel2 from './components/carousel2.vue'
import textimg from './components/textimg.vue'
import imgcard from './components/imgcard.vue'
import rankbar from './components/rankbar.vue'
import tab from './components/tab.vue'
import tabbar from './components/tabbar.vue'

Vue.config.productionTip = false;

Vue.mixin({
  beforeCreate() {
    if (!this.$api) {
      this.$api = api
    }
  }
});

Vue.component(carousel.name, carousel);
Vue.component(carousel2.name, carousel2);
Vue.component(textimg.name, textimg);
Vue.component(imgcard.name, imgcard);
Vue.component(rankbar.name, rankbar);
Vue.component(tab.name, tab);
Vue.component(tabbar.name, tabbar);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App},
  render: h => h(App)
});
