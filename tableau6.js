
const prompt = require("prompt-sync")();
let a =Number(prompt("entrer le nombre d'élément = "))
let facture = 3
tab = []
for(let i = 0 ; i < a ; i++){
     let s =Number(prompt("entrer l'élément ici = "))
     tab.push(s * facture )     
    }
    console.log(tab)
    
