/*
PROGRMACIÓN FUNCIONAL
- FILTER
- MAP
- REDUCE
- COMPOSICIÓN
- TRANSDUCERS
*/

/* FILTER: 

    Nos crea un arreglo que va a tener la misma o menor longitud
    al arreglo original. El arreglo nuevo va a contener solamente los elementos
    donde la función que se le haya pasado al método de filter haya retornado true
    por cada iteracion de cada uno de los elementos

    "MANTIENE LOS ELEMENTOS DONDE LA FUNCIÓN RETORNE TRUE"
*/

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let mascotas = [
    { nombre: 'Puchini', edad: 12, tipo: 'perro'},
    { nombre: 'Chanchito feliz', edad: 3, tipo: 'perro'},
    { nombre: 'Pulga', edad: 10, tipo: 'perro'},
    { nombre: 'Pelusa', edad: 16, tipo: 'gato'}
];

console.log(mascotas, numeros);

const numerosFiltrados = numeros.filter(x => x < 2);
console.log(numerosFiltrados, numeros);

/* Como vemos el arreglo numeros no cambio al aplicarle el filter, esto 
    quiere decir que el método de filter es inmutable ya que no va a 
    modificar los elementos
*/

const perros = mascotas.filter(x => x.tipo == 'perro');
console.log(perros);

const gatos = mascotas.filter(x => x.tipo == 'gato');
console.log(gatos);

/* MAP: 

    El método de map nos permite transformar los lementos de un arreglo
    donde el método de map va a tomar un arreglo de una cantidad determinada
    y nos va a devolver otro arreglo que va a tener exactamente la misma 
    longitud que el arreglo inicial pero con todos los elementos cambiados
    dependiendo de la función que se aplico a estos elementos
*/

const suma = (ns) => {
    let acumulado = 0;
    for (i = 0; i < ns.length; i++) {
        acumulado += ns[i];
    }

    return acumulado;
}

numeros = [1, 2, 3, 4, 5];

mascotas = [
    { nombre: 'Puchini', edad: 12, tipo: 'perro'},
    { nombre: 'Chanchito feliz', edad: 3, tipo: 'perro'},
    { nombre: 'Pulga', edad: 10, tipo: 'perro'},
    { nombre: 'Pelusa', edad: 12, tipo: 'gato'}
];

const multiplicar = numeros.map(x => x * 2);

console.log(multiplicar);
console.log(numeros);

const emparejar = numeros.map(x => [x, x]);
console.log(emparejar);

const resultado1 = suma(numeros);
console.log(resultado1);

const edades = mascotas.map(x => x.edad);
console.log(edades);
console.log(suma(edades)/ edades.length); // Promedio