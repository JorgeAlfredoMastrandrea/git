// fetch api json
// jsonplaceholder.typicode.com

let urlBase = 'https://jsonplaceholder.typicode.com'

let queryGET = 'comments?postId=1'
let queryPOST = 'posts/1'



// GET: pedir información (de por sí el fetch es un GET) ...
fetch(`${urlBase}/${queryGET}`)
      .then(response => response.json())
      .then(json => console.log(json))

// POST: enviar información
fetch(`${urlBase}/${query}`)
      .then(response => response.json())
      .then(json => console.log(json))

// PUT: editar información
// PATCH: editar información en una pequeña parte nada más
// DEELETE: borrar un item