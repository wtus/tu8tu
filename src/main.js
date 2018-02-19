// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import api from './api/api'
import store from './store'
import 'lib-flexible/flexible.js'

import textimg from './components/textimg.vue'
import imgcard from './components/imgcard.vue'
import rankbar from './components/rankbar.vue'
import tab from './components/tab.vue'
import tabbar from './components/tabbar.vue'
import scrollView from './components/scroll-view.vue'
import waterFall from './components/water-fall.vue'
import picTitle from './components/picTitle.vue'
import divider from './components/divider.vue'

import TabHome from './pages/TabHome.vue'
import TabPic from './pages/TabPic.vue'
import TabCompany from './pages/TabCompany.vue'
import TabMe from './pages/TabMe.vue'
import TabNewHouse from './pages/TabNewHouse.vue'

Vue.config.productionTip = false;

Vue.mixin({
  beforeCreate() {
    if (!this.$api) {
      this.$api = api
    }
  }
});

Vue.component(textimg.name, textimg);
Vue.component(imgcard.name, imgcard);
Vue.component(rankbar.name, rankbar);
Vue.component(tab.name, tab);
Vue.component(tabbar.name, tabbar);
Vue.component(TabHome.name, TabHome);
Vue.component(TabPic.name, TabPic);
Vue.component(TabCompany.name, TabCompany);
Vue.component(TabMe.name, TabMe);
Vue.component(TabNewHouse.name, TabNewHouse);
Vue.component(scrollView.name, scrollView);
Vue.component(waterFall.name, waterFall);
Vue.component(picTitle.name, picTitle);
Vue.component(divider.name, divider);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App},
  render: h => h(App)
});
