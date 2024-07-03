/*
  Given string,return true when it is pailndrome
  example 
    pailndrome('madam') // true
    pailndrome('simon') // false
*/

function pailndrome(string) {
    return string==string.split("").reverse().join("")
}

console.log(pailndrome("madam"))
console.log(pailndrome("sima"))
