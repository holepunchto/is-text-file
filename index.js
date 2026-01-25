'use strict'
const knownTextFiles = new Set(require('known-text-files'))

function isTextFile(filename) {
  if (typeof filename !== 'string') return false
  filename = filename.replaceAll('\\', '/')
  let entry = filename.slice(filename.lastIndexOf('/') + 1).trim().toLowerCase()
  if (knownTextFiles.has(entry)) return true
  entry = entry.slice(entry.lastIndexOf('.'))
  return knownTextFiles.has(entry)
}

module.exports = isTextFile
