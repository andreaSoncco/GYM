const express = require('express');
const {programacion} = require('../datos/cursos').infoCursos;

const routerProgramacion = express.Router();

routerProgramacion.get('/', (req, res) => {
  res.send(JSON.stringify(programacion));
});

// Parámetros de ruta para que la pagina nos direcciones a una sección según el tema 
routerProgramacion.get('/:tema', (req, res) => {
  const tema = req.params.tema;
  const resultados = programacion.filter(curso => curso.tema === tema);

  if (resultados.length == 0) {
    return res.status(404).send(`No se encontraron cursos de ${tema}`); // ponemos return para que no continue la ejacución de la función
  }

  // Parámetro Query
  if (req.query.ordenar === 'vistas') {
    res.send(JSON.stringify(resultados.sort((a, b) => b.vistas - a.vistas))); // orden descendente
  } else {
    res.send(JSON.stringify(resultados));
  }
});

// Más de un parámetro de ruta
routerProgramacion.get('/:tema/:nivel', (req, res) => {
  const tema = req.params.tema;
  const nivel = req.params.nivel;

  const resultados = programacion.filter(curso => curso.tema === tema && curso.nivel === nivel);

  if (resultados.length === 0) {
    return res.status(404).send(`No se encontraron cursos de ${tema} de nivel ${nivel}`);
  };

  res.end(JSON.stringify(resultados));
});

module.exports = routerProgramacion;