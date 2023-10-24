// Ctrl + shif + P => Quokka

const str = 'Programando con Grover';

let result = str.indexOf('con');
console.log(result);

let anotherResult = str.indexOf('w'); // w no esta en el conjunto de caracteres por eso nos devuelve -1
console.log(anotherResult);

let show = str.includes('con');
console.log(show);

let cut = str.slice();
console.log(cut);

let save = str.substring(1, 4);
console.log(save);

let take = str.substring(4);
console.log(take);

let long = str.substr(4, 5); // se diferencia en que el segundo argumento se refiere a la longitud
console.log(long);

let oneString = str.charAt(0);
console.log(oneString);

let repeat = str.repeat(2);
console.log(repeat);

let saludito = 'Hola'

saludito = saludito.substring(1, saludito.length-1);
console.log(saludito);

/* Split() va a dividir el conjunto de caracteres en un arreglo con el numero de elementos
 según el criterio de separación que pongamos como argumento */

let arreglo = str.split(' ');
console.log(arreglo);

let empezar = str.startsWith('Pro');
console.log(empezar);

let finalizar = str.endsWith('ver');
console.log(finalizar);

let buscarIndice = str.search('con');
console.log(buscarIndice);

let convertirMinuscula = str.toLowerCase();
console.log(convertirMinuscula);

let convertirMayuscula = str.toUpperCase();
console.log(convertirMayuscula);

let remplazarEnCaracteres = str.replace('Programando', 'Enseñando');
console.log(remplazarEnCaracteres);

const str2 = ' Programando con Grover ';

let quitarEspaciosIF = str2.trim();
console.log(quitarEspaciosIF);

let quitarEspacioInicio = str2.trimStart()
console.log(quitarEspacioInicio);

let quitarEspacioFinal = str2.trimEnd()
console.log(quitarEspacioFinal);
