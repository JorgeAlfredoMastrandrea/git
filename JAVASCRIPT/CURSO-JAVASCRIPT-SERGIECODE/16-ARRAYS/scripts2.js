// EN LOS EJEMPLOS SE USA const PARA DEFINIR LOS ARRAYS, PERO NO ES RECOMENDABLE, ES MEJOR USAR let //

// métodos de arrays
/////////////////////////////////// filter
const array1 = ['Manzana','Pera','Banana','Naranja','Manzana','Naranja',];
const resultado1 = array1.filter(x => x == 'Manzana'); // para hacer un filter debemos crear una función que busque lo que queremos y lo agregue a un nuevo array
console.log(resultado1);

// filter con objetos
const array2= [
    {nombre : 'Pedro'       ,   apellido : 'Gonzalez'}  ,   // 0
    {nombre : 'Juan'        ,   apellido : 'Gonzalez'}  ,   // 1
    {nombre : 'Jorge'       ,   apellido : 'Gonzalez'}  ,   // 2
    {nombre : 'Raul'        ,   apellido : 'Perez'}     ,   // 3
    {nombre : 'Fernando'    ,   apellido : 'Juarez'}    ,   // 4
    {nombre : 'José'        ,   apellido : 'Fernandez'} ,   // 5
]

const resultado2 = array2.filter(x => x.apellido == 'Gonzalez'); // resultado2 es un array...
console.log(resultado2);

/////////////////////////////////// map
// este ejemplo va a cambiar las Manzanas por Naranjas ...
const array3 = ['Manzana','Manzana','Manzana','Manzana','Manzana','Manzana',];
const resultado3 = array3.map(x => {
    if (x == 'Manzana')
        return 'Naranja';
});
console.log(resultado3);

/////////////////////////////////// fill
// va a rellenar con Pera desde el indice 2
const array4 = ['Manzana','Manzana','Manzana','Manzana','Manzana','Manzana',];
const resultado4 = array4.fill('Pera',2)
console.log(resultado4);

/////////////////////////////////// find
// va a devolver el primero que encuentre con lo que le hemos pedido
const array5 = ['Manzana','Manzana','Manzana','Manzana','Pera','Manzana','Pera','Pera','Mandarina'];
console.log(array5);
const resultado5 = array5.find(x => x == 'Pera')
console.log(resultado5);

///////// devolver los indices donde aparecen peras
const indices = array5.map((elemento,indice) => elemento == 'Pera' ? indice : -1).filter(index => index !== -1);
console.log('devolver todos los indices donde aparecen Pera : ' , indices);
///////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////// findIndex
// va a devolver el indice de la primera ocurrencia
const resultado6 = array5.findIndex(x => x == 'Pera')
console.log('findIndex : ' , resultado6);

/////////////////////////////////// some
// buscar si hay Mandarinas en el array
const mandarina = array5.some(x => x == 'Mandarina');
console.log('Hay mandarinas ? ' , mandarina);

/////////////////////////////////// every
// si quiero saber si todos son Manzanas.. uso every
const array6 = ['Manzana','Manzana','Manzana','Manzana',];
console.log(array6.every(x => x == 'Manzana'));

/////////////////////////////////// pop
// si quiero sacar el último elemento del array ...
const array7 = ['Banana','Manzana','Manzana','Manzana','Pera','Manzana','Pera','Pera','Mandarina'];
console.log('sacar la útlima fruta : ', array7)
const resultado7 = array7.pop();
console.log('saqué una : ' , resultado7);
console.log('el array quedó así : ' , array7);

/////////////////////////////////// shift
// sacar el primer elemento de la lista anterior ..
const resultado8 = array7.shift();
console.log('saqué la primera fruta del array , una : ' , resultado8);
console.log('el array quedó así : ' , array7);

/////////////////////////////////// push
// agregar una fruta al final del array
array7.push('Ciruela');
console.log(array7);

/////////////////////////////////// unshift
// agregar una fruta al principio del array
array7.unshift('Ananá');
console.log(array7);

/////////////////////////////////// splice
// cortar un array y agregar algo en su lugar
//               0        1         2         3       4      5       6      7      8  
const array9 = ['Banana','Manzana','Manzana','Ananá','Pera','Mango','Pera','Pera','Mandarina'];
array9.splice(2,3,'Lima', 'Kiwi' ); // desde el índice 2 cortame 3 elementos e insertá un elemento nuevo 'Lima' y kiwi
console.log(array9);

/////////////////////////////////// slice
// corta un array y lo que corta lo deja dentro de otro array ...
const resultado9 = array9.slice(2,4);
console.log(resultado9);

/////////////////////////////////// concat


/////////////////////////////////// sort
// ordenamos números , de esta forma va a ordenar pero lo hace mal dado que 1 y 10 , 11, 12, 13 los ordena primero
const numeros1 = [1,2,3,4,5,6,7,8,9,10,11,12,13];
console.log(numeros1.sort());
// para solucionar esto, se usa lo siguiente ..
console.log(numeros1.sort((a,b) => a-b));
// si lo queremos ordenar al revés ..
console.log(numeros1.sort((a,b) => b-a));
// PARA ORDENAR PALABRAS, NO HAY PROBLEMA..
const palabras1 = ['Gato', 'Mesa' , 'Termo' , 'Auto'];
console.log(palabras1.sort());
// ORDENANDO OBJETOS . AUTOS POR AÑO
const autos =[
    {auto   : 'Fiat'    ,   modelo    :   2023},
    {auto   : 'Renault' ,   modelo    :   2021},
    {auto   : 'BMW'     ,   modelo    :   1982},
    {auto   : 'Ford'    ,   modelo    :   2015},
]
console.log(autos.sort((a,b) => a.modelo-b.modelo));
