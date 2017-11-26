import Vue from 'vue'
import Router from 'vue-router'
import Main from '../pages/Main.vue'
import Test from '../pages/Test.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: Main.name,
      component: Main
    },
    {
      path: '/t',
      name: Test.name,
      component: Test
    }
  ]
})
