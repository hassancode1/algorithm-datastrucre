
function binarySearchWithForLoop(array, item) {
    for (let start = 0, end = array.length - 1; start <= end;) {
      const middle = Math.floor((start + end) / 2);
      
      if (item < array[middle]) {
        end = middle - 1;
      } else if (item > array[middle]) {
        start = middle + 1;
      } else {
        return middle;
      }
    }
    
    return -1;
  }
function binarySearchWithWhileLoop(array, item) {
    let start = 0;
    let end = array.length - 1;

    while (start <= end) {
        const middle = Math.floor((start + end) / 2);

        if (item === array[middle]) {
            return array[middle];
        }

        if (item < array[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
    }

    return -1;
}

console.log(binarySearch([1,2,3,4], 2))
console.log(binarySearch([1,2,3,4], 5))
console.log(binarySearch([1,2,3,4], 3))
