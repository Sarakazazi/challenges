const prompt = require("prompt-sync")();
let n = parseInt(prompt("entrer un nombre"));
for(let i=0; i<+10; i--){
    let multipl = i*n
    console.log(`${i} * ${n} = ${multipl}`);
}