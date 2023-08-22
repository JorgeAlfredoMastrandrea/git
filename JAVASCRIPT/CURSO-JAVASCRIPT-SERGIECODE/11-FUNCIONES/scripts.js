// primera forma.. una función que devuelve un valor
function suma(a,b){
    return a+b;
}

let a = 5;
let b = 7;

console.log(`el resultado de ${a} más ${b} es : `, suma(a,b));

// segunda forma..
function transformarACelcius(fahrenheit){
    return (5/9) * (parseInt(fahrenheit)-32); // conviene parsear a int todo lo que sea números...
}
const temperaturaFahrenheit = 76
const respuesta = transformarACelcius(temperaturaFahrenheit)
console.log(parseInt(respuesta))

// ...... ojo que cuando hacemos lo siguiente, la constante se hace igual a la funcion
let z = transformarACelcius
console.log(z)
//......OJO CON LO DE ARRIBA........................................................


// LA FUNCIÓN FLECHA...!!
// NO LA PODEMOS USAR SIEMPRE..!!
let sumarDecena = (numero) => {
    return numero + 12;
}

// una forma reducida de hacer lo mismo sería : se reduce bastante la linea
let sumarOtraDecena = numero => numero + 12;

// LA FUNCIÓN TRADICIONAL SERÍA:
/*
function sumarDecena(numero){
    return numero + 12;
}
*/
console.log(sumarDecena(10))
console.log(sumarOtraDecena(10))


// cuando una función flecha no recibe parámetros:
let funcionFlechaSinParamentros = () => 12 + 10;

console.log(funcionFlechaSinParamentros())

