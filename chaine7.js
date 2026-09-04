const prompt = require("prompt-sync")();
let Nom =prompt("entrer un nom = ");

let str2 = "";

for(let i = 0; i < Nom.length ; i++ ){
    
    if (Nom[i]!==" " ){
        str2 = str2 + Nom[i]
    }
}
console.log(str2)