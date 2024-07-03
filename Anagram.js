/*
 Check if the provided strings are anagram, if one string holds the characters as the second string
 anagram('biG boy','boy big')// true
*/
function charMap(str) {
    let charMap = {}
    let arstr = str.toLowerCase().replace(/[\W]/g,'')
    arstr=arstr.split("")
    for (const i of arstr) {
        charMap[i] = charMap[i]+1 || 1
    }
   return charMap

}

function angram(str1,str2) {
    let Mapstr1 = charMap(str1)
    let Mapstr2 = charMap(str2)
    if(Object.keys(Mapstr1).length !== Object.keys(Mapstr2).length) return false
    for(let i of Object.keys(Mapstr1)) {
        if (Mapstr1[i] !== Mapstr2[i]) {
            return false
        }
    }
    return true
}

console.log(angram("abisss ","abiss ./"))


function anagram2(str1,str2)
{
    let Comstr1 = str1.toLowerCase().replace(/[\W]/g,'').split("").sort().join("")
    let Comstr2 = str2.toLowerCase().replace(/[\W]/g,'').split("").sort().join("")
    if (Comstr1 === Comstr2) {
        return true
    } else {
     return false   
    }
    
}
console.log(anagram2("biss a","abissn ./"))
