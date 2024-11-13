document.addEventListener("DOMContentLoaded", function() {
    const preloader = document.getElementById("preloader");
    const content = document.getElementById("content");

    // Función para ocultar el preloader
    function hidePreloader() {
        preloader.style.transition = "opacity 0.5s ease"; // Transición de desvanecimiento
        preloader.style.opacity = "0"; // Desvanece el preloader

        // Espera a que termine la transición antes de eliminar el preloader
        setTimeout(() => {
            preloader.style.display = "none"; // Oculta completamente el preloader
            content.style.display = "block"; // Muestra el contenido de la página
        }, 500); // Tiempo de espera para coincidir con el tiempo de transición
    }

    // Llama a la función hidePreloader cuando se haya cargado completamente la página
    window.addEventListener("load", hidePreloader);

    // Configura un temporizador de 3 segundos para ocultar el preloader, incluso si la página no está completamente cargada
    setTimeout(hidePreloader, 3000);
});
