// copyWithin()	Copies array elements within the array, to and from specified positions

// array.copyWithin(target, start, end)
// Parameter	Description
// target	Required.
// The index (position) to copy the elements to.
// start	Optional.
// The start index (position). Default is 0.
// end	Optional.
// The end index (position). Default is the array length.

let nombres = [];
//         0         1           2           3          4            5
nombres = ['Jorge' , 'Alfredo' , 'Edgardo' , 'Daniel' , 'Salvador' , 'Ricardo' ,  ];
// copia en el indice 0 lo que está desde el 1 hacia atras ...
console.log(nombres.copyWithin(0 , 1)); // -> [ 'Alfredo', 'Edgardo', 'Daniel', 'Salvador', 'Ricardo', 'Ricardo' ]
console.log('---------------------------------------------------------------------------------')
nombres = [];
nombres = ['Jorge' , 'Alfredo' , 'Edgardo' , 'Daniel' , 'Salvador' , 'Ricardo' ,  ];
// copia en la pos 0 el contenido de 1 hasta la posicion 2
console.log(nombres.copyWithin(0 , 1 , 2)); // -> [ 'Alfredo', 'Alfredo', 'Edgardo', 'Daniel', 'Salvador', 'Ricardo' ]