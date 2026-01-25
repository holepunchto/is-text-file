'use strict'
const knownTextFiles = new Set(require('known-text-files'))

function isTextFile(filename) {
  if (typeof filename !== 'string') return false
  const base = filename.trim().replaceAll('\\', '/').split('/').pop()
  if (!base) return false
  const lower = base.toLowerCase()
  if (knownTextFiles.has(lower)) return true
  const lastDot = lower.lastIndexOf('.')
  if (lastDot <= 0 || lastDot === lower.length - 1) return false
  return knownTextFiles.has(lower.slice(lastDot))
}

module.exports = isTextFile
