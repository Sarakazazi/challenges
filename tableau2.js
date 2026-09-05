const prompt = require("prompt-sync")();
let n = Number(prompt("entrer le nombre des element = "))
Tab =[]
for(let i = 0 ; i < n ; i++){
    let e = Number(prompt("entrer l element ici = "))
    Tab.push(e)
}
 console.log(Tab)