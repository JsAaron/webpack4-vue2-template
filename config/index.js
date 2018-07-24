
const path = require('path')
const rootPath =  process.cwd()
/**
 * 公共配置
 */
module.exports = {
  publicPath: rootPath,
  port: 8000,
  rootPath: process.cwd(),
  dist: path.resolve(rootPath, 'dist'),
  //开发配置
  dev: {
    //基本路径
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    cssSourceMap: true
  },
  //打包配置
  build: {
    productionSourceMap: true,
    //入口模板
    index: path.resolve(__dirname, '../dist/index.html'),
    //基本路径
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/'
  }
}