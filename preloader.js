<script>
    document.addEventListener("DOMContentLoaded", function() {
        const preloader = document.getElementById("preloader");

        // Oculta el preloader después de que la página haya cargado o tras un máximo de 3 segundos
        function hidePreloader() {
            preloader.style.transition = "opacity 0.5s ease"; // Transición de desvanecimiento
            preloader.style.opacity = "0"; // Desvanece el preloader

            // Espera a que termine la transición antes de eliminar el preloader
            setTimeout(() => {
                preloader.style.display = "none"; // Oculta completamente el preloader
            }, 500); // Tiempo de espera para coincidir con el tiempo de transición
        }

        // También oculta el preloader cuando la página se carga completamente
        window.addEventListener("load", hidePreloader);

        // Configura el temporizador de 3 segundos para ocultar el preloader, incluso si la página no está completamente cargada
        setTimeout(hidePreloader, 3000);
    });
</script>
