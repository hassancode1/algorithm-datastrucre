function binarySearch(array, needle){
    let low = 0
    let high = array.length
   const mid = Math.floor(low + (low - high) / 2)
    for(let i = 0 ; i < array.length; i++){
        if(mid[i] === needle){
            return true
        }else if(mid[i] > needle){
            high = low
        }else{
            low = mid[i] + 1
        }
      
    }
}

const twoSum = (nums, target) => {
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
var searchInsert = function(nums, target) {
    debugger
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