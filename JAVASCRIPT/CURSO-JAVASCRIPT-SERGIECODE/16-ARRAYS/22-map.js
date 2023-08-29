// map()	        Creates a new array with the result of calling a function for each array element

let letras = ['a' ,'e' ,'i' ,'o' ,'u' ,'x' , ]
console.log(letras);

// para cada letra dentro del array, agregarle la misma, o sea si tengo 'a', debe quedar 'aa' ..
// se crea un nuevo array con las letras dobladas ..
let index = 0;
let veces = 60;
let dobleLetraArray = letras.map((letra)=>{
    let l = '';
    for (let index = 0; index < veces; index++) {
        l = l + letra;
    }
    return l ;
})
console.log(dobleLetraArray)