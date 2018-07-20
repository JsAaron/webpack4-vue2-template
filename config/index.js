
const path = require('path')
const utils = require('./utils')

/**
 * 公共配置
 */
module.exports = {
  publicPath: '/',
  port: 8000,
  rootPath:utils.rootPath,
  dist: path.resolve(utils.rootPath, 'dist')
}