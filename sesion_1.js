/* 1. Suma de Positivos
Obtiene una matriz de números, devuelve la suma de todos los positivos.

Ejemplo [1,-4,7,12]=>1 + 7 + 12 = 20

Nota: si no hay nada que sumar, la suma es por defecto 0. */
function positiveSum(arr) {
  let suma = 0; // Inicializar la suma en 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      suma += arr[i];
    }
  }
  return suma;
}

/* 2. Contar positivos - sumar negativos
Dada una matriz de enteros.

Devuelve una matriz, donde el primer elemento es el recuento de números positivos
y el segundo elemento es la suma de números negativos. 0 no es ni positivo ni negativo.

Si la entrada es una matriz vacía o es nula, devuelve una matriz vacía.

Ejemplo
Para la entrada [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], debe volver [10, -65]. */
function countPositivesSumNegatives(input) {
  if (!input || input.length === 0) {
    return [];
  }

  let count = 0;
  let sum = 0;

  for (let i = 0; i < input.length; i++) {
    if (input[i] > 0) {
      count++;
    } else if (input[i] < 0) {
      sum += input[i];
    }
  }

  return [count, sum];
}



//sesion 5
function teenSum(a, b){
  if ((13 <= a && a <= 19) || ( 13 <= b && b<= 19)) {
  return 19}
  else { 
  return a + b;
  };
}
  



//sesion 6
function plusTwo(a, b) {
  return a.concat(b)
};