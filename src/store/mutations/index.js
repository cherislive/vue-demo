/*
 * 更改 Vuex 的 store 中的状态的唯一方法是提交 mutation
 * 存放如何更改状态
 * mutation 必须是同步函数
 *
 **/
import {
  GET_USERINFO,
  ADD_COUNT,
  RECORD_USERINFO,
  OUT_LOGIN
} from './mutation-types.js'
import {cookie, removeCookie} from '../../config/utils'
// export const ADD_COUNT = 'ADD_COUNT'
// export const RECORD_USERINFO = 'RECORD_USERINFO'

export default {
  // 测试用
  [ADD_COUNT] (state, type) {
    type.amount = type.amount || 10
    state.count += type.amount
  },

  // 记录用户信息
  [RECORD_USERINFO] (state, info) {
    state.userInfo = info
    state.login = true
    let validity = 30
    cookie('USERID', info.user_id, {expires: validity})
    cookie('SID', '123456', {expires: validity})
  },

  // 获取用户信息存入vuex
  [GET_USERINFO] (state, info) {
    if (state.userInfo && (state.userInfo.username !== info.username)) {
      return
    };
    if (!state.login) {
      return
    }
    if (!info.message) {
      state.userInfo = {...info}
      let validity = 30
      cookie('USERID', info.user_id, {expires: validity})
      cookie('SID', '123456', {expires: validity})
    } else {
      state.userInfo = null
      state.login = false
      removeCookie('USERID')
      removeCookie('SID')
    }
  },

  // 退出
  [OUT_LOGIN] (state) {
    state.userInfo = null
    state.login = false
    removeCookie('USERID')
    removeCookie('SID')
  }
}

