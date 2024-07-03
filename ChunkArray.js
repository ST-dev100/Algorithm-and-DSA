/*
 divide the Array into chunks of subArray
 exmaple chunkArray([1,2,3,4],2) // [[1,2],[3,4]] 
*/

function chankArray(array,size) {
    let result = []
    let index = 0;
    while (index<array.length) {
        result.push(array.slice(index,index+size))
        index = index + size
        
    }

    return result
}

console.log(chankArray([1,2,3,4,9,0,8],3))