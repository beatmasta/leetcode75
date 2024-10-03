const maxVowels = function(s, k) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    let max_vowels = 0;
    let current_vowels = 0;

    for (let i = 0; i < k; i++) {
        if (vowels.has(s[i])) {
            current_vowels++;
        }
    }

    max_vowels = current_vowels;

    for (let i = k; i < s.length; i++) {
        if (vowels.has(s[i])) {
            current_vowels++;
        }
        if (vowels.has(s[i - k])) {
            current_vowels--;
        }
        max_vowels = Math.max(max_vowels, current_vowels);
    }

    return max_vowels;
};
