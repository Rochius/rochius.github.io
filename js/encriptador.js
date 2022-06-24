// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

var btnEncriptar = document.querySelector("#btn-encriptar");
var btnCopiar = document.querySelector("#btn-copiar");
btnEncriptar.addEventListener("click", function(){
    var mensaje = document.querySelector("#input-encriptador").value.toLowerCase();
    var vectorMensaje = mensaje.split("");
    console.log(mensaje, vectorMensaje);

    for(var i=0; i< vectorMensaje.length ; i++){
        if(vectorMensaje[i] == "a"){
            vectorMensaje[i] = "ai";
        }else if(vectorMensaje[i] == "e"){
            vectorMensaje[i] = "enter";
        }else if(vectorMensaje[i] == "i"){
            vectorMensaje[i] = "imes";
        }else if(vectorMensaje[i] == "o"){
            vectorMensaje[i] = "ober";
        }else if(vectorMensaje[i] == "u"){
            vectorMensaje[i] = "ufat";
        }
    }
    mensaje = "";
    for(var i=0; i<vectorMensaje.length; i++){
        mensaje = mensaje + vectorMensaje[i];
    }
    console.log(mensaje);
    var noEncontroMensaje = document.querySelector("#texto");
    var imagenMunheco = document.querySelector(".munheco")
    var mensajeFinal = document.querySelector("#texto2");
    noEncontroMensaje.classList.add("invisible");
    imagenMunheco.classList.add("invisible");
    mensajeFinal.innerHTML = mensaje;
    btnCopiar.classList.remove("invisible");

})