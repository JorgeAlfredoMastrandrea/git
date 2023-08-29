// indexOf()	    Search the array for an element and returns its position

const numeroBuscado = 1;
let arrayNumeros = [ 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 , 11 , 4 , 12 , 15 , 1];
console.log(arrayNumeros.indexOf(numeroBuscado)); // va a devolver el primero que encuentre de izquierda a derecha ..
console.log('-----------------------------------------------------')
// pŕactica: devolver todos los índices en donde se encuentra el elemento solicitdado ..usando forEach
let index = 0;
let numeros = arrayNumeros.forEach((numero) =>{    
    if (numero == numeroBuscado){
        console.log(index);
    }
    index++;
})
console.log('-----------------------------------------------------')
// lo mismo de arriba pero usando la funcion indexOf y el operador ternario..
index = 0;
numeros = arrayNumeros.forEach((numero) =>{
    (arrayNumeros[index] == numeroBuscado) ? console.log(arrayNumeros.indexOf(numeroBuscado , index)) : false;
    index++;
})
console.log('-----------------------------------------------------')