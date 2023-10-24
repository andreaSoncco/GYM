const http = require('http');

// Aplico el método para crear un servidor
const servidor = http.createServer((req, res) => {
    console.log('Solicitud nueva');
    res.end('Hola, mundo');

});

const PUERTO = 3000;

servidor.listen(PUERTO, () => {             //3000 valor del puerto
    console.log(`El servidor esta escuchando en el puerto http://localhost:${PUERTO}...`);
});

// Las constantes van en mayuscula
// las variables van en minuscula