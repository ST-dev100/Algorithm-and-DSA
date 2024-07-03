//Write a function that retuns the number of vowls from a given characters

function Vowels(chars) {
    let map = {}
    for (const i of chars) {
        if ((i==='a')||(i==='e')||(i==='i')||(i==='o')||(i==='u')) {
            map[i] = map[i] + 1 || 1
        }
    }
    return Object.values(map).reduce((start,next)=>start+next)
}

console.log(Vowels("alemitu uyet"));

//Another method to do counting vowles

function Vowels2(chars) {
    let listOfVowels = ['a','e','i','o','u'];
    let count = 0;
    for (const i of chars) {
        if(listOfVowels.includes(i.toLowerCase())) count++
    }
    return count
}
console.log(Vowels2("aleMItu uyet"));
