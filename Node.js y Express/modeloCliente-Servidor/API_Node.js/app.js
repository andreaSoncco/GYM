const http = require('http');
const cursos = require('./cursos');

const servidor = http.createServer((req, res) => {
    const {method} = req;
    // const metodo = req.method;
    switch(method) {
        case 'GET':
            return manejarSolicitudGET(req, res); // no usamos break pq estamos usando return
        case 'POST':
            return manejarSolicitudPOST(req, res);
        default:
            res.statusCode = 501;
            res.end(`El metodo no puede ser manejado por el servidor: ${method}`);
            break; //opcionalmente incluyes break, no es necesario
    }
});

function manejarSolicitudGET(req, res) {
    const path = req.url;

    // console.log(res.statusCode); 200 por defecto

    if (path === '/') {
        res.writeHead(200, {'Content-Type': 'aplication/json'}); // no esta en formato JSON pero lo usamos de ejemplo para ver las cabeceras
        return res.end('Bienvenidos a mi primer servidor y API creados con Node.js');
    } else if (path === '/cursos') {  //normalmente se comienza con la palabra api /api/cursos/
        return res.end(JSON.stringify(cursos.infoCursos));
    } else if (path === '/cursos/programacion') {
        return res.end(JSON.stringify(cursos.infoCursos.programacion));
    }

    res.statusCode = 404;
    res.end('El curso solicitado no existe...');
}

function manejarSolicitudPOST(req, res) {
    const path = req.url;

    if (path === '/cursos/programacion') {

        let cuerpo = '';
        req.on('data', contenido => {
            cuerpo += contenido.toString();
        });

        req.on('end', () => {
            console.log(cuerpo);
            console.log(typeof cuerpo);

            cuerpo = JSON.parse(cuerpo);

            console.log(typeof cuerpo);
            console.log(cuerpo.titulo);

            res.end('El servidor recibio una solicitud POST para /cursos/programacion');
        });

        // return res.end('El servidor recibio una solicitud POST para /cursos/programacion')
    }
}

const PUERTO = 3000;

servidor.listen(PUERTO, () => {
    console.log(`El servidor esta escuchando en el puerto ${PUERTO}`)
});

