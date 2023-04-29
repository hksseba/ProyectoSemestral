var correo = document.getElementById("email");
var clave = document.getElementById("contrasena");

const formulario = document.getElementById("forminicio");
var msj = document.getElementById("warnings");

// Obtener el formulario y el campo de correo electrónico
const campoEmail = document.getElementById("email");

// Agregar un evento de escucha al formulario al enviar
formulario.addEventListener("submit", function (event) {
  event.preventDefault(); // Evitar el envío del formulario
  let msjMostrar="";

  const email = correo.value.trim(); // Obtener el valor del campo de correo electrónico y eliminar espacios en blanco

  // Expresión regular para verificar el correo electrónico
  const regex = /@(gmail|hotmail|yahoo)\./;

  if (regex.test(email)) {
    // El correo electrónico es válido
    msj.innerHTML = "<br> Enviado";
    
    formulario.reset(); // Limpiar el formulario si se desea
  } else {
    // El correo electrónico es inválido
    msjMostrar = msjMostrar + "<br> Ingrese un correo valido"
    msj.innerHTML= msjMostrar;
    
  }
});