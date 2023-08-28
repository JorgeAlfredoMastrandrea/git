// forEach()	    Calls a function for each array element

const myArr = [2, 8, 3, 4, 5, 6 , 12, 14,15 ,21];

const numParImpar = myArr.forEach((currentValue)=> {
    console.log( `el valor ${currentValue} es : ` , (currentValue % 2  == 0 ? "par" : "impar"));
})