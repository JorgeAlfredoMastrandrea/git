const fecha = new Date()
console.log(fecha.getFullYear())

// los meses se cuentan desde cero
//            0         1           2         3         4         5        6         7          8             9           10            11   
let meses = ['Enero' , 'Febrero' , 'Marzo' , 'Abril' , 'Mayo' , 'Junio' , 'Julio' , 'Agosto' , 'Setiembre' , 'Octubre' , 'Noviembre' , 'Diciembre'];

let resultado =  fecha.getDate() + ' ' + meses[fecha.getMonth()] + ' ' +  fecha.getFullYear();
let resultado1 =  fecha.getDate() + ' ' + (fecha.getMonth() + 1) + ' ' +  fecha.getFullYear();

console.log(resultado);
console.log(resultado1);