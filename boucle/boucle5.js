const prompt = require("prompt-sync")();
let base = parseInt(prompt("entrer un nombre entier base= "));
let exposant = parseInt(prompt("entrer un nombre entier exposant= "));
let result = 1;
for(let i=1; i<=exposant; i++){
    result *= base;
    console.log(result);
}
