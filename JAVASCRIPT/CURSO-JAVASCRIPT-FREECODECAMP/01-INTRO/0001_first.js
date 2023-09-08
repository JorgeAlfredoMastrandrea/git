// variables
console.log('0001_first.js')
var number = 5; // esto  es un comentario...
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*data types*/
/* undefined , null , boolean , string , symbol ,number , object*/
var myName = 'Jorge';   // var : se usa a lo largo del programa
let lastName = 'Mastrandrea'    // let : se usa dentro de un determinado alcance
const PI = 3.141592; // es la declaración de una constante y se usa en todas partes
var a;  // declaración de una variable sin asignación
var b = 3;  // declaration and assignment a variable with value
a = 7;  // assignment with value
c = 7;
d = 'I am a';
a = a + 1;
d = d + ' cadena';
console.log(d)
var x = 10 + 20;
console.log(x)
x--;
console.log(x)
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// remainder
var remainder;
remainder = 11 % 3;
console.log('remanider ' + remainder)
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// abreviando (shortcuts)
var a;
a = 7;
a = a + 14;
console.log(a)
a = 7;
a+=14;
console.log(a)
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// compound assigment with Augmented Substraction
var s = 11;
s -= 2;
console.log(s)
// compound assigment with Augemnted Multiplication
var t = 3;
t*= 2;
console.log('compound assigment with Augemnted Multiplication ' , t)
// compound assigment with Augemnted Division
var y = 3;
y/= 2;
console.log('compound assigment with Augemnted Division ' , y)
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// declare a string variables
var firstName_ = 'Jorge';
var lastName_ = 'Mastrandrea';
// escaping literal quotes in string
var mistring = "algo \" otra cosa entre comillas \" algo \"algo mas entre comillas"
console.log(mistring)
// quoting string with single quotes
var otraString = `'"algo mas\"otra\"otra'`
console.log(otraString)
// escape sequences in string
/******
code output
\'  single quote
\"  double quote
\\  back slash
\n  new line
\r  carriage return
\t  tab
\b  backspace
\f  form feed
******/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var miOtraSrtring = "FirstLine\n\t\ Second line\nThird Line"
console.log(miOtraSrtring)
// concatenating strings with the plus operator
var ourStr = "hola " + "chau";
console.log(ourStr)
// concatenating string with plus equals operator
var ourStr = "holis ";
ourStr += "chauuu ";
console.log(ourStr)
// constructing string with variables
var string_1 = "jorge ";
var string_2 = " alfredo";
var string_3 = string_1 + string_2;
console.log(string_3);
// appending varables to strings
var anAdjective = "awesome";
var miOtS = "freeCodeCamp is ";
miOtS += anAdjective;
console.log(miOtS);
// find length odf string
var miNombre = "Jorge";
console.log("la longitud de la cadena es : " , miNombre.length);
// Bracket Notation to Find First Character in String
var firstChar = miNombre[0];    // la cadena es una lista por lo tanto usa la cadena
console.log(firstChar)
// String Immutability
var hi = "jello world";
hi[0] = "H";    // las cadenas de texto son inmutables, no se pueden cambiar..
console.log(hi);
// para ello hay que cambiar toda la cadena
// for those we have to change the entire string..
hi = "Hello world";
console.log(hi);
// Bracket Notation to Find Nth character in String
var secondHi = hi[1]
console.log(secondHi)
// Bracket Notation to Find Last Character in String
var lastCharacter = hi[hi.length-1]
console.log(lastCharacter)
// Bracket Notation to Find Nth-Last Character in String
var otCharacter = hi[hi.length-3]
console.log(otCharacter)
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Word Blanks
//...
// Store Multiple Values with Array
var ourArray = ["Jhon" , 23];
var myArray = ["Quincy" , 3 , ourArray];
console.log(myArray[2][0])
// Nested Arrays
var nestedArray_1 = [['hola',2],['chau',3]]
console.log(nestedArray_1)
// Access Array Data with Indexes
var numberArray = [50,60,70]
console.log(numberArray[0])
// Modify Array Data With Indexes
numberArray[0] = 99;
console.log(numberArray[0])
// Access Multi-Dimensional Arrays With Indexes
var multiArray = [[1,2,3],[4,5,6],[7,8,9],[[10,11,12],13,14]];
console.log(multiArray[2][1]);
console.log(multiArray[3][2]);
console.log(multiArray[3][0][1]);
// Manipulate Arrays with push() method
var mArray1 = ["aa","bb","cc"];
var mArray2 = ["dd","ee"];
var mArray3 = ["ff","gg"];
mArray1.push(mArray2);
console.log(mArray1);
var mArray4 = [["aa","bb"],["cc","dd"]]
mArray4.push(mArray3);
console.log(mArray4)
// Manipulate Arrays with pop() method
// for removing items from an array...
var removedFromArray;
var mArray5 = [1,2,3]
removedFromArray = mArray5.pop()    // with out arguments
console.log(removedFromArray)
// Manipulate Arrays with shift() method.
// remove the first element from an array...
removedFromArray = mArray5.shift()
console.log(removedFromArray)
// Manipulate Arrays with unshift() method.
// similar to push instead the element is the first inserted
mArray5.unshift(8)
console.log(mArray5)
// Shopping List
var miListaSupermercado;
miListaSupermercado =   [
                            ["bananas" , 3],
                            ["manzanas" , 4],
                            ["tomates" , 7],
                            ["limones" , 8],
                            ["peras" , 2]
                        ];

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// write reusable code with functions
function algo(){
    console.log("me gusta programar..!");
}
algo();
// passing values to Functions with Arguments
function func1(a,b){
    console.log(a-b);
}
func1(1,2);
// Scopes
var miVarPuta = "una variable puta";
function fun2(){
    console.log(miVarPuta);
    otraVariablePutaGlobal = "esta es otra puta varibale global";
    var putita3 = "soy la putita 3";
    let putita4 = "soy la putita 4";
}
fun2();
console.log(otraVariablePutaGlobal);
// console.log(putita3); esto causa un error porque putita3 está declarada dentro de otro lado..
// console.log(putita4); esto también causa un error..this cause an error too !!
// Local Scope and Functions...
function myLocalScope(){
    var miVar = 5555555;
    console.log(miVar);
}
myLocalScope();
//console.log(miVar); // no se puede acceder a ella porque está dentro de una función
// Global vs. Local Scope Functions
var miRopa = "remera";
function miRopaPuesta(){
    var miRopa = "campera"; // esta variable tiene precedencia sobre la misma de arriba
    return miRopa;
}
console.log(miRopaPuesta());
console.log(miRopa);
// return a Value from a Function with Return
function menosSiete(num){
    return num - 7;
}
console.log(menosSiete(8));
// Understanding Undefined Value Returned from a Function
function noDevuelve(){
    var sum;
    sum += 5;
}
console.log(noDevuelve())   // va a devolver undefined
// assignment with a Returned Value
function change(num){
    return num * 2  // lo que quiere decir es que podes calcular y devolver el valor todo dentro del return
}
console.log(change(20))
// Stand in Line
function nextInLine(arr , item){
    arr.push(item); // pone al final un nuevo item
    return arr.shift(); // devuelve el primero y lo borra de la lista
}
var testArr = [1,2,3,4,5];
console.log("Before : " + JSON.stringify(testArr));
console.log(nextInLine(testArr , 6));
console.log("After : " + JSON.stringify(testArr));
// Boolean Values
function andresEsMentiroso(){
    return true;
}
console.log(andresEsMentiroso());
// Use Conditional Logic with If Statements
function trueOrFalse(miVar){
    if (miVar){
        return "Mi variable es true";
    }
    return "Mi variable es false";
}
console.log(trueOrFalse(false))
// Comparison with the Equality Operator
function testEqual(val_1 , val_2){
    if (val_1 == val_2 ){
        return "Iguales";
    }
    return "No iguales";
}
console.log(testEqual(10 , '10'));  // acá los tipos de valores no son iguales pero va a decir que si son Iguales dado que estamos usando el comparador ==
console.log(testEqual(10 , 10));
// Comparision with the Strict Equality Operator
function testEqual(val_1 , val_2){
    // al usar el comparador Strict === los tipos de valores a comparar deben ser iguales para que de como respuesta Iguales
    if (val_1 === val_2 ){
        return "Iguales";
    }
    return "No iguales";
}
console.log(testEqual(10 , '10'));
console.log(testEqual(10 , 10));
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Practice Comparing Different Values
///...
// Comparison with the Strict Inequality Operator
function tesStrictNotEqual(val_1 , val_2){
    // al usar el comparador Strict === los tipos de valores a comparar deben ser iguales para que de como respuesta Iguales
    if (val_1 !== val_2 ){
        return "No son iguales";
    }
    return "Son iguales";
}
console.log(tesStrictNotEqual(10 , '10'));
// Comparisons with the >  Operator
function esMayor(a , b){
    if (a > b){
        return (a + " es mayor que " + b)
    }
    return(a + " es menor que " + b)
}
console.log(esMayor(10 , 9))
// Comparisons with the <  Operator
function esMenor(a , b){
    if (a < b){
        return (a + " es menor que " + b)
    }    
    return(a + " es mayor que " + b)
}
console.log(esMenor(10 , 10))   // en este caso va a decir que es 10 es mayor que 10
// Comparison with the Greate Than or Equal To Operator...
function esMayorOIgual(a , b){
    if (a >= b){
        return (a + " es mayor o igual que " + b)
    }
    return(a + " es menor que " + b)
}
console.log(esMayorOIgual(10 , 11))
//Comparison with the Less Than Operator..
//...
// Comparison with the And Operator
function testLogicalAnd(a , b , c){
    if (a <= c && b >= c){
        return c + " está dentro del rango de valores de " + a + " y "+b
    }
    return c + " está fuera del rango de valores de " + a + " y "+b
}
console.log(testLogicalAnd(1,8,0))
// Comparison with the logical Or Operator..
function testLogicalor(val){
    if (val < 10 || val > 20){
        return "Por fuera del rango";
    }
    return "Adentro del rango";
}
console.log(testLogicalor(15))
// Else Statements
function testElse(val){
    var result = '';

    if (val > 5){
        result = 'es mayor a 5';
    }else{
        result = 'es menor a 5';
    }
    return(result);
}
console.log(testElse(2));
// Else If Statement
function testElseIf(val){
    if (val > 10){
        return 'Es mas grande que 10';
    }else if (val < 5){
        return 'Es mas chico que 5';
    }else{
        return 'Esta entre 5 y 10'
    }
}
console.log(testElseIf(7));
// Logical Order in If Else Statement
function orderMyLogic(val){
    if (val < 5){
        return 'es menor a 5';
    }else if (val < 10){
        return 'es menor a 10';
    }else{
        return 'es mas grande o igual a 10'
    }
}
console.log(orderMyLogic(11))
// Chaining If Else Statement
function testSize(num){
    if (num < 5){
        return 'Tiny';
    }else if (num < 10){
        return 'Small';
    }else if (num < 15){
        return 'Medium';
    }else if (num < 20){
        return 'Large';
    }else {
        return 'Huge';
    }
}
console.log(testSize(22))
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Golf Code
//...
// Switch Statement and Default Option in Switch
function caseInSwitch(val){
    var answer = '';
    switch(val){
        case 1:
            answer = 'alpha';
            break;
        case 2:
            answer = 'beta';
            break;
        case 3:
            answer = 'gama';
            break;
        case 4:
            answer = 'delta';
            break;
        default: 
            answer = 'NADA de lo anterior';
    }
    return answer;
}
console.log(caseInSwitch(5));

