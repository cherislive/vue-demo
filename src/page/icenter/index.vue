/*
 * icenter page
**/
<template>
<div>
<head-top signin-up='home' go-back='true'>
  <span slot='logo' class="head_logo"  @click="reload">logo</span>
</head-top>
<v-tab></v-tab>
<div class="weui-panel weui-panel_access">
  <div class="weui-panel__bd">
    <a href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg">
      <div class="weui-media-box__hd">
        <img class="weui-media-box__thumb" src="../../assets/imgs/avatar.jpg" alt="">
      </div>
      <div class="weui-media-box__bd">
        <h4 class="weui-media-box__title">七痴</h4>
        <p class="weui-media-box__desc">没兴趣 生性冷淡</p>
      </div>
    </a>
  </div>
  <div class="weui-panel__ft">
    <div class="weui-form-preview__ft">
        <a class="weui-form-preview__btn weui-form-preview__btn_default" href="javascript:">关注</a>
        <button type="submit" class="weui-form-preview__btn weui-form-preview__btn_default" href="javascript:">粉丝</button>
    </div>
  </div>
</div>
<div class="page__bd">
  <div class="weui-cells__title">基本资料</div>
  <div class="weui-cells">
    <div class="weui-cell">
      <div class="weui-cell__bd">
        <p>消息</p>
      </div>
      <div class="weui-cell__ft">3</div>
    </div>
    <div class="weui-cell">
      <div class="weui-cell__bd">
        <p>手机</p>
      </div>
      <div class="weui-cell__ft">{{userInfo && userInfo.mobile || this.mobile || '未登录'}}</div>
    </div>
    <a class="weui-cell weui-cell_access" href="javascript:;">
      <div class="weui-cell__bd">
        <p>未关注人消息</p>
      </div>
      <div class="weui-cell__ft">我关注的人</div>
    </a>
    <a class="weui-cell weui-cell_access" href="javascript:;">
      <div class="weui-cell__bd">
        <p>特别关注</p>
      </div>
      <div class="weui-cell__ft">只能</div>
    </a>
  </div>

  <div class="weui-cells__title">设置</div>
  <div class="weui-cells">
    <a class="weui-cell weui-cell_access" href="javascript:;">
      <div class="weui-cell__bd">
        <p>账号管理</p>
      </div>
      <div class="weui-cell__ft"></div>
    </a>
    <a class="weui-cell weui-cell_access" href="javascript:;">
      <div class="weui-cell__bd">
        <p>账号安全</p>
      </div>
      <div class="weui-cell__ft"></div>
    </a>
  </div>
</div>
<div class="weui-btn-area">
    <a class="weui-btn weui-btn_disabled weui-btn_primary" href="javascript:" @click="logout" id="showTooltips">退出</a>
</div>
</div>
</template>
<script>
import headTop from 'components/common/head'
import vTab from 'components/common/tab'
import {mapState, mapMutations} from 'vuex'
export default {
  data () {
    return {
      message: Date.parse(new Date()),
      mobile: null
    }
  },
  components: {
    'v-tab': vTab,
    headTop
  },
  computed: {
    ...mapState([
      'userInfo'
    ])
  },
  methods: {
    ...mapMutations([
      'OUT_LOGIN'
    ]),
    // 点击图标刷新页面
    reload () {
      alert('reload')
      window.location.reload()
    },
    logout () {
      this.OUT_LOGIN()
      this.$router.go(-1)
    }
  },
  watch: {
    userInfo: (val) => {
      if (val && val.user_id) {
        this.mobile = val.mobile
      }
    }
  }
}
</script>
<style>

</style>
