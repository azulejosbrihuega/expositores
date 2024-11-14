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
    }, 1500); // 1.5 segundos de retraso

    // Detectar si el dispositivo es un iPhone
    const isIphone = /iPhone|iPad|iPod/i.test(navigator.userAgent);
    
    if (isIphone) {
        // Si es iPhone, ajustar el logo subiéndolo un 20%
        const preloaderLogo = document.getElementById('preloader-logo');
        preloaderLogo.style.transform = 'translateY(-20%)';
    }
});
