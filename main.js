

let baseMayor = Number(prompt("ingrese el diagonale mayor"));
let baseMenor = Number(prompt("ingrese el diagonal menor"));
let altura = Number(prompt("ingrese la altura"));

function formulaAreaTrapecio(baseMayor,baseMenor){
    return baseMayor * baseMenor;
}

console.log(`el area del trapecio es: ${formulaAreaTrapecio(baseMayor, baseMenor /2 * altura)}`);