// Multiple Identical Options in Switch Statements
function sequentialSizes(val){
    var answer = ''
    switch(val){
        case 1:
        case 2:
        case 3:
            answer = 'Low';
            break;
        case 4:
        case 5:
        case 6:
            answer = 'Mid';
            break;
        case 7:
        case 8:
        case 9:
            answer = 'High';
            break;
        default: 
            answer = 'out of range!';
    }
    return answer;
}
console.log(sequentialSizes(19))

// Replacing If Else Chains with Switch...
// ...
// Returning Boolean Values from Functions

function isLess(a , b){
    // en vez de poner if y else para devolver un boolean, podemos resumir la devolucion de esa forma..
    return a < b;
}
console.log(isLess(10 ,15))
// Returning Early Pattern from Functions
function abTest(a , b){
    if (a < 0 || b < 0){
        return undefined
    }
    return a + b;
}
console.log(abTest(-2,3))
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Counting cards..
//....
// Build JavaScript Objects
// .. similar to Arrays.. insted of using index we are using properties...
var ourDod = {
    "name"      :   "Pucholo"        ,
    "legs"      :   4               ,
    "tails"     :   1               ,
    "friends"   :   ["everything!"]
};

// accesing Object Properties with dot notation
console.log('el perro se llama : ' , ourDod.name)

