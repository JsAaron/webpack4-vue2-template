const path = require("path")
const opn = require('opn')
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require("webpack-Hot-middleware")

const app = express();

const config = require('../config');
const webpackConfig = require('./dev.webpack.config');
const compiler = webpack(webpackConfig);

var port = process.env.PORT || config.port

// 设置静态访问文件路径
const DIST_DIR = path.join(__dirname, "dist")

//自动编译
app.use(webpackDevMiddleware(compiler, {
  //显示无信息到控制台（仅警告和错误） 
  noInfo: false,
  stats: {
    colors: true,
    chunks: false
  },
  //绑定中间件的公共路径,与webpack配置的路径相同
  publicPath: config.publicPath,
  //向控制台显示任何内容 
  quiet: true
}));

//热更新
app.use(webpackHotMiddleware(compiler, {
  log: false,
  heartbeat: 2000,
}))

compiler.plugin('compilation', function(compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function(data, cb) {
    console.log(213)
      // hotMiddleware.publish({
      //     action: 'reload'
      // })
      cb && cb()
  })
})



app.use(express.static(DIST_DIR))

app.listen(port, function () {
  console.log("成功启动：localhost:" + port)

  if (process.env.NODE_ENV !== 'testing') {
    // opn(uri)
  }
});

