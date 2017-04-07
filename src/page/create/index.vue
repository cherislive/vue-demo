/*
 * create page
**/
<template>
<div>
<head-top signin-up='home' go-back='true'>
  <span slot='logo' class="head_logo"  @click="reload">logo</span>
</head-top>
<v-tab></v-tab>
<div class="page layers js_show">
    <div class="page__hd">
        <div class="j_info page__info" data-for="normal">
            <h2 class="page__title">WeUI页面层级</h2>
            <p class="page__desc">用于规范WeUI页面元素所属层级、层级顺序及组合规范。</p>
        </div>
        <div class="j_info page__info" data-for="popout" style="display:none">
            <h2 class="page__title">Popout</h2>
            <p class="page__desc">弹出层，作为内容层和导航层的补充，用于承载弹窗通知、操作菜单、菜单、成功或加载中等状态的Toast，表单报错提示等弹出内容。</p>
        </div>
        <div class="j_info page__info" data-for="mask" style="display:none">
            <h2 class="page__title">Mask</h2>
            <p class="page__desc">蒙层，配合Popout层使用，用于锁定内容层和导航层操作，不单独使用。</p>
        </div>
        <div class="j_info page__info" data-for="navigation" style="display:none">
            <h2 class="page__title">Navigation</h2>
            <p class="page__desc">导航层，位于内容层之上，在用户滑动内容层时可保持位置不动，通常用于承载导航栏等需要固定在页面的元素。</p>
        </div>
        <div class="j_info page__info" data-for="content" style="display:none">
            <h2 class="page__title">Content</h2>
            <p class="page__desc">内容层，承载页面主要内容。</p>
        </div>
    </div>
    <div class="page__bd">
        <div class="layers j_layers">
            <div data-name="popout" class="j_pic j_layer layers__layer layers__layer_popout"><span>Popout</span></div>
            <div data-name="mask" class="j_pic j_layer layers__layer layers__layer_mask"><span>Mask</span></div>
            <div data-name="navigation" class="j_pic j_layer layers__layer layers__layer_navigation"><span>Navigation</span></div>
            <div data-name="content" class="j_pic j_layer layers__layer layers__layer_content"><span>Content</span></div>
        </div>
    </div>
