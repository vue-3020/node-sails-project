import { queryListAjax,deleteListId,updataListItemAjax} from "@/api/main";
const projectManager = {
  namespaced: true,
  state: {
    resultData: [], //获取三国数据，

    totalCount: 20 //（1）获取sanguo总人数
  },
  getters: {
    //返回给前端页面
    getListData: state => {
      return state.resultData
    },

    //（2）将内容返回给前端
    getTotalCount: state => {
      return state.totalCount
    },
  },
  //从新赋值
  mutations: {
    //从新赋值给数据
    setListData: (state, newData) => {
      state.resultData = newData
    },

    //（3）从新设置totalCount 
    setTotalCount: (state, newData) => {
      state.totalCount = newData
    }

  },
  actions: {
    //查询所以列表
    queryList({
      commit
    }, params) {
      return new Promise((resolve, reject) => {
        queryListAjax(params).then(response => {
          if (response.status == 200 && response.data.resultCode == 1) {
            //获取页面总条数
            commit("setListData", response.data.msg)
            commit("setTotalCount", response.data.count)
          }
        }).catch(error => {
          reject(error)
        })
      })
    },

    //删除
    deleteListItem({
      commit
    }, params) {
      return new Promise((resolve, reject) => {
        deleteListId(params).then(response => {
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },

    //替换 更新
    updataListItem({ commit }, params) { 
      return new Promise((resolve, reject) => { 
        updataListItemAjax(params).then(response => {
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    }
  },
}

export default projectManager
