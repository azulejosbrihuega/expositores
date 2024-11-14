window.addEventListener('beforeunload', function (e) {
    e.preventDefault();
    e.returnValue = '';
  });
  
  window.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
      e.preventDefault();
      window.history.pushState({}, '', e.target.href);
      // Aquí puedes manejar la navegación dentro de tu PWA
    }
  });
  