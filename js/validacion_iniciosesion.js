var nombre = document.getElementById("email");
var clave = document.getElementById("contrasena");

const formulario = document.getElementById("forminicio");
var msj = document.getElementById("warnings");


formulario.addEventListener('submit',e =>{

    e.preventDefault();
    
    let enviar = false;
    if(nombre.value.length < 4 || nombre.value.length > 10){
        msjMostrar = msjMostrar + "<br>El nombre debe tener entre 4 y 10 caracteres.";
        enviar = true;       
    }

    if(enviar){
        msj.innerHTML = msjMostrar;
    }
    else{
        msj.innerHTML = "<br> Enviado";

    }
});


// Obtener el formulario y el campo de correo electrónico
const campoEmail = document.getElementById("email");

// Agregar un evento de escucha al formulario al enviar
formulario.addEventListener("submit", function (event) {
  event.preventDefault(); // Evitar el envío del formulario
  let msjMostrar="";

  const email = campoEmail.value.trim(); // Obtener el valor del campo de correo electrónico y eliminar espacios en blanco

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