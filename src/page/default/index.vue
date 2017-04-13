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
            <router-link to="/index" class="weui-cell weui-cell_access js_item" data-id="button">
              <div class="weui-cell__bd">
                <p>首页</p>
              </div>
              <div class="weui-cell__ft"></div>
            </router-link>
            <router-link to="/info" class="weui-cell weui-cell_access js_item" data-id="input">
              <div class="weui-cell__bd">
                <p>消息</p>
              </div>
              <div class="weui-cell__ft"></div>
            </router-link>
            <router-link to="/create" class="weui-cell weui-cell_access js_item" data-id="list">
              <div class="weui-cell__bd">
                <p>创建</p>
              </div>
              <div class="weui-cell__ft"></div>
            </router-link>
            <router-link to="/topnav" class="weui-cell weui-cell_access js_item" data-id="slider">
              <div class="weui-cell__bd">
                <p>发现</p>
              </div>
              <div class="weui-cell__ft"></div>
            </router-link>
            <router-link to="/icenter" class="weui-cell weui-cell_access js_item" data-id="uploader">
              <div class="weui-cell__bd">
                <p>我的</p>
              </div>
              <div class="weui-cell__ft"></div>
            </router-link>
          </div>
        </div>
      </li>
      <li>
        <div class="weui-flex js_item" data-id="layers">
          <p class="weui-flex__item">城市列表</p>
          <span class="iconfont">&#xe601;</span>
        </div>
        <div class="page__category">
          <div class="weui-cell weui-cell_access js_item" v-for="(hotcityItem, index) in hotcity"
          @click="showTips({
            type: index,
            name: '当前城市' + hotcityItem.name
            })">
            <div class="weui-cell__bd"><p>{{index + 1}} : {{hotcityItem.name}}</p></div>
            <div class="weui-cell__ft"></div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</div>
<div class="page__ft page-footer">
  <a href="javascript:;">Cheris.sn</a>
  <p>count: {{ count }} {{platform}} | countPlusLocalState: {{countPlusLocalState}} | getDoneTodosCount: {{ getDoneTodosCount }} | getDoneTodos: {{ getDoneTodos[0].author }}</p>
</div>
<modal-dialog ref="dialog"></modal-dialog>
</div>
</template>

<script>
import headTop from 'components/common/head'
import { hotcity } from 'service/getData'
// vuex 提供了独立的构建工具函数 Vuex.mapState
import { mapState, mapGetters, mapMutations } from 'vuex'  // mapActions
import modalDialog from '../../components/dialog'
export default {
  data () {
    return {
      localCount: 6,
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
    headTop, modalDialog
  },
  computed: {
    // ...mapState([
    //   'userInfo'
    // ])
    // 箭头函数可以让代码非常简洁
    // 传入字符串 'count' 等同于 `state => state.count`
    ...mapState({
      userInfo: state => state.userInfo,
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
    ...mapMutations([
      'ADD_COUNT'
    ]),
     // 每个组件可以通过this.$store获取vuex的store，然后可以通过dispatch方法来触发一个action，
     // 在action中接收一个loginway参数
    changeLoginway (loginway) {
      this.$store.dispatch('changeLoginway', loginway)
    },
    reload () {
      window.location.reload()
    },
    showTips (opt) {
      let scopeType = opt.type * 1 % 3
      if (scopeType === 0) {
        scopeType = 'alert'
      } else if (scopeType === 1) {
        scopeType = 'confirm'
      } else {
        scopeType = 'toast'
      }
      this.$refs.dialog.confirm(opt.name || '城市', {
        type: scopeType,
        title: '城市'
          // okText: 'OK',
          // cancelText: 'NO',
          // noBtn: true,
          // noTitle: true
      }).then(() => {
        console.log('yes')
      }).catch(() => {
        console.log('选择了取消')
      })
    }
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
.page-footer{text-align:center; width:100%; font-size:.12rem;}
</style>
