const prompt = require("prompt-sync")();

function addition(N1,N2){
    return N1 + N2;
}

function multiplication(N1,N2){
    return N1 * N2;
}

function division(N1,N2){
    return N1 / N2;
}

function soustraction(N1,N2){
    return N1 - N2;
}

function aficheTbleau() {
console.log(`1-addition`);
console.log(`2-multiplication`);
console.log("3-division");
console.log(`4-subtraction`);
console.log(`5-Quitte`);
}
aficheTbleau()
let choisie = parseInt(prompt("choisis un nombre: "));
let N1
let N2
switch(choisie)
{
    case 1 :
        console.log("1-addition");
         N1 = parseInt(prompt("entrer un nombre: "))
         N2 = parseInt(prompt("entrer un nombre: "))
        console.log(addition(N1,N2))
    break;
    case 2 :
        console.log("2-multiplication");
         N1 = parseInt(prompt("entrer un nombre: "));
         N2 = parseInt(prompt("entrer un nombre: "));
        console.log(multiplication(N1,N2));
    break;
    case 3 :
        console.log("3-division");
        N1 = parseInt(prompt("entrer un nombre: "));
         N2 = parseInt(prompt("entrer un nombre: "));
        console.log(division(N1,N2))
    break;
    case 4 :
        console.log("4-subtraction");
         N1 = parseInt(prompt("entrer un nombre: "));
         N2 = parseInt(prompt("entrer un nombre: "));
        console.log(soustraction(N1,N2));
    break;
    case 5 :
        console.log("5-Quitter");
       break;

    default :
      console.log("ce numero n est pas valider: ");
    }