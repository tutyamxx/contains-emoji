/**
 * Checks whether a string contains one or more emoji characters.
 *
 * Returns `false` if the input is `null`, `undefined`, or not a string.
 *
 * @param paramString The string to check for emojis
 * @returns `true` if at least one emoji is found, otherwise `false`
 */
declare function containsEmoji(paramString: string | null | undefined): boolean;

export = containsEmoji;
