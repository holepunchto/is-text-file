'use strict'
const knownTextFiles = new Set(require('known-text-files'))

function isTextFile(filename) {
  if (typeof filename !== 'string') return false
  const base = filename.trim().replaceAll('\\', '/').split('/').pop()
  const name = base.split('.').pop()
  return knownTextFiles.has(name.toLowerCase())
}

module.exports = isTextFile
