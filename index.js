/**
 *  contains-emoji - Checks if a string contains one or more emojis 👀
 *  @version: v1.2.1
 *  @link: https://github.com/tutyamxx/contains-emoji
 *  @license: MIT
 **/

const emojiRegex = require('emoji-regex');

module.exports = (paramString) => {
    if (paramString == null || typeof paramString !== 'string') {
        return false;
    }

    return paramString.length > 0 && emojiRegex().test(paramString);
};
