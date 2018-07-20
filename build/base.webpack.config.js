const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = require('../config/index')
const utils = require('../config/utils')


module.exports = {
  entry: {
    app: './src/index.js',
    another: './src/another-module.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: config.dist,
    publicPath: config.publicPath
  },
  plugins: [
    //清理文件夹
    new CleanWebpackPlugin(['dist'], {
      root: config.rootPath, //给出根目录，dist的相对点
      verbose: true,
      dry: false
    }),
    //动态生成index.html
    new HtmlWebpackPlugin({
      title: '测试',
      //源文件地址
      template: utils.resolve('template/index.html'),
      //目标位置
      filename: utils.resolve('dist/index.html'),
      //脚本注入底部
      inject: true
    })
  ]
}