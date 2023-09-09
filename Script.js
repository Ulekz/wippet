document.addEventListener("DOMContentLoaded", function() {
    const welcomeMessage = document.getElementById("Titulo");
    
    setTimeout(function() {
        welcomeMessage.style.opacity = "1";
        welcomeMessage.style.transform = "translateY(0)";
    }, 500);
});

document.addEventListener("DOMContentLoaded", function() {
    const welcomeMessage = document.getElementById("Subtitulo");
    
    setTimeout(function() {
        welcomeMessage.style.opacity = "1";
        welcomeMessage.style.transform = "translateY(0)";
    }, 500);
});

document.addEventListener("DOMContentLoaded", function() {
    const saludoDiv = document.getElementById("saludo");
    const horaActual = new Date();
    const hora = horaActual.getHours();
    const minutos = horaActual.getMinutes();
    const segundos = horaActual.getSeconds();

    let saludo;

    if (hora >= 5 && hora < 12) {
        saludo = "¡Buenos días!";
    } else if (hora >= 12 && hora < 18) {
        saludo = "¡Buenas tardes!";
    } else {
        saludo = "¡Buenas noches!";
    }

    saludoDiv.textContent = `${saludo} Hora actual: ${hora}:${minutos}:${segundos}`;
});

document.addEventListener("DOMContentLoaded", function () {
    const messageContainer = document.getElementById("message-container");

    // Mostrar el mensaje de bienvenida después de un retraso
    setTimeout(function () {
        messageContainer.style.opacity = "1";
        messageContainer.style.pointerEvents = "auto";
    }, 60);

    // Ocultar el mensaje al hacer clic en cualquier parte de la pantalla
    messageContainer.addEventListener("click", function () {
        messageContainer.style.opacity = "0";
        messageContainer.style.pointerEvents = "none";
    });
});

// Obtener el elemento de video
const video = document.getElementById('myVideo');

// Obtener los botones de pausa y reproducción
const playButton = document.getElementById('playButton');
const pauseButton = document.getElementById('pauseButton');

// Agregar eventos a los botones
playButton.addEventListener('click', () => {
    video.play();
});

pauseButton.addEventListener('click', () => {
    video.pause();
});
