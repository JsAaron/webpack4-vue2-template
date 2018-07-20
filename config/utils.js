'use strict'

const path = require('path')
const rootPath = process.cwd()

module.exports = {
  rootPath,
  resolve: function (dir) {
    return path.join(__dirname, '..', dir)
  }
}