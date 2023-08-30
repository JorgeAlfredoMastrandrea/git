// JavaScript Type Conversion
/*
Converting Strings to Numbers
Converting Numbers to Strings
Converting Dates to Numbers
Converting Numbers to Dates
Converting Booleans to Numbers
Converting Numbers to Booleans
*/
/*
--------------------------------------------------------------------------------------
Converting Strings to Numbers
The global method Number() converts a variable (or a value) into a number.
A numeric string (like "3.14") converts to a number (like 3.14).
An empty string (like "") converts to 0.
A non numeric string (like "John") converts to NaN (Not a Number).
*/
console.log(Number("3.14"))
console.log(Number(Math.PI))
console.log(Number(" "))        // cadena espacio es 0
console.log(Number(""))         // cadena vacia es 0
// esto no se convertirá
console.log(Number("99 88"))
console.log(Number("John"))
/*
Converting Numbers to Strings
The global method String() can convert numbers to strings.
It can be used on any type of numbers, literals, variables, or expressions:
*/
let x = 100;
console.log(String(x))         // returns a string from a number variable x
console.log(String(123))       // returns a string from a number literal 123
console.log(String(100 + 23))  // returns a string from a number from an expression