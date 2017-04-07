/*
 * 官方文档 http://vuex.vuejs.org/zh-cn/intro.html
 * 状态管理工具 管理项目中各个状态
 * 状态保存在 store
 **/
// vuex的核心文件，从这个文件中export出一个vuex实例
import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

const state = {
  strict: process.env.NODE_ENV !== 'production', // 当前环境
  userInfo: null, // 用户信息
  login: true, // 登陆的状态，默认登陆

  count: 11,
  show: 'hot',
  loginway: 'login',
  hotArticles: [{
    author: '小熊猫',
    title: '每天努力多一点点',
    time: '大约6小时前',
    read: '7231',
    comment: '247',
    like: '2341',
    pay: '2',
    src: 'url(../../static/images/vue-demo-hot.jpg)'
  }, {
    author: '大熊猫',
    title: '每天前进一点点',
    time: '大约6小时前',
    read: '7231',
    comment: '247',
    like: '2341',
    pay: '2',
    src: 'url(../../static/images/vue-demo-hot.jpg)'
  }]
  // modules: {list: list},
  // plugins: [createLogger()],
}

// if (module.hot) {
//   module.hot.accept(['./modules'], () => {
//     const newMutations = require('./modules').default

//     store.hotUpdate({
//       mutations: newMutations
//     })
//   })
// }

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
