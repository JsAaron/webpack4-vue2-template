
const path = require('path')
const utils = require('./utils')

/**
 * 公共配置
 */
module.exports = {
  publicPath: '/',
  port: 8000,
  rootPath: utils.rootPath,
  dist: path.resolve(utils.rootPath, 'dist'),
  //开发配置
  dev:{
    //基本路径
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
  },
  //打包配置
  build: {
    //入口模板
    index: path.resolve(__dirname, '../dist/index.html'),
    //基本路径
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
  }
}