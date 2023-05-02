function validarFormulario() {
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var mensaje = document.getElementById("mensaje").value;

    if (nombre == "") {
        alert("Por favor ingresa tu nombre.");
        return false;
    }
    if (email == "" || !email.includes("@")) {
        alert("Por favor ingresa un correo electrónico válido.");
        return false;
    }
    if (password.length < 6) {
        alert("La contraseña debe tener al menos 6 caracteres.");
        return false;
    }
    if (mensaje == "") {
        alert("Por favor ingresa un mensaje.");
        return false;
    }
    return true;
}

function enviarFormulario() {
    if (validarFormulario()) {
        var formData = new FormData(document.querySelector('form'));
        fetch('tu_url_de_servidor', {
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        .then(data => {
            console.log(data);
            alert('Gracias por enviar el formulario.');
        })
        .catch(error => {
            console.error(error);
            alert('Ocurrió un error al enviar el formulario.');
        });
    }
}
