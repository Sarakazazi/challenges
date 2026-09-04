const prompt = require ("prompt-sync")();
let nom = "alaa";
let alphabet = "a";
let count = 0;
for(let i = nom.length; i >= 0; i-- ){
    if(nom[i] === alphabet) {
        count++
    }
}
console.log(count)