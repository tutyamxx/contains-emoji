# contains-emoji

<p align="center"><a href="https://nodei.co/npm/contains-emoji/"><img src="https://nodei.co/npm/contains-emoji.png"></a></a></p>

* Simple NPM package that checks if a string contains one or more emojis 👀
* It uses [Emoji Regex](https://github.com/mathiasbynens/emoji-regex) module
* See examples below

# Install via [NPM](https://www.npmjs.com/package/custom-url-check)

`$ npm i contains-emoji`

# Usage

- Returns a Boolean indicating whether `string` contains one or more emojis.

```javascript
const containsEmoji = require("contains-emoji");

const szTextWithEmoji = "I love pizza 🍕";

if(containsEmoji(szTextWithEmoji))
{
    console.log("Text contains one or more emojis!");
}
```