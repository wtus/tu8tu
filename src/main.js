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

import TabHome from './pages/TabHome.vue'
import TabPic from './pages/TabPic.vue'
import TabCompany from './pages/TabCompany.vue'
import TabMe from './pages/TabMe.vue'

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
Vue.component(TabHome.name, TabHome);
Vue.component(TabPic.name, TabPic);
Vue.component(TabCompany.name, TabCompany);
Vue.component(TabMe.name, TabMe);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App},
  render: h => h(App)
});
