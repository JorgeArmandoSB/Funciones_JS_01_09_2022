

let pi  = 3.1416;
let r = Number(prompt(`ingresa el radio`))




function fomulaAreaCirculo(radio,perimetro){
    return Math.pow(radio,2)*perimetro;
}

console.log(`el Area del circulo es: ${fomulaAreaCirculo(r,pi)}`);


