/**
 *  contains-emoji - Checks if a string contains one or more emojis 👀
 *  @version: v1.1.4
 *  @link: https://github.com/tutyamxx/contains-emoji
 *  @license: MIT
 **/

const emojiRegex = require('emoji-regex');

module.exports = (paramString) => (paramString && paramString.length > 0 && typeof paramString === 'string') ? (!!emojiRegex().test(paramString)) : false;
