// every()	        Checks if every element in an array pass a test
let nombres = []
nombres = ['Jorge' , 'Jorge' , 'Jorge' , 'Jorge' , 'Jorge' , 'Jorge' , 'Jorge' , 1 , 'Alfredo'];

// 1
let resultado1 = nombres.every(checkSiElemtosEsJorge);

function checkSiElemtosEsJorge(esCadena){
    if (esCadena == 'Jorge') return true;
}
console.log('en todo el array está el string Jorge : ' , resultado1)

// 2
let resultado2 = nombres.every(checkSiString);

function checkSiString(elemento){
    if (typeof elemento === 'string') return true     
}
console.log('en todo el array hay cadena de texto  : ' , resultado2);

console.log('-------------------------------------------------------------------');

// usando funcion flecha
let resultado3 = nombres.every(nombreFuncion = (nombre) =>{
    if (nombre == 'Jorge') return true;
})
console.log('en todo el array está el string Jorge : ' , resultado3)

let resultado4 = nombres.every(nombreFuncion = (nombre) =>{
    if (typeof nombre === 'string') return true
})
console.log('en todo el array hay cadena de texto  : ' , resultado4)