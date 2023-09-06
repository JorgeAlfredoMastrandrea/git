

document.getElementById('formulario').addEventListener('submit', (event) => {
    // suprimimos actualizacion de la página.
    event.preventDefault();
    
    // Validar campo nombre.
    let entradaNombre = document.getElementById('name');
    let errorNombre = document.getElementById('nameError');

    if (entradaNombre.value.trim() === ''){
        errorNombre.textContent = 'Por favor, introducí tu nombre';
        errorNombre.classList.add('error-message');
    }else{
        errorNombre.textContent = '';
        errorNombre.classList.remove('error-message');
    }

    // Validar correo electrónico.
    let emailEntrada = document.getElementById('email');
    let emailError = document.getElementById('emailError');
    let emailPattern = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i    

    if (!emailPattern.test(emailEntrada.value)){    // si el test da falso y !falso es = a true
        emailError.textContent = 'Por favor, introducí un mail válido';
        emailError.classList.add('error-message');
    }else{
        emailError.textContent = '';
        emailError.classList.remove('error-message');
    }

    // Validar contraseña.
    let contrasenaEntrada = document.getElementById('password');
    let contrasenaError = document.getElementById('passwordError');
    let patternContrasenas = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&#.$($)$-$_])[A-Za-z\d$@$!%*?&#.$($)$-$_]{8,15}$/;

    if (!patternContrasenas.test(contrasenaEntrada.value)){
        contrasenaError.textContent = 'La contraseña debe tener al menos 8 caracteres, números, mayúsculas y minúsculas y caractyeres especiales';
        contrasenaError.classList.add('error-message');
    }else{
        contrasenaError.textContent = '';
        contrasenaError.classList.remove('error-message');
    }

    // Si todos los campos son válidos, enviar formulario.
    if (!errorNombre.textContent && !emailError.textContent && !contrasenaError.textContent){
        // backend que reciba la info
        alert('El formulario se ha enviado con éxito');
        document.getElementById('formulario').reset();
    }



})