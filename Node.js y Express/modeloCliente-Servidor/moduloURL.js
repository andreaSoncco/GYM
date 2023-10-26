const miURL = new URL('https://www.ejemplo.org/cursos/programacion?ordenar=vistas&nivel=1');

console.log(miURL.hostname); //host => www.ejemplo.org

console.log(miURL.pathname); //nombre del camino => /cursos/programacion

console.log(miURL.searchParams); // parámetro

console.log(typeof miURL.searchParams); //Objeto

console.log(miURL.searchParams.get('ordenar'));

console.log(miURL.searchParams.get('nivel'));

console.log(miURL.protocol);