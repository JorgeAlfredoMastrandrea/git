// fetch api json
// jsonplaceholder.typicode.com

/*
Resources
JSONPlaceholder comes with a set of 6 common resources:

/posts	100 posts
/comments	500 comments
/albums	100 albums
/photos	5000 photos
/todos	200 todos
/users	10 users

Note: resources have relations. For example: posts have many comments, albums have many photos, ... see guide for the full list.
*/

fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
       .then(json => console.log(json))

/*
Routes
All HTTP methods are supported. You can use http or https for your requests.

GET	/posts
GET	/posts/1
GET	/posts/1/comments
GET	/comments?postId=1
POST	/posts
PUT	/posts/1
PATCH	/posts/1
DELETE	/posts/1

Note: see guide for usage examples. (https://jsonplaceholder.typicode.com/guide/)
*/
fetch('https://jsonplaceholder.typicode.com/comments?postId=1')
      .then(response => response.json())
      .then(json => console.log(json))