'use strict'
const path = require('path')
const extensions = new Set(require('text-file-extensions'))

module.exports = function isTextFile(filename) {
  if (!filename || typeof filename !== 'string') return false
  const base = path.basename(filename)
  const ext = path.extname(base)
  const name = ext ? ext.slice(1) : base[0] === '.' ? base.slice(1) : base
  return !!name && extensions.has(name.toLowerCase())
}
