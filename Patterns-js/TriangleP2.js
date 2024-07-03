/*
1
2 2
3 3 3
4 4 4 4
5 5 5 5 5

*/

function TrianglePattern(num) {
    for (let i = 1; i <= num; i++) {
        let s = ''
        for (let j = 1; j <= i; j++) {
           s += i+" "    
        }
        console.log(s)
    }
}
TrianglePattern(5)