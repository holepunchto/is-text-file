/**
 * Determines whether a filename is plain text using heuristics based on extensions, extensionless files, and dotfiles.
 * Extensions are checked with a leading dot, while filenames and dotfiles are matched directly.
 */
declare function isTextFile(filename: string): boolean

export = isTextFile
