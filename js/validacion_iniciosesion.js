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
    
    
  } else {
    // El correo electrónico es inválido
    msjMostrar = msjMostrar + "<br> Ingrese un correo valido"
    msj.innerHTML= msjMostrar;
    
  }
  if(clave.value == ""  ){
    msjMostrar = msjMostrar + "<br>Ingresa una contraseña";
    msj.innerHTML= msjMostrar;
}
if (clave.value[0] !== clave.value[0].toUpperCase()) {
  msjMostrar = msjMostrar + "<br> Ingresa una mayuscula"
  msj.innerHTML= msjMostrar;
return false;

}

  // Verificar si la contraseña tiene al menos 8 caracteres
  if (clave.value.length < 8) {
    msjMostrar = msjMostrar + "<br> La contraseña debe tener minimo 8 caracteres"
    msj.innerHTML= msjMostrar;
  return false;
}

// Verificar si la contraseña contiene un carácter especial
var caracteresEspeciales = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
if (!caracteresEspeciales.test(clave.value)) {
    msjMostrar = msjMostrar + "<br> Agrega un caracter especial"
    msj.innerHTML= msjMostrar;
  return false;
}

// Verificar si la contraseña contiene números y no están seguidos
if (!/\d/.test(clave.value)) {
    msjMostrar = msjMostrar + "<br> Ingresa algun numero en la clave"
    msj.innerHTML= msjMostrar;
  return false;
}
});
function esMayuscula(letra){
  if(letra == letra.toUpperCase()){
      return true;
  }
  else{
      enviar = true;
  }
}