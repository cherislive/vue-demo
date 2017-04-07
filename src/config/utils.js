/**
 * 获取设备信息
 * @name    browser
 * @return  {obj}  返回设备信息
*/
export const browser = (() => {
  const ua = navigator.userAgent
  return {
    isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(ua),
    iOS: !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
    Android: ua.indexOf('Android') > -1 || ua.indexOf('Linux') > -1,
    iPhone: ua.indexOf('iPhone') > -1,
    iPad: ua.indexOf('iPad') > -1,
    WeChat: !!ua.match(/MicroMessenger/i),
    weibo: !!ua.match(/WeiBo/i),
    Qzone: ua.indexOf('Qzone/') !== -1,
    QQ: ua.match(/\sQQ/i)
  }
})()
/**
 * 获取localStorage和设置localStorage
 * @name    localStorage
 * @param   {String}  名字
 * @param   {String}  值
 * @return  {String}  当只有名字时返回名字对应值
*/
export const localStorage = (name, value) => {
  if (!name) return
  if (typeof value !== 'undefined') { // set
    if (typeof value !== 'string') {
      value = JSON.stringify(value)
    }
    window.localStorage.setItem(name, value)
    return
  }
  return window.localStorage.getItem(name)
}
/**
 * 删除localStorage的快捷方法
 * @name    removeLocalStorage
 * @param   {String}  名字
*/
export const removeLocalStorage = name => {
  if (!name) return
  window.localStorage.removeItem(name)
}
/**
 * 获取sessionStorage和设置sessionStorage
 * @name    sessionStorage
 * @param   {String}  名字
 * @param   {String}  值
 * @return  {String}  当只有名字时返回名字对应值
*/
export const sessionStorage = (name, value) => {
  if (!name) return
  if (typeof value !== 'undefined') { // set
    if (typeof value !== 'string') {
      value = JSON.stringify(value)
    }
    window.sessionStorage.setItem(name, value)
    return
  } // get
  return window.sessionStorage.getItem(name)
}
/**
 * 删除sessionStorage的快捷方法
 * @name    removeSessionStorage
 * @param   {String}  名字
*/
export const removeSessionStorage = name => {
  if (!name) return
  window.sessionStorage.removeItem(name)
}

/**
 * 去掉空格
 * @param {string} 要去掉空格的字符串
 * @param   {Boolean} 是否去掉字符串中间的空格
 * @return  {String}  处理过的字符串
*/
export const trim = (str, isGlobal) => {
  if (!str) return
  // return str.replace(/^[\s\xa0]+|[\s\xa0]+$/g, '');
  // var result = str.replace(/(^\s+)|(\s+$)/g, "");
  var result = str.replace(/^[\s\xa0]+|[\s\xa0]+$/g, '')
  if (isGlobal) result = result.replace(/\s/g, '')
  return result
}

/**
 * 获取cookie和设置cookie
 * @name    cookie
 * @param   {String}  名字
 * @param   {String}  值
 * @param   {Object}  配置选项
 * @return  {String}  当只有名字时返回名字对应值
*/
export const cookie = (name, value, options) => {
  if (typeof value !== 'undefined') {
    options = options || {}
    if (value === null) {
      value = ''
      options = {...{}, ...options}
      options.expires = -1
    }
    var expires = ''
    if (options.expires && (typeof options.expires === 'number' || options.expires.toUTCString)) {
      var date
      if (typeof options.expires === 'number') {
        date = new Date()
        date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000))
      } else {
        date = options.expires
      }
      expires = '; expires=' + date.toUTCString()
    }
    var path = options.path ? '; path=' + (options.path) : ';path=/'
    var domain = options.domain ? '; domain=' + (options.domain) : ''
    var secure = options.secure ? '; secure' : ''
    document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('')
  } else {
    var cookieValue = null
    if (document.cookie && document.cookie !== '') {
      var cookies = document.cookie.split(';')
      for (var i = 0; i < cookies.length; i++) {
        var cookie = trim(cookies[i])
        if (cookie.substring(0, name.length + 1) === (name + '=')) {
          cookieValue = decodeURIComponent(cookie.substring(name.length + 1))
          break
        }
      }
    }
    return cookieValue
  }
}

/**
 * 删除cookie的快捷方法
 * @name    removeCookie
 * @param   {String}  名字
*/
export const removeCookie = function (key) {
  cookie(key, '', {expires: -1})
}

