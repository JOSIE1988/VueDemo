import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Amap from '@/components/map'
import LazyLoading from '@/components/lazy-loading'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/map',
      name: 'amap',
      component: Amap
    },
    {
      path:'/lazy-loading',
      name:'lazy-loading',
      component: LazyLoading
    }    
  ]
})
