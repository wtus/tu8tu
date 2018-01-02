import Vue from 'vue'
import Router from 'vue-router'
import Main from '../pages/Main.vue'
import Test from '../pages/Test.vue'
import Test2 from '../pages/Test2.vue'
import Test3 from '../pages/Test3.vue'
import Test4 from '../pages/Test4.vue'
import Test5 from '../pages/Test5.vue'
import Test6 from '../pages/Test6.vue'
import Test7 from '../pages/Test7.vue'
import Home from '../pages/TabHome.vue'
import TabPic from '../pages/TabPic.vue'
import TabCompany from '../pages/TabCompany.vue'

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
      name: Home.name,
      component: Home
    },
    {
      path: '/t1',
      name: TabPic.name,
      component: TabPic
    },
    {
      path: '/t2',
      name: Test2.name,
      component: Test2
    } ,
    {
      path: '/t3',
      name: TabCompany.name,
      component: TabCompany
    },
    {
      path: '/t4',
      name: Test4.name,
      component: Test4
    },
    {
      path: '/t5',
      name: Test5.name,
      component: Test5
    },
    {
      path: '/t6',
      name: Test6.name,
      component: Test6
    },
    {
      path: '/t7',
      name: Test7.name,
      component: Test7
    }
  ]
})
