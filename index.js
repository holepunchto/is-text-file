'use strict'
const knownTextFiles = new Set(require('known-text-files'))

function isTextFile(filename) {
  if (typeof filename !== 'string') return false

  const name = // TODO

  return knownTextFiles.has(name.toLowerCase())
}

module.exports = isTextFile
