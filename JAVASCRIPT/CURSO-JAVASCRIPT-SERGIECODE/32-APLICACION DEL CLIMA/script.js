// https://openweathermap.org/
// https://openweathermap.org/current#name

let api_educacion = 'a39798a9630031e25376e1ec4c9d2cd7';
let urlBase = 'https://api.openweathermap.org/data/2.5/weather'
let difKelvin = 273.15;

/*
https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
*/

document.getElementById('botonBusqueda').addEventListener('click' , () => {
    const ciudad = document.getElementById('ciudadEntrada').value 
    if (ciudad){
        fetchDatosClima(ciudad);
    }
})

function fetchDatosClima(ciudad){
    fetch(`${urlBase}?q=${ciudad}&appid=${api_educacion}`)
    .then(response => response.json())
    .then(response => mostrarDatosClima(response))
}

function mostrarDatosClima(response){
    const divDatosClima = document.getElementById('datosClima')
    divDatosClima.innerHTML = ''

    const ciudadNombre = response.name;
    const paisNombre = response.sys.country;
    const temperatura = response.main.temp;
    const descripcion = response.weather[0].description;

    const ciudadTitulo = document.createElement('h2');
    ciudadTitulo.textContent = `${ciudadNombre} , ${paisNombre} ` ;

    const temperaturaInfo = document.createElement('p');
    temperaturaInfo.textContent = `La temperatura es : ${Math.floor(temperatura - difKelvin) } °C`;

    const descripcionInfo = document.createElement('p');
    descripcionInfo.textContent = descripcion;

    divDatosClima.appendChild(ciudadTitulo);
    divDatosClima.appendChild(temperaturaInfo);
    divDatosClima.appendChild(descripcionInfo);
}