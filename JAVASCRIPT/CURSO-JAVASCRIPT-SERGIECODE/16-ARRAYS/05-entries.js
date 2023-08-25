// entries()	    Returns a key/value pair Array Iteration Object

let nombres = []
nombres = ['Jorge' , 'Alfredo' , 'Edgardo' , 'Daniel' , 'Salvador' , 'Ricardo' ,  ];

let par_clave_valor_nombres = nombres.entries();

for (let nombre_clave_valor of par_clave_valor_nombres){
    console.log('indice , valor -> ' , nombre_clave_valor);    
}

console.log('----------------------------------------');

// par_clave_valor_nombres = nombres.entries(); // debo reasignarlo porque parece que se borran los valores cargados anteriormente
// esta parte no se va ejecutar de la misma manera que antes.. no sé por qué..??
for (let nombre_clave_valor of par_clave_valor_nombres){
    console.log('-> ' , nombre_clave_valor);
}
