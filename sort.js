/* El método sort módifica el array cuando se aplica y no vuelve a ser el mismo
 por lo que el método sort() no es inmutable, en eso se parece a map()

 
*/

const arrayUno = [1, 5, 3, 6, 2, 8];

const arrayDos =[3, 100, 1, 200, 2, 6, 3, 220, 10];

const arrayTres = [
    { nombre: 'J', apellido: 'W' },
    { nombre: 'a', apellido: 'c' },
    { nombre: 'C', apellido: 'z' },
    { nombre: 'w', apellido: 'A' },
    { nombre: 'S', apellido: 'z' }
];

console.log(arrayUno.sort());

console.log(arrayUno);
/*
arrayDos.sort((a, b) => {
    if (a < b) {
        return -1;
    } else if (a > b) {
        return 1;
    } else {
        return 0;
    }
});
*/
arrayDos.sort((a, b) => {
    return a - b;
})

console.log(arrayDos);

arrayTres.sort((a, b) => {
    const apellidoA = a.apellido.toLocaleLowerCase();
    const apellidoB = b.apellido.toLocaleLowerCase();
    if (apellidoA < apellidoB) {
        return -1;
    } else if (apellidoA > apellidoB) {
        return 1;
    } else {
        return 0;
    }
});

console.log(arrayTres);