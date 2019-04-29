import Vue from 'vue'
import logger from 'vuex/dist/logger' //导出日志
import Vuex from 'vuex'
import user from './modules/login/user' //登录 注册

import queryListVuex from './modules/main/queryListVuex' //分页

Vue.use(Vuex)

// 除了 state 是分模块的，其他 mutations 和 actions 都不分模块，因此规划的时候要注意不要重名！
const store = new Vuex.Store({
  strict:true, //严格模式只能通过，mutation来修改状态，mutation不支持异步，
  plugins:[logger()], //日志插件
  modules: {
    user, //获取登录的信息
    queryListVuex, //分页
  },
  // plugins: [vuexLocal.plugin]
})

export default store