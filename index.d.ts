/**
 * Checks whether a string contains one or more emoji characters,
 * and optionally returns the count of emojis found.
 *
 * @param {string} paramString The string to check for emojis
 * @param {boolean} [returnCount=false] If true, function returns number of emojis instead of boolean
 * @returns {boolean|number} Boolean if returnCount is false, otherwise number of emojis
 */
declare function containsEmoji(paramString: string | null | undefined, returnCount?: false): boolean;
declare function containsEmoji(paramString: string | null | undefined, returnCount: true): number;

export = containsEmoji;
