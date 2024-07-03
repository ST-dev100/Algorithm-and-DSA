//Write a program which accepts number and counting the number upto n size when it logs the list of numbers if the 
//multiple by 3 instead of the numbet it will display fizz,multiple by 5 it will display buzz , and if it is both fizzBuzz

function fizzBuzz(number) {
    for (let i = 1; i < number; i++) {
        if ((i % 3 === 0) && (i % 5 === 0)) {
            console.log("fizzBuzz")
        } else if((i % 5 === 0)){
            console.log("Buzz")
            
        }
        else if((i % 3 === 0)){
            console.log("fizz")
            
        }else{
            console.log(i)
        }        
    }
}

fizzBuzz(16)