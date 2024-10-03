const findSubstring = function(s, words) {
    if (words.length === 0 || s.length === 0) return [];

    const wordLength = words[0].length;
    const totalLength = wordLength * words.length;
    const wordCount = new Map();

    for (const word of words) {
        wordCount.set(word, (wordCount.get(word) || 0) + 1);
    }

    const result = [];

    for (let i = 0; i <= s.length - totalLength; i++) {
        const seen = new Map();
        let j = 0;
        while (j < words.length) {
            const word = s.substr(i + j * wordLength, wordLength);
            if (!wordCount.has(word)) break;
            seen.set(word, (seen.get(word) || 0) + 1);
            if (seen.get(word) > wordCount.get(word)) break;
            j++;
        }
        if (j === words.length) result.push(i);
    }

    return result;
};
