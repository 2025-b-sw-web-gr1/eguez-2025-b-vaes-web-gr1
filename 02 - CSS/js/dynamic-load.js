// dynamic-load.js
// Muestra dos maneras de cargar CSS dinámicamente: inyectar <link> y fetch+Blob

document.addEventListener('DOMContentLoaded', function(){
  const btnLink = document.getElementById('load-link');
  const btnFetch = document.getElementById('load-fetch');
  const result = document.getElementById('dynamic-result');

  btnLink.addEventListener('click', function(){
    if (document.getElementById('dynamic-css-link')){ result.textContent = 'Ya cargado (link)'; return; }
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'css/dynamic.css';
    link.id = 'dynamic-css-link';
    link.onload = () => { result.textContent = 'CSS cargado via <link>'; document.querySelector('.demo-target').classList.add('dynamic-applied'); };
    link.onerror = () => { result.textContent = 'Error cargando css via <link>'; };
    document.head.appendChild(link);
  });

  btnFetch.addEventListener('click', async function(){
    if (document.getElementById('dynamic-css-blob')){ result.textContent = 'Ya cargado (fetch)'; return; }
    result.textContent = 'Descargando...';
    try{
      const res = await fetch('css/dynamic.css');
      const text = await res.text();
      const blob = new Blob([text], {type:'text/css'});
      const url = URL.createObjectURL(blob);
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = url;
      link.id = 'dynamic-css-blob';
      link.onload = () => { result.textContent = 'CSS aplicado via fetch+Blob'; document.querySelector('.demo-target').classList.add('dynamic-applied'); };
      document.head.appendChild(link);
    }catch(e){
      result.textContent = 'Error: ' + e.message;
    }
  });
});
