const prompt = require("prompt-sync")();

function addition(N1, N2) {
    return N1 + N2;
}

function multiplication(N1, N2) {
    return N1 * N2;
}

function division(N1, N2) {
    return N1 / N2;
}

function soustraction(N1, N2) {
    return N1 - N2;
}

function afficheTableau() {
    console.log("1 - addition");
    console.log("2 - multiplication");
    console.log("3 - division");
    console.log("4 - soustraction");
    console.log("5 - quitte");
}

afficheTableau();

let choisie = parseInt(prompt("Choisis un nombre : "));
let N1
let N2
switch (choisie) {

    case 1:
       N1 = parseInt(prompt("Entrer un nombre : "));
       N2 = parseInt(prompt("Entrer un nombre : "));
        console.log(addition(N1, N2));
        break;

    case 2:
        N1 = parseInt(prompt("Entrer un nombre : "));
        N2 = parseInt(prompt("Entrer un nombre : "));
        console.log(multiplication(N1, N2));
        break;

    case 3:
        N1 = parseInt(prompt("Entrer un nombre : "));
        N2 = parseInt(prompt("Entrer un nombre : "));
        console.log(division(N1, N2));
        break;

    case 4:
        N1 = parseInt(prompt("Entrer un nombre : "));
        N2 = parseInt(prompt("Entrer un nombre : "));
        console.log(soustraction(N1, N2));
        break;

    case 5:
        console.log("Quitter le programme");
        break;

    default:
        console.log("Ce numéro n'est pas valide");
}
