
const prompt = require('prompt-sync')();
let km = Number(prompt("entrer la distance en kilometre :"));
let yards = km * 1093.61;
console.log(`${km} equivalent ${yards} en yards`);