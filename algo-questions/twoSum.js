//brute force
const twoSums = (nums, target) => {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            const sum = nums[i] + nums[j];
            if (sum === target) {
                return [i, j];
            }
        }
    }
    return [-1, -1];
};
// two pointer
const twoSumt = (nums, target) => {
let  start = 0
let end = nums.length - 1

while(start <= end){
    const sum = nums[start] + nums[end]
    if(sum === target){
        return [start,end ]
    }else if (sum < target){
        start +=1
    }else{
        end-=1
    }
 
}
return [-1,-1]
}
// hashmap
const twoSume = function(nums, target) {
    const indices = {};

    for (let i = 0; i < nums.length; i++) {
        const difference = target - nums[i];
        if (difference in indices) {
            return [indices[difference], i];
        }
        indices[nums[i]] = i;

    }

    return [];
    
};

console.log(twoSum([2,4,9,9,10,15,3], 5))
console.log(twoSum([3,2,4], 6))