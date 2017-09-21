// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueParticles from 'vue-particles'  
import BScroll from 'better-scroll'
import AMap from 'vue-amap'
import VueLazyload from 'vue-lazyload'

// Vue.use(VueLazyload)
Vue.use(VueLazyload, {
error: '/static/null-page-draw.png',//这个是请求失败后显示的图片
loading: '/static/img/loading.gif',//这个是加载的loading过渡效果
try: 1 // 这个是加载图片数量
})

Vue.use(AMap);
Vue.use(VueParticles)  


// 初始化vue-amap
AMap.initAMapApiLoader({
  // 申请的高德key
  key: 'cb197ed8159a8ef1fda74611e46808bb',
  // 插件集合
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor']
});

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
