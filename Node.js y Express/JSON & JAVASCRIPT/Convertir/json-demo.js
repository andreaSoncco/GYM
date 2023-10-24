let infoCurso = {
    "titulo": "Aprende Node.js",
    "numVistas": 45642,
    "numLikes": 21123,
    "temas": [
        "JavaScript",
        "Node.js"
    ],
    "esPublico": true
}

console.log(infoCurso);

console.log(typeof infoCurso);

/* Objeto --> Cadena de Caracteres
    Cadena de Caracteres en formato JSON
*/
let infoCursoJSON = JSON.stringify(infoCurso);

console.log(infoCursoJSON);

console.log(typeof infoCursoJSON); // al convertirlo a JSON su tipo de dato es una cadena de caracteres string

console.log(infoCursoJSON.titulo) // undefind pq ya no es un objeto

/* Cadena de caracteres --> Objeto
    Lo convetimos a Objeto de Javascript para poder manipular sus datos
*/

let infoCursoObjeto = JSON.parse(infoCursoJSON);

console.log(infoCursoObjeto);
console.log(typeof infoCursoObjeto);

console.log(infoCursoObjeto.titulo);