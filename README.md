## vue-mytest
> A Vue.js project


## 环境配置

获取nodejs模块安装目录访问权限
sudo chmod -R 777 /usr/local/lib/node_modules/

安装淘宝镜像
npm install -g cnpm --registry=https://registry.npm.taobao.org

安装webpack
cnpm install webpack -g

npm install --save
npm install --save-dev

# 全局安装vue脚手架
$ npm install --global vue-cli
npm install vue-cli -g

# 创建一个基于 webpack 模板的新项目
$ vue init webpack my-project

# 安装依赖，走你
$ cd my-project
$ npm install
$ npm run dev



## 项目运行&编辑环境 Build Setup

``` bash
# 安装依赖 install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

## 项目布局
```
|-- build                            // webpack配置文件
|-- config                           // webpack 的配置文件
|-- ***                              // 上线项目文件，放在服务器即可正常访问
|-- screenshots                      // 项目截图
|-- src                              // 源码目录
|   |-- assets                       // 静态文件|
|       |-- plugins                  // 引用的插件
|       |-- css                      // 各种样式文件
|          |-- common.scss           // 公共样式文件
|          |-- mixin.scss            // 样式配置文件
|   |-- components                   // 组件
|       |-- common                   // 公共组件
|           |-- buyCart.js           // 购物车组件
|           |-- loading.js           // 页面初始化加载数据的动画组件
|           |-- mixin.js             // 组件混合(包括：指令-下拉加载更多，处理图片地址)
|           |-- ratingStar.js        // 评论的五颗星组件
|           |-- shoplist.js          // msite和shop页面的餐馆列表公共组件
|       |-- footer                   // 底部公共组件
|       |-- header                   // 头部公共组件
|   |-- config                       // 基本配置
|       |-- env.js                   // 环境切换配置
|       |-- fetch.js                 // 获取数据
|       |-- mUtils.js                // 常用的js方法
|       |-- rem.js                   // px转换rem
|   |-- pages                        // 页面组件
|
|   |-- router                       // 路由配置
|
|   |-- service                      // 数据交互统一调配
|       |-- template                 // 开发阶段的临时数据
|       |-- getData.js               // 获取数据的统一调配文件，对接口进行统一管理
|
|   |-- store                        // vuex的状态管理
|       |-- modules                  // store模块
|       |-- action.js                // 配置actions
|       |-- getters.js               // 配置getters
|       |-- index.js                 // 引用vuex，创建store
|       |-- mutation-types.js        // 定义常量muations名
|       |-- mutations.js             // 配置mutations|
|
|   |-- static                       // 静态文件

|   |-- App.vue                      // 页面入口文件
|
|   |-- main.js                      // 程序入口文件，加载各种公共组件
|
|-- .babelrc                         // ES6语法编译配置
|-- .editorconfig                    // 代码编写规格
|-- .gitignore                       // 忽略的文件
|-- favicon.ico                      // 页面左上角小图标
|-- index.html                       // 入口html文件
|-- package.json                     // 项目及工具的依赖配置文件
|-- README.md                        // 说明

```



[Vue2.0+Vue-router2.0+Vuex2.0搭建简书](http://xgfe.github.io/2016/12/22/zhouxiong/Vue2.0+Vue-router2.0+Vuex2.0/?utm_source=tuicool&utm_medium=referral)
[30分钟掌握ES6/ES2015核心内容（下）](https://segmentfault.com/a/1190000004368132)
[Vuex 实战](https://zhuanlan.zhihu.com/p/24568662)
