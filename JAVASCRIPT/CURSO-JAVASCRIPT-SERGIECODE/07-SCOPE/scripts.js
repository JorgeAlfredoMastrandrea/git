// scope que llega hasta la {}
let x = 5;
{
    let x = 2;
    console.log(x);
}
console.log(x)

// scope general de la variable y , toma el definido arriba
let y = 5;
{
    console.log(y);
}
console.log(y)

// asignamos y sumamos a la vez
let c = 5;
{
    let g = 3;
    c += g;
    console.log(c)
}

