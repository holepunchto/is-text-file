'use strict'
const test = require('brittle')
const isTextFile = require('.')

test('Heuristic plain text', function (t) {
  t.ok(isTextFile('readme.txt'))
  t.ok(isTextFile('README.MD'))
  t.ok(isTextFile('.gitignore'))
  t.ok(isTextFile('Dockerfile'))
  t.ok(isTextFile('/tmp/index.js'))
  t.ok(isTextFile('.GITIGNORE'))
  t.ok(isTextFile('MAKEFILE'))
})

test('Heuristic binary files', function (t) {
  t.ok(!isTextFile('image.png'))
  t.ok(!isTextFile('archive.tar.gz'))
  t.ok(!isTextFile('file.'))
  t.ok(!isTextFile('bin'))
  t.ok(!isTextFile('.git'))
  t.ok(!isTextFile(''))
  t.ok(!isTextFile(undefined))
  t.ok(!isTextFile(null))
})
