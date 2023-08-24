// set es un conjunto unico de elementos
// en el conjunto pueden haber repetidos pero solo se va a mostrar una vez  !!
let conjunto = new Set(['Pedro' , 'Ricardo' , 'Maria' , 'Ricardo']);
// para agregar elementos
conjunto.add('Luciana');

console.log(conjunto);

// para borrar un elemento
conjunto.delete('Ricardo'); // borra todos los que encuentre y no deja ninguni
console.log(conjunto);

// para saber si hay un elemento
console.log(conjunto.has('Luciana')); // si hay un elemento que coincida dice true

// para que se quite el duplicado de un array es lo que vimos antes
let muebles = ['Cama' , 'Mesa de luz' , 'Armario' , 'Cama' , 'Estante']
console.log(muebles);
// saco el duplicado
let unicaUnidad = new Set(muebles);
console.log(unicaUnidad);


// map



