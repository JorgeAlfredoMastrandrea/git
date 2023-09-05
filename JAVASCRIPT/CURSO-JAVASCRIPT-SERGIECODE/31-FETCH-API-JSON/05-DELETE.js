// fetch api json
// jsonplaceholder.typicode.com

let urlBase = 'https://jsonplaceholder.typicode.com'

// DEELETE: borrar un item
let elementoDELETE = 7;

fetch(`${urlBase}/posts/${elementoDELETE}` , {
  method: 'DELETE',
});