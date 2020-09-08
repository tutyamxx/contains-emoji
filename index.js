/**
 *  has-emoji - Checks if a string contains one or more emojis 👀
 *  @version: v1.0.2
 *  @link: https://github.com/tutyamxx/contains-emoji
 *  @license: MIT
 **/

const EmojiRegex = require("emoji-regex");
const CreateEmojiRegex = EmojiRegex();

module.exports = (szString) =>
{
    if(CreateEmojiRegex.test(szString))
    {
        return true;
    }

    return false;
};