// Accessing Object Properties with Bracket Notation
console.log('Accediendo a las propiedades del objeto usando corchetes : ' , ourDod["name"])

// Accessing Object properties with Variables
var elPutoNombreDelPerro = "name"
console.log("Accediendo al nombre del perro usando variables : " , ourDod[elPutoNombreDelPerro])

// Updating Object Properties
ourDod.name = "El farabute"
console.log("El nuevo nombre del perro es : " , ourDod.name)

// Add New Properties to an Object
ourDod.ladra = "Guau Guau"

console.log("Nueva propiedad : " , JSON.stringify(ourDod))

// Delete Properties from an Object
delete ourDod.ladra
console.log("Ya no está la propiedad ladra  : " , JSON.stringify(ourDod))

// Using Objects for Lookups ...
function partesDelCuerpo(val){
    var resultado = ""

    var elCuerpo = {

        "cu"    :   "Culo",
        "co"    :   "Concha",
        "te"    :   "Teta"    
    };

    resultado = elCuerpo[val];

    return resultado
}

console.log("el cuerpo de las minas : " , partesDelCuerpo("cu"))
console.log("el cuerpo de las minas : " , partesDelCuerpo("pi")) // las minas no tienen pija

// Testing Objects for Properties
var myObj = {
    gift : 'pony',
    pet  : 'kitten',
    bed  : 'sleigh'
}

