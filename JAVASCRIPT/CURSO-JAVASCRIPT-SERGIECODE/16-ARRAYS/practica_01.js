// contar la cantidad de vocales dentro de una cadena ...
const cadena = "Jorge,Alfredo,Edgardo,Daniel,Salvador,Ricardo,me gusta programar"
const vocales = ['a' , 'e' ,'i' ,'o' ,'u' , 'A' , 'E' ,'I' ,'O' ,'U' , ]
// convierto el string (cadena) en un array ..
const arrayLetras = Array.from(cadena);
// hago un objeto para contener las cantidades donde la clave es la vocal y el valor las cantidades
const objetoVocalesCantidades = new Map() 
for (let index = 0; index < vocales.length; index++) {
    let vocal = vocales[index];
    objetoVocalesCantidades.set(vocal , 0);    
}
// recorro el array en busca de las vocales
let cantidadPorVocal = 0;
// para cada vocal dentro de las vocales
let respVocales = vocales.forEach((vocal) => {
    // buscar las vocales dentro del array de letras (ojo array)
    let cantidadDeVocales = arrayLetras.find((letra) => {        
        if (vocal == letra) {
            cantidadPorVocal++;
            objetoVocalesCantidades.set(vocal , cantidadPorVocal);
        }            
    })
    cantidadPorVocal = 0;
})
console.log(objetoVocalesCantidades)
