const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const baseWebpackConfig = require('./base.webpack.config')
const config = require('../config')

module.exports = merge(baseWebpackConfig, {
  plugins: [
    new UglifyJSPlugin()
  ]
})
