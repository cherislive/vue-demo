// https://github.com/shelljs/shelljs
require('./check-versions')()  // 检查 Node 和 npm 版本

process.env.NODE_ENV = 'production'

var ora = require('ora')   // 一个很好看的 loading 插件
var path = require('path')
var chalk = require('chalk')
var shell = require('shelljs')
var webpack = require('webpack')   // 加载 webpack
var config = require('../config')   // 加载 config.js
var webpackConfig = require('./webpack.prod.conf')    // 加载 webpack.prod.conf

var spinner = ora('building for production...')   // 使用 ora 打印出 loading + log
spinner.start()   // 开始 loading 动画

// 拼接编译输出文件路径
var assetsPath = path.join(config.build.assetsRoot, config.build.assetsSubDirectory)
shell.rm('-rf', assetsPath)  // 删除这个文件夹 （递归删除）
shell.mkdir('-p', assetsPath)  // 创建此文件夹
shell.config.silent = true
shell.cp('-R', 'static/*', assetsPath)  // 复制 static 文件夹到我们的编译输出目录
shell.config.silent = false

//  开始 webpack 的编译
webpack(webpackConfig, function (err, stats) {
  // 编译成功的回调函数
  spinner.stop()
  if (err) throw err
  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }) + '\n\n')

  console.log(chalk.cyan('  Build complete.\n'))
  console.log(chalk.yellow(    //  输出提示信息 ～ 提示用户请在 http 服务下查看本页面，否则为空白页
    '  Tip: built files are meant to be served over an HTTP server.\n' +
    '  Opening index.html over file:// won\'t work.\n'
  ))
})
