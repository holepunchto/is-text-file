'use strict'
const knownTextFiles = new Set(require('known-text-files'))

function isTextFile(filename) {
  if (typeof filename !== 'string') return false
  let entry = filename.toLowerCase().trim()
  if (knownTextFiles.has(entry)) return true
  entry = entry.slice(entry.lastIndexOf('.'))
  return knownTextFiles.has(entry)
}

module.exports = isTextFile
