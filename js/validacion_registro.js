var nombre = document.getElementById("nombre");
var clave = document.getElementById("contrasena");
var fono = document.getElementById("telefono");
var correo = document.getElementById("email");

const formulario = document.getElementById("formregistro");
var msj = document.getElementById("warnings");



formulario.addEventListener('submit',e =>{

    e.preventDefault();
    let msjMostrar = "";
    let enviar = false;
    if(nombre.value.length < 4 || nombre.value.length > 25){
        msjMostrar = msjMostrar + "<br>El nombre debe tener entre 4 y 20 caracteres.";
        enviar = true;       
    }

    if(enviar){
        msj.innerHTML = msjMostrar;
    }
    else{
        msj.innerHTML = "Enviado";

    }

    const email = correo.value.trim(); // Obtener el valor del campo de correo electrónico y eliminar espacios en blanco

    // Expresión regular para verificar el correo electrónico
    const regex = /@(gmail|hotmail|outlook)\./;
  
    if (regex.test(email)) {
      // El correo electrónico es válido               
    } else {
      // El correo electrónico es inválido
      msjMostrar = msjMostrar + "<br> Ingrese un correo valido"
      msj.innerHTML= msjMostrar;
      console.log("falso");
    }

    if (clave.value.length < 8){
        msjMostrar = msjMostrar + "<br>Ingrese una contraseña valida";
        msj.innerHTML=msjMostrar;
        enviar = true;
    }
    var letra = clave.value.charAt(0);
    if(!esMayuscula(letra)){
        msjMostrar = msjMostrar + "<br>La primera letra debe ser mayuscula";
        msj.innerHTML=msjMostrar;
        enviar = true;
    }

    var caracteresEspeciales = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    if (!caracteresEspeciales.test(clave)) {
        msjMostrar = msjMostrar + "<br>Debe contener un caracter especial";
        msj.innerHTML=msjMostrar;
        enviar = true;
        
    }
    })

      // Verificar si la contraseña contiene números y no están seguidos
  var numerosSeguidos = /\d{3}/;
  if (!/\d/.test(clave) || numerosSeguidos.test(clave)) {
    msjMostrar = msjMostrar + "<br>No ingreses mas de 3 numeros seguidos";
    msj.innerHTML=msjMostrar;
    enviar = true;
  }

    function esMayuscula(letra){
        if(letra == letra.toUpperCase()){
            return true;
        }
        else{
            enviar = true;
        }
    }