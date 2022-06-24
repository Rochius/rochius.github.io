btnCopiar.addEventListener("click", function(){
    var content = document.getElementById("texto2");
    var noEncontroMensaje = document.querySelector("#texto");
    var imagenMunheco = document.querySelector(".munheco")
    var mensajeFinal = document.querySelector("#texto2");
    var mensaje = document.querySelector("#input-encriptador");
    
    content.select();
    document.execCommand('copy');
    alert("El mensaje ha sido copiado al portapapeles");
    mensaje.value = "";
    noEncontroMensaje.classList.remove("invisible");
    imagenMunheco.classList.remove("invisible");
    mensajeFinal.innerHTML = "Ingresa el texto que desees encriptar o desencriptar";
    btnCopiar.classList.add("invisible");
})