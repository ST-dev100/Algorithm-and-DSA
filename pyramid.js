/*
  step(2)
   ' # '
   '###'
  step(3)
  '  # '
  ' ### '
  '#####'
*/ 
function Pyramid(n) {
    const mid = Math.floor((2*n-1)/2)
    for (let i = 0; i < n; i++) {
       let line = ""
        for (let j = 0; j < 2*n-1; j++) {
            if (j>=mid - i && j <= mid + i) {
                line += '#'
            } else {

                line += " "
            }
            
        }
        console.log(line)
    }
}
Pyramid(2)