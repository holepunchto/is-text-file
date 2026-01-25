'use strict'
const extensions = new Set(require('known-text-files'))

module.exports = function isTextFile(filename) {
  if (typeof filename !== 'string') return false
  const lastSlash = Math.max(
    filename.lastIndexOf('/'),
    filename.lastIndexOf('\\')
  )
  const base = lastSlash === -1 ? filename : filename.slice(lastSlash + 1)
  const lastDot = base.lastIndexOf('.')
  const hasExt = lastDot > 0 && lastDot < base.length - 1
  const name = hasExt
    ? base.slice(lastDot + 1)
    : base.startsWith('.')
      ? base.slice(1)
      : base
  return extensions.has(name.toLowerCase())
}
