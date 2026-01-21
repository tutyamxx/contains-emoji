# contains-emoji

<p align="center"><a href="https://nodei.co/npm/contains-emoji/"><img src="https://nodei.co/npm/contains-emoji.png"></a></a></p>
<p align="center">
  <img src="https://img.shields.io/badge/License-MIT-yellow.svg">
</p>

* 🚀 Simple NPM package that checks if a string contains one or more emojis 👀
* 📦 It uses [Emoji Regex](https://github.com/mathiasbynens/emoji-regex) NPM module
* ♻️ Works seamlessly with `CommonJS`, `ESM` and `TypeScript`

# 📦 Install via [NPM](https://www.npmjs.com/package/contains-emoji)

```bash
$ npm i contains-emoji
```

# 💻 Usage

- Returns a Boolean indicating whether `string` contains one or more emojis.
- See examples below

## CommonJS
```javascript
const containsEmoji = require('contains-emoji');

const textWithEmoji = 'I love pizza 🍕';

// --| Default usage: returns true/false
if (containsEmoji(textWithEmoji)) {
    console.log('Text contains one or more emojis!');
} else {
    console.log('No emojis found.');
}

// --| Using the optional returnCount parameter: returns the number of emojis
const emojiCount = containsEmoji(textWithEmoji, true);
console.log(`Number of emojis found: ${emojiCount}`);

/*
    // --| Expected output
    Text contains one or more emojis!
    Number of emojis found: 1
*/
```

## ESM
```javascript
import containsEmoji from 'contains-emoji';

const textWithEmoji = 'I love pizza 🍕 and burgers 🍔!';

// --| Default usage: returns true/false
if (containsEmoji(textWithEmoji)) {
    console.log('Text contains one or more emojis!');
} else {
    console.log('No emojis found.');
}

// --| Using the optional returnCount parameter: returns the number of emojis
const emojiCount = containsEmoji(textWithEmoji, true);
console.log(`Number of emojis found: ${emojiCount}`);

/*
    // --| Expected output
    Text contains one or more emojis!
    Number of emojis found: 2
*/
```

## TypeScript
```javascript
import containsEmoji from 'contains-emoji';

const textWithEmoji: string = 'I love pizza 🍕, burgers 🍔 and cakes 🍰!';

// --| Default usage: returns true/false
if (containsEmoji(textWithEmoji)) {
    console.log('Text contains one or more emojis!');
} else {
    console.log('No emojis found.');
}

// --| Using the optional returnCount parameter: returns the number of emojis
const emojiCount: number = containsEmoji(textWithEmoji, true);
console.log(`Number of emojis found: ${emojiCount}`);

/*
// --| Expected output
    Text contains one or more emojis!
    Number of emojis found: 3
*/
```
