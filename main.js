
let r = Number(prompt(`ingresa la medida del radio`));






function fomulaVolumenEsfera(medidaRadio,){
    return  Math.pow(medidaRadio,3)* (4/3)* Math.PI
}

console.log(`el volumen de la esfera es : ${fomulaVolumenEsfera(r)}`);


