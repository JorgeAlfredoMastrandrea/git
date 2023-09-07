// ejemplo : curl --request GET \
//     --url 'https://api.themoviedb.org/3/search/movie?query=Jack+Reacher&api_key=4d29f6952bcd9102062403d5b270f38d'

let api_key = '4d29f6952bcd9102062403d5b270f38d';
let tokenAcceso = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZDI5ZjY5NTJiY2Q5MTAyMDYyNDAzZDViMjcwZjM4ZCIsInN1YiI6IjY0ZjliYTk3YThiMmNhNGYxZGQ4N2YxOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VrL57TIGJQKY6dq0reNuVloJP03uP64A90ImvLoEleo';
let urlBase = 'https://api.themoviedb.org/3/search/movie'
let urlImg = 'https://image.tmdb.org/t/p/w200'
let resultContainer = document.getElementById('results');


document.getElementById('searchButton').addEventListener('click' , searchMovies);

function searchMovies(){
    resultContainer.innerHTML = 'Cargando...'
    let searchInput = document.getElementById('searchInput').value;

    fetch(`${urlBase}?api_key=${api_key}&query=${searchInput}`)
    .then(response => response.json())
    .then(response => displayMovies(response.results))

}

function displayMovies(movies){

    resultContainer.innerHTML = ''    

    // si no trae nada ...
    if (movies.length === 0){
        resultContainer.innerHTML = '<p> No se encontraron resultados para tu búsqueda </p>';
        return;
    }else{
        movies.forEach(movie => {
            let movieDiv = document.createElement('div');
            movieDiv.classList.add('movie')

            let title = document.createElement('h2')
            title.textContent = movie.title;

            let releaseDate = document.createElement('p')
            releaseDate.textContent = 'Fecha de lanzamiento : ' + movie.release_date

            let overview = document.createElement('p')
            overview.textContent = movie.overview;

            let posterPath = urlImg + movie.poster_path;
            let poster = document.createElement('img')
            poster.src = posterPath;

            movieDiv.appendChild(poster)
            movieDiv.appendChild(title)
            movieDiv.appendChild(releaseDate)
            movieDiv.appendChild(overview)

            resultContainer.appendChild(movieDiv)

                        
        });
    }
}