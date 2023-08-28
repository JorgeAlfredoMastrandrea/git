// findIndex()	    Returns the index of the first element in an array that pass a test
// https://www.w3schools.com/jsref/jsref_findindex.asp

let nombres = []
nombres = ['Jorge' , 'Alfredo' , 'Edgardo' , 'Daniel' , 'Salvador' , 'Ricardo' ,  ];

let elNombreQuBusco = 'Edgardo';



const resultado = nombres.findIndex(x = (currentValue , index , arr , thisValue ) =>{
    if (currentValue === elNombreQuBusco) {   
        console.log(currentValue , ' ', index , ' ' , arr , ' ' , thisValue) // imprimo el nombre que encontró, el índice y el array completo
        console.log('encontré el nombre que buscaba :  ' , currentValue)        
    }else{
        console.log(currentValue , 'no es el que estoy buscando')
    }
})

console.log('-------------------------------------------------------------------------------------------------')
///////////////////////////////////////////////////////////////////////////////////////////////

nombres_2 = ['Jorge' , 'Alfredo' , 'Edgardo' , 'Jorge' , 'Salvador' , 'Alfredo' ,  ];
const res_2 = nombres_2.findIndex(buscarElPrimero)
function buscarElPrimero(nombre){
    return nombre == 'Alfredo';
}
console.log(res_2) // va a retornar un indice del primer elemento que cumpla esa condición..

