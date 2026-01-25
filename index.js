'use strict'
const knownTextFiles = new Set(require('known-text-files'))

function isTextFile(filename) {
  if (typeof filename !== 'string') return false
  const entry = filename.slice(filename.lastIndexOf('.'))
  return knownTextFiles.has(entry.toLowerCase())
}

module.exports = isTextFile
