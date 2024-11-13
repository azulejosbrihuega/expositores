<script>
    document.addEventListener("DOMContentLoaded", function() {
        const preloader = document.getElementById("preloader");

        // Oculta el preloader ya sea después de que la página haya cargado o tras un máximo de 3 segundos
        function hidePreloader() {
            preloader.style.transition = "opacity 0.5s ease"; // Transición de desvanecimiento
            preloader.style.opacity = "0"; // Desvanece el preloader

            // Espera a que termine la transición antes de eliminar el preloader
            setTimeout(() => {
                preloader.style.display = "none";
            }, 500); // Coincide con el tiempo de transición de 0.5s
        }

        // Configura el temporizador de 3 segundos
        setTimeout(hidePreloader, 3000);

        // También oculta el preloader cuando la página se carga por completo
        window.addEventListener("load", hidePreloader);
    });
</script>
