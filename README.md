# is-text-file

> Determines whether a filename is plain-text based on a curated list of known extensions

Based on the list from [known-text-files](https://github.com/holepunchto/known-text-files).

```
npm install is-text-file
```

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
```

(Case-insensitive)

## License

Apache-2.0
