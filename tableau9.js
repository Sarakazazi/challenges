const prompt = require("prompt-sync")();
let a = Number(prompt("entrer le nombre d'élément = "))
const tab = []
const tab2 = []
for(let i = 0 ; i < a ; i++){
    let s =  Number(prompt("entrer l'élément = "))
         tab.push(s)
         s.sort((a, b) => a - b)
}
for(let i=tab.length-1; i>=0 ; i--){
    tab2.push(tab[i])
}
console.log(tab)
console.log(tab2)

