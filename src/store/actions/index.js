// action 触发 store 的更新状态 Action 提交的是 mutation，而不是直接变更状态。  Action 可以包含任意异步操作
// export default {
//   async getUserInfo ({commit, state}) {
//   // let res = await getUser()
//   // let res = {a: 2}
//   // commit('GET_USERINFO', res)
//   }
// }
// export const displayArticles = ({commit}, type) => {
//   commit('DISPLAY_ARTICLES', type)
// }

export default {
  displayArticles: ({commit}, type) => {
    commit('DISPLAY_ARTICLES', type)
  },
  setApp: ({commit}, platform) => {
    commit('SET_APP', platform)
  }
}
