/*
 * login page
**/
<template>
<div class="member-login-box">
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
            <input class="weui-input" type="tel" placeholder="请输入手机号">
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
    <div class="weui-cell">
        <div class="weui-cell__hd"><label for="" class="weui-label">出生日期</label></div>
        <div class="weui-cell__bd">
            <input class="weui-input" type="date" value="">
        </div>
    </div>
    <div class="weui-cells">
        <div class="weui-cell weui-cell_select">
            <div class="weui-cell__bd">
                <select class="weui-select" name="select1">
                    <option selected="" value="1">微信号</option>
                    <option value="2">QQ号</option>
                    <option value="3">Email</option>
                </select>
            </div>
        </div>
        <div class="weui-cell weui-cell_select weui-cell_select-after">
            <div class="weui-cell__hd">
                <label for="" class="weui-label">国家/地区</label>
            </div>
            <div class="weui-cell__bd">
                <select class="weui-select" name="select2">
                    <option value="1">中国</option>
                    <option value="2">美国</option>
                    <option value="3">英国</option>
                </select>
            </div>
        </div>
    </div>
    <label for="weuiAgree" class="weui-agree">
        <input id="weuiAgree" type="checkbox" class="weui-agree__checkbox">
        <span class="weui-agree__text">
            阅读并同意<a href="javascript:void(0);">《相关条款》</a>
        </span>
    </label>
</div>
<div class="weui-btn-area">
  <div class="button-sp-area">
      <router-link to="/index" class="weui-btn weui-btn_primary">注册</router-link>
      <p >还没有账号，现在<router-link to="/login">登录</router-link></p>
  </div>
</div>
</div>
</template>
<script>
</script>
<style>
.member-login-box .member-login-title{padding:40px 0 20px; text-align:center; font-size:.22rem;}
.member-login-box .weui-btn-area p{font-size:.14rem; padding:.1rem 0 .2rem;}
</style>
