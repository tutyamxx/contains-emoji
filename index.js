/**
 *  contains-emoji - Checks if a string contains one or more emojis 👀
 *  @version: v1.2.0
 *  @link: https://github.com/tutyamxx/contains-emoji
 *  @license: MIT
 **/

const emojiRegex = require('emoji-regex');
const emojiRegexPatternCache = emojiRegex();

module.exports = (paramString) => {
    if (paramString == null || typeof paramString !== 'string') {
        return false;
    }
    return paramString.length > 0 && emojiRegexPatternCache.test(paramString);
};
