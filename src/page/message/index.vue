/*
 * message page
**/
<template>
<div>
<head-top signin-up='home' go-back='true'>
  <span slot='logo' class="head_logo"  @click="reload">logo</span>
</head-top>
<v-tab></v-tab>
<div class="weui-search-bar" id="searchBar">
  <form class="weui-search-bar__form">
    <div class="weui-search-bar__box">
      <i class="weui-icon-search"></i>
      <input type="search" class="weui-search-bar__input" id="searchInput" placeholder="搜索" required="">
      <a href="javascript:" class="weui-icon-clear" id="searchClear"></a>
    </div>
    <label class="weui-search-bar__label" id="searchText">
      <i class="weui-icon-search"></i>
      <span>搜索</span>
    </label>
  </form>
  <a href="javascript:" class="weui-search-bar__cancel-btn" id="searchCancel">取消</a>
</div>
<div class="weui-cells" style="margin-top:0;">
  <div class="weui-cell">
    <div class="weui-cell__hd" style="position: relative;margin-right: 10px;">
      <img src="../../assets/imgs/avatar.jpg" style="width: 50px;display: block">
      <span class="weui-badge" style="position: absolute;top: -.4em;right: -.4em;">8</span>
    </div>
    <div class="weui-cell__bd">
      <p>七痴</p>
      <p style="font-size: 13px;color: #888888;">没兴趣 生性冷淡</p>
    </div>
  </div>
  <div class="weui-cell weui-cell_access">
    <div class="weui-cell__bd">
      <span style="vertical-align: middle">单行列表</span>
      <span class="weui-badge" style="margin-left: 5px;">8</span>
    </div>
    <div class="weui-cell__ft"></div>
  </div>
  <div class="weui-cell weui-cell_access">
    <div class="weui-cell__bd">
      <span style="vertical-align: middle">单行列表</span>
      <span class="weui-badge" style="margin-left: 5px;">8</span>
    </div>
    <div class="weui-cell__ft">详细信息</div>
  </div>
  <div class="weui-cell weui-cell_access">
    <div class="weui-cell__bd">
      <span style="vertical-align: middle">单行列表</span>
      <span class="weui-badge" style="margin-left: 5px;">New</span>
    </div>
    <div class="weui-cell__ft"></div>
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
  },
  mounted () {
    let $searchBar = $('#searchBar')
    let $searchResult = $('#searchResult')
    let $searchText = $('#searchText')
    let $searchInput = $('#searchInput')
    let $searchClear = $('#searchClear')
    let $searchCancel = $('#searchCancel')

    function hideSearchResult () {
      $searchResult.hide()
      $searchInput.val('')
    }
    function cancelSearch () {
      hideSearchResult()
      $searchBar.removeClass('weui-search-bar_focusing')
      $searchText.show()
    }

    $searchText.on('click', function () {
      $searchBar.addClass('weui-search-bar_focusing')
      $searchInput.focus()
    })
    $searchInput
    .on('blur', function () {
      if (!this.value.length) cancelSearch()
    })
    .on('input', function () {
      if (this.value.length) {
        $searchResult.show()
      } else {
        $searchResult.hide()
      }
    })
    $searchClear.on('click', function () {
      hideSearchResult()
      $searchInput.focus()
    })
    $searchCancel.on('click', function () {
      cancelSearch()
      $searchInput.blur()
    })
  }
}
</script>
<style>

</style>
