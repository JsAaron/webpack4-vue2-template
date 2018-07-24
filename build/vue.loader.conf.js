'use strict'
const config = require('../config')
const utils = require('./utils')

//是否为发布版
const isProduction = process.env.NODE_ENV === 'production'
const sourceMapEnabled = isProduction
  ? config.build.productionSourceMap
  : config.dev.cssSourceMap


module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: sourceMapEnabled,
    extract: isProduction
  }),
  /**
   * <img src="../image.png">
   * 
   * https://vue-loader.vuejs.org/guide/asset-url.html#transform-rules
   * createElement('img', {
   *   attrs: {
   *     src: require('../image.png') // this is now a module request
   *   }
   * })
   */
  transformAssetUrls: {
    video: ['src', 'poster'],
    source: 'src',
    img: 'src',
    image: 'xlink:href'
  }
}
