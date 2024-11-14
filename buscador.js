document.addEventListener("DOMContentLoaded", function() {
    var keywordsList = document.getElementById('keywordsList');

    document.getElementById('searchInput').addEventListener('input', function() {
        var searchValue = this.value.toLowerCase().trim();
        
        if (searchValue === '') {
            keywordsList.style.display = 'none'; 
            return;
        }

        var lis = keywordsList.getElementsByTagName('li');
        
        Array.from(lis).forEach(function(li) {
            var keyword = li.textContent.toLowerCase();
            if (keyword.startsWith(searchValue)) {
                li.style.display = 'block'; 
            } else {
                li.style.display = 'none'; 
            }
        });

        keywordsList.style.display = 'block'; 
    });
});

window.addEventListener('load', () => {
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 1500);

    const isIphone = /iPhone|iPad|iPod/i.test(navigator.userAgent);
    if (isIphone) {
        const preloaderLogo = document.getElementById('preloader-logo');
        preloaderLogo.style.transform = 'translateY(-20%)';
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // Espera a que el iframe esté cargado completamente antes de manipularlo
    const iframe = document.getElementById('mainIframe');

    // Función para interceptar los enlaces dentro del iframe
    iframe.addEventListener('load', function() {
        const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
        
        // Interceptar todos los enlaces dentro del iframe
        iframeDocument.querySelectorAll('a').forEach(function(link) {
            link.addEventListener('click', function(event) {
                // Prevenir el comportamiento por defecto (abrir el enlace en una nueva página)
                event.preventDefault();

                // Obtener la URL del enlace
                const url = link.getAttribute('href');
                
                // Cargar la URL en el iframe
                iframe.src = url;
            });
        });
    });
});
