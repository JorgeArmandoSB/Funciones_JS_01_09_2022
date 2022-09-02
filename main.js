

let largo = Number(prompt("ingrese el largo "));
let ancho = Number(prompt("ingrese el ancho "));
let altura = Number(prompt("ingrese la altura "));



function formulaVolumenOrtoedro(l,a,alt){
    return l*a*alt ;
}

console.log(`el volumen del ortoedro es: ${formulaVolumenOrtoedro(largo,ancho,altura)}`);


