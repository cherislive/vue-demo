<template>
    <!-- <transition name="router-fade" mode="out-in"> -->
    <div>
      <transition>
        <router-view></router-view>
      </transition>
    </div>
</template>

<script>
import 'weui'
import {localStorage, cookie, browser} from 'config/utils'
import { mapActions } from 'vuex'  // mapActions
export default {
  name: 'app',
  data () {
    return {
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
  },
  methods: {
    ...mapActions([
      'getUserInfo'
    ])
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
