<template>
    <section>
    share:
    <p v-tap="{ methods: share, target: 'wechatTimeline' }">wechatTimeline</p>
    <p v-tap="{ methods: share, target: 'wechatFriend' }">wechatFriend</p>
    <p v-tap="{ methods: share, target: 'weibo' }">weibo</p>
    <p v-tap="{ methods: share, target: 'qq' }">qq</p>
    </section>
</template>

<script>
export default {
  data () {
    return {
      platform: ''
    }
  },
  mounted () {
    this.platform = this.$store.getters.getApp
  },
  methods: {
    initIOS () {
      window.connectWebViewJavascriptBridge((bridge) => {
        this.webviewBridge = bridge
      })
    },
    share (target) {
      console.log(this.platform)
      if (this.platform === 'ios') {
        this.initIOS()
        this.webviewBridge.callHandler('invokeArticleShare', {
          shareTarget: target
        })
      } else if (this.platform === 'android') {
        window.idarex.invokeArticleShare(target)
      }
    }
  }
}

</script>

<style scoped>
</style>
