/*
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
*/

function TrianglePattern(n) {
    for (let i = 1; i <= n; i++) {
        let n = ''
        for (let j = 1; j <= i; j++) {
           n += j         
        }   
        console.log(n)     
    }
}

TrianglePattern(4)