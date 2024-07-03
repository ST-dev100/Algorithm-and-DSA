/*
in the Given String find character that is the most
example 
  MaxChar("abbaccccaccc")  // c
*/

function MaxChar(str) {
    const charMap = {}
    let max = 0;
    let maxChar = ""
    for (let i = 0; i < str.length; i++) {
        if (charMap[str[i]]) {
            charMap[str[i]] = charMap[str[i]] + 1
        } else {
            charMap[str[i]] = 1
        }
        
    }
    let charMepEnteries = Object.entries(charMap)
    for (const [key,value] of charMepEnteries) {
        if (value>max) {
            max = value;
            maxChar = key;
        }
    }
    return maxChar
}

console.log(MaxChar("aabbaccaccacacca"))


function MaxChar2(str) {
    const charMap = {}
    let max = 0;
    let maxChar = ""
    for (let i = 0; i < str.length; i++) {
       
            charMap[str[i]] = charMap[str[i]] + 1 || 1
        
    }

    for (const key in charMap) {
        if (charMap[key]>max) {
            max = charMap[key];
            maxChar = key
        }
    }
    return maxChar
}

console.log(MaxChar2("aabbbbbbbbbbbbbbbaccaccacacca"))
