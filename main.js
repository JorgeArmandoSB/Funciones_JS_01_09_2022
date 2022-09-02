

let perimetro = Number(prompt("ingrese el perimetro"));
let apotema = Number(prompt("ingrese el apotema"));


function formulaPoligonoRegular(perimetro,apotema){
    return perimetro /2 * apotema;
}

console.log(`el area del Polígono regular es: ${formulaPoligonoRegular(perimetro,apotema)}`);


