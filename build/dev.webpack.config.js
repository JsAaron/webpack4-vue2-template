const path = require('path');
const webpack = require("webpack")
const merge = require('webpack-merge')
const baseWebpackConfig = require('./base.webpack.config')
const config = require('../config')

//热更新,填充每个路径名
Object.keys(baseWebpackConfig.entry).forEach(function (name) {
  baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name])
})

module.exports = merge(baseWebpackConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
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
    // 实现刷新浏览器必写
    new webpack.HotModuleReplacementPlugin()
  ]
})

