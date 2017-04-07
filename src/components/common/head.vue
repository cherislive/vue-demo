<template>
    <header class='head-top'>
      <section class="head-top-content">
        <section class="head-left">
          <button class="head-goback iconfont" v-if="goBack" @click="$router.go(-1)">&#xe602;</button>
          <section v-else>
            <slot name='logo'></slot>
          </section>
        </section>

        <h1 class="header-title">{{headTitle || '发现美好'}}</h1>

        <section class="head-right">
          <router-link :to="userInfo? '/icenter':'/login'" v-if='signinUp' class="head-login">
            <span class="user_avatar" v-if="userInfo">user</span>
            <span class="login_span iconfont" v-else>&#xe600;</span>
          </router-link>
          <section v-else>
            <slot name="msite-title"></slot>
          </section>
        </section>
      </section>
    </header>
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
  data () {
    return {
      // userInfo: {}
    }
  },
  props: ['signinUp', 'headTitle', 'goBack'], // 通过 props 传递数据
  created () {
    // 获取用户信息
    // this.getUserInfo()
  },
  mounted () {

  },
  computed: {
    ...mapState([
      'userInfo' // 映射 this.userInfo 为 store.state.userInfo
    ])
  },
  methods: {
    ...mapActions([
      'getUserInfo'
    ])
  }
}

</script>
<style scoped>
.head-top{width:100%; height:.46rem; display:block;}
.head-top-content{position:fixed; left:0; top:0; z-index:100; width:100%; height:.46rem; background:rgba(198,31,21,.8); border-bottom:.01rem solid #ddd; color:#fff;}
.head-top button,
.head-top a,
.head-top a:active{color:#fff;}
.head-left,
.head-right{position:fixed; top:0; height:.46rem;}
.head-left{ left:0;}
.head-right{right:0;}
.head-goback,
.head-right{width:.46rem; height:.46rem; line-height:.46rem; text-align:center; background:transparent; border:none;}
.head-goback > *,
.head-right a,
.head-right a > *{width:100%; height:100%; display:block; text-align:center;}
.header-title{text-align:center; line-height:.46rem; font-size:.16rem; width:75%; margin:0 auto;}
</style>
