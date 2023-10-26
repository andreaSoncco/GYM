const express = require('express');
const { infoCursos } = require('../datos/cursos');
const routerMatematicas = require('./matematicas');
const routerProgramacion = require('./programacion');

const app = express();

app.use('/api/cursos/programacion', routerProgramacion);
app.use('/api/cursos/matematicas', routerMatematicas);

app.get('/', (req, res) => {
  res.send('Mi primer servidor con Express. Cursos 💻.');
});

app.get('/api/cursos', (req, res) => {
  res.send(JSON.stringify(infoCursos));
});












// Port

const PUERTO = process.env.PORT || 3000;

app.listen(PUERTO, () => {
  console.log(`El servidor esta escuchando en el puerto ${PUERTO}...`);
});