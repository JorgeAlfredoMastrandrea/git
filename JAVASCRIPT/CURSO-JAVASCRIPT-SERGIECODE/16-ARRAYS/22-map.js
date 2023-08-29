// map()	        Creates a new array with the result of calling a function for each array element

let letras = ['a' ,'e' ,'i' ,'o' ,'u' ,'x' , ]
console.log(letras);

// para cada letra dentro del array, agregarle la misma, o sea si tengo 'a', debe quedar 'aa' ..
// se crea un nuevo array con las letras dobladas ..
let index = 0;
let dobleLetraArray = letras.map((letra)=>{
    return letra+letra ;
})
console.log(dobleLetraArray)