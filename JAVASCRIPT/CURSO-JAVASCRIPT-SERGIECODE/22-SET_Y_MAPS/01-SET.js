// EL CONJUNTO DEBE SER UN ARRAY O UN OBJETO {'A','B','C',..} , NO UN OBJETO CON KEY VALUE !!

// es un conjunto único de elementos
// A JavaScript Set is a collection of unique values.
// Each value can only occur once in a Set.

/*
Essential Set Methods
--------------------------------------------------------------
Method	    Description
new Set()	Creates a new Set
add()	    Adds a new element to the Set
delete()	Removes an element from a Set
has()	    Returns true if a value exists in the Set
forEach()	Invokes a callback for each element in the Set
values()	Returns an iterator with all the values in a Set
--------------------------------------------------------------
Property	Description
size	    Returns the number of elements in a Set
*/
let nombres = ['Jorge' , 'Alfredo' , 'Edgardo' , 'Daniel' , 'Salvador' , 'Ricardo' ];
// new Set()	Creates a new Set
let conjuntoNombres = new Set(nombres);
console.log(conjuntoNombres);
console.log('----------------------------------------------------------------');
// add()	    Adds a new element to the Set
console.log(conjuntoNombres.add('Vicente'))
console.log(conjuntoNombres.add('Margarita'))
console.log(conjuntoNombres.add('Alfredo')) // no se va a agregar porque ya hay uno antes, no se puedee repetir ..
console.log(conjuntoNombres);
console.log('----------------------------------------------------------------');
// delete()	Removes an element from a Set
conjuntoNombres.delete('Jorge')
console.log(conjuntoNombres);
console.log('----------------------------------------------------------------');
// has()	    Returns true if a value exists in the Set
console.log('el array contiene a Vicente : ' , conjuntoNombres.has('Vicente'))
console.log('el array contiene a Jorge   : ' , conjuntoNombres.has('Jorge'))
console.log('----------------------------------------------------------------');
// forEach()	Invokes a callback for each element in the Set
let x = conjuntoNombres.forEach((nombre)=>{
    // contar la cantidad de letras que tiene cada nombre ..
    console.log(`${nombre} tiene ${nombre.length} caracteres !!`);
})
console.log('----------------------------------------------------------------');
// values()	Returns an iterator with all the values in a Set
let iterado = conjuntoNombres.values();
console.log('devuelve un objeto {,,,}')
console.log(typeof iterado);
// convierto el objeto en un Set
let o = new Set(iterado)
console.log(o)
o.add('Jorge')
console.log(o)