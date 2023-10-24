/* JOIN()

Convierte un array en una sola cadena de texto unidad por el argumento que se le coloca entre comillas

La función join() es un método en JavaScript que se utiliza para unir los elementos de un arreglo en una
 cadena de texto. Funciona de la siguiente manera:

1. Toma un argumento opcional que es la cadena que se utilizará como separador entre los elementos del
 arreglo. Este argumento es opcional, y si no se proporciona, por defecto se utiliza una coma como separador.

2. Itera a través de los elementos del arreglo y los concatena en una sola cadena de texto, separando
 cada elemento con el separador especificado.

3. Devuelve la cadena resultante como resultado.
*/

const frutas = ['manzana', 'banana', 'naranja'];

const cadena = frutas.join(',');
console.log(cadena);

const cadena2 = frutas.join('-');
console.log(cadena2);

const cadena3 = frutas.join('');
console.log(cadena3);
