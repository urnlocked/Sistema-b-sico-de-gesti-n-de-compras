// Importamos Express
const express = require('express');
// Creamos la aplicación
const app = express();
// Definimos el puerto (usamos el 3000, que es el más común para pruebas)
const PUERTO = 3000;

// Le decimos a Express que use la carpeta donde están nuestros archivos estáticos
app.use(express.static('public'));

// Ruta principal: cuando entres a la página, se muestra el index.html
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Iniciamos el servidor
app.listen(PUERTO, () => {
    console.log(`Servidor corriendo en http://localhost:${PUERTO}`);
});
