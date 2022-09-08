const containsEmoji = require('../index.js');

test('Should return true if string contains one or more emojis', () => {
    expect(containsEmoji('I ate a slice of cake 🍰 last night.')).toBe(true);
    expect(containsEmoji('This company makes amazing cakes 🎂 🎂 🎂. I took a slice 🍰, it was delicious!')).toBe(true);
    expect(containsEmoji('Checks if a string contains one or more emojis 👀')).toBe(true);
});

test('Should return false if string does not contain any emojis', () => {
    expect(containsEmoji('I ate a slice of cake last night.')).toBe(false);
    expect(containsEmoji('This company makes amazing cakes. I took a slice, it was delicious!')).toBe(false);
    expect(containsEmoji('Checks if a string contains one or more emojis')).toBe(false);
});

test('Should return false if there is an empty string or nothing passed as parameter', () => {
    expect(containsEmoji('')).toBe(false);
    expect(containsEmoji()).toBe(false);
    expect(containsEmoji(' ')).toBe(false);
});
