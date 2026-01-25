# is-text-file

> Determines whether a filename is plain text using heuristics based on extensions, extensionless files, and dotfiles

```
npm install is-text-file
```

- List from [known-text-files](https://github.com/holepunchto/known-text-files)
- Case-insensitive
- POSIX and Windows-style paths

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

## License

Apache-2.0
