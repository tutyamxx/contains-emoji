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

test('Should return false if there is an empty string, whitespace, undefined, or null passed as parameter', () => {
    expect(containsEmoji('')).toBe(false);
    expect(containsEmoji()).toBe(false);
    expect(containsEmoji(' ')).toBe(false);
    expect(containsEmoji(undefined)).toBe(false);
    expect(containsEmoji(null)).toBe(false);
});

test('Should handle various emoji types correctly', () => {
    expect(containsEmoji('😀')).toBe(true);
    expect(containsEmoji('🤔')).toBe(true);
    expect(containsEmoji('🇺🇸')).toBe(true);
    expect(containsEmoji('💯')).toBe(true);
    expect(containsEmoji('👍')).toBe(true);
    expect(containsEmoji('😎')).toBe(true);
    expect(containsEmoji('🎉')).toBe(true);
    expect(containsEmoji('🔥')).toBe(true);
    expect(containsEmoji('✨')).toBe(true);

    expect(containsEmoji('This string has no emojis.')).toBe(false);
    expect(containsEmoji('Text without emojis')).toBe(false);
});

test('Should handle more complex and edge-case emojis', () => {
    expect(containsEmoji('👩‍💻')).toBe(true);
    expect(containsEmoji('👨‍👩‍👧‍👦')).toBe(true);
    expect(containsEmoji('🌍')).toBe(true);
    expect(containsEmoji('❤️')).toBe(true);
    expect(containsEmoji('©️')).toBe(true);
    expect(containsEmoji('🏳️‍🌈')).toBe(true);
    expect(containsEmoji('🙃')).toBe(true);
    expect(containsEmoji('🫠')).toBe(true);
    expect(containsEmoji('🫠🫠🫠')).toBe(true);
    expect(containsEmoji('a🫠b')).toBe(true);

    expect(containsEmoji('No emojis here')).toBe(false);
    expect(containsEmoji('Just text')).toBe(false);
});
