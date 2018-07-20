const path = require('path');
const webpack = require("webpack")
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const config = require('../config')

module.exports = {
  mode: 'development',
  entry: ['webpack-hot-middleware/client?noInfo=true&reload=true', './src/index.js'],
  // entry: {
  //   app: './src/index.js'
  // },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true
  },
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
};
