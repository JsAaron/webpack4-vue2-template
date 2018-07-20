const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = require('../config')

module.exports = {
  entry: {
    app: './src/index.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: config.dist,
    publicPath: config.publicPath
  },
  plugins: [
    //清理文件夹
    new CleanWebpackPlugin(['dist']),
    //动态生成index.html
    new HtmlWebpackPlugin({
      title: 'Production'
    })
  ]
}