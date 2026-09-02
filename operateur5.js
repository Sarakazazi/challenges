let tsecond = parseFloat(prompt("Entrez le nombre de secondes :"));

let heures = parseInt(tsecond / 3600);

let reste = tsecond % 3600;

let minutes = parseInt(reste / 60);

let secondes = reste % 60;

console.log("Heures :", heures);
console.log("Minutes :", minutes);
console.log("Secondes :", secondes);