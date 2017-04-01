import App from '../App'
// routerList.home = r => require.ensure([], () => r(require('../components/home/index')), 'home')

const _default = r => require.ensure([], () => r(require('../page/default/index')), '_default')
const home = r => require.ensure([], () => r(require('../page/home/index')), 'home')
const login = r => require.ensure([], () => r(require('../page/login/index')), 'login')
const regest = r => require.ensure([], () => r(require('../page/regest/index')), 'regest')
const message = r => require.ensure([], () => r(require('../page/message/index')), 'message')
const create = r => require.ensure([], () => r(require('../page/create/index')), 'create')
const topnav = r => require.ensure([], () => r(require('../page/topnav/index')), 'topnav')
const icenter = r => require.ensure([], () => r(require('../page/icenter/index')), 'icenter')
const help = r => require.ensure([], () => r(require('../page/help')), 'doc')

export default [{
  path: '/',
  component: App, // 顶层路由，对应index.html
  children: [ // 二级路由。对应App.vue
    {
      path: '',
      redirect: '/default'
    },
    {
      path: '/default',
      component: _default
    },
    {
      path: '/index',
      component: home
    }, {
      path: '/login',
      component: login
    }, {
      path: '/regest',
      component: regest
    }, {
      path: '/info',
      component: message
    }, {
      path: '/create',
      component: create
    }, {
      path: '/topnav',
      component: topnav
    }, {
      path: '/icenter',
      component: icenter
    }, {
      path: '/help',
      component: help
    }
  ]
}]
