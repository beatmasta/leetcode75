var mergeAlternately = function(word1, word2) {
    let output = '';
    for (let i = 0; i < Math.max(word1.length, word2.length); i++) {
        output += (word1[i] || '') + (word2[i] || '');
    }
    return output;
};
