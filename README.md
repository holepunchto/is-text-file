# is-text-file

> Determines whether a filename is plain-text based on a unified list of extensions, filenames and dotfiles

Based on the list from [known-text-files](https://github.com/holepunchto/known-text-files).

```
npm install is-text-file
```

- Case-insensitive
- POSIX and Windows-style paths
- Heuristics via extensions, common filenames, and dotfiles

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
