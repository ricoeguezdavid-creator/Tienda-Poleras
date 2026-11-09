const formContacto = document.getElementById("formContacto");
const respuesta = document.getElementById("respuesta");

formContacto.addEventListener("submit", function(event) {
    event.preventDefault();

    let nombre = document.getElementById("nombre").value.trim();
    let ema = document.getElementById("email").value.trim();
    let men = document.getElementById("mensaje").value.trim();

    //limpiamos el formulario
    formContacto.reset();
    //mostramos un mensaje de exito en el parrafo respuesta
    mostrarMensaje("Gracias por contactarnos, " + nombre + ". Te responderemos a la brevedad.","exito");
});

formContacto.addEventListener("reset", function(event){
    //limpiamos el parrafo respuesta al limpiar el formulario
    respuesta.textContent = "";
    respuesta.className = ""; //quitamos la clase de exito o error
});

//funcion que muestra un texto en el parrafo respuesta cuando se carga la pagina
function mostrarMensaje(texto, tipo){
    respuesta.textContent = texto;
    respuesta.className = tipo; //tipo puede ser exito o error
}