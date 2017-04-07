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
const imgBaseUrl = 'http://118.190.25.31'
console.warn('环境提示: ' + process.env.NODE_ENV)

if (process.env.NODE_ENV === 'development') {
  baseUrl = 'http://118.190.25.31'
  routerMode = 'hash'
} else {
  baseUrl = 'http://118.190.25.31'
  routerMode = 'hash'
}

export {
  baseUrl,
  routerMode,
  imgBaseUrl
}
