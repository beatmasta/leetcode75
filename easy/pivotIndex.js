const pivotIndex = function(nums) {
    const total_sum = nums.reduce((acc, num) => acc + num, 0);
    let left_sum = 0;

    for (let i = 0; i < nums.length; i++) {
        if (left_sum === total_sum - left_sum - nums[i]) {
            return i;
        }
        left_sum += nums[i];
    }

    return -1;
};
