'use strict'
const path = require('path')
const extensions = new Set(require('known-text-files'))

module.exports = function isTextFile(filename) {
  if (typeof filename !== 'string') return false
  const ext = path.extname(filename).slice(1)
  const name = ext || path.basename(filename).replace(/^\./, '')
  return extensions.has(name.toLowerCase())
}
