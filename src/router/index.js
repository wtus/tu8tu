import Vue from 'vue'
import Router from 'vue-router'
import Main from '../pages/Main.vue'
import Test from '../pages/Test.vue'
import Test2 from '../pages/Test2.vue'

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
    }    ,
    {
      path: '/t2',
      name: Test2.name,
      component: Test2
    }
  ]
})