function checkObj(checkProp){
    if (myObj.hasOwnProperty(checkProp)){
        return myObj[checkProp];
    } else  {
        return 'No Encontrada';
    }
}
console.log(checkObj('gift')) // return pony //  console.log(checkObj('hello')) // return 'No Encontrada'

// Manipulating Complex Objects
var myMusic = [
    {
        'artist'        : 'Billy Joel',
        'title'         : 'Piano Man',
        'release_date'  : 1973,
        'formats'       : [
                            'CD',
                            '8T',
                            'LP'
        ],
        'gold' : true 
    },
    {
        'artist'        : 'El Fatabute',
        'title'         : 'Serial Lier',
        'release_date'  : 2022,
        'formats'       : [
                            'YouTube Video'
        ]
    }
]

// Accesing Nested Objects
var myStorage = {
    'car'   :   {
                    'inside':{
                        'glove box'     : 'maps',
                        'passanger seat': 'crumbs'
                    },
                    'outside':{
                        'trunk' :   'jack'
                    }
                }
}
var gloveBoxContents = myStorage.car.inside['glove box'];
console.log('qué hay dentro de la guantera ? :' , gloveBoxContents)
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Accesing Nested Arrays
var myPlants = [
    {
        type : 'flowers',
        list : [
            'rose',
            'tulips',
            'dandelion'
        ]
    },
    {
        type : 'trees',
        list : [
            'fir',
            'pines',
            'birch'
        ]
    }
];

var secondTree = myPlants[1].list[1]
console.log('mi segundo arbol es : ' , secondTree)

