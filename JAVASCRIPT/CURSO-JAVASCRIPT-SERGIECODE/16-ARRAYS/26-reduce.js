// reduce()	    Reduce the values of an array to a single value (going left-to-right)

let arrayNumeros = [1 , 2 , 3 , 4 , 5 , 6, 7];
const valorInicial = 10;
let sumaTodos = arrayNumeros.reduce((acum , currentValue) => acum + currentValue , valorInicial)
console.log(sumaTodos);