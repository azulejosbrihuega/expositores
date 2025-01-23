document.addEventListener("DOMContentLoaded", function() {
    var keywordsList = document.getElementById('keywordsList');

    document.getElementById('searchInput').addEventListener('input', function() {
        var searchValue = this.value.toLowerCase().trim();

        if (searchValue === '') {
            keywordsList.style.display = 'none'; 
            return;
        }

        var lis = Array.from(keywordsList.getElementsByTagName('li'));

        
        var matches = [];

        lis.forEach(function(li) {
            var keyword = li.textContent.toLowerCase();
            var index = keyword.indexOf(searchValue);

            if (index !== -1) {
                
                matches.push({
                    element: li,
                    relevance: index
                });
            } else {
                li.style.display = 'none'; 
            }
        });

        matches.sort(function(a, b) {
            return a.relevance - b.relevance;
        });

        matches.forEach(function(match) {
            match.element.style.display = 'block';
        });

        keywordsList.style.display = matches.length > 0 ? 'block' : 'none';
    });
});
