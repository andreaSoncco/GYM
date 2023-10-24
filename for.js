const cursoJS = [
    'Intro a JS',
    'Variables y tipos',
    'Conversion de tipos',
    'Funciones',
]

for(let i = 0; i < cursoJS.length; i++) {
    console.log(`${i+1}. ${cursoJS[i]}`);
}

// Para invertir y contar desde mayor a menor

for(let i = cursoJS.length-1; i >=0; i--) {
    console.log(`${i+1}. ${cursoJS[i]}`);
}

for(let i = 0; i < cursoJS.length; i++) {
    const lección = cursoJS[i];
    console.log(lección);
}

// FOR OF: Itera sobre los elementos del objeto, no se puede saber el indice
for (const leccion of cursoJS) {
    console.log(leccion);
}

// FOR IN: itera sobre todas las claves que tiene un objeto
for (const leccion in cursoJS) {
    console.log(leccion);
}
let number = '20';
let newNumber = parseInt(number);
console.log(newNumber);


for (const i in cursoJS) {
    console.log(typeof i);
    console.log(`${i+1} ${cursoJS[i]}`);
}

console.log(cursoJS, typeof cursoJS);

// OBJETO: Conjunto de pares clave: valor
// Ejem: persona: Pablo
//       (clave) (valor)


const whosOnline = (friends) => {
    let objeto;
    // Actualizar la propiedad status según lastActivity, si lastActivity es más de 10 min online
    // filtrar el username según el status
    // Si no hay ningún elemento filtrado retornar un objeto vacio
    for (let i = 0; i < friends.length; i++) {
      if (friends[i].status === 'online' && friends[i].lastActivity > 10) {
        friends[i].status = 'offline';
      }
      delete friends[i].lastActivity;
    }
    
    objeto = Object.values(friends);
    
    console.log(objeto);
    return objeto;
  }