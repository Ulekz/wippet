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