Proyecto educativo: Formas de cargar CSS

Archivos:
- index.html    : Página principal con ejemplos
- css/external.css : Hoja externa enlazada
- css/imported.css : Hoja que muestra uso de @import
- css/dynamic.css  : Hoja para carga dinámica
- js/dynamic-load.js: Script que carga CSS dinámicamente (link y fetch+Blob)
- package.json   : Script "start" usa http-server en el puerto 8080

Cómo usar:
1. Asegúrate de tener Node.js y npm instalados.
2. Desde la carpeta `02 - CSS`, ejecuta:

   npm install http-server --no-save
   npm start

3. Abre http://localhost:8080 en tu navegador.

Qué demuestra la página:
- Estilos inline (atributo style)
- Internal CSS (etiqueta <style>)
- External CSS (archivo enlazado con <link>)
- @import dentro de CSS
- preload para priorizar la carga
- Carga dinámica con JavaScript (link y fetch+Blob)
- Estilos encapsulados con Shadow DOM

Notas:
- Para experimentar con CSP, añade encabezados de política en un servidor real.
- El comando `npm install http-server --no-save` instala http-server localmente sin modificar package.json.
