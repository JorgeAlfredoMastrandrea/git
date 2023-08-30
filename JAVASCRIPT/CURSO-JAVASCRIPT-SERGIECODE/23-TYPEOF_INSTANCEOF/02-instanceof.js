// instanceof

// para saber si un tipo de datos es o no instancia
/*
In JavaScript there are 5 different data types that can contain values:
CON ESTOS NO FUNCIONA instanceof
                                string
                                number
                                boolean
                                object
                                function
-------------------------------------------------------------------------
There are 6 types of objects:
CON ESTOS SI FUNCIONA instanceof
                                Object
                                Date
                                Array
                                String
                                Number
                                Boolean
-------------------------------------------------------------------------
And 2 data types that cannot contain values:
CON ESTOS NO FUNCIONA instanceof
                                null
                                undefined
*/

/*
Description
The instanceof operator tests the presence of constructor.prototype in object's prototype chain. 
This usually (though not always) means object was constructed with constructor.
*/

// los únicos que pueden tener instanceof son objetos..
let objeto = new Object()
console.log(`objeto es instancia de Object ?    : ` , objeto instanceof Object);
console.log('-------------------------------------------------------------------')
let map = new Map()
console.log(`map es instancia de Map ?          : ` , map instanceof Map)
console.log('-------------------------------------------------------------------')
let cadena = new String('aaaaaa')
console.log(`cadena es instancia de String ?    : ` , cadena instanceof String)
console.log('-------------------------------------------------------------------')
let numero = new Number(100)
console.log(`numero es instancia de Number ?    : ` , numero instanceof Number)
console.log('-------------------------------------------------------------------')
let booleano = new Boolean(true)
console.log(`booleano es instancia de Number ?  : ` , booleano instanceof Boolean)

// cualquier otro tipo de dato si no es creado mediante new, no tiene instanceof