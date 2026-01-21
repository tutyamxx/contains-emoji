const containsEmoji = require('../index.js');

test('Should return true if string contains one or more emojis', () => {
    expect(containsEmoji('I ate a slice of cake 🍰 last night.')).toBe(true);
    expect(containsEmoji('This company makes amazing cakes 🎂 🎂 🎂. I took a slice 🍰, it was delicious!')).toBe(true);
    expect(containsEmoji('Checks if a string contains one or more emojis 👀')).toBe(true);

    // --| Check counts
    expect(containsEmoji('I ate a slice of cake 🍰 last night.', true)).toBe(1);
    expect(containsEmoji('This company makes amazing cakes 🎂 🎂 🎂. I took a slice 🍰, it was delicious!', true)).toBe(4);
    expect(containsEmoji('Checks if a string contains one or more emojis 👀', true)).toBe(1);
});

test('Should return false if string does not contain any emojis', () => {
    expect(containsEmoji('I ate a slice of cake last night.')).toBe(false);
    expect(containsEmoji('This company makes amazing cakes. I took a slice, it was delicious!')).toBe(false);
    expect(containsEmoji('Checks if a string contains one or more emojis')).toBe(false);

    // --| Check counts
    expect(containsEmoji('I ate a slice of cake last night.', true)).toBe(0);
    expect(containsEmoji('This company makes amazing cakes. I took a slice, it was delicious!', true)).toBe(0);
    expect(containsEmoji('Checks if a string contains one or more emojis', true)).toBe(0);
});

test('Should return false if there is an empty string, whitespace, undefined, or null passed as parameter', () => {
    expect(containsEmoji('')).toBe(false);
    expect(containsEmoji()).toBe(false);
    expect(containsEmoji(' ')).toBe(false);
    // eslint-disable-next-line no-undefined
    expect(containsEmoji(undefined)).toBe(false);
    expect(containsEmoji(null)).toBe(false);

    // --| Check counts
    expect(containsEmoji('', true)).toBe(0);
    expect(containsEmoji(undefined, true)).toBe(0);
    expect(containsEmoji(' ', true)).toBe(0);
    expect(containsEmoji(null, true)).toBe(0);
});

test('Should handle various emoji types correctly', () => {
    const emojis = ['😀', '🤔', '🇺🇸', '💯', '👍', '😎', '🎉', '🔥', '✨'];

    emojis.forEach(e => {
        expect(containsEmoji(e)).toBe(true);
        expect(containsEmoji(e, true)).toBe(1);
    });

    expect(containsEmoji('This string has no emojis.')).toBe(false);
    expect(containsEmoji('Text without emojis')).toBe(false);
    expect(containsEmoji('This string has no emojis.', true)).toBe(0);
    expect(containsEmoji('Text without emojis', true)).toBe(0);
});

test('Should handle more complex and edge-case emojis', () => {
    const complexEmojis = ['👩‍💻', '👨‍👩‍👧‍👦', '🌍', '❤️', '©️', '🏳️‍🌈', '📀📄📃'];
    const expectedCounts = [1, 1, 1, 1, 1, 1, 3];

    complexEmojis.forEach((e, i) => {
        expect(containsEmoji(e)).toBe(true);
        expect(containsEmoji(e, true)).toBe(expectedCounts[i]);
    });
});

test('Should return false for numbers and booleans', () => {
    expect(containsEmoji(123)).toBe(false);
    expect(containsEmoji(true)).toBe(false);
    expect(containsEmoji(false)).toBe(false);

    expect(containsEmoji(123, true)).toBe(0);
    expect(containsEmoji(true, true)).toBe(0);
    expect(containsEmoji(false, true)).toBe(0);
});

test('Should handle strings with only whitespace and special characters', () => {
    expect(containsEmoji('   ')).toBe(false);
    expect(containsEmoji('!@#$%^&*()')).toBe(false);
    expect(containsEmoji('!@#🤔')).toBe(true);

    expect(containsEmoji('   ', true)).toBe(0);
    expect(containsEmoji('!@#$%^&*()', true)).toBe(0);
    expect(containsEmoji('!@#🤔', true)).toBe(1);
});

test('Should handle strings with a mix of emojis and non-emoji characters', () => {
    expect(containsEmoji('Hello world 🌎!')).toBe(true);
    expect(containsEmoji('This is a test with no emojis.')).toBe(false);
    expect(containsEmoji('123🤔456')).toBe(true);

    expect(containsEmoji('Hello world 🌎!', true)).toBe(1);
    expect(containsEmoji('This is a test with no emojis.', true)).toBe(0);
    expect(containsEmoji('123🤔456', true)).toBe(1);
});

test('Should correctly identify emojis at the beginning and end of a string', () => {
    expect(containsEmoji('😀Hello')).toBe(true);
    expect(containsEmoji('Hello😀')).toBe(true);
    expect(containsEmoji('😀')).toBe(true);

    expect(containsEmoji('😀Hello', true)).toBe(1);
    expect(containsEmoji('Hello😀', true)).toBe(1);
    expect(containsEmoji('😀', true)).toBe(1);
});

test('Should handle strings with multiple consecutive emojis', () => {
    expect(containsEmoji('😀😀😀')).toBe(true);
    expect(containsEmoji('🤔🤔🤔')).toBe(true);
    expect(containsEmoji('😀🤔😀')).toBe(true);

    expect(containsEmoji('😀😀😀', true)).toBe(3);
    expect(containsEmoji('🤔🤔🤔', true)).toBe(3);
    expect(containsEmoji('😀🤔😀', true)).toBe(3);
});

test('Should return false for an array', () => {
    expect(containsEmoji(['😀'])).toBe(false);
    expect(containsEmoji(['😀'], true)).toBe(0);
});

test('Should return false for an object', () => {
    expect(containsEmoji({ emoji: '😀' })).toBe(false);
    expect(containsEmoji({ emoji: '😀' }, true)).toBe(0);
});
