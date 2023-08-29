// lastIndexOf()	Search the array for an element, starting at the end, and returns its position

// busca de derecha a izquierda ..
let numeroBuscado = 4;
let posicion = 5;
//                   0   1   2   3   4   5   6   7   8   9    10   11  12   13   14
let arrayNumeros = [ 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 , 11 , 4 , 12 , 15 , 1];

console.log(`el último índice del número buscado ${numeroBuscado} en el array es : ` , arrayNumeros.lastIndexOf(numeroBuscado));

console.log(`empezando desde la posicion ${posicion} ,  ${numeroBuscado} en el array está en la  : ` , arrayNumeros.lastIndexOf(numeroBuscado , 5));