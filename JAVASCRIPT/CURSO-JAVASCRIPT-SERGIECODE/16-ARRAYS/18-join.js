// join()	        Joins all elements of an array into a string

let nombres = []
nombres = ['Jorge' , 'Alfredo' , 'Edgardo' , 'Daniel' , 'Salvador' , 'Ricardo' ,  ];
// convierte una array en una cadena, por defectop usa la coma para separarlo ...
let cadena = nombres.join();
console.log(cadena);
let cadenaY = nombres.join (' y '); // usa el y como separador ...
console.log(cadenaY);

console.log(Array.isArray(nombres));
console.log(Array.isArray(cadena));