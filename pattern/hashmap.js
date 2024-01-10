var twoSum = function(nums, target) {
    const indices = {};
    debugger
    for (let i = 0; i < nums.length; i++) {
        const difference = target - nums[i];
        if (difference in indices) {
            return [indices[difference], i];
        }
        indices[nums[i]] = i;

    }

    return [];
    
};

console.log(twoSum([3,2,4], 5))
function findDuplicates(array) {
    debugger
    const seen = {};
    const duplicates = [];
  
    for (const value of array) {
      if (seen[value]) {
        duplicates.push(value);
      } else {
        seen[value] = true;
      }
    }
  
    return duplicates;
  }
  
  const inputArray = [1, 2, 1, 3, 4, 2, 5, 6, 7, 6];
  const result = findDuplicates(inputArray);
  console.log(result);
