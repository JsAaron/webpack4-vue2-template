const express = require('express');
const webpack = require('webpack');
const path = require("path")
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require("webpack-Hot-middleware")

const PORT = 3000
const app = express();
const config = require('./webpack.config.js');
const compiler = webpack(config);

// 设置静态访问文件路径
const DIST_DIR = path.join(__dirname, "dist")

//自动编译
app.use(webpackDevMiddleware(compiler, {
  stats: {
    colors: true,
    chunks: false
  },
  ////绑定中间件的公共路径,与webpack配置的路径相同
  publicPath: config.output.publicPath,
  quiet: true  //向控制台显示任何内容 
}));

//热更新
app.use(webpackHotMiddleware(compiler, {
  log: false,
  heartbeat: 2000,
}))


app.use(express.static(DIST_DIR))

app.listen(PORT, function () {
  console.log("成功启动：localhost:" + PORT)
});
