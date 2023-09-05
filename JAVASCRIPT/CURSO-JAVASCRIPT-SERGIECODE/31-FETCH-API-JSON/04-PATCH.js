// fetch api json
// jsonplaceholder.typicode.com

let urlBase = 'https://jsonplaceholder.typicode.com'

// PATCH: editar información en una pequeña parte nada más
let posteoPATCH = 10;
let modificacion = {
      title : 'Este tìtulo ha sido modificado'
}

fetch(`${urlBase}/posts/${posteoPATCH}`,{
      method: 'PATCH',
      headers: {
            'Content-Type':'application/json; charset=UTF-8',
      },
      body: JSON.stringify(modificacion)

})
      .then(response => response.json())
      .then(json => console.log(json)) culo