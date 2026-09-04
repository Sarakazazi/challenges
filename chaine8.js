const PromptSync = require("prompt-sync")();
let alphabet =prompt("entrer des letres = ")
let a = alphabet % 10
let b =(alphabet/10)%10
let c =(alphabet/100)%10
let d  =(alphabet/1000)%10  
console.log(a,b,c,d);