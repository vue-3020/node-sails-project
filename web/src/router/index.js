import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
      routes: [{
          path: '/',
          redirect: '/Login'
        },
        {
          path: '/Login',
          name: 'Login',
          component: resolve => require(['#/login.vue'], resolve),
          meta: {
            title: '登录页面',
            isUseCache: false,
            keepAlive: false
          }
        },
        {
          path: '/register',
          name: 'register',
          component: resolve => require(['#/register.vue'], resolve),
          meta: {
            title: '注册页面',
            isUseCache: false,
            keepAlive: false
          }
        },
        {
          path: '/home',
          component: resolve => require(['&/common/homePage.vue'], resolve),
          meta: {
            title: '首页',
            isUseCache: false, // 结合activated钩子函数中的判断来确定是否去刷新数据
          },
          children: [{
              path: 'page1',
              name: 'page1',
              component: resolve => require(['#/page1.vue'], resolve),
              meta: {
                title: '项目管理',
                isUseCache: false,
              }
          }]
        },
          {
            path: '/404',
            component: resolve => require(['&/common/404.vue'], resolve)
          },
          {
            path: '*',
            redirect: '/404'
          }
          // {
          //   path: '/',
          //   component: resolve => require(['&/common/homePage.vue'], resolve),
          //   meta: {
          //     title: '首页',
          //     isUseCache: false, // 结合activated钩子函数中的判断来确定是否去刷新数据
          //   },
          // },
        ]
      })
