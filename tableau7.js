const prompt = require("prompt-sync")();
let a = Number(prompt("entrer le nombre d'élément = "))
const tab = []
for(let i = 0 ; i < a ; i++){
    let s = Number(prompt("entrer l'élément ici = "));
}
const tab2= 0
for(let i = 0 ; i < a ; i++){
     for(let j = i + 1 ; j<a ; j++){
            if(tab[i]>tab[j])    
               tab2 = tab[i]
               tab[i] = tab[j]
               tab[j] = tab2
    }
}
console.log(tab)
