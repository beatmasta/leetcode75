const isMatch = function(string, pattern) {
    const dpTable = Array(string.length + 1).fill(null).map(() => Array(pattern.length + 1).fill(false));
    dpTable[0][0] = true;

    for (let patternIndex = 1; patternIndex <= pattern.length; patternIndex++) {
        if (pattern[patternIndex - 1] === '*') {
            dpTable[0][patternIndex] = dpTable[0][patternIndex - 2];
        }
    }

    for (let stringIndex = 1; stringIndex <= string.length; stringIndex++) {
        for (let patternIndex = 1; patternIndex <= pattern.length; patternIndex++) {
            if (pattern[patternIndex - 1] === string[stringIndex - 1] || pattern[patternIndex - 1] === '.') {
                dpTable[stringIndex][patternIndex] = dpTable[stringIndex - 1][patternIndex - 1];
            } else if (pattern[patternIndex - 1] === '*') {
                dpTable[stringIndex][patternIndex] = dpTable[stringIndex][patternIndex - 2];
                if (pattern[patternIndex - 2] === string[stringIndex - 1] || pattern[patternIndex - 2] === '.') {
                    dpTable[stringIndex][patternIndex] = dpTable[stringIndex][patternIndex] || dpTable[stringIndex - 1][patternIndex];
                }
            }
        }
    }

    return dpTable[string.length][pattern.length];
};
