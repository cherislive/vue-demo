<template>
  <div>
    <!-- <transition name="router-fade" mode="out-in"> -->
    <transition>
      <router-view></router-view>
    </transition>
    <div class="page__ft page-footer">
      <a href="javascript:;">Cheris.sn {{ message }}</a>
      <p>count: {{ count }}</p>
      <p>countPlusLocalState: {{countPlusLocalState}}</p>
      <p>getDoneTodosCount: {{ getDoneTodosCount }}</p>
      <p>getDoneTodos: {{ getDoneTodos[0].author }}</p>
      <p>{{ hotcity }}</p>
    </div>
    <share></share>
  </div>
</template>

<script>
import 'weui'
import share from 'components/common/share'
import { hotcity } from 'service/getData'
// vuex 提供了独立的构建工具函数 Vuex.mapState
import { mapState, mapGetters, mapMutations } from 'vuex'  // mapActions
export default {
  name: 'app',
  data () {
    return {
      hotcity: [],
      localCount: 6,
      message: Date.parse(new Date()),
      show: 'home'
    }
  },
  components: {
    share
  },
  mounted () {
    // 获取热门城市
    hotcity().then(res => {
      this.hotcity = res
    })

    let ua = navigator.userAgent
    if (ua.indexOf('Android') > -1 || ua.indexOf('Adr') > -1) {
      this.$store.dispatch('setApp', 'android')
    } else if (ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
      this.$store.dispatch('setApp', 'ios')
    } else {
      this.$store.dispatch('setApp', 'other')
    }
  },
  computed: {
    // 箭头函数可以让代码非常简洁
    // 传入字符串 'count' 等同于 `state => state.count`
    ...mapState({
      count: state => state.count,
      countAlias: 'count',
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
  // mapGetters接收的参数表示，页面上定义的变量articleFlag通过getters的getArticleFlag方法来获取
  // computed: mapState({
  //   // 箭头函数可使代码更简练
  //   count: state => state.count,
  //   doneTodosCount: getters => getters.getDoneTodosCount,
  //   // 传字符串参数 'count' 等同于 `state => state.count`
  //   countAlias: 'count',
  //   // 为了能够使用 `this` 获取局部状态，必须使用常规函数
  //   countPlusLocalState (state) {
  //     return state.count + this.localCount
  //   }
  // }),
  methods: {
    // ...mapActions(
    //   'displayArticles'
    // ),
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
