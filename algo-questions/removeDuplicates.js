
const removeDuplicates = (array) =>{
    const result = []
for(let i = 0 ; i < array.length ; i++){
 if(!result.includes(array[i])){
result.push(array[i])
 }
}
return result
}
console.log(removeDuplicates([1,2,1,1,3]))
