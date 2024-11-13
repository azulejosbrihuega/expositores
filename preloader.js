<script>
    // Oculta el preloader después de que toda la página haya cargado
    window.addEventListener("load", function() {
        const preloader = document.getElementById("preloader");
        preloader.style.transition = "opacity 0.5s ease"; // Transición de desvanecimiento
        preloader.style.opacity = "0"; // Desvanece el preloader

        // Espera a que termine la transición antes de eliminar el preloader
        setTimeout(() => {
            preloader.style.display = "none";
        }, 500); // Tiempo de espera coincidente con la transición
    });
</script>