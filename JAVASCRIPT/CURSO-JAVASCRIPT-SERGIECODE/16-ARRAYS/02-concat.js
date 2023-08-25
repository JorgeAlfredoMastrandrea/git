// concat()	    Joins arrays and returns an array with the joined arrays
let nombres = [];
let nombres_1 = ['Jorge' , 'Alfredo'];
let nombres_2 = ['Edgardo' , 'Daniel'];
let nombres_3 = ['Salvador' , 'Ricardo'];

// concatenar todos los arrays ... 
console.log('forma 1 ' , nombres_1.concat(nombres_2).concat(nombres_3));

nombres_1 = ['Jorge' , 'Alfredo'];
nombres = nombres.concat(nombres_1).concat(nombres_2).concat(nombres_3);
console.log('forma 2 ' , nombres);

// otra forma, mas reducida
nombres = [];
console.log('forma 3 ' , nombres.concat(nombres_1,nombres_2,nombres_3));