/*
Capitalize the first letter of each words
captalize("what is your name") // What Is Your Name
*/

function capitalize(words) {
    words = words.split(" ")
    let arr = []
    for(let i of words) {
       arr.push(i[0].toUpperCase() + i.slice(1))
    }
   
    return arr.join(" ")
}
console.log(capitalize("what is your name boss"))