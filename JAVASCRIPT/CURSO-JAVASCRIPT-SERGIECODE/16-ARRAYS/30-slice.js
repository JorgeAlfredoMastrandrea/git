// slice()	        Selects a part of an array, and returns the new array

let nombres = [];
//          0         1           2           3          4            5
nombres = ['Jorge' , 'Alfredo' , 'Edgardo' , 'Daniel' , 'Salvador' , 'Ricardo' ,  ];
console.log('original                 : ' , nombres);

const inicio = 2;
const fin    = 6;
let nombresSlice = nombres.slice(inicio,fin); // va a recortar desde Edgardo inclusive
console.log('queda los siguiente      ; ' , nombresSlice);