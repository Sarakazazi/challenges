const prompt = require('prompt-sync')();
let n = parseInt(prompt("un nombre entier positif pour la factorielle = "));
let factorielle = 1;
for(let i=1; i<=n ; i++){
    factorielle = factorielle *  i ;
}
console.log(`result = ${factorielle}`);
