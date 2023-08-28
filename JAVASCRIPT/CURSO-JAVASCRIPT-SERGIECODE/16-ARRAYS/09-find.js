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