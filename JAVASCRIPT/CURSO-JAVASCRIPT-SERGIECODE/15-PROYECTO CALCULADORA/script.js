// agrega a la pantalla el valor del boton de la calculadora
function agregar(valor){
    document.getElementById('pantalla').value += valor;
}

// vacía la pantalla de la calculadora
function borrar(){
    document.getElementById('pantalla').value = '';
}

// calcula lo que está dentro de la pantalla
function calcular(){
    const valorPantalla = document.getElementById('pantalla').value;
    const resultado = eval(valorPantalla);
    document.getElementById('pantalla').value = resultado;
}