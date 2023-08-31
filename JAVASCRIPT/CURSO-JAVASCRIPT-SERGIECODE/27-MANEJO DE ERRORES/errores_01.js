// errores

try{
    // acá va el código que puede fallar..
    //if resultado no es lo que esperamos ---> lanzamos un error// throw : el código que definimos acá para un error a la medida de lo que queramos hacer
}catch{
    // cuando hay un error, acá ponemos el código para manejar el error
}finally{
    // siempre se ejecuta
    // finalmente acá definimos el código para ejecutar a pesar del resultado
}
///////////////////////////////////////////////////////////////////////////////////////////////

let dividendo = 10;
let divisor = 2;
let resultado = 0;
try{
    resultado = dividendo/divisor;    
    if (resultado !== Infinity){
        console.log('try   -> : ' , resultado)
    }else{
        resultado = 'imposible dividir por cero..!!';
        throw(`revisar el parámetro divisor = ${divisor}`)        
    }
}catch (error) {    
    console.log('Algo falló' , error)
}finally{
    console.log('catch -> : ' , resultado)
}