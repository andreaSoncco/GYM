const numeros = [10, 20, 30, 40, 50];

const objetos = [
    {nombre: 'A', apellido: 'B'},
    {nombre: 'C', apellido: 'D'},
    {nombre: 'E', apellido: 'F'},
]

const resultado = numeros.map((item, index, array) => {
    console.log(item);
    console.log(index);
    console.log(array);
    return 1;
});

console.log(resultado);

const multiplicar = numeros.map((item, index, array) => {
    return item * 2;
});
console.log(multiplicar);

const multiplicarFacil = numeros.map(item => item * 2)
console.log(multiplicarFacil);

const resultadoNyA = objetos.map(item => {
    return {
        ...item,
        nombreApellido: `${item.nombre}${item.apellido}`
    }
})

console.log(resultadoNyA);
console.log(objetos);