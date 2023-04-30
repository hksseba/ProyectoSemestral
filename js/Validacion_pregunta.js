var email = document.getElementById("email");
var correo = "ga.maneiro@duocuc.cl";
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

    if(email.value == ""  ){
        msjMostrar = msjMostrar + "<br>Ingresa un correo";
        msj.innerHTML= msjMostrar;
    }

    if (email.value.toUpperCase!=correo1.toUpperCase) {
        msjMostrar = msjMostrar + "<br> Correo no esta en el sistema"
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