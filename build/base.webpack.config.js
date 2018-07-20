const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = require('../config/index')
const utils = require('../config/utils')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  entry: {
    //公共代码
    commons: ["./src/jquery", "vue"],
    //逻辑代码
    app: './src/index.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: config.dist,
    publicPath: config.publicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.less', '.css', '.scss']
  },
  module: {
    rules: [{
      test: /\.vue$/,
      use: 'vue-loader'
    },
    {
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: ['babel-loader']
    }, {
      test: /\.scss$/,
      use: [
        "style-loader", // creates style nodes from JS strings
        "css-loader", // translates CSS into CommonJS
        "sass-loader" // compiles Sass to CSS
      ]
    },
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
    }]
  },
  plugins: [
    new VueLoaderPlugin(),
    //清理文件夹
    new CleanWebpackPlugin(['dist'], {
      root: config.rootPath, //给出根目录，dist的相对点
      verbose: true,
      dry: false
    }),
    //动态生成index.html
    new HtmlWebpackPlugin({
      //源文件地址
      template: utils.resolve('template/index.html'),
      //目标位置
      // 输出文件【注意：这里的根路径是module.exports.output.path】
      filename: utils.resolve('dist/index.html'),
      //脚本注入底部
      inject: true,
      //每次编译产生的唯一hash值
      hash: true
    })
  ]
}