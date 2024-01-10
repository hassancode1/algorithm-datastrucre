function removeElement(nums, val) {
    let i = 0;

    for (let j = 0; j < nums.length; j++) {
        if (nums[j] !== val) {
            nums[i] = nums[j];
            i++;
        }
    }

    return nums.slice(0, i);
}
const removeElement = function(nums, val) {
    let count = []
    for(let num of nums){
        if(num != val){
            count.push(num)
        }
    }
  
    return count
};

console.log(removeElement([3,2,2,3] , 3))