// ESTA ES LA FORMA QUE NO SE DEBERÍAN USAR LAS PROMESAS, SE CONOCE COMO LA PIRÁMIDE DE LA PERDICIÓN ...
// ver hora 6:17
let promesa1 = new Promise((response) => {    
    setTimeout(() => {
        let resp = {
            response : 200, 
            description : '1-Esta info es importante'
        };
        response(resp); 
    }, 3000);
});

let promesa2 = new Promise((response) => {    
    setTimeout(() => {
        let resp = {
            response : 200, 
            description : '2-Esta info es importante pero suele demorar mucho'
        };
        response(resp);
    }, 5000);
});

let promesa3 = new Promise((response) => {    
    setTimeout(() => {
        let resp = {
            response : 200, 
            description : '3-Información rápida' // esta se hizo antes que las otras pero tuvo que esperar a que las otras terminaran para poder mostrarse !!
        };
        response(resp);
    }, 2500);
});

// acá la llamamos a la promesa , de acuerdo a lo que haya pasado, mostramos la respuesta res
promesa1.then(res => {
    // si sale todo bien ...
    console.log(res.description);
    promesa2.then(res => {
        console.log(res.description)
        promesa3.then(res => {
            console.log(res.description)
        }).catch(error => {
            console.log(error)
        })
    }).catch(error => {
        console.log(error)
    })
}).catch(error => {
    // si sale todo mal ...
    console.log(error) // podemos usar console.error para que en el navegador se vea rojo
})