const express = require('express');
const {programacion} = require('../datos/cursos').infoCursos;

const routerProgramacion = express.Router();
routerProgramacion.use(express.json()); /* Nos va a permitir procesar el
cuerpo de esa solicitud en formato json y poder trabajar con ese cuerpo de
la solicitud en nuestro código con la propiedad body, esto lo vamos a
realizar antes de cualquiera de estas rutas y para cualquier tipo de método
http, esa es la importancia del Middleware
*/

routerProgramacion.get('/', (req, res) => {
  // res.send(JSON.stringify(programacion));
  // res.json(programacion); de esta forma también es valida para asegurarte que se envie en formato JSON
  res.send(programacion); // El método send ya lo va a enviar en formato JSON por eso no es necesario transformarlo
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
    res.send(resultados.sort((a, b) => b.vistas - a.vistas)); // orden descendente
  } else {
    res.send(resultados);
  }
});

// Más de un parámetro de ruta
routerProgramacion.get('/:tema/:nivel', (req, res) => {
  const tema = req.params.tema;
  const nivel = req.params.nivel;

  const resultados = programacion.filter(curso => curso.tema === tema && curso.nivel === nivel);

  if (resultados.length === 0) {
    return res.status(404).send(`No se encontraron cursos de ${tema} de nivel ${nivel}`);
    // return res.status(404).end(); // otra opción es enviar una respuesta vacía
  };

  res.json(resultados); // si pongo end marca error
});

routerProgramacion.post('/', (req, res) => {
  let cursoNuevo = req.body;
  programacion.push(cursoNuevo);
  res.send(programacion);
});

routerProgramacion.put('/:id', (req, res) => {
  const cursoActualizado = req.body;
  const id = req.params.id;

  const indice = programacion.findIndex(curso => curso.id == id);

  if (indice >= 0) {
    programacion[indice] = cursoActualizado;
  }
  res.send(programacion);
});

routerProgramacion.patch('/:id', (req, res) => {
  const infoActualizada = req.body;
  const id = req.params.id;

  const indice = programacion.findIndex(curso => curso.id == id);

    if (indice >= 0) {
      const cursoAModificar = programacion[indice];
      Object.assign(cursoAModificar, infoActualizada);
    }

    res.send(programacion);
});


routerProgramacion.delete('/:id', (req, res) => {
  const id = req.params.id;
  const indice = programacion.findIndex(curso => curso.id == id);

  if (indice >=0 ) {
    programacion.splice(indice, 1);
  }

  res.send(programacion);
});


module.exports = routerProgramacion;