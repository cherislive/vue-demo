// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store/'
import routes from './router'
import {routerMode} from './config/env'
// import App from './App'
import vueTap from 'v-tap'
import FastClick from 'fastclick'

Vue.use(vueTap)

Vue.use(VueRouter)
const router = new VueRouter({
  // routes: routes,
  routes,
  mode: routerMode,  // 路由使用的 模式
  strict: process.env.NODE_ENV !== 'production'
})

new Vue({
  router,
  store  // 将状态从根组件『注入』到每一个子组件中
  // render: h => h(App),
  // data: {
  //   eventHub: new Vue()
  // }
}).$mount('#app')

/* 事件分发接口
某一个组件内调用事件触发:
this.$root.eventHub.$emit('eventName', event.target);
另一个组件内调用事件接收, 在组件销毁时接除事件绑定,使用$off方法:
created:{
    this.$root.eventHub.$on('eventName',(target) => {
    this.functionName(target)
  });
},
method:{
    functionName(target) {
    console.log(target);
    }
}
*/

if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', () => {
    FastClick.attach(document.body)
  }, false)
}
/*
beforeCreate:  创建前状态
created:  创建完毕状态
beforeMount:  挂载前状态
mounted:  挂载结束状态
beforeUpdate:  更新前状态
updated:  更新完成状态
beforeDestroy:  销毁前状态
destroyed:  销毁完成状态
*/
