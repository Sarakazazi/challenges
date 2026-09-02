const prompt = require('prompt-sync')();
let vitesse = (prompt(" la vitesse en kilomètres par heure"));
let ms = vitesse * 0.27778
console.log(`${vitesse} en km et la transforme en${ms}`);
