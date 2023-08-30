// A Map holds key-value pairs where the keys can be any datatype.
// A Map remembers the original insertion order of the keys.

/*
Essential Map Methods
--------------------------------------------------------------------
Method	Description
new Map()	Creates a new Map
set()	    Sets the value for a key in a Map
get()	    Gets the value for a key in a Map
delete()	Removes a Map element specified by the key
has()	    Returns true if a key exists in a Map
forEach()	Calls a function for each key/value pair in a Map
entries()	Returns an iterator with the [key, value] pairs in a Map
--------------------------------------------------------------------
Property	Description
size	    Returns the number of elements in a Map
*/

let diccionarioData = [
    ['A' ,   0],
    ['B' ,   0],
    ['C' ,   0],
    ['D' ,   0]
]
// new Map()	Creates a new Map
let diccionario = new Map(diccionarioData);
console.log(diccionario);
console.log('----------------------------------------------------------------');
// set()	    Sets the value for a key in a Map
diccionario.set('A',1);
diccionario.set('B',2);
diccionario.set('C',3);
diccionario.set('D',4);
diccionario.set('E',5); // este lo agregamos y se coloca dentro del nuevo ser
console.log(diccionario)
console.log('----------------------------------------------------------------');
// get()	    Gets the value for a key in a Map
console.log(`el valor de "C" es : ` , diccionario.get('C'));
console.log('----------------------------------------------------------------');
// delete()	Removes a Map element specified by the key
diccionario.delete('C')
console.log(diccionario)
console.log('----------------------------------------------------------------');
// has()	    Returns true if a key exists in a Map
console.log(`el Map tiene el valor "F" ?? ` , diccionario.has('F'));
console.log(`el Map tiene el valor "E" ?? ` , diccionario.has('E'));
console.log('----------------------------------------------------------------');
// forEach()	Calls a function for each key/value pair in a Map
let y = diccionario.forEach((valor,clave)=>{
    console.log(clave,valor)
    // cambio el valor , lo multiplico por 10
    diccionario.set(clave , valor*10);
})
console.log(diccionario);
for (const entrada of diccionario){ // usamos for .. in y no funciona !!!! The JavaScript for in statement loops through the properties of an Object:
    console.log('----->' , entrada)
}
console.log('----------------------------------------------------------------');
// entries()	Returns an iterator with the [key, value] pairs in a Map
let entradas = diccionario.entries();
// The JavaScript for of statement loops through the values of an iterable object.
// porque cuando aplicamos entries, se volvió un iterable ..!!
for (const entrada of entradas){ // usamos for .. of no funciona si usamos for in
    console.log('-----> :::: ' , entrada)
}
console.log('----------------------------------------------------------------');
// Property	Description
// size	    Returns the number of elements in a Map
console.log('el tamaño es : ' , diccionario.size)