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
    if(nombre.value.length < 4 || nombre.value.length > 20){
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
    }

    if(clave.value == ""  ){
        msjMostrar = msjMostrar + "<br>Ingresa una contraseña";
        msj.innerHTML= msjMostrar;
    }

        // Verificar si la primera letra es mayúscula
        if (clave.value[0] !== clave.value[0].toUpperCase()) {
            msjMostrar = msjMostrar + "<br> Ingresa una mayuscula"
            msj.innerHTML= msjMostrar;
          return false;
        
        }
      
        // Verificar si la contraseña tiene al menos 8 caracteres
        if (clave.value.length < 8 || clave.value.length > 25 ) {
            msjMostrar = msjMostrar + "<br> La contraseña debe tener un minimo 8 caracteres y un maximo de 25 caracteres "
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
        
        if (!/^\d+$/.test(fono.value)) {
            msjMostrar = msjMostrar + "<br> Ingresa algun numero de telefono"
            msj.innerHTML= msjMostrar;
            return false;
          }
        
          if (fono.value.charAt(0) !== "9") {
            return false;
          } 
        
          // Verificar si el número de teléfono tiene un máximo de 9 dígitos
        if (fono.value.length !== 9) {
            msjMostrar = msjMostrar + "<br> Ingresa un numero de telefono valido"
            msj.innerHTML= msjMostrar;
            return false;
          }
          else{ msjMostrar = msjMostrar + "<br> Enviado"
          msj.innerHTML= msjMostrar;
          window.location.href = '../html/InicioSesion.html';
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