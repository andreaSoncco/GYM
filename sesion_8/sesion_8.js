/* 1. Counting sheep
Considera un arreglo/lista de ovejas donde algunas ovejas pueden estar perdidas. Necesitamos a una función que cuente el numero de ovejas presentes en un arreglo (true significa presente)

Ejemplo

entrada: [true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
salida: 17
Importante ❗

Pista: No te olvides de verificar por valores malos como null o undefined
*/

function countSheeps(sheep) {
    // declarar la variable count
    // Crear el condicional para reconocer si es true
    // retornar la variable count que cuenta
    let count = 0;
    for (let i = 0; i < sheep.length; i++) {
      if (sheep[i] === true) {
        count++;
      }
    }
    return count;
}

/* 2. Odd or Even
Tu objetivo en este ejercicio es implementar una función que recibe un arreglo con números enteros y determinar si la suma de los números es par o impar

De acuerdo al resultado de la suma deberás retornar una cadena en caso de que sea par 'odd' y en el caso de que sea impar 'even'

Ejemplo 1

Entrada: [0, 1, 4]
Salida: 'odd'
Explicación: Sumando 0 + 1 + 4 = 5 entonces es impar y como resultado 'odd'
Ejemplo 2

Entrada: [0, -1, -5]
Salida: 'even'
Explicación: Sumando 0 -1 -5 = -6 entonces es par y como resultado 'even'
Importante ❗

Si el arreglo de entrada está vacío, considéralo como: [0] (arreglo con cero).
*/

function oddOrEven(array) {
    // declarar la variable de suma
    // iterar los elementos del arreglo y sumarlos
    // condicional si la suma es impar:  'odd' y si es par: 'even'
   let suma = 0;
   for (let i = 0; i < array.length; i++) {
     suma += array[i];
   }
   
   if (suma % 2 == 0) {
     return 'even';
   } else {
     return 'odd';
   }
}