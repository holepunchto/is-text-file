'use strict'
const knownTextFiles = new Set(require('known-text-files'))

module.exports = function isTextFile(filename) {
  if (typeof filename !== 'string') return false
  const base = filename.replace(/^.*[\\/]/, '')
  const lastDot = base.lastIndexOf('.')
  return knownTextFiles.has(
    (lastDot > 0 && lastDot < base.length - 1
      ? base.slice(lastDot + 1)
      : base[0] === '.'
        ? base.slice(1)
        : base
    ).toLowerCase()
  )
}
