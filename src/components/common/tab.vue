<template>
  <div class="mod-tab">
    <ul>
      <li><router-link to="/index">首页</router-link></li>
      <li><router-link to="/info">消息</router-link></li>
      <li><router-link to="/create">创建</router-link></li>
      <li><router-link to="/topnav">发现</router-link></li>
      <li><router-link to="/icenter">我的</router-link></li>
    </ul>
  </div>
</template>
<style scoped>
.mod-tab{position:fixed; left:0; bottom:0; width:100%; height:.46rem; background:rgba(0,0,0,.9); border-top:.01 solid #ddd; overflow:hidden;}
.mod-tab li{display:inline-block; width:20%; height:.46rem; line-height:.46rem; float:left; font-size:.14rem; text-align:center; color:#a6a6a6;}
.mod-tab li a{color:#a6a6a6;}
.mod-tab li a.router-link-active{color:#fff;}
</style>
