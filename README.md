# is-text-file

> Determines whether a filename is plain text using heuristics based on extensions, filenames, and dotfiles

```
npm install is-text-file
```

## Features

- Based on [known-text-files](https://github.com/holepunchto/known-text-files)
- Case-insensitive
- POSIX and Windows-style paths

## Usage

```js
const isTextFile = require('is-text-file')
```

```js
isTextFile('readme.txt') // true
isTextFile('/tmp/Dockerfile') // true
isTextFile('.gitignore') // true

isTextFile('image.png') // false
isTextFile('bin') // false
isTextFile('.git') // false
```

## License

Apache-2.0
