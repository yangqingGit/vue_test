import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import Index from '../views/index/index'
import Manager from '../views/manager/index'
import Tixian from '../views/tixian/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/manager',
      name: 'manager',
      component: Manager
    },
    {
      path: '/tixian',
      name: 'tixian',
      component: Tixian
    }
  ]
})
