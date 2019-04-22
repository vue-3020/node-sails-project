import Cookies from 'js-cookie'
import {
  loginByUsername
} from '@/api/login'

const vuesAccount = {
  namespaced: true,
  state: {
    timeObj: {}
  },
  getters: {
    getTimeObj: state => {
      return state.timeObj
    },
  },
  mutations: {
    set_time_data: (state, newData) => {
      //timeElectronic.vue 传过来的参数  赋值给state.timeObj 
      state.timeObj = newData
    },

  },
  actions: {
    login({
      commit
    }, userInfo) {
      debugger
      const username = userInfo.username.trim() //trim浏览器版本限制：JavaScript Version 1.8
      return new Promise((resolve, reject) => {
        loginByUsername(username, userInfo.password, userInfo.code).then(response => {
          //获取后台返回给前端的数据
          if (response.status == 200 && response.data.resultCode == 1) {
            console.log(response);
            resolve(response.data) //Promise 返回正确的值
          } else {
            reject(response.data.msg) //Promise 返回错误的值
          }
        }).catch(error => { //没有返回值
          reject(error)
        })
      })
    }
  }
}

export default vuesAccount

/*
  （1）this.$store.dispatch('screen/setTimes', tmp) 发送给vuex
  

  （2）actions 的 setTimes({ commit }, params) {  commit('set_time_data', params) }  接收参数

  （3）set_time_data 将值返给了mutations 从新赋值 

  （4）getters 把值再送回给前端

  （5） 在timeElectronic.vue中接收  getTime() {  return this.$store.getters["screen/getTimeObj"]},


   this.$store.commit("example/addList", this.items);
*/