// Record Collection
var collection = {
    '2548':{
        'album':'Titulo 1',
        'artist':'Bin Jovi',
        'tracks':[
            'pista 1',
            'pista 2'
        ]
    },
    '2468':{
        'album':'Titulo 2',
        'artist':'Princ',
        'tracks':[
            '1999',
            'Ass'
        ]
    },
    '1234':{
        'artist': 'Robertito Palma',
        'tracks' :[]
    },
    '5439':{
        'album' : 'ABBA Goldie'
    }
};
// Keep a copy of the collection for tests
// la mejor manera de copiar objetos en JS
var collectionCopy = JSON.parse(JSON.stringify(collection));
function updateRecords(id , prop , value){
    // si el valor de value es blank, entonces borramos la propiedad
    // o sea va a borrar esa propiedad y su contenido tenga o no valor
    if (value === '') {
        delete collection[id][prop];
    // de lo contrario si no es blank y el valor de prop es tracks , 
    // entonces agregamos el valor para esa prop
    } else if (prop === 'tracks') {
        // si la pop es empty .. la creamos...o sea que si no existe la prop tracks , la creamos..
        // esta parte lo que hace es que si es igual entonces le pone el valorde lo contrario pone un [] vacio
        collection[id][prop] = collection[id][prop] || [];
        // luego guarda la prop al final del array ya que ahora sabemos que existe
        collection[id][prop].push(value);
    } else {    // esta el la condicion por defecto si el value no es '' y prop no es tracks
        collection[id][prop] = value;
    }
    
    return collection;
}

updateRecords(2468 , 'tracks' , 'Cantando en la ducha')
updateRecords(1234 , 'tracks' , 'Mentiras')
updateRecords(1234 , 'tracks' , 'Mas Mentiras')
updateRecords(1234 , 'tracks' , 'Mas y Mas Mentiras')
updateRecords(1234 , 'album'  , 'El Montesori')
console.log(updateRecords(1234 , 'artist' , 'El Farabute'))
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// iterate with While Loops
var myArray = [];

var i = 0;
while (i < 5){
    myArray.push(i);
    i++;
}
console.log(myArray)

// iterate with Foor Loops
var ourArray = [];

for (var i = 0; i < 5; i++){
    ourArray.push(i)
}
console.log(ourArray)

// Iterate Odd Numbers with For Loop
var ourArray = [];

for (var i = 1; i < 10; i+=2){
    ourArray.push(i)
}
console.log('impares : ' , ourArray)

// Iterate Even Numbers with For Loop
var ourArray = [];

for (var i = 0; i < 10; i+=2){
    ourArray.push(i)
}
console.log('pares : ' , ourArray)

// count backwards with a For Loop
var ourArray = [];

for (var i = 10; i > 0; i--){
    ourArray.push(i);
}

console.log(ourArray)

var ourArray = [];

for (var i = 10; i > 0; i-=2){
    ourArray.push(i);
}

console.log(ourArray)

// Iterate Through an Array with a For Loop
var ourArray = [9 , 10 , 1 ,12];
var ourTotal = 0;

for (var i = 0; i < ourArray.length; i++){
    ourTotal += ourArray[i];
}
console.log('el total del array es :' , ourTotal)

// Nesting For Loops
function multiplyAll_v1(arr){
    var result = 1;
    for (var i = 0; i < arr.length; i++){
        var k = arr[i] // saco cada una de las listas del array
        for (var j = 0 ; j < k.length; j++){
            result *= k[j];
        }
    }
    return result
}

function multiplyAll_v2(arr){
    var result = 1;
    for (var i = 0; i < arr.length; i++){
        for (var j = 0 ; j < arr[i].length; j++){
            result *= arr[i][j];
        }
    }
    return result
}

var lista = [[1,2] , [3,4] , [5,6,7,10,20,30,40,50,60,70,99]]
console.log('version uno : ' , multiplyAll_v1(lista));
console.log('version dos : ' , multiplyAll_v2(lista));

// Iterate with Do.. While Loops
var myArray = [];
var i = 10;

do {
    myArray.push(i);
    i++;    
} while (i < 5);

console.log(i , myArray);
console.log('---------------------------------------------------------------------------------')
// Profile Lookup
// si le paso el firstanme me tiene que devolve el prop que le esttoy pasando
var contacts = [
    {
        'firstname':'Akira',
        'lastname':'Laine',
        'number':'0123245',
        'likes':['Pizza','Coding','Brownie']
    },
    {
        'firstname':'Harry',
        'lastname':'Potter',
        'number':'532342324',
        'likes':['Hogwarts','Magic','Hagrid']
    },
    {
        'firstname':'El FARABUTE',
        'lastname':'Montesori',
        'number':'53323423',
        'likes':['Mentir','Ser Chanta','Versero']
    }
];

