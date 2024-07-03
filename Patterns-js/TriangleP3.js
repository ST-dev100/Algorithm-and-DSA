/*
1
2 3
4 5 6
7 8 9 10
*/

function TrianglePattern(num) {
    let v = 1;

    for (let i = 1; i <= num; i++) {
        let s = ''
        for (let j = 1; j <= i; j++) {
           s += v+" "  
           v++  
        }
        console.log(s)
    }
}
TrianglePattern(5)