const routes = {
  '/': `
    <h1>Bienvenido 🏠</h1>
    <p>Haz clic para ver al gatito:</p>
    <a href="/gatito" data-link>Ver gatito 🐱</a>
  `,
  '/gatito': `
    <h1>¡Aquí está el gatito! 🐱</h1>
    <img src="/assets/gatito.jpg" alt="Gatito adorable" />
    <br>
    <a href="/" data-link>Volver al inicio</a>
  `
};

function navigateTo(url) {
  history.pushState(null, null, url);
  render();
}

function render() {
  const path = window.location.pathname;
  document.getElementById('app').innerHTML = routes[path] || '<h1>404 - Página no encontrada</h1>';
}

document.addEventListener('click', e => {
  if (e.target.matches('[data-link]')) {
    e.preventDefault();
    navigateTo(e.target.href);
  }
});

window.addEventListener('popstate', render);

render();
