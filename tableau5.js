const prompt = require("prompt-sync")();
let f = Number(prompt("entrer le nombre d'éléments = "))
let min = f 
tab = []
for(let i = 0 ; i < f ; i++){
    let m = Number(prompt("entrer l'élément ici = "))
    tab.push(m)
    if(m < min){
        min = m
    }
}
console.log(tab)
console.log(min)