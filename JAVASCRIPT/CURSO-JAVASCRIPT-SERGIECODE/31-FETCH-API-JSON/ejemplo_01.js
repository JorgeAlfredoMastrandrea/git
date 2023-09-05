// fetch api json
// jsonplaceholder.typicode.com

let urlBase = 'https://jsonplaceholder.typicode.com'




// GET: pedir información (de por sí el fetch es un GET) ...
// let queryGET = 'comments?postId=1';

// fetch(`${urlBase}/${queryGET}`)
//       .then(response => response.json())
//       .then(json => console.log(json))
/////////////////////////////////////////////////////////////////////////////////////////

// POST: enviar información
// let queryPOST = 'posts/1';
// let requestBodyPOST = {
//       title: 'Ricardo comenta sobre tu foto',
//       body: 'Què bella foto primar!',
//       userId: 1,
// };

// fetch(`${urlBase}/posts`,{
//       method: 'POST',
//       headers: {
//             'Content-Type':'application/json; charset=UTF-8',
//       },
//       body: JSON.stringify(requestBodyPOST)

// })
//       .then(response => response.json())
//       .then(json => console.log(json))
/////////////////////////////////////////////////////////////////////////////////////////

// PUT: editar información
// let posteo = 1;

// let requestBodyPUT = {
//       id : 1,
//       title : 'Ricardo comenta sobre tu foto',
//       body : 'Què bella foto primar!',
//       userId : 1,
// };

// fetch(`${urlBase}/posts/${posteo}`,{
//       method: 'PUT',
//       headers: {
//             'Content-Type':'application/json; charset=UTF-8',
//       },
//       body: JSON.stringify(requestBodyPUT)

// })
//       .then(response => response.json())
//       .then(json => console.log(json))
/////////////////////////////////////////////////////////////////////////////////////////

// PATCH: editar información en una pequeña parte nada más
// let posteoPATCH = 10;
// let modificacion = {
//       title : 'Este tìtulo ha sido modificado'
// }

// fetch(`${urlBase}/posts/${posteoPATCH}`,{
//       method: 'PATCH',
//       headers: {
//             'Content-Type':'application/json; charset=UTF-8',
//       },
//       body: JSON.stringify(modificacion)

// })
//       .then(response => response.json())
//       .then(json => console.log(json))

/////////////////////////////////////////////////////////////////////////////////////////
// DEELETE: borrar un item
let elementoDELETE = 7;

fetch(`${urlBase}/posts/${elementoDELETE}` , {
  method: 'DELETE',
});