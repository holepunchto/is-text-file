'use strict'
const known = new Set(require('known-text-files'))

function isTextFile(specifier) {
  if (typeof specifier !== 'string') return false
  let index = specifier.lastIndexOf('.')
  if (index === -1) {
    index = ~(~specifier.lastIndexOf('/') | ~specifier.lastIndexOf('\\')) + 1
  }
  return known.has(specifier.slice(index).trim().toLowerCase())
}

module.exports = isTextFile
