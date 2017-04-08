/*
 * home page
**/
<template>
<div>
<head-top signin-up='home' head-title="首页">
  <a slot='logo' class="head-goback iconfont" href="#/default">&#xe6c5;</a>
</head-top>
<v-tab></v-tab>
<div class="weui-panel">
  <div class="weui-panel__hd">我的动态</div>
  <div class="weui-panel__bd">
    <div class="weui-media-box weui-media-box_text">
      <h4 class="weui-media-box__title">DDFE 技术周刊（第十九期）2017.3.22</h4>
      <p class="weui-media-box__desc">由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。</p>
      <ul class="weui-media-box__info">
        <li class="weui-media-box__info__meta">文字来源</li>
        <li class="weui-media-box__info__meta">时间</li>
        <li class="weui-media-box__info__meta weui-media-box__info__meta_extra">其它信息</li>
      </ul>
    </div>
  </div>
</div>
<div class="weui-panel weui-panel_access">
  <div class="weui-panel__hd">Code, Design & Things in between</div>
  <div class="weui-panel__bd">
    <div class="weui-media-box weui-media-box_text">
      <h4 class="weui-media-box__title">关于程序员的个人崇拜</h4>
      <p class="weui-media-box__desc">写这篇文章，是因为我发现最近我的回答下面有很多『前排膜拜尤大』这样的评论。你要说被人膜拜爽不爽？说不爽那是骗人的。但这样的评论一多，我心里其实更多的是惶恐。</p>
    </div>
    <div class="weui-media-box weui-media-box_text">
      <h4 class="weui-media-box__title">Vue 的理念问题</h4>
      <p class="weui-media-box__desc">今天看到 CNodeJS 上一个讨论 Vue 的帖子，语气比较偏颇，说实话我看完以后很不爽，但觉得在帖子下面跟人辩没什么意义，有些话可能还是花点篇幅说清楚好一些。</p>
    </div>
  </div>
  <div class="weui-panel__ft">
    <a href="javascript:void(0);" class="weui-cell weui-cell_access weui-cell_link">
      <div class="weui-cell__bd">查看更多</div>
      <span class="weui-cell__ft"></span>
    </a>
  </div>
</div>
<div class="weui-loadmore">
  <i class="weui-loading"></i>
  <span class="weui-loadmore__tips">正在加载</span>
</div>
</div>
</template>
<script>
import headTop from 'components/common/head'
import vTab from 'components/common/tab'
export default {
  data () {
    return {
      message: Date.parse(new Date())
    }
  },
  components: {
    'v-tab': vTab,
    headTop
  },
  methods: {
    // 点击图标刷新页面
    reload () {
      alert('reload')
      window.location.reload()
    }
  }
}
</script>
<style scoped>
.head-goback{width:.46rem; height:.46rem; display:block; font-size:.22rem; line-height:.46rem; text-align:center; background:transparent; border:none;}
</style>
