const prompt = require("prompt-sync")();
let a = Number(prompt("entrer le nombre des éléments = "))
let max = 0
tab = []
for(let i = 0 ; i < a ; i++){
    let s = Number(prompt("entrer l élément ici = "))
    tab.push(s)
 if(s > max)
    max = s  
}
console.log(tab)
console.log(max)