<template>
  <div>
    <!-- <transition name="router-fade" mode="out-in"> -->
    <transition>
      <router-view></router-view>
    </transition>
    <div class="page__ft page-footer">
      <a href="javascript:;">Cheris.sn {{ message }}</a>
      <p>count: {{ count }} {{platform}}</p>
      <p>countPlusLocalState: {{countPlusLocalState}}</p>
      <p>getDoneTodosCount: {{ getDoneTodosCount }}</p>
      <p>getDoneTodos: {{ getDoneTodos[0].author }}</p>
    </div>
  </div>
</template>

<script>
import 'weui'
// vuex 提供了独立的构建工具函数 Vuex.mapState
import { mapState, mapActions, mapGetters, mapMutations } from 'vuex'  // mapActions
import {localStorage, cookie, browser} from 'config/utils'
export default {
  name: 'app',
  data () {
    return {
      localCount: 6,
      message: Date.parse(new Date())
    }
  },
  components: {
    // share
  },
  mounted () {
    this.getUserInfo() // 获取用户信息
    console.log(browser) // 测试用 湖区设备信息
    localStorage('searchHistory', '{test:"localStorage"}') // 测试用localStorage
    console.log(localStorage('searchHistory'))  // 测试用
    cookie('a', '1123')  // 测试用 cookie
    console.log(cookie('a')) // 测试用 cookie
  },
  computed: {
    // 箭头函数可以让代码非常简洁
    // 传入字符串 'count' 等同于 `state => state.count`
    ...mapState({
      count: state => state.count,
      countAlias: 'count',
      platform: 'platform',
      countPlusLocalState (state) {
        return state.count + this.localCount
      }
    }),
    // ...mapState([
    //   'count'
    // ]),
    ...mapGetters([
      'getDoneTodos',
      'getDoneTodosCount'
    ])
  },
  methods: {
    ...mapActions([
      'getUserInfo'
    ]),
    ...mapMutations([
      'ADD_COUNT'
    ]),
     // 每个组件可以通过this.$store获取vuex的store，然后可以通过dispatch方法来触发一个action，
     // 在action中接收一个loginway参数
    changeLoginway (loginway) {
      this.$store.dispatch('changeLoginway', loginway)
    }
  }
}
</script>
<style>
@import './assets/css/base.css';
.router-fade-enter-active, .router-fade-leave-active { transition: opacity .3s;}
.router-fade-enter, .router-fade-leave-active {opacity: 0;}
html,body{width:100%; height:100%;}
body{ color:#666;background:#f8f8f8;min-width:320px; overflow-x:hidden; -webkit-text-size-adjust:none;}
.page-tit{font-weight:bold; border-bottom:1px solid #ddd;}
.page-footer{text-align:center;}
@font-face {
  font-family: 'iconfont';  /* project id 266796 */
  src: url('//at.alicdn.com/t/font_yk86irwbs1xg8pvi.eot');
  src: url('//at.alicdn.com/t/font_yk86irwbs1xg8pvi.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_yk86irwbs1xg8pvi.woff') format('woff'),
  url('//at.alicdn.com/t/font_yk86irwbs1xg8pvi.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_yk86irwbs1xg8pvi.svg#iconfont') format('svg');
}
.iconfont{
font-family:"iconfont" !important;
font-size:16px;font-style:normal;
-webkit-font-smoothing: antialiased;
-webkit-text-stroke-width: 0.2px;
-moz-osx-font-smoothing: grayscale;}
</style>
