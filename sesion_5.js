/* 1. teenSum
Dados 2 enteros, a y b, devuelve la suma. Sin embargo, los valores "adolescentes" en el rango desde 13 hasta 19 inclusive, son más afortunados. Así que si cualquiera de los valores es un adolescente, simplemente devuelve 19.

Ejemplo

    teenSum(3, 4) → 7
    teenSum(10, 13) → 19
    teenSum(13, 2) → 19
*/

function teenSum(a, b){
    /* Si cualquiera de los valores es un adolescente osea va
    de 13 a 19 retornar 19
       Sino sumar ambos
    */
    if ((a >= 13 && a <= 19) || (b >= 13 && b <= 19)) {
      return 19;
    } else {
      return a + b;
    }
}

/* 2. List Filtering
En este ejercicio vas a crear una función que reciba un arreglo con strings y números
 enteros no negativos, la cual retorna un nuevo arreglo con las cadenas filtradas.

Ejemplo:

filter_list([1,2,'a','b']) == [1,2]

// Explicación

Entrada: [1,2,'a','b']
Salida: [1,2]
Explicación: De la entrada [1,2,'a','b'] se filtra el arreglo para unicamente
 tener los números positivos y retornar [1,2]
Importante ❗

Considera el tipo de dato al momento de filtrar, aun que el arreglo incluya '1'
 este es un string y no deberías incluirlo en el resultado final.
*/

function filter_list(l) {
    // Filtramos los elementos del arreglo por su tipo de dato
    const result = l.filter((elemento)  => typeof(elemento) === 'number');
    return result;
}

/* 3. Create Phone Number
En este ejercicio deberás escribir una función que reciba una arreglo de 10 caracteres (los valores serán entre 0 y 9), como resultado retorna una cadena con los números en formato de número de teléfono.

Ejemplo

Entrada: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
Salida: "(123) 456-7890"
Explicación: En la entrada recibimos un arreglo el cual debemos utilizarlo para devolver un string con el formato de numero.
Importante ❗

El string devuelto debe contener el formato para ser correcto y completar este desafío.
¡No olvide el espacio que incluye después del paréntesis de cierre!
*/

function createPhoneNumber(numbers){
    //volver todo una cadena de caracteres
    // Separar los 3 primeros numeros, los 3 segundos números y los 4 últimos
    // los primeros ponerlos dentro de un parentesis
    // y el ulgrupo de los últimos separarlos con un espacio en blanco y un guion
    
    let cadena = numbers.join('');
    let numFirst = cadena.substr(0,3);
    let numMidd = cadena.substr(3,3);
    let numLast = cadena.substr(6,4);
    
    cadena = `(${numFirst}) ${numMidd}-${numLast}`;
    return cadena;
}

/* 4. Moving Zeros To The End
Escribe un algoritmo que recibe un arreglo con elementos y mueva todos los ceros al final, preservando el orden de los otros elementos que no sean cero.

Ejemplo

Entrada: [false,1,0,1,2,0,1,3,"a"]
Salida: [false,1,1,2,1,3,"a",0,0]
Importante ❗

Considera el tipo de dato
¡No olvides retornar el arreglo con los ceros al final!
*/

function moveZeros(arr) {
    // verificar cuantos ceros tiene el arreglo
    // filtrar los elementos dejando todos los que no son cero
    // agregar los ceros al final del arreglo
    
  arr.sort((a, b) => {
      if (a === 0 && b !== 0) {
        return 1; // Si 'a' es cero y 'b' no es cero, 'a' va después de 'b'
      } else if (a !== 0 && b === 0) {
        return -1; // Si 'a' no es cero y 'b' es cero, 'a' va antes de 'b'
      } else {
        return 0; // De lo contrario, no cambia el orden relativo
      }
    });
  
    return arr;
}


