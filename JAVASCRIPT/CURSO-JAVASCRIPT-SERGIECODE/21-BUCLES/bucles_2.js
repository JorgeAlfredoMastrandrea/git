////////////////////// bucles lógicos ///////////////////
// while
let edad = 0;

while (edad < 18){
    console.log(`Tienes ${edad} y aún eres un niño`);
    edad++;
}
console.log(`---------------------------`);
console.log(`Tienes ${edad} y ya eres mayor de edad`);



// do while
edad = 0;
do{
    console.log(`Tienes ${edad} y aún eres un niño`);
    edad++;
}while(edad < 18);
console.log(`---------------------------`);
console.log(`Tienes ${edad} y ya eres mayor de edad`);


// usando if y break dentro del while
console.log(`---------------------------`);
edad = 0
while(edad < 30){
    console.log(edad);
    edad++;
    if (edad == 25) break;
}
console.log(`Saliste porque tienes ${edad} años`)