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

// POST: enviar información
function post(){    
    let postTitle   = document.getElementById('postTitle').value;
    let postBody    = document.getElementById('postBody').value;
    let postUserID  = document.getElementById('postUserID').value;    
    
    let requestBodyPOST = {
        title: `${postTitle}`,
        body: `${postBody}`,
        userId: `${postUserID}`,
    };

    //console.log(`${urlBase}/${requestBodyPOST}`)

    fetch(`${urlBase}/posts`, {
        method: 'POST',
        body: JSON.stringify({
        title: `${postTitle}`,
        body: `${postBody}`,
        userId: `${postUserID}`,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
    })
    .then((response) => response.json())
    .then((json) => console.log(json));   
}

// PUT: editar información
function put(){
    let putId       = document.getElementById('putId').value;
    let putTitle    = document.getElementById('putTitle').value;
    let putBody     = document.getElementById('putBody').value;
    let putUserId   = document.getElementById('putUserId').value;

    let requestBodyPUT = {
        id : `${putId}`,
        title : `${putTitle}`,
        body : `${putBody}`,
        userId : `${putUserId}`,
    };
  
    fetch(`${urlBase}/posts/${putId}`,{
        method: 'PUT',
        headers: {
              'Content-Type':'application/json; charset=UTF-8',
        },
        body: JSON.stringify(requestBodyPUT)  
    })
    .then(response => response.json())
    .then(json => console.log(json))
}