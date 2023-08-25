// filter()	    Creates a new array with every element in an array that pass a test

let nombres = []
nombres = ['1_Jorge' , '2_Alfredo' , '1_Edgardo' , '2_Daniel' , '1_Salvador' , '2_Ricardo' , '1_Margarita' , '1_Vicente' , '3_Maria'];

// quiero las cadenas de nombres que empiezan con 1 ..
let nuevoArrayDeNombres = nombres.filter(x = (nombre) => {    
    if (nombre.substring(0,1) === '1') return nombre;

})

console.log(nuevoArrayDeNombres);

