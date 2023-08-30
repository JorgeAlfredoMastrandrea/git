// some()	        Checks if any of the elements in an array pass a test

let nombres = [];
//          0         1           2           3          4            5
nombres = ['Jorge' , 'Alfredo' , 'Edgardo' , 'Daniel' , 'Salvador' , 'Ricardo' ,  ];
console.log('original                 : ' , nombres);

function checkNombre(nombre){
    return nombre == 'Salvador';
}
console.log(nombres.some(checkNombre));
console.log('----------------------------------------------');

// cuando encuentra el primero, corta la búsqueda ...
let elNombreABuscar = 'Edgardo';
let respuesta = nombres.some((nombre , index) => {
    console.log(nombre , index);
    return nombre == elNombreABuscar;
})

console.log(respuesta)