// fetch api json
// jsonplaceholder.typicode.com

let urlBase = 'https://jsonplaceholder.typicode.com'

// PUT: editar información
let posteo = 1;

let requestBodyPUT = {
      id : 1,
      title : 'Ricardo comenta sobre tu foto',
      body : 'Què bella foto primar!',
      userId : 1,
};

fetch(`${urlBase}/posts/${posteo}`,{
      method: 'PUT',
      headers: {
            'Content-Type':'application/json; charset=UTF-8',
      },
      body: JSON.stringify(requestBodyPUT)

})
      .then(response => response.json())
      .then(json => console.log(json))