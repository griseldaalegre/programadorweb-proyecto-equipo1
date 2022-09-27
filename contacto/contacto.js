let form1 = document.getElementById('form');
let resultado = document.getElementById('result'); 

form1.addEventListener('submit', validarFormulario);

function validarFormulario(e) {
    e.preventDefault();
    let nombre = document.getElementById('nombre').value;
    let celular = document.getElementById('celular').value;

    if (nombre.length < 3) {
        resultado.innerText = "El nombre debe contener un mínimo de 3 caracteres."
    } else if (celular.length < 10) {
        resultado.innerText = "El celular de contacto debe contener un mínimo de 10 caracteres, incluyendo la característica local."
    } else {
        resultado.innerText = "En breve nos pondremos en contacto. ¡Muchas gracias por elegirnos!"
    }
}