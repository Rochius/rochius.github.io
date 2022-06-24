// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

var btnDesencriptar = document.querySelector("#btn-desencriptar");

btnDesencriptar.addEventListener("click", function(){
    var mensaje = document.querySelector("#input-encriptador").value.toLowerCase();
    var vectorMensaje = mensaje.split("");
    for(var i=0; i< vectorMensaje.length; i++){
        if(i>=vectorMensaje.length){
            break;
        }

        if(vectorMensaje[i] == "a" && vectorMensaje[i+1]=="i"){
            vectorMensaje.splice(i+1, 1);
            i=i+1;
        }else if(vectorMensaje[i] == "e" && vectorMensaje[i+1] == "n"){
            vectorMensaje.splice(i+1, 4);
        }else if(vectorMensaje[i]=="i" && vectorMensaje[i+1]=="m"){
            vectorMensaje.splice(i+1, 3);
        }else if(vectorMensaje[i]=="o" && vectorMensaje[i+1]=="b"){
            vectorMensaje.splice(i+1, 3);
        }else if(vectorMensaje[i]=="u" && vectorMensaje[i+1]=="f"){
            vectorMensaje.splice(i+1, 3);
        }
    }
    
    mensaje = "";
    for(var i=0; i<vectorMensaje.length; i++){
        mensaje = mensaje + vectorMensaje[i];
    }
    console.log(mensaje);
    var noEncontroMensaje = document.querySelector("#texto");
    var mensajeFinal = document.querySelector("#texto2");
    noEncontroMensaje.classList.add("invisible");
    mensajeFinal.innerHTML = mensaje;
    btnCopiar.classList.remove("invisible");
})