# is-text-file

> Determines whether a filename is plain-text based on a curated list of known extensions

Based on [text-file-extensions](https://github.com/holepunchto/text-file-extensions).

```
npm install is-text-file
```

## Usage

```js
const isTextFile = require('is-text-file')
```

```js
isTextFile('readme.txt') // true
isTextFile('Dockerfile') // true
isTextFile('.gitignore') // true

isTextFile('image.png') // false
isTextFile('bin') // false
```

(Case-insensitive)

## License

Apache-2.0
