/**
 * Determines whether a file specifier is plain text using heuristics based on extensions, common filenames, and dotfiles.
 */
declare function isTextFile(specifier: string): boolean

export = isTextFile
