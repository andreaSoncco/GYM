const http = require('http');

const servidor = http.createServer((req, res) => {
    res.end('Estoy aprendiendo Node.js');
});

const PUERTO = 3000;

servidor.listen(PUERTO, () => {
    console.log(`El servidor esta escuchando en el puerto ${PUERTO}`);
});


/* Ejecutar el siguiente comando en cmd y probar cambios en el código que se actualizan al instante:
nodemon app.js

*/