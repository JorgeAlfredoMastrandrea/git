// fetch api json
// jsonplaceholder.typicode.com

let urlBase = 'https://jsonplaceholder.typicode.com'

// GET: pedir información (de por sí el fetch es un GET) ...
function get(){
    let postId = document.getElementById('get').value;
    let queryGET = `comments?postId=${postId}`;
    fetch(`${urlBase}/${queryGET}`)
      .then(response => response.json())
      .then(json => console.log(json))
}