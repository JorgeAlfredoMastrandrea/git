// los objetos son una estructura de datos (clave : valor)que representaciones de la vida real y que mantienen
// con propiedades y métodos, se basan en clases

let auto1 = {
    marca   :   'Fiat'  ,
    model   :   'Uno'   ,
    peso    :   550     ,
    color   :   'Rojo'
}

let auto2 = {
    marca   :   'Reenault'  ,
    model   :   '12'   ,
    peso    :   1550     ,
    color   :   'Verde'
}

console.log('auto 1 ' , auto1);
console.log('auto 2 ' , auto2);

console.log('el color del auto 1 es : ',auto1.color)

// otra forma de hacerlo es así, usando const ..
const auto3 = {
    marca   :   'Peugeot'  ,
    model   :   '208'   ,
    peso    :   21550     ,
    color   :   'Azul'
}

console.log('auto 3 ' , auto3);

// podemos cambiar el valor del atributo.. aún cuando está definido como const
auto3.marca = 'BMW'; auto3.model = 'Z5';
console.log('auto 3 ' , auto3);

// podemos usar los corchetes en vez del punto ..
console.log(auto3['marca']);

///////////////////////////////////////////////////

const vendedor = {
    nombre          :   'Pedro',
    apellido        :   'Gonzales',
    empresa         :   'Autos S.A.',
    habilidadees    :   ['Carisma' , 'Puntualidad'],
    vender        :   function(){
        return this.nombre + ' ' + this.apellido + ' ' + 'ha vendido un auto';        
    },
    nombreCompleto  :   function(){
        return this.nombre + ' ' + this.apellido
    }
}

console.log(vendedor.vender())