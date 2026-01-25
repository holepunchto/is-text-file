'use strict'
const knownTextFiles = new Set(require('known-text-files'))

function isTextFile(filename) {
  if (typeof filename !== 'string') return false
  const base = filename.trim().replaceAll('\\', '/').split('/').pop()
  if (!base) return false
  const lower = base.toLowerCase()
  const lastDot = lower.lastIndexOf('.')
  const extension = lastDot === -1 ? '' : lower.slice(lastDot)
  return knownTextFiles.has(lower) || knownTextFiles.has(extension)
}

module.exports = isTextFile
