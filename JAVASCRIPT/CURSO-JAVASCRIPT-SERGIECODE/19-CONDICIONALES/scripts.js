// if... else... else if...

let edad = 61;

if (edad >= 18 && edad <= 60){
    console.log('puede ingresar');
}else if (edad <= 18){
    console.log('no puede ingresar porque sos menor de edad');
}else {
    console.log('no puede ingresar porque no se recomienda');
}

// switch case default ...
let estiloMúsica = 'Rock';

switch (estiloMúsica) {
    case 'Punk':
        console.log('te recomiendo los ramones');
        break;
    case 'Pop':
        console.log('te recomiendo Michael Jackson');
        break;
    case  'Rock':
        console.log('te recomiendo soda estereo');
        // break; si no le pongo el break, va a ejecutar esta acción y va a seguir de largo hasta que encuentre un break
    case  'Hard Rock':
        console.log('te recomiendo guns and roses');
        break;
    
    default:    // si no coincide con nada entonces ejecutamos esto:
        console.log('no conozco esa musica te recomiendo Mozart');
        break;
}

//