function lookUpProfile_v1(name , prop){
    // console.log(contacts.length);
    // contacts[2].firstname;
    for (var i = 0; i < contacts.length; i++){
        if ( contacts[i].firstname === name){
            /* para imprimir el valor de la prop
            for (var j = 0; j < (contacts[i].likes).length; j++){
                console.log(contacts[i].likes[j]);
            }*/            
            if (contacts[i][prop] === undefined){
                return 'no such propertie';
            } else {
                return contacts[i][prop];
            }
        }
        return 'No such contact';
    }
}

function lookUpProfile_v2(name , prop){
    for (var i = 0; i < contacts.length; i++){
        if ( contacts[i].firstname === name){
            return contacts[i][prop] || 'No such property';
        }        
    }
    return 'No such contact';
}

var data = lookUpProfile_v2('El FARABUTE','likes');
console.log(data);
console.log('---------------------------------------------------------------------------------')
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Generate Random Fractions

function randomFrac(){
    return Math.random();
}
console.log(randomFrac());
console.log('---------------------------------------------------------------------------------')

// Generate Random Whole Numbers
function randomWholeNum(){
    return Math.floor(Math.random() * 20);
}
console.log('genera un numero entre 0 y 20 : ' , randomWholeNum());
console.log('---------------------------------------------------------------------------------')

// Generate Random Whole Numbers within a Range
function ourRandomRange(ourMin , ourMax){
    return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
}
var ourMin = 5;
var ourMax = 80;
console.log('genera un numero entre ', ourMin ,'y', ourMax ,' : ' , ourRandomRange(ourMin , ourMax));
console.log('---------------------------------------------------------------------------------')

// Use parseIni Function
var number = '56';
console.log(parseInt(number));

// Use the parseInt functionwith a Radix
var number = '10011';
console.log('el número decimal correspondiente es : ' , parseInt(number , 2)) // convierte de binario a decimal
console.log('---------------------------------------------------------------------------------')

// Use the Conditional (Ternary) Operator
function checkEqual(a , b){
    // condition ? statement-if-true : statement-if-false;
    return a === b ? true : false;
}
console.log('es a igual a b ?? ', checkEqual(3,4));
console.log('---------------------------------------------------------------------------------')
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Multiple Ternary Operators
function checkSign(num){
    return num > 0 ? 'positive' : num < 0 ? 'negative' : 'zero'
}
console.log(checkSign(3));
console.log(checkSign(-3));
console.log('---------------------------------------------------------------------------------')
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// diferencia entre var vs let


console.log('---------------------------------------------------------------------------------')
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// const Keyword

