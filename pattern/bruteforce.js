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
var removeElement = function(nums, val) {
    let count = []
    for(let num of nums){
        if(num != val){
            count.push(num)
        }
    }
  
    return count
};
const twoSum = (nums, target) => {
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
console.log(twoSum([2,4,9,9,10,15,3], 5))
var strStr = function(haystack, needle) {
    debugger
    for(let i=0;i<=haystack.length-needle.length;i++){
     
      let str=""
     for(let j=i;j<i+needle.length;j++){
          str+=haystack[j]
      }
      if(str==needle){
          return i
      }

  }
  return -1

};
console.log(strStr("sadbutsad","sad"))