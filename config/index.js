
var path = require('path')

/**
 * 公共配置
 */
module.exports = {
  mode: 'development',
  publicPath: '/',
  port: 8000,
  dist: path.resolve(__dirname, 'dist')
}