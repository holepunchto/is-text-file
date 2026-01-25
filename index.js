'use strict'
const knownTextFiles = new Set(require('known-text-files'))

function isTextFile(filename) {
  if (typeof filename !== 'string') return false
  const base = filename.trim().replaceAll('\\', '/').split('/').pop()
  const lastDot = base.lastIndexOf('.')
  const name = lastDot === -1 ? base : base.slice(lastDot)
  return (
    knownTextFiles.has(base.toLowerCase()) ||
    knownTextFiles.has(name.toLowerCase())
  )
}

module.exports = isTextFile
