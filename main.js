

let b = Number(prompt("ingrese la base del triangulo"));
let h = Number(prompt("ingrese la altura del triangulo"));

function formulaAreaTriangulo(base,altura){
    return base * altura;
}

console.log(`el area del rectangulo es: ${formulaAreaTriangulo(b, h /2)}`);


