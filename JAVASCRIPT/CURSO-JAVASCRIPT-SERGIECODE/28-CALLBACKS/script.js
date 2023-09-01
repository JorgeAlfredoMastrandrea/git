// CALLBACKS (FUNCIONES)
/*
"I will call back later!"
A callback is a function passed as an argument to another function
This technique allows a function to call another function
A callback function can run after another function has finished
*/
function myDisplayer(some) {
    console.log(some);
}

// When you pass a function as an argument, remember not to use parenthesis.
function myCalculator(num1, num2, myCallback) { 
    let sum = num1 + num2;
    myCallback(sum);
}
myCalculator(5, 5, myDisplayer);
//////////////////////////////////////////////////////////////////////////////////////////////////
////             Where callbacks really shine are in asynchronous functions,                  ////
////   where one function has to wait for another function (like waiting for a file to load). ////
//////////////////////////////////////////////////////////////////////////////////////////////////
