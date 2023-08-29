// includes()	    Check if an array contains the specified element

let nombres = []
nombres = ['Jorge' , 'Alfredo' , 'Edgardo' , 'Daniel' , 'Salvador' , 'Ricardo' ,  ];
// va a devolver true
console.log( nombres.includes('Alfredo')); // devuleve true..
// va a devolver false
console.log( nombres.includes('alfredo')); // devuleve false.. es case sensitive
// va a devolver false
console.log( nombres.includes('Alfredo',2)); // devuleve false.. porque Alfredo está en el indice 1 y no desde el 2
