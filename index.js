/**
 *  contains-emoji - Checks if a string contains one or more emojis 👀
 *  @version: v1.0.7
 *  @link: https://github.com/tutyamxx/contains-emoji
 *  @license: MIT
 **/

const emojiRegex = require("emoji-regex");

module.exports = (szString) => emojiRegex().test(szString) ? true : false;
