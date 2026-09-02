const prompt =require("prompt-sync")();
let n = parseInt(prompt("entrer un nombre entier = "));
for(let i=1; i<=n; i++){
    console.log(2*i);
}