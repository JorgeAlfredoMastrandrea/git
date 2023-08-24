// selecciona un número al azar para que adivine
let numeroAzar = Math.floor(Math.random()*10) + 1; // para que de entre 0 y 100

let numeroEntrada = document.getElementById('numeroEntrada');
let mensaje = document.getElementById('mensaje');

function chequearResultado(){
    let numeroIngresado = parseInt(numeroEntrada.value);

    if (numeroIngresado < 1 || numeroIngresado > 10 || isNaN(numeroIngresado)){
        mensaje.textContent = 'Por favor introduce un número válido entre 0 y 10';
        mensaje.style.color = 'black';
        return
    }

    if (numeroIngresado == numeroAzar){
        mensaje.textContent = 'Felicitaciones has ganado !!';
        mensaje.style.color = 'green';
        numeroEntrada.disabled = true;         
    }else if (numeroIngresado < numeroAzar){
        mensaje.textContent = 'Mas alto el número es mayor al que dijiste';
        mensaje.style.color = 'red';
    }else {
        mensaje.textContent = 'Mas bajo el número es menor al que dijiste';
        mensaje.style.color = 'red';
    }
}

