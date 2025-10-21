const express = require('express');
const app = express();
const path = require('path');

// Configurar EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Ruta de inicio
app.get('/', (req, res) => {
  res.render('index');
});

// Ruta del gatito
app.get('/gatito', (req, res) => {
  res.render('gatito');
});

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
