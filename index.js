/**
 *  contains-emoji - Checks if a string contains one or more emojis 👀
 *  @version: v1.2.9
 *  @link: https://github.com/tutyamxx/contains-emoji
 *  @license: MIT
 **/

const emojiRegex = require('emoji-regex');

/**
 * Checks whether a string contains one or more emoji characters.
 *
 * Returns `false` if the input is `null`, `undefined`, or not a string.
 *
 * @param paramString The string to check for emojis
 * @returns `true` if at least one emoji is found, otherwise `false`
 */
module.exports = (paramString) => {
    if (paramString == null || typeof paramString !== 'string') {
        return false;
    }

    return paramString.length > 0 && emojiRegex().test(paramString);
};
