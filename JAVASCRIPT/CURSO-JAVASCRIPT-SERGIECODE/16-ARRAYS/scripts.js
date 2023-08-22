const arrayCursos = [
    'curso HTML' , 
    'curso CSS' , 
    'curso JS'
];
console.log(arrayCursos);

const array = new Array(7); // inicializo un array con 5 elementos vacíos.
array[0] = 'Curso HTML';
array[1] = 'Curso CSS';
array[2] = 'Curso JS';
array[3] = 99;
array[5] = {nombre : 'Jorge'};
console.log(array);

console.log(array[4]); // undefined (está declarado pero no tiene valor)

const array2 = [3,5,7,1,4,9];
console.log(array2.sort())

const array3 = ['r','x','w','a','c'];
console.log(array3.sort())


document.getElementById('array').innerHTML = array;