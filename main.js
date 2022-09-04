
let ab = Number(prompt(`ingresa el area de la base`));
let A = Number(prompt(`ingresa la altura`));





function fomulaVolumenCilindro(areaBase,altura){
    return  Math.pow(areaBase,2)* Math.PI * altura
}

console.log(`el volumen del cilindro es : ${fomulaVolumenCilindro(ab, A)}`);


