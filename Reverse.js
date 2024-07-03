/*
Givan a string and return a new string which is the reversed oreder of characters
Examples:
 reverse("hi") // "ih"
 reverse("simon") // "nomis"
*/

function reverse(string) {
    let reverseString = ""
    for (let i = 0; i < string.length; i++) {
        reverseString = string[i] + reverseString
    }
    return reverseString
}

console.log(reverse("simon"))


function reverse2(string) {
    let strArr = string.split("")
    strArr.reverse()
    let reverseString = strArr.join("")
    return reverseString
}

console.log(reverse2("you"))


/*
Reverse Integers 
example reverseInt(123) // 321
*/
function reverseInt(number) {
   return Number(number.toString().split("").reverse().join(""))
}

console.log(reverseInt(123))