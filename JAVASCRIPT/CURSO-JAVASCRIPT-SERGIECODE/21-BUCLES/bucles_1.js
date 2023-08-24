///////////////////////////////////////////// para arrays ////////////////////////////////////////
let tecnologias = ['HTML' , 'CSS' , 'JAVASCRIPT' ,'REACT' ,'ANGULAR' , ];

// for clásico
for (let index = 0; index < tecnologias.length; index++) {
    const element = tecnologias[index];
    console.log(element);
}
console.log('------------------------------------')
// for of
for(tecnologia of tecnologias){
    console.log(tecnologia);
}
console.log('------------------------------------')
// for in (para objetos)
const alumno = {
    nombre : 'Ricardo',
    edad : 25,
    tecnologias : ['HTML' , 'CSS']
}

for (const clave in alumno) {
    console.log(clave);
}
console.log('-------recorriendo el objeto completo ----------------------------')
for (const [clave , valor] of Object.entries(alumno)) {
    console.log(`${clave} : ${valor}`);
}
console.log('------------------------------------')

// for each
let numeros = [1,2,3,4,5,6,7,8,9];

numeros.forEach(numero => {
    console.log(numero)
});

////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// bucles lógicos ///////////////////////////////////////////////
