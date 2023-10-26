const http = require('http');

const servidor = http.createServer((req, res) => {
    console.log('===> res (respuesta)');
    // console.log(res);
    // console.log(res.statusCode);
    // res.statusCode = 404;
    // console.log(res.statusCode);
    res.setHeader('content-type', 'application/json');
    console.log(res.getHeaders());

    res.end('Hola, mundo');

});

const puerto = 3000;

servidor.listen(puerto, () => {
    console.log(`El servidor esta escuchando en el puerto ${puerto}...`);
});


