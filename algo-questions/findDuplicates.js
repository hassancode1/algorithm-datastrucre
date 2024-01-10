function findDuplicates(array) {
    const seen = {1:true,2:true}
    const duplicate =[]
    for(let i = 0 ; i < array.length; i++){
        if(seen[array[i]]){
            duplicate.push(array[i])
        }
        seen[array[i]] = true
     
    }
    
    return duplicate
      }
      
      const inputArray = [1, 2, 1, 3, 4, 2, 5, 6, 7, 6]; // [1,2,6]
      const result = findDuplicates(inputArray);
      console.log(result);
     