console.log('---------------------------------------------------------------------------------')
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Mutate an Array Declared with const
const arr_s = [1,2,3,4];
function editInPlace(){    
    "use strict"; // me dice que javascript se ajusta al modo estricto, por lo tanto no puedo cambiar asignaciones
    // arr_s = [4,3,2,1]; // no puedo cambiar algo que es constante, es decir que al ser const no se puede..
    // la única forma de poder cambiar es reasignando uno por uno usando los []
    arr_s[0] = 4;
    arr_s[1] = 3;
    arr_s[2] = 2;
    arr_s[3] = 1;
}
editInPlace()
console.log('---------------------------------------------------------------------------------')
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Prevent Object Mutation
function freezObject(){
    "use strict";
    const MATH_CONSTANTS = {
        PI:3.14,
    };

    Object.freeze(MATH_CONSTANTS); // he frizado el objeto, la totalidad..!!!

    try{
        MATH_CONSTANTS.PI = 99;
    }catch(ex){
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}

console.log(freezObject()); // si imprime 99 es porque he cambiado un atributo de una constante, debo usar Object.freeze para que no cambie

console.log('---------------------------------------------------------------------------------')
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
console.log('-----------------FUNCION ARROW CON ----------------------------------------------')
// Arrow Functions sirve para creear funciones anónimas..?!?!

// función anónima:
var magic_1 = function(){
    return new Date();
}
console.log(magic_1())

// la misma función anónima pero en función flecha..
var magic_2 = () => {
    return new Date();
}
console.log(magic_2())

// la misma función flecha anterior pero mas reducida..
var magic_3 = () => new Date();
console.log(magic_3())

console.log('-----------------FUNCION ARROW CON PARÁMETROS------------------------------------')
const myConcat = (arg1,arg2) => arg1.concat(arg2);
console.log(myConcat('Hola ' ,'todo bien '))
console.log(myConcat([1,2,3] ,[4,5,6]))

console.log('-----------------WRITE HIGHER ORDER ARROW FUNCTIONS------------------------------')
const misNumeros = [4, 5.8 , -3 , 2 , 46 ,-7 , -4.3];
// hacer una función que calcule el cuadrado de los números enteros y positivos
const squareList = (arr) => {
    const squareIntArr = arr.filter(num => Number.isInteger(num) && num > 0 ).map(x => x * x);
    return squareIntArr;
}
const squaredIntegers = squareList(misNumeros);
console.log(squaredIntegers);
console.log('---------------------------------------------------------------------------------')

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Default Parameters
// para cuando en una función dejamos declarados parametros por defecto
const increment = (function() {
    return function incrementar(number , value = 1){
        return number + value;
    };
})();
console.log(increment(5,2));
console.log(increment(5));

// otra version usando la forma clásica ..
function incrementar(number , value = 1){
    return number + value;
}
console.log(incrementar(5,2))
console.log(incrementar(5))
console.log('---------------------------------------------------------------------------------')
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Rest Operator with function parameters (...argumentos) el operador rest son los tres puntos seguidos 
// de una palabra que representa el nombre de los argumentos
console.log('version 1');
const sumaV1 = (function() {
    return function suma(x,y,z){
        const argumentos = [x,y,z];
        return argumentos.reduce((a,b) => a + b , 0);
    };
})()
console.log(sumaV1(1,2,3));

console.log('version 2');
const sumaV2 = (function() {
    return function suma(...argumentos){ // convierte todo lo que le pasamos acá en un array
        return argumentos.reduce((a,b) => a + b , 0);
    };
})()
console.log(sumaV2(1,2,3));
console.log('---------------------------------------------------------------------------------')
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Use the Spread Operator to evaluate arrays in-place
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', ]
let arr2;
(function(){
    // cuando hacemos que un array sea igual a otro, se cambiamos algo en uno, se cambia en el otro
    // para que no suceda esto, podemos usar el operador ...arr para que cuando lo igualemos
    // el segundo array será uno que tiene los valores del primero per no será una copia de ese ..
    // arr2 = arr1; // esto hace que un array sea copia del otro por lo tanto cuadno cambio un elemento 
    // de uno, el otro array refleja el mismo cambio, para evitar eso hacemos : arr2 = [...arr1];
    arr2 = [...arr1];
    arr1[0] = 'potato';
})();
console.log(arr2);
console.log('---------------------------------------------------------------------------------')
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Use Destructuring Assignment to assignment to assign variables from objects.
var voxel = {
    x: 3.6 , 
    y: 7.4 , 
    z: 6.54
 };

 var x = voxel.x;
 var y = voxel.y;
 var z = voxel.z;

 const {
    x: a , 
    y: b , 
    z: c
 } = voxel

 const AVG_TEMPERATURES = {
    today       : 77.5,
    tomorrow    : 79
 }

 function getTempOfTmrr(avgTemperatures){
    "use strict";

 }

console.log('---------------------------------------------------------------------------------')
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Template Literals

console.log('---------------------------------------------------------------------------------')
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Simple Fields

console.log('---------------------------------------------------------------------------------')
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Declarative Functions

console.log('---------------------------------------------------------------------------------')
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// class Syntax

console.log('---------------------------------------------------------------------------------')
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// getters and setters

console.log('---------------------------------------------------------------------------------')
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// import and export

console.log('---------------------------------------------------------------------------------')
////////////////////////////////////////////////////////////////////////////////////////////////////////////////