/*
 * create page
**/
<template>
<div>
<head-top signin-up='home' go-back='true'>
  <span slot='logo' class="head_logo"  @click="reload">logo</span>
</head-top>
<v-tab></v-tab>
create page
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
<style>

</style>
