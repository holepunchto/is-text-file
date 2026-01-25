'use strict'
const knownTextFiles = new Set(require('known-text-files'))

function isTextFile(filename) {
  if (typeof filename !== 'string') return false
  let index = filename.lastIndexOf('.')
  if (index === -1) index = filename.lastIndexOf('/')
  if (index === -1) index = filename.lastIndexOf('\\')
  if (index === -1) index = 0
  if (filename[index] === '/' || filename[index] === '\\') index += 1
  const entry = filename.slice(index).trim().toLowerCase()
  return knownTextFiles.has(entry)
}

module.exports = isTextFile
