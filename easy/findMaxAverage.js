const findMaxAverage = function(nums, k) {
    let max_sum = 0;
    for (let i = 0; i < k; i++) {
        max_sum += nums[i];
    }

    let current_sum = max_sum;
    for (let i = k; i < nums.length; i++) {
        current_sum += nums[i] - nums[i - k];
        max_sum = Math.max(max_sum, current_sum);
    }

    return max_sum / k;
};
