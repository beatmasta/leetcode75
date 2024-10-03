const maxArea = function(height) {
    let left = 0, right = height.length - 1;
    let max_area = 0;
    while (left < right) {
        const width = right - left;
        const current_area = Math.min(height[left], height[right]) * width;
        max_area = Math.max(max_area, current_area);
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return max_area;
};
