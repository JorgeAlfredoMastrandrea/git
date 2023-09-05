// fetch api json
// jsonplaceholder.typicode.com

let urlBase = 'https://jsonplaceholder.typicode.com'

// POST: enviar información
let queryPOST = 'posts/1';
let requestBodyPOST = {
      title: 'Ricardo comenta sobre tu foto',
      body: 'Què bella foto primar!',
      userId: 1,
};

fetch(`${urlBase}/posts`,{
      method: 'POST',
      headers: {
            'Content-Type':'application/json; charset=UTF-8',
      },
      body: JSON.stringify(requestBodyPOST)

})
.then(response => response.json())
.then(json => console.log(json))