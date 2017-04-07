<template>
<div>
<head-top signin-up='home' go-back='true'>
  <span slot='logo' class="head_logo"  @click="reload">logo</span>
</head-top>


<div class="page home js_show">
  <div class="page__hd" v-if="userInfo">
    <h1 class="page__title">{{userInfo.username}}</h1>
    <p class="page__desc">mobile: {{userInfo.mobile}}<br></p>
  </div>
  <div class="page__hd" v-else>
    <h1 class="page__title">WeUI</h1>
    <p class="page__desc">WeUI 是一套同微信原生视觉体验一致的基础样式库，由微信官方设计团队为微信内网页和微信小程序量身设计，令用户的使用感知更加统一。</p>
  </div>
  <div class="page__bd page__bd_spacing">
    <ul>
      <li>
        <div class="weui-flex js_category">
          <p class="weui-flex__item">快速导航</p>
          <span class="iconfont">&#xe71f;</span>
        </div>
        <div class="page__category js_categoryInner">
          <div class="weui-cells page__category-content">
            <a class="weui-cell weui-cell_access js_item" data-id="button" href="#/index">
              <div class="weui-cell__bd">
                <p>首页</p>
              </div>
              <div class="weui-cell__ft"></div>
            </a>
            <a class="weui-cell weui-cell_access js_item" data-id="input" href="#/info">
              <div class="weui-cell__bd">
                <p>消息</p>
              </div>
              <div class="weui-cell__ft"></div>
            </a>
            <a class="weui-cell weui-cell_access js_item" data-id="list" href="#/create">
              <div class="weui-cell__bd">
                <p>创建</p>
              </div>
              <div class="weui-cell__ft"></div>
            </a>
            <a class="weui-cell weui-cell_access js_item" data-id="slider" href="#/topnav">
              <div class="weui-cell__bd">
                <p>发现</p>
              </div>
              <div class="weui-cell__ft"></div>
            </a>
            <a class="weui-cell weui-cell_access js_item" data-id="uploader" href="#/icenter">
              <div class="weui-cell__bd">
                <p>我的</p>
              </div>
              <div class="weui-cell__ft"></div>
            </a>
          </div>
        </div>
      </li>
      <li>
        <div class="weui-flex js_item" data-id="layers">
          <p class="weui-flex__item">城市列表</p>
          <span class="iconfont">&#xe601;</span>
        </div>
        <div class="page__category">
          <span v-for="(hotcityItem, index) in hotcity">
            {{index + 1}} : {{hotcityItem.name}} | 
          </span>
        </div>
      </li>
    </ul>
  </div>
</div>
</div>
</template>

<script>
import headTop from 'components/common/head'
import { hotcity } from 'service/getData'
import {mapState} from 'vuex'
export default {
  data () {
    return {
      hotcity: []
    }
  },
  mounted () {
    // 获取热门城市
    hotcity().then(res => {
      this.hotcity = res
    })
  },
  components: {
    headTop
  },
  methods: {
    reload () {
      window.location.reload()
    }
  },
  computed: {
    ...mapState([
      'userInfo'
    ])
  }
}

</script>

<style scoped>
ul{list-style:none}
.page,body{background-color:#f8f8f8}
.link{color:#1aad19}
.container{overflow:hidden}
.page{overflow-y:auto;-webkit-overflow-scrolling:touch;opacity:0;z-index:1}
.page.js_show{opacity:1}
.page__hd{padding:40px}
.page__bd_spacing{padding:0 15px}
.page__ft{padding-top:40px;padding-bottom:10px;text-align:center}
.page__ft img{height:19px}
.page__ft.j_bottom{position:absolute;bottom:0;left:0;right:0}
.page__title{text-align:left;font-size:20px;font-weight:400}
.page__desc{margin-top:5px;color:#888;text-align:left;font-size:14px}
.page.home .page__intro-icon{margin-top:-.2em;margin-left:5px;width:16px;height:16px;vertical-align:middle}
.page.home .page__title{margin-bottom:15px}
.page.home .page__bd img{width:30px;height:30px}
.page.home .page__bd li{margin:10px 0;background-color:#fff;overflow:hidden;border-radius:2px;cursor:pointer}
.page.home .page__bd li.js_show .weui-flex{opacity:.4}
.page.home .page__bd li.js_show .page__category{height:auto}
.page.home .page__bd li.js_show .page__category-content{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}
.page.home .page__bd li:first-child{margin-top:0}
.page.home .page__category{overflow:hidden}
.page.home .page__category-content{-webkit-transition:.3s;transition:.3s}
.page.home .weui-flex{padding:20px;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-transition:.3s;transition:.3s}
.page.home .weui-cells{margin-top:0}
.page.home .weui-cells:after,.page.home .weui-cells:before{display:none}
.page.home .weui-cell{padding-left:20px;padding-right:20px}
.page.home .weui-cell:before{left:20px;right:20px}
</style>
