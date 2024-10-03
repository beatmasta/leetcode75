const closeStrings = function(word1, word2) {
    if (word1.length !== word2.length) {
        return false;
    }

    const freq1 = new Map();
    const freq2 = new Map();
    const set1 = new Set(word1);
    const set2 = new Set(word2);

    if (set1.size !== set2.size || [...set1].some(char => !set2.has(char))) {
        return false;
    }

    for (const char of word1) {
        freq1.set(char, (freq1.get(char) || 0) + 1);
    }

    for (const char of word2) {
        freq2.set(char, (freq2.get(char) || 0) + 1);
    }

    const sortedFreq1 = [...freq1.values()].sort((a, b) => a - b);
    const sortedFreq2 = [...freq2.values()].sort((a, b) => a - b);

    return sortedFreq1.join('') === sortedFreq2.join('');
};
