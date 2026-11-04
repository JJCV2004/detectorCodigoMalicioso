const codigoMalicioso = ['UPDATE', 'SELECT', 'DROP', 'ALTER', 'TRUNCATE', 'DELETE', 'REVOKE', 'GRANT'];
const user = 'Alan';
const password = "123";

// Función para revisar si el texto contiene alguna palabra prohibida
function revisarInput(texto){
    let textoUpper = texto.toUpperCase();
    for(let i = 0; i < codigoMalicioso.length; i++){
        if(textoUpper.includes(codigoMalicioso[i]) ){
            return true;
        }
    }
    return false;
}

function logIn(usuario, pwd){
    if(revisarInput(usuario) || revisarInput(pwd)){
        return{
            texto: "Se ha detectado codigo malicioso. Llammando a la policia y al SWAT. Suerte 🍀",
            color: "#dc3545" // Rojo
        };
    }
    if(usuario === user && pwd === password){
        return{
            texto: "Inicio de sesion exitoso",
            color: "#28a745" // Verde
        };
    }
    return{
        texto: "Usuario o contraseña incorrectos. Intente de nuevo",
        color: "#fd7e14" // Naranja
    };
}

// Capturar el envío del formulario
const formulario = document.getElementById('formularioLogin');

formulario.addEventListener("submit", function(evento){
    // Evita que la página se recargue al presionar el botón
    evento.preventDefault();

    // Obtener los valores escritos en los inputs
    let usuarioInput = document.getElementById('usuario').value;
    let pwdInput = document.getElementById("pwd").value;

    // Ejecutar la validación
    let resultado = logIn(usuarioInput, pwdInput);

    // Mostrar el resultado en la consola del navegador (F12)
    console.log("Usuario: " + usuarioInput + " -> " + resultado.texto);

    //mostrar el resultado en la pantalla
    let parrafoMensaje = document.getElementById("mensaje");
    parrafoMensaje.textContent = resultado.texto;
    parrafoMensaje.style.color = resultado.color;

});