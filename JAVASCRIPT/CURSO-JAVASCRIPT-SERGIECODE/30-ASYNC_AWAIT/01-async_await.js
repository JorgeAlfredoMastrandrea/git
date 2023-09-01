// async await
// es una forma de trabajar las promesas ..
// async : es para decirle a una función que va a ser asíncrona
// await : va a servir para esperar a que las promesas se cumplan ...

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

async function ejecutarPromesas() {
    let respuestaProm1 = await promesa1;
    console.log(respuestaProm1);
    let respuestaProm2 = await promesa2;
    console.log(respuestaProm2);
    let respuestaProm3 = await promesa3;
    console.log(respuestaProm3);
}

ejecutarPromesas()