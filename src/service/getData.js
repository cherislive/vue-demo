import fetch from '../config/fetch'

/**
 * 获取首页热门城市
 */

export const hotcity = () => fetch('GET', '/data/cities/index.json', {
  type: 'hot'
})
