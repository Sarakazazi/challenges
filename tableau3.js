const prompt = require("prompt-sync")();
let x = Number(prompt("entrer  le nombre d'éléments = "))
let somme = 0
tab = []
for(let i = 0 ; i < x ; i++){
    let y = Number(prompt("entrer les éléments = "))
   tab.push(y)
   somme =  somme + y
}
 console.log(tab)
console.log(somme)