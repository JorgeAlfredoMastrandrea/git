// find()	        Returns the value of the first element in an array that pass a test
// https://www.w3schools.com/jsref/jsref_find.asp

let nombres = []
nombres = ['Jorge' , 'Alfredo' , 'Edgardo' , 'Daniel' , 'Salvador' , 'Ricardo' ,  ];

let elNombreQuBusco = 'Daniel';

let resultado = nombres.find(x = (nombre , index , arr)   => {
    // si es el nombre que buscamos, devuelvo el nombre
    if (nombre === elNombreQuBusco) {   
        console.log(nombre , ' ' ,  index , ' ' , arr ) // imprimo el nombre que encontró, el índice y el array completo
        console.log('encontré el nombre que buscaba :  ' , nombre)        
    }else{
        console.log(nombre , 'no es el que estoy buscando')
    }
}) // se va a ejecutar para todos los elementos del array .. no se puede romper el análisis..

///////////////////////////////////////////////////////////////////////////////////////////

// contar las vocales de un string usando find y from...
let nombresString = "Jorge,Alfredo,Edgardo,Daniel,Salvador,Ricardo"
const vocales = ['a' , 'e' ,'i' ,'o' ,'u' , 'A' , 'E' ,'I' ,'O' ,'U' , ]
// convierto el string en un array ..
const arrayLetras = Array.from(nombresString);
// ahora busco las vocales ..
let c_a = 0
let c_e = 0
let respuestaVocales = arrayLetras.find(x = (vocal) => {
    if (vocal == 'a') c_a++;
    if (vocal == 'e') c_e++;
    // y así sucesivamente.. pero no es lo que me gusta...
})

console.log(c_a)
console.log(c_e)

console.log('op 1 ---------------------------------------------------')
//////// optimizando un poco ...??
let cantidad = 0;
let respVocales = vocales.forEach((vocal) => {
    let respuestaLetras = arrayLetras.find((letra) => {
        // imprimi si está pero no te dice cuántas hay de cada una ..
        if (vocal == letra) {
            console.log(vocal)
            cantidad++;
        }
    })
    console.log(cantidad)
    cantidad = 0;
})

console.log('op 2 ---------------------------------------------------')
let a = 0;
let e = 0;
let i = 0;
let o = 0;
let u = 0;
let A = 0;
let E = 0;
let I = 0;
let O = 0;
let U = 0;
let respVocales2 = vocales.forEach((vocal) => {
    let respuestaLetras = arrayLetras.find((letra) => {
        // imprimi si está pero no te dice cuántas hay de cada una ..
        if (vocal == letra && vocal == 'a') a++;
        if (vocal == letra && vocal == 'e') e++;
        if (vocal == letra && vocal == 'i') i++;
        if (vocal == letra && vocal == 'o') o++;
        if (vocal == letra && vocal == 'u') u++;

        if (vocal == letra && vocal == 'A') A++;
        if (vocal == letra && vocal == 'E') E++;
        if (vocal == letra && vocal == 'I') I++;
        if (vocal == letra && vocal == 'O') O++;
        if (vocal == letra && vocal == 'U') U++;

    })   
})

let voc = {
    'a' : a ,
    'e' : e ,
    'i' : i ,
    'o' : o ,
    'u' : u ,

    'A' : A ,
    'E' : E ,
    'I' : I ,
    'O' : O ,
    'U' : U ,
}

console.log(voc)
