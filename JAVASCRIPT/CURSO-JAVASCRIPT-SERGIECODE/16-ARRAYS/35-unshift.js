// unshift()	    Adds new elements to the beginning of an array, and returns the new length

let nombres = [];
//          0         1           2           3          4            5
nombres = ['Jorge' , 'Alfredo' , 'Edgardo' , 'Daniel' , 'Salvador' , 'Ricardo' ,  ];
console.log('original           : ' , nombres);
console.log('longitud del array : ' , nombres.length);
let longitud = nombres.unshift('Margarita' , 'Vicente');
console.log('el array fue modificado ' , nombres);
console.log('cambió la longitud : ' , longitud)