</div>
</div>
</template>
<script>
import headTop from 'components/common/head'
import vTab from 'components/common/tab'
import $ from 'webpack-zepto'
export default {
  data () {
    return {
      message: Date.parse(new Date())
    }
  },
  mounted () {
    var $layers = $('.layers__layer')
    var $infos = $('.j_info')
    var hideTimeout

    function showInfo (name) {
      $infos.filter("[data-for='" + name + "']").show().siblings().hide()
    }
    function hideIfLayerShowing () {
      if ($layers.filter('.j_transform').length !== $layers.length) { // 展示中
        showInfo('normal')
        $layers.addClass('j_transform')

        clearTimeout(hideTimeout)
        hideTimeout = setTimeout(function () {
          $layers.removeClass('j_hide')
        }, 300)
        return true
      }
      return false
    }
    $layers.on('transitionend webkitTransitionend', function () {
      var that = this
      if (that.classList.contains('j_transform')) {
        setTimeout(function () {
          that.classList.remove('j_pic')
        }, 500)
      } else {
        that.classList.add('j_pic')
      }
    })
    setTimeout(function () {
      $layers.addClass('j_transform')
      $('.j_layer').on('click', function (e) {
        if (hideIfLayerShowing()) return
        var target = this
        if (target.classList.contains('j_layer')) {
          clearTimeout(hideTimeout)

          var name
          target = $(target)
          name = target.data('name')
          showInfo(name)

          target.removeClass('j_transform').siblings().addClass('j_hide')
        }
      })
    }, 500)
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
.page{position:relative; width:100%; height:600px;}.page{overflow-y:auto;-webkit-overflow-scrolling:touch;opacity:0;z-index:1}.page.js_show{opacity:1}.page__hd{padding:40px}.page__bd_spacing{padding:0 15px}.page__ft{padding-top:40px;padding-bottom:10px;text-align:center}.page__ft img{height:19px}.page__ft.j_bottom{position:absolute;bottom:0;left:0;right:0}.page__title{text-align:left;font-size:20px;font-weight:400}.page__desc{margin-top:5px;color:#888;text-align:left;font-size:14px}.page.home .page__intro-icon{margin-top:-.2em;margin-left:5px;width:16px;height:16px;vertical-align:middle}.page.home .page__title{font-size:0;margin-bottom:15px}.page.home .page__bd img{width:30px;height:30px}.page.home .page__bd li{margin:10px 0;background-color:#fff;overflow:hidden;border-radius:2px;cursor:pointer}.page.home .page__bd li.js_show .weui-flex{opacity:.4}.page.home .page__bd li.js_show .page__category{height:auto}.page.home .page__bd li.js_show .page__category-content{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}.page.home .page__bd li:first-child{margin-top:0}.page.home .page__category{height:0;overflow:hidden}.page.home .page__category-content{opacity:0;-webkit-transform:translateY(-50%);transform:translateY(-50%);-webkit-transition:.3s;transition:.3s}.page.home .weui-flex{padding:20px;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-transition:.3s;transition:.3s}.page.home .weui-cells{margin-top:0}.page.home .weui-cells:after,.page.home .weui-cells:before{display:none}.page.home .weui-cell{padding-left:20px;padding-right:20px}.page.home .weui-cell:before{left:20px;right:20px}.page.button .page__bd{padding:0 15px}.page.button .button-sp-area{margin:0 auto;padding:15px 0;width:60%}.page.cell .page__bd,.page.form .page__bd{padding-bottom:30px}.page.actionsheet,.page.dialog{background-color:#fff}.page.dialog .page__bd{padding:0 15px}.page.msg,.page.msg_success,.page.msg_warn,.page.toast{background-color:#fff}.page.panel .page__bd{padding-bottom:20px}.page.article{background-color:#fff}.page.icons{text-align:center}.page.icons .page__bd{padding:0 40px;text-align:left}.page.icons .icon-box{margin-bottom:25px;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.page.icons .icon-box i{margin-right:18px}.page.icons .icon-box__ctn{-webkit-flex-shrink:100;flex-shrink:100}.page.icons .icon-box__title{font-weight:400}.page.icons .icon-box__desc{margin-top:6px;font-size:12px;color:#888}.page.icons .icon_sp_area{margin-top:10px;text-align:left}.page.icons .icon_sp_area i:before{margin-bottom:5px}.page.flex .placeholder{margin:5px;padding:0 10px;background-color:#ebebeb;height:2.3em;line-height:2.3em;text-align:center;color:#cfcfcf}.page.loadmore{background-color:#fff}.page.layers{overflow-x:hidden;-webkit-perspective:1000px;perspective:1000px}@media only screen and (max-width:320px){.page.layers .page__hd{padding-left:20px;padding-right:20px}}.page.layers .page__bd{position:relative}.page.layers .page__desc{min-height:4.8em}.page.layers .layers__layer{position:absolute;left:50%;width:150px;height:266px;margin-left:-75px;box-sizing:border-box;-webkit-transition:.5s;transition:.5s;background:url(../../assets/imgs/transparent.gif) no-repeat 50%;background-size:contain;font-size:14px;color:#fff}.page.layers .layers__layer span{position:absolute;bottom:5px;left:0;right:0;text-align:center;-webkit-transition:.5s;transition:.5s}.page.layers .layers__layer:last-child span{color:#aaa}.page.layers .layers__layer.j_hide{opacity:0}.page.layers .layers__layer.j_pic span{color:transparent}@media only screen and (min-width:375px) and (min-height:603px){.page.layers .layers__layer{width:180px;height:320px;margin-left:-90px}}@media only screen and (min-width:414px) and (min-height:640px){.page.layers .layers__layer{width:200px;height:355px;margin-left:-100px}}.page.layers .layers__layer_popout{border:1px solid hsla(0,0%,80%,.5);z-index:4}.page.layers .layers__layer_popout.j_transform{-webkit-transform:translateX(15px) rotateX(45deg) rotate(10deg) skew(-15deg) translateZ(120px);transform:translateX(15px) rotateX(45deg) rotate(10deg) skew(-15deg) translateZ(120px)}@media only screen and (max-width:320px){.page.layers .layers__layer_popout.j_transform{-webkit-transform:translateX(15px) rotateX(45deg) rotate(10deg) skew(-15deg) translateZ(140px);transform:translateX(15px) rotateX(45deg) rotate(10deg) skew(-15deg) translateZ(140px)}}.page.layers .layers__layer_popout.j_pic{border-color:transparent;background-image:url(../../assets/imgs/popout.png)}.page.layers .layers__layer_mask{background-color:rgba(0,0,0,.5);z-index:3}.page.layers .layers__layer_mask.j_transform{-webkit-transform:translateX(15px) rotateX(45deg) rotate(10deg) skew(-15deg) translateZ(40px);transform:translateX(15px) rotateX(45deg) rotate(10deg) skew(-15deg) translateZ(40px)}@media only screen and (max-width:320px){.page.layers .layers__layer_mask.j_transform{-webkit-transform:translateX(15px) rotateX(45deg) rotate(10deg) skew(-15deg) translateZ(80px);transform:translateX(15px) rotateX(45deg) rotate(10deg) skew(-15deg) translateZ(80px)}}.page.layers .layers__layer_navigation{background-color:rgba(40,187,102,.5);z-index:2}.page.layers .layers__layer_navigation.j_transform{-webkit-transform:translateX(15px) rotateX(45deg) rotate(10deg) skew(-15deg) translateZ(-40px);transform:translateX(15px) rotateX(45deg) rotate(10deg) skew(-15deg) translateZ(-40px)}@media only screen and (max-width:320px){.page.layers .layers__layer_navigation.j_transform{-webkit-transform:translateX(15px) rotateX(45deg) rotate(10deg) skew(-15deg) translateZ(20px);transform:translateX(15px) rotateX(45deg) rotate(10deg) skew(-15deg) translateZ(20px)}}.page.layers .layers__layer_navigation.j_pic{background-color:transparent;background-image:url(../../assets/imgs/navigation.png)}.page.layers .layers__layer_content{background-color:#fff;z-index:1}.page.layers .layers__layer_content.j_transform{-webkit-transform:translateX(15px) rotateX(45deg) rotate(10deg) skew(-15deg) translateZ(-120px);transform:translateX(15px) rotateX(45deg) rotate(10deg) skew(-15deg) translateZ(-120px)}@media only screen and (max-width:320px){.page.layers .layers__layer_content.j_transform{-webkit-transform:translateX(15px) rotateX(45deg) rotate(10deg) skew(-15deg) translateZ(-40px);transform:translateX(15px) rotateX(45deg) rotate(10deg) skew(-15deg) translateZ(-40px)}}.page.layers .layers__layer_content.j_pic{background-image:url(../../assets/imgs/content.png)}.page.searchbar .searchbar-result{display:none;margin-top:0;font-size:14px}.page.searchbar .searchbar-result .weui-cell__bd{padding:2px 0 2px 20px;color:#666}.page.actionsheet,.page.picker{overflow:hidden}.page.picker{background-color:#fff}.page.gallery{overflow:hidden}@-webkit-keyframes a{0%{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0);opacity:0}to{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1}}@keyframes a{0%{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0);opacity:0}to{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1}}@-webkit-keyframes b{0%{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1}to{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0);opacity:0}}@keyframes b{0%{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1}to{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0);opacity:0}}.page.slideIn{-webkit-animation:a .2s forwards;animation:a .2s forwards}.page.slideOut{-webkit-animation:b .2s forwards;animation:b .2s forwards}
</style>
