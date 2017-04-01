/*
 * 更改 Vuex 的 store 中的状态的唯一方法是提交 mutation
 * 存放如何更改状态
 * mutation 必须是同步函数
 *
 **/
// import { DISPLAY_ARTICLES } from './mutation-types.js'
export const ADD_COUNT = 'ADD_COUNT'

export default {
  SET_APP (state, platform) {
    state.platform = platform
  },
  ADD_COUNT (state, type) {
    type.amount = type.amount || 10
    state.count += type.amount
  }
}

