/**
 *  contains-emoji - Checks if a string contains one or more emojis 👀
 *  @version: v1.0.8
 *  @link: https://github.com/tutyamxx/contains-emoji
 *  @license: MIT
 **/

const emojiRegex = require("emoji-regex");

module.exports = (string) => (string && string.length > 0 && typeof string === "string") ? (emojiRegex().test(string) ? true : false) : false;
