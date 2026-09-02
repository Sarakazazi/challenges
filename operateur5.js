const prompt = require('prompt-sync')();
const secondes = Number(prompt('entrer un nombre de secondes: '));
let heures = parseInt (secondes/3600);
let minutes = parseInt((heures % 3600) / 60);
let secondes = (secondes % 3600) %60 ;