const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = require('../config/index')
const utils = require('../config/utils')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  entry: {
    // 需要被提取为公共模块的群组
    commons: ["./src/jquery", "vue"],
    //逻辑代码
    app: './src/index.js'
  },
  output: {
    //基于文件的md5生成Hash名称的script来防止缓存
    filename: '[name].bundle.js',
    //输出文件，路径相对于本文件所在的位置
    path: config.dist,
    // 设置publicPath这个属性会出现很多问题：
    // 1.可以看成输出文件的另一种路径，差别路径是相对于生成的html文件；
    // 2.也可以看成网站运行时的访问路径；
    // 3.该属性的好处在于当你配置了图片CDN的地址，本地开发时引用本地的图片资源，上线打包时就将资源全部指向CDN了，
    //   如果没有确定的发布地址不建议配置该属性，特别是在打包图片时，路径很容易出现混乱，
    //   如果没有设置，则默认从站点根目录加载
    // publicPath: '../static/js/',
    publicPath: config.publicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.less', '.css', '.scss'],
    // 模块别名地址，方便后续直接引用别名，无须写长长的地址，注意如果后续不能识别该别名，需要先设置root
    alias:{}
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