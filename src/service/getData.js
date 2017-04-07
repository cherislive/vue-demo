import fetch from '../config/fetch'

/**
 * 测试用 获取首页热门城市
 */
export const hotcity = () => fetch('GET', '/data/cities/index.json', {
  type: 'hot'
})

// 登录
export const sendLogin = () => fetch('GET', '/data/login.json')

// 获取用户信息
export const getUser = () => fetch('GET', '/data/user.json')
