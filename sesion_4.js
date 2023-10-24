/* 1. biggerTwo
Se tienen dos arreglos de números enteros, a y b, cada uno de longitud dos. Calcule la suma de los valores de cada arreglo. Devuelva el array que tenga la mayor suma. En caso de empate, devuelva el arreglo a.

Ejemplo

    biggerTwo([1, 2], [3, 4]) → [3, 4]
    biggerTwo([3, 4], [1, 2]) → [3, 4]
    biggerTwo([1, 1], [1, 2]) → [1, 2]
*/

function biggerTwo(a, b) {
  // Sumar los dos valores de cada arreglo
  // retornar el arreglo a en caso de empate
  // Retornar el arreglo a si la suma de sus valores es mayor
  // Retornar el arreglo b si la suma de sus valores es mayor
  let sumA = a[0] + a[1];
  let sumB = b[0] + b[1];

  if (sumA === sumB) {
    return a;
  } else if (sumA > sumB) {
    return a;
  } else {
    return b;
  }
}

/* 2. redTicket
Tienes un billete de lotería rojo que muestra los enteros a, b y c, cada uno de los cuales es 0, 1 o 2. Si todos tienen el valor 2, el resultado es 10. Si son todos iguales, el resultado es 5. Si b y c son diferentes de a, el resultado es 1. Si no, el resultado es 0.

Ejemplo

    redTicket(2, 2, 2) → 10
    redTicket(2, 2, 1) → 0
    redTicket(0, 0, 0) → 5
*/

function redTicket(a, b, c) {
  // Si todos son 2 el resultado es 10
  // Si todos son iguales el resultado es 5
  // Si b y c son diferentes de a el resultado es 1
  // Si nada de lo anterior ocurre el resultado es 0
  if (a === 2 && b === 2 && c === 2) {
    return 10;
  } else if (a === b && b === c) {
    return 5;
  } else if (b !== a && c !== a) {
    return 1;
  } else {
    return 0;
  }
}

/* 3. middleThree
Dada una cadena de longitud impar, devuelva una cadena de longitud 3 desde su centro, por lo que "Candy" produce "and". La longitud de la cadena será de al menos 3.

Ejemplo

    middleThree('Candy') → "and"
    middleThree('and') → "and"
    middleThree('solving') → "lvi"
*/

function middleThree(str) {
  // contar los caracteres y saber la posicion de la mitad menos 1
  // Obtener los tres caracteres desde la posicion

  let posicion = (str.length) / 2 - 1;
  return str.substr(posicion, 3)
}

/* 4. Abbreviate a Two Word Name
Escribe una función que convierte un nombre en iniciales. Esta función toma exactamente dos palabras con un espacio entre ellos.

La salida debe ser dos letras capitalizadas con un punto que las separa.

Ejemplo 1

Entrada: Sam Harris
Salida: S.H
Ejemplo 2

Entrada: Patrick Feeney
Salida: P.F
*/

function abbrevName(name) {
  // Transformar name en un arreglo con dos palabras
  // declarar un variable donde cada palabra sea solo la letra inicial
  // Volver el arreglo una sola palabra

  let array = name.split(' ').map(item => item.charAt(0).toUpperCase());

  return array.join('.');
}

/* 5. Remove First and Last Character
El objetivo es crear una función que elimine el primer y último carácter del string. La función tiene como parámetro un string 'str'. No tienes que preocuparte por cadenas con menos de dos caracteres.

Ejemplos

removeChar('eloquent') ➞ 'loquen';
removeChar('country') ➞ 'ountr';
*/

function removeChar(str) {
  return str.substring(1, str.length - 1)

};

/* 6. Transformation iteration
Escribe una función que reciba dos cadenas como parámetros e iteralas para trasformar la cadena source y termine convertida en la cadena target el resultado de cada iteración guardalo en un arreglo.

Ejemplos

transform('car','see') ➞ ["car", "sar", "ser", "see"]
transform('casa','buho') ➞ ["casa", "basa", "busa","buha","buho"]
transform('floor','brake') ➞ ["floor", "bloor", "broor", "braor", "brakr", "brake"]
transform('kata','math') ➞ ["kata", "mata", "math"]
Importante ❗

Deberás retornar un array con los strings correspondientes a cada iteración
source y target siempre tendrán la misma longitud
Si una letra de source coincide al momento de iterar con otra letra de target entonces no hay transformación de letras
*/

function transform(source, target) {
  const arreglo = [source]; // Inicializamos el arreglo de resultados con la cadena source

  // Verificamos si las cadenas tienen la misma longitud
  if (source.length !== target.length) {
    return ["Las cadenas deben tener la misma longitud"];
  }

  for (let i = 0; i < source.length; i++) {
    // Si el carácter actual de source no es igual al de target, lo reemplazamos
    if (source[i] !== target[i]) {
      source = source.substring(0, i) + target[i] + source.substring(i + 1);
    }

    // Agregamos la cadena resultante al arreglo de resultados
    if (source !== arreglo[arreglo.length - 1]) {
      arreglo.push(source);
    }
  }

  return arreglo;
}

// Ejemplos de uso:
console.log(transform('car', 'see')); // ➞ ["car", "sar", "ser", "see"]
console.log(transform('casa', 'buho')); // ➞ ["casa", "basa", "busa", "buha", "buho"]
console.log(transform('floor', 'brake')); // ➞ ["floor", "bloor", "broor", "braor", "brakr", "brake"]
console.log(transform('kata', 'math'));

/* 7. Ask for missing details
Se le proporcionará un array de objetos que representan datos sobre los desarrolladores que se han inscrito para asistir a la próxima reunión.

Dado el siguiente array de entrada:

let list1 = [
  { firstName: null, lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: null },
  { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' }
];
Escribe una función que:

Agregue la propiedad question a cada objeto del array de entrada donde el desarrollador no ha proporcionado los detalles relevantes (aquellas propiedades en las que el valor es null ). El valor de la propiedad question debe ser el siguiente string:

Hi, could you please provide your <property name>.

La función debe retornar sólo los desarrolladores con detalles faltantes:

[
  { firstName: null, lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java',
  question: 'Hi, could you please provide your firstName.' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: null,
  question: 'Hi, could you please provide your language.' }
]
*/

function askForMissingDetails(list) {
  // Iterar sobre los objetos en el array
  for (let i = 0; i < list.length; i++) {
    // Iterar sobre las propiedades del objeto actual
    for (let prop in list[i]) {
      // Verificar si la propiedad tiene un valor null
      if (list[i][prop] === null) {
        // Agregar la propiedad "question" al objeto con el mensaje apropiado
        list[i].question = `Hi, could you please provide your ${prop}.`;
      }
    }
  }
  console.log(list);
  const result = list.filter((li) => li.question)
  console.log(result);
  return result;
}

/* 8. makeChocolate
Queremos hacer un paquete de meta kilos de chocolate. Tenemos barras pequeñas (1 kilo cada una) y barras grandes (5 kilos cada una). Devuelve el número de barras pequeñas a utilizar, suponiendo que siempre utilizamos las barras grandes antes que las pequeñas. Devuelve -1 si no se puede hacer.

Ejemplo:

    makeChocolate(4, 1, 9) → 4
    makeChocolate(4, 1, 10) → -1
    makeChocolate(4, 1, 7) → 2
*/

function makeChocolate(small, big, goal){
  if ((small + big * 5) < goal) {
    return -1;
  } else {
    return goal - Math.min(big, Math.floor(goal / 5)) * 5;
  }
}