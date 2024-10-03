const compress = function(chars) {
    let write = 0, anchor = 0;
    for (let read = 0; read < chars.length; read++) {
        if (read + 1 === chars.length || chars[read + 1] !== chars[read]) {
            chars[write++] = chars[anchor];
            if (read > anchor) {
                const count = (read - anchor + 1).toString();
                for (let char of count) {
                    chars[write++] = char;
                }
            }
            anchor = read + 1;
        }
    }
    return write;
};
