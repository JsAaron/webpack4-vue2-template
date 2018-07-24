const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const baseWebpackConfig = require('./base.webpack.conf')
const config = require('../config/index')
const utils = require('./utils')

module.exports = merge(baseWebpackConfig, {
  mode:'development',
  // mode: 'production',
  devtool: 'source-map',
  //替换CommonsChunkPlugin
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          name: "commons",
          chunks: "initial",
          minChunks: 2
        }
      }
    }
  },
  plugins: [
    // new UglifyJSPlugin({
    //   sourceMap: true
    // }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    //抽出独立的css文件
    new MiniCssExtractPlugin({
      //src/static
      filename: utils.assetsPath('css/[name].[contenthash].css'),
    }),
  ]
})
