/*
  step(2)
   '#'
   '##'
  step(3)
  '#'
  '##'
  '###'
*/ 

function Steps(n) {
    for (let i = n; i >=0; i--) {
       let line = ""
        for (let j = i; j <= n; j++) {
            line += '#'
            
        }
        console.log(line)
    }
}

Steps(4)