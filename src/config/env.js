/**
 * 配置编译环境和线上环境之间的切换
 *
 * baseUrl: 域名地址
 * routerMode: 路由模式  http://router.vuejs.org/zh-cn/api/options.html#mode
 * imgBaseUrl: 图片所在域名地址
 *
 */
let baseUrl
let routerMode
const imgBaseUrl = 'https://api.snb.pub'
console.warn('环境提示: ' + process.env.NODE_ENV)

if (process.env.NODE_ENV === 'development') {
  baseUrl = 'https://api.snb.pub'
  routerMode = 'hash'
} else {
  baseUrl = 'https://mainsite-restapi.ele.me'
  routerMode = 'hash'
}

export {
  baseUrl,
  routerMode,
  imgBaseUrl
}
