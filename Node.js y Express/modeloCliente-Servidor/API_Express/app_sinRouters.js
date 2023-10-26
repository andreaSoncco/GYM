const express = require('express');
const app = express();

const {infoCursos} = require('./cursos');

// Routing

app.get('/', (req, res) => {
    res.send('Mi primer servidor con Express. Cursos 💻.');
});

app.get('/api/cursos', (req, res) => {
    res.send(JSON.stringify(infoCursos));
});

app.get('/api/cursos/programacion', (req, res) => {
    res.send(JSON.stringify(infoCursos.programacion));
});

// Parámetros de ruta para que la pagina nos direcciones a una sección según el tema 
app.get('/api/cursos/programacion/:tema', (req, res) => {
    const tema = req.params.tema;
    const resultados = infoCursos.programacion.filter(curso => curso.tema === tema);
    
    if (resultados.length == 0) {
        return res.status(404).send(`No se encontraron cursos de ${tema}`); // ponemos return para que no continue la ejacución de la función
    }

    // Parámetro Query
    if (req.query.ordenar === 'vistas') {
        res.send(JSON.stringify(resultados.sort((a, b) => a.vistas - b.vistas)));
    } else {
        res.send(JSON.stringify(resultados));
    }

    
});



app.get('/api/cursos/matematicas', (req, res) => {
    res.send(JSON.stringify(infoCursos.matematicas));
});

app.get('/api/cursos/matematicas/:tema', (req, res) => {
    const tema = req.params.tema;
    const resultados = infoCursos.matematicas.filter(curso => curso.tema === tema);

    if (resultados.length == 0) {
        return res.status(404).send(`No se encontraron cursos de ${tema}`);
    }

    res.send(JSON.stringify(resultados));
});

// Más de un parámetro de ruta
app.get('/api/cursos/programacion/:tema/:nivel', (req, res) => {
    const tema = req.params.tema;
    const nivel = req.params.nivel;

    const resultados = infoCursos.programacion.filter(curso => curso.tema === tema && curso.nivel === nivel);

    if (resultados.length === 0) {
        return res.status(404).send(`No se encontraron cursos de ${tema} de nivel ${nivel}`);
    };

    res.end(JSON.stringify(resultados));
})



// Port

const PUERTO = process.env.PORT || 3000;

app.listen(PUERTO, () => {
    console.log(`El servidor esta escuchando en el puerto ${PUERTO}...`);
});