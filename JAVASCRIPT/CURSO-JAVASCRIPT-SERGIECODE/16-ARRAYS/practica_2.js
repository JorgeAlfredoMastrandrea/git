// contar la cantidad de palabras dentro de un texto ..
let cadena = "Hola, soy Jorge, el programador del barrio. Si quiere; le hago un programa. Besos y abrazos y y y ";
cadena = "Nosotros no somos como los Orozco Yo los conozco, son ocho los monos: Pocho, Toto, Cholo, Tom Moncho, Rodolfo, Otto, Pololo Yo pongo los votos sólo por Rodolfo  Los otros son locos, yo los conozco, no los soporto Stop. Stop Pocho Orozco: Odontólogo ortodoxo, doctor Como Borocotó Oncólogo jodón Morocho tordo Groncho jocoso Trosko Chocó con los montos Colocó Molotov. Bonzo Toto Orozco:  Colocón Drogón como pocos Tomó todos los hongos Monologó solo como por dos otoños Botó formol por los ojos Tomó cloroformo, bols, ron, porrón, torronto, toso Norto con Bordón ¿Lo votó o no? Dobló los codos como loco ¡¡Coño! ¿sos vos Toto? Corroboró Socorro, cómo tomó Morfó hot dog, mondongo, pollo con porotos Lloró, lloró con dolor Por como lloró tomó como dos hongos Tocó fondo Torró como loco Contó todo, todo, todo Bochornoso como Cóppolo. Stop. Stop Cholo Orozco: Mocoso Soplón Moroso Bocón Chorro como Grosso Robó dos potros por Comodoro Los montó, los trotó por Bolsón Por los Toldos Por Chocón Doloroso. Stop. Stop Tom Orozco: Proctólogo morboso Compró por los shops fotos porno color Compró como dos tomos Trozos Cosos Colchón roto Homós como Gomón Trolos gozosos con condón Pomos con moño rococó Todos polvos cortos Fogoso. Stop. Stop Nosotros no somos como los Orozco Yo los conozco, son ocho los monos: Pocho, Toto, Cholo, Tom Moncho, Rodolfo, Otto, Pololo Yo pongo los votos sólo por Rodolfo Los otros son locos, yo los conozco, no los soporto Stop. Stop Moncho Orozco: Sólo probó porro Voló con los ojos rojos por los polos Voló por Bonn, voló por Hong Kong Por London, soñó con Yoko Ono, lloró por John Voló por vos Voló por nosotros  Brotó como flor bordó Roló pot, nos contó Los tronchos son grosos como los corchos Bocho borroso. Stop. Stop Rodolfo Orozco: Con voz como John Scott Ronco, ronco Formó todos los coros Tocó: Doblo con Mollo, bombo con Moro Tom tom con Porno, joropo con Tormo, bongó con Don Johnson Tocó con Toto, los Lobos, los Door, los Moscos Compró dos vox Tocó Socorro con Pol Nos contó con honor: ¡Toco con Bob! ¡Toco con Bob! Sopló corno, trombón Tocó son sonoro con los cocos Rock, pop, folk, pogo Nos contó como oyó todos los: ¡¡Oh, oh, oh, oh, oh...! Tocó con todos Por poco no tocó con Colón Coloso. Stop. Stop Otto Orozco: Con otros rollos Con poco protocolo Copó todo como los Born, Troncoso, Don Floro o los Lococo Logró otro comfort Ojo por ojo Controló todo Convocó por fono los otros Orozco Contó con todos Cobró todos los bonos Bocón Colocó montos grosos por Boston Cobró dos lotos  Compró dos Ford, ocho Volvo, dos Gol Oro Motos Toros Compró los Coto, Rodó, Coconor Zorro. Stop. Stop  Pololo Orozco: Gordo fofo con olor Mormón  Glotón con jopo Rostro poroso Rotoso Como con motor roto Solo como croto Solo como topo Solo como Don Bosco con poncho Choto. Stop. Stop  ";
console.log('origina -----> : ' ,cadena);
// hago una copia de la cadena por las dudas
let cadenaCopia = cadena;
// defino una expresión regular de caracteres a tener en cuenta para eliminar
//const searchRegExp_ = /¡|!|¿|:|,|;|\?\./g;
const searchRegExp = /¡|!|¿|:|,|;|[.*+?^${}()|[\]\\]/g;
// se reemplazaran con nada..
const replaceWith = '';
// ejecuto el reemplazo y la paso todo a mayúsculas para estandarizar las palabras
let cadenaSinSignos = (cadenaCopia.replace(searchRegExp , replaceWith)).toUpperCase();
console.log('sin signos --> : ' , cadenaSinSignos);
// convierto el string en un array ..
let cadenaToArray = cadenaSinSignos.split(' ');
console.log(cadenaToArray)
// creo un objeto con cada una de las palabras ..
let objetoArray = new Map();
// para cada ṕalabra del array, genero un par clave : valor donde clave es la palabra y valor es cero ..
let objetoMap = cadenaToArray.map((palabra) => {
    objetoArray.set(palabra , 0);
})
console.log(objetoArray);
// ahora empiezo a contar cuantas veces aparecen las palabras ...
// recorro el array en busca de las palabras
let cantidadPorPalabra = 0;
let respPalabras = cadenaToArray.forEach((palabraDiccionario) => {
    // buscar las palabras dentro del array de palabras (ojo array)
    let cantidadDeVocales = cadenaToArray.find((palabraTexto) => {        
        if (palabraDiccionario == palabraTexto) {
            cantidadPorPalabra++;
            objetoArray.set(palabraDiccionario , cantidadPorPalabra);
        }            
    })
    cantidadPorPalabra = 0;
})
console.log(objetoArray)