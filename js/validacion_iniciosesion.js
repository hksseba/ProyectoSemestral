var nombre = document.getElementById("nombre");
var clave = document.getElementById("contrasena");

const formulario = document.getElementById("forminicio");
var msj = document.getElementById("warnings");


formulario.addEventListener('submit',e =>{

    e.preventDefault();
    let msjMostrar = "";
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