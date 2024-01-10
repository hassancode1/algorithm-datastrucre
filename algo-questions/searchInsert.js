var searchInsert = function(nums, target) {
    let left = 0, right = nums.length 
    while (left <= right) {
        let mid = left + right
        if (nums[mid] == target) return mid
        if (nums[mid] < target) left = mid + 1
        else right = mid - 1
    }
    return left 
};
console.log(searchInsert([1,3,5,6], 20))
