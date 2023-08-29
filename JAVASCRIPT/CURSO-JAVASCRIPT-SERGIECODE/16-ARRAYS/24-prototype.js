// prototype	    Allows you to add properties and methods to an Array object

let letras = ['a' ,'e' ,'i' ,'o' ,'u' ,'x' , ];

// funcion para convertir en mayusculas las minusculas dentro de un array
Array.prototype.aMayusculas = function(){    
    for (let i = 0; i < this.length; i++) {
        this[i] = this[i].toUpperCase();
    }
};
letras.aMayusculas(3);
console.log(letras);

console.log('-------------------------------------')

// función para repetir cada letra una cantidad de veces determinada..
Array.prototype.repetir = function(veces){    
    let l = '';
    for (let i = 0; i < this.length; i++) {
        for (let vez = 0; vez < veces; vez++) {
            l = l + this[i];
        }
        this[i] = l;
        l = '';
    }
};
letras.repetir(10);
console.log(letras);