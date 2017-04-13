/*
 * login page
**/
<template>
<div class="member-login-box">
<modal-dialog ref="dialog"></modal-dialog>
<div class="member-login-title">用户中心</div>
<div class="weui-cells weui-cells_form">
    <div class="weui-cell weui-cell_warn">
        <div class="weui-cell__hd"><label class="weui-label">姓名</label></div>
        <div class="weui-cell__bd">
            <input class="weui-input" type="number" pattern="[0-9]*" placeholder="请输入qq号">
        </div>
        <div class="weui-cell__ft">
            <i class="weui-icon-warn"></i>
        </div>
    </div>
    <div class="weui-cell weui-cell_vcode">
        <div class="weui-cell__hd">
            <label class="weui-label">手机号</label>
        </div>
        <div class="weui-cell__bd">
            <input class="weui-input" type="tel" placeholder="请输入手机号" v-model="phoneNumber" @input="inputPhone">
        </div>
        <div class="weui-cell__ft">
            <button class="weui-vcode-btn">获取验证码</button>
        </div>
    </div>
    <div class="weui-cell weui-cell_vcode">
        <div class="weui-cell__hd"><label class="weui-label">验证码</label></div>
        <div class="weui-cell__bd">
            <input class="weui-input" type="text" placeholder="请输入验证码">
        </div>
        <div class="weui-cell__ft">
            <img class="weui-vcode-img" src="../../assets/imgs/vcode.jpg">
        </div>
    </div>
</div>
<div class="weui-btn-area">
  <div class="button-sp-area">
      <a href="javascript:;" class="weui-btn weui-btn_primary" @click="tryLogin">登录</a>
      <p>还没有账号，现在<router-link to="/regest">注册</router-link></p>
  </div>
</div>
</div>
</template>
<script>
import modalDialog from '../../components/dialog'
import {sendLogin} from '../../service/getData'
import {mapMutations} from 'vuex'
export default {
  data () {
    return {
      rightPhoneNumber: false, // 输入的手机号码是否符合要求
      phoneNumber: null // 电话号码
    }
  },
  components: {
    modalDialog
  },
  methods: {
    ...mapMutations([
      'RECORD_USERINFO' // 登陆成功后保存用户信息
    ]),
    // 输入手机号码时判断，输入正确的手机号码后方可点击获取短信验证码
    inputPhone () {
      if (/^1\d{10}$/gi.test(this.phoneNumber)) {
        this.rightPhoneNumber = true
      } else {
        this.rightPhoneNumber = false
      }
    },
    async tryLogin () {
      if (!this.rightPhoneNumber) {
        this.$refs.dialog.confirm(this.phoneNumber || '手机号不能为空', {
          type: 'toast',
          title: '请输入正确的手机号'
          // okText: 'OK',
          // cancelText: 'NO',
          // noBtn: true,
          // noTitle: true
        }).then(() => {
          console.log(this.phoneNumber)
        }).catch(() => {
          console.log('选择了取消')
        })
        return
      }
      this.userInfo = await sendLogin()
      this.RECORD_USERINFO(this.userInfo)
      this.$router.go(-1)
    }
  }
}
</script>
<style>
.member-login-box .member-login-title{padding:40px 0 20px; text-align:center; font-size:.22rem;}
.member-login-box .weui-btn-area p{font-size:.14rem; padding:.1rem 0 .2rem;}
</style>
