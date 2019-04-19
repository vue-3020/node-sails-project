// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui' //element 内容
import 'element-ui/lib/theme-chalk/index.css' // element默认主题

import store from './store' //vuex
Vue.config.productionTip = false

//(1)引入element-ui
Vue.use(ElementUI, {
  size: 'small'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
