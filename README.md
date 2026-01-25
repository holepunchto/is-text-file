# is-text-file

> Determines whether a filename is plain text using heuristics based on extensions, common filenames, and dotfiles

```
npm install is-text-file
```

## Usage

```js
const isTextFile = require('is-text-file')
```

```js
// true
isTextFile('readme.txt')
isTextFile('/tmp/Dockerfile')
isTextFile('C:\\tmp\\readme.txt')
isTextFile('.gitignore')

// false
isTextFile('image.png')
isTextFile('foobar')
isTextFile('.git')
```

- File list from [known-text-files](https://github.com/holepunchto/known-text-files)
- POSIX and Windows-style paths
- Case-insensitive

## License

Apache-2.0
