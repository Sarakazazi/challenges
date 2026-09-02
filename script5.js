const prompt = require('prompt-sync')();
let temp = (prompt("entrer la température en Celsius"));
if (temp<0){
    console.log("l'état de l'eau est solide");
}
else if(0<=temp<100){
    console.log("l'état de l'eau est liquide");
}
else {
    console.log("l'état de l'eau est gaseux");
}