/**
 *  contains-emoji - Checks if a string contains one or more emojis 👀
 *  @version: v1.3.1
 *  @link: https://github.com/tutyamxx/contains-emoji
 *  @license: MIT
 **/

const emojiRegex = require('emoji-regex');

/**
 * Checks whether a string contains one or more emoji characters,
 * and optionally returns the count of emojis found.
 *
 * @param {string} paramString The string to check for emojis
 * @param {boolean} [returnCount=false] If true, function returns number of emojis instead of boolean
 * @returns {boolean|number} Boolean if returnCount is false, otherwise number of emojis
 */
const containsEmoji = (paramString, returnCount = false) => {
    if (paramString == null || typeof paramString !== 'string') {
        return returnCount ? 0 : false;
    }

    const matches = paramString.match(emojiRegex());
    const count = matches ? matches.length : 0;

    return returnCount ? count : count > 0;
};

// --| CommonJS export
module.exports = containsEmoji;

// --| ESM default export for `import` statements
module.exports.default = containsEmoji;
