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
  baseUrl = 'http://118.190.25.31'
  routerMode = 'history'  // hash
} else {
<<<<<<< HEAD
  baseUrl = 'http://118.190.25.31'
  routerMode = 'history' // 'hash'
=======
  baseUrl = 'https://api.snb.pub'
  routerMode = 'hash'
>>>>>>> 83a5465a53a22e3e3d05ccd1f0610dc11f8fbca6
}

export {
  baseUrl,
  routerMode,
  imgBaseUrl
}
