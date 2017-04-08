/*
 * topnav page
**/
<template>
<div>
<head-top signin-up='home' go-back='true'>
  <span slot='logo' class="head_logo"  @click="reload">logo</span>
</head-top>
<v-tab></v-tab>
<div class="page__bd page__bd_spacing">
  <div class="weui-flex">
    <div class="weui-flex__item"><div class="placeholder">发现</div></div>
  </div>
  <div class="weui-flex">
    <div class="weui-flex__item"><div class="placeholder">发现</div></div>
    <div class="weui-flex__item"><div class="placeholder">发现</div></div>
  </div>
  <div class="weui-flex">
    <div class="weui-flex__item"><div class="placeholder">发现</div></div>
    <div class="weui-flex__item"><div class="placeholder">发现</div></div>
    <div class="weui-flex__item"><div class="placeholder">发现</div></div>
  </div>
  <div class="weui-flex">
    <div class="weui-flex__item"><div class="placeholder">发现</div></div>
    <div class="weui-flex__item"><div class="placeholder">发现</div></div>
    <div class="weui-flex__item"><div class="placeholder">发现</div></div>
    <div class="weui-flex__item"><div class="placeholder">发现</div></div>
  </div>
  <div class="weui-flex">
    <div><div class="placeholder">发现</div></div>
    <div class="weui-flex__item"><div class="placeholder">发现</div></div>
    <div><div class="placeholder">发现</div></div>
  </div>
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
.page__bd_spacing{padding:.1rem;}
.placeholder{margin:5px;padding:0 10px;background-color:#ebebeb;height:2.3em;line-height:2.3em;text-align:center;color:#cfcfcf;}
</style>
