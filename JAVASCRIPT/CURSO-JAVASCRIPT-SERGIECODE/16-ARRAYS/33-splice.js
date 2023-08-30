// splice()	    Adds/Removes elements from an array

let nombres = [];
//          0         1           2           3          4            5
nombres = ['Jorge' , 'Alfredo' , 'Edgardo' , 'Daniel' , 'Salvador' , 'Ricardo' ,  ];
console.log('original   : ' , nombres);

// agrego Vicente y  Margarita en la posicion 2
console.log(nombres.splice(2,0,'Vicente' , 'Margarita'));
console.log('modificado : ' , nombres);

// borrar Jorge Alfredo
console.log(nombres.splice(0,2)); // borra dos items desde la posicion 0
console.log('borrar  : ' , nombres);
