const prompt = require('prompt-sync')();
const N = Number(prompt("entrer un nombre = "))
for(let i=1; i<=10; i++){
    let multipl = i* N
    console.log(`${i} x ${N} = ${multipl} `)
} 