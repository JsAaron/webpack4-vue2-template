const path = require('path');
const webpack = require("webpack")
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const baseWebpackConfig = require('./base.webpack.config')
const config = require('../config')

//热更新,填充每个路径名
Object.keys(baseWebpackConfig.entry).forEach(function (name) {
  baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name])
})

module.exports = merge(baseWebpackConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    filename: '[name].bundle.js',
    path: config.dist,
    publicPath: config.publicPath
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },
  plugins: [
    //清理文件夹
    new CleanWebpackPlugin(['dist']),
    //动态生成index.html
    new HtmlWebpackPlugin({
      title: 'Output Management'
    }),
    // 实现刷新浏览器必写
    new webpack.HotModuleReplacementPlugin()
  ]
})

