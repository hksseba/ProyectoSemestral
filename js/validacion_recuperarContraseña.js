var clave = document.getElementById("contrasena");
var clave1 = document.getElementById("rcontrasena");

const formulario = document.getElementById("formrContraseña");
var msj = document.getElementById("warnings");



formulario.addEventListener('submit',e =>{

    e.preventDefault();
    let msjMostrar = "";
    let enviar = false;
    if(enviar){
        msj.innerHTML = msjMostrar;
    }
    else{
        msj.innerHTML = "Enviado";

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

    if (clave.value!=clave1.value) {
        msjMostrar = msjMostrar + "<br> La contraseña tiene que ser igual"
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