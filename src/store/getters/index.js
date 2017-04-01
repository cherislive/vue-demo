/*
 * getters就是从state中派生出状态，比如将state中的某个状态进行过滤然后获取新的状态。
 * getters.js用来获取state中的数据，可以认为是store中的计算属性，每个方法都会接收一个state对象作为参数
 **/
// computed: {
//   // 使用对象展开运算符将 getters 混入 computed 对象中
//   ...mapGetters([
//     'doneTodosCount',
//     'anotherGetter',
//     // ...
//   ])
// }

// mapGetters({
//   // 映射 this.doneCount 为 store.getters.doneTodosCount
//   doneCount: 'doneTodosCount'
// })
// export const getDoneTodos = state => state.hotArticles.filter(todo => todo.author === '小熊猫')

// export const getDoneTodosCount = (state, getters) => {
//   return getters.getDoneTodos.length
// }

// export const getBonus = state => state.texts

// export const getLoginway = state => state.loginway

// export const getArticleFlag = state => state.articleFlag

export default {
  getApp: (state) => state.platform,
  getDoneTodos: state => state.hotArticles.filter(todo => todo.author === '小熊猫'),
  getDoneTodosCount: (state, getters) => {
    return getters.getDoneTodos.length
  }
}

