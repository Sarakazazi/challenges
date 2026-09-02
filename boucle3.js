const prompt = require('prompt-sync')();
const X = parseInt(prompt("entrer un nombre entier = "));
 let somme = 0;
for (let i=1 ; i<=X ; i++){
   somme = somme + i;
}
 console.log(somme);
