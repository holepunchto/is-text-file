'use strict'
const test = require('brittle')
const isTextFile = require('.')

test('text files', function (t) {
  t.ok(isTextFile('readme.txt'))
  t.ok(isTextFile('README.MD'))
  t.ok(isTextFile('.gitignore'))
  t.ok(isTextFile('Dockerfile'))
  t.ok(isTextFile('src/index.js'))
  t.ok(isTextFile('.GITIGNORE'))
  t.ok(isTextFile('MAKEFILE'))
})

test('non-text files', function (t) {
  t.ok(!isTextFile('image.png'))
  t.ok(!isTextFile('archive.tar.gz'))
  t.ok(!isTextFile('file.'))
  t.ok(!isTextFile('bin'))
  t.ok(!isTextFile(''))
  t.ok(!isTextFile(undefined))
  t.ok(!isTextFile(null))
})
