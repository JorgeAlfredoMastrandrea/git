// strings
variable = 1234;
let cadena = `Cadena de texto ${variable}`;
console.log(cadena)

console.log("Let\'s do it \\")

console.log('cadena\b    cadena separada')

console.log('cadena arriba\ncadena abajo')

// método : largo de cadena
console.log('una cadena \n'.length) // se cuentan los espacios y los salto de lína

// método : recortar cadena
console.log('slice     -> ' , 'otra cadena'.slice(4,7)) // recorta desde el cuarto caracter hasta el siete incluyendo a ambos

// método : substring -subcadena-
console.log('substring -> ' , 'esta es otra cadena mas'.substring(-5,3))

// método : replace
console.log('replace  ->' , 'la educación es muy importante en la Argentina'.replace('la Argentina','el Mundo'))

// método : toUpperCase -mayúsculas-
console.log('este texto estaba todo en minúsculas'.toUpperCase())

// método : toLoweCase -mayúsculas-
console.log('ESTE TEXTO ESTABA TODO EN MAYÚSUCULAS'.toLowerCase())

// método : concatenar cadenas
console.log('Texto 1'.concat(' texto 2'))

// método : trim (para sacar espacios de adelante y de atrás de una cadena)
console.log('   este texto tenía muchos espacios adelante y atrás      '.trim());

// método : charAtt (devuleve el caracter en la 3 pos)
console.log('algo'.charAt(3))

// método : split (va a devolver un array con tres subcadenas divididas)
console.log(' Este texto se va a recortar. Después del punto. Está muy bueno'.split('.'))

// método : split sin ningún parámetro y trae un array con cada una de las letras
console.log(' Este texto se va a recortar. Después del punto. Está muy bueno'.split(''))

