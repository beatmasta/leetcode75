const longestOnes = function(nums, k) {
    let left = 0, right = 0;
    let max_length = 0;
    let zero_count = 0;

    while (right < nums.length) {
        if (nums[right] === 0) {
            zero_count++;
        }

        while (zero_count > k) {
            if (nums[left] === 0) {
                zero_count--;
            }
            left++;
        }

        max_length = Math.max(max_length, right - left + 1);
        right++;
    }

    return max_length;
};
