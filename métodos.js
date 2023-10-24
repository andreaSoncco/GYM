//FOR
let customer = {
  name: 'Escaleras Rodriguez',
  vat: 'ESB333333',
  address: 'C/ Casanova 1001',
  isActive: true,
  contacName: 'Manuel García',
  created_at: 1621065968876,
}

for(prop in customer) {
  console.log(prop);
  console.log(customer[prop]);
  

}

let balloon = {
  red: 20,
  green: 12,
  blue: 8,
  yellow: 1,
  white: 5,
}
let balloonQuantity = 0;
for(color in balloon) {
  console.log(color);
  balloonQuantity += balloon[color];
}

console.log(balloonQuantity);

//FOR
const cursoJS = [
  'Intro a JS',
  'Variables y tipos',
  'Conversión de tipos',
  'Funciones',
]

for(let i=0; i<cursoJS.length; i++) {
  console.log(cursoJS[i]);
  console.log(`${i+1}. ${cursoJS[i]}`);
}

for(let i = cursoJS.length-1; i>=0; i--) {
  console.log(cursoJS[i]);
  console.log(`${i+1}. ${cursoJS[i]}`);
}

//FOR OF
//usamos const pq estamos creando un ámbito en cada una de las iteraciones
//lo usamos cuando no importa el indice, lo usamos sobre objetos iterables
for(const leccion of cursoJS) {
  console.log(leccion);
}

//FOR IN
for(const i in cursoJS) {
  console.log(i);
  console.log(`${i+1}. ${cursoJS[i]}`);
}

//ARRAY
//permite ingresar cualquier tipo de datos y genera un indice según la ubicación
myArray = ['Hola', 5, true, null, undefined, {a:2, b:3}, () => 'Hola', [1,2,3]];
myArray[4] = 'Pablo' 
console.log(myArray);
console.log(myArray[4]);

const miArray = [1, 2, 3, 4, 5, 6];
// Push: hace añadir un elemento al final de Array

miArray.push(7);
// Pop: eliminar último elemento
const ultimoElemento = miArray.pop();
console.log(miArray);

// Shift: eliminar el primer elemento
const primerElemento = miArray.shift();
console.log(miArray);

// UnShift: agregar el primer elemento
miArray.unshift(0);
console.log(miArray);

//Splice: para agregar o quitar elementos dentro de un array en cuarquier posición
// miArray.splice(indice donde se empieza la inserción, 
// cuantos elementos a partir de esa posición queremos eliminar,
// elementos que queremos insertar)
miArray.splice(1,0,1);
console.log(miArray);

//MÉTODOS para realizar operaciones dentro de cada uno de los elementos del array
// forEach

let miArreglo = [1, 2, 3, 4];

miArreglo.forEach((elemento, indice, array) => {
  console.log(elemento, indice, array);
  console.log(elemento + 2, indice);
  console.log(elemento * indice);
})

//Map: mapear al array, es decir, realizar una operación sobre todos los elementos del array 
//y devolver un nuevo array que contenga el resultado. Tiene los mismo argumentos que el forEach

miArreglo = miArreglo. map(i => i + 3);
console.log(miArreglo);

const facturas = [
  {
    precio: 23,
    cantidad: 1,
  },
  {
    precio: 19,
    cantidad: 2,
  },
  {
    precio: 14,
    cantidad: 4,
  },
  {
    precio: 22,
    cantidad: 1,
  },
]

const IVA = 1.21;
const totalFactura = facturas.map(i => i.precio * i.cantidad * IVA);
console.log(totalFactura);

totalFactura.forEach((elem, index) => console.log("elemento", index, elem));

//Reduce: transformar todo un array en unico valor, reducirlo
// no se puede aplicar reduce sin map()
let total = totalFactura.reduce((a,b) => a+b);
console.log(total);

//filter: Tiene los mismo argumentos que el forEach (elemento, indice, array)
total = facturas.map(i => i.precio * i.cantidad).filter(i => i > 30);
console.log(total);
