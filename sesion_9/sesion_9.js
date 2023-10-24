/* 1. swapEnds
Dado un arreglo de enteros, intercambia el primer y último elemento. Retorna el arreglo modificado. La longitud del arreglo será al menos de 1.

Ejemplo

    swapEnds([1, 2, 3, 4]) → [4,2,3,1]
    swapEnds([1, 2, 3]) → [3,2,1]
    swapEnds([8, 6, 7, 9, 5]) → [5,6,7,9,8]
*/

function swapEnds(nums){
    const indice = 0;
      let first = nums[indice];
      nums[indice] = nums[nums.length-1];
      nums.pop();
      nums.push(first);
      return nums;
}

/* 2. Sum of Digits
Dado n, tome la suma de los dígitos de n. Si ese valor tiene más de un dígito, continúe reduciendo de esta manera hasta que se produzca un número de un solo dígito. La entrada será un número entero no negativo.

Ejemplo 1

Entrada: 16
Salida: 7
Explicación: sumando los digitos de 16 [1+6] el resultado es 7
Ejemplo 2

Entrada: 942
Salida: 6
Explicación: sumando los digitos de 942 [9+4+2] --> 15 volver a sumar [1+5] el resultado es 6
*/

function digitalRoot(n) {
    // volver el numero a string y averiguar cuantos digitos tiene y si tiene más de uno
    // dividir el string en un array
    // iterar el array y contar sus elementos
    let numero = n.toString();
    
    while(numero.length > 1){
      let suma = 0;
      for (let i = 0; i < numero.length; i++) {
      
        suma += parseInt(numero[i]);
      }     
      
      numero = suma.toString();
    }
    return parseInt(numero);
}

/* 3. Encuentra la paridad excluída (outlier)
Recibes un arreglo (de longitud mínima 3, pero podría ser muy grande) que contiene números enteros. El arreglo está enteramente compuesto de números impares o enteramente compuesto de números pares, excepto por un único número entero N. Escribe un método que tome el arreglo como argumento y retorne este número excluído ("outlier").

Ejemplos

[2, 4, 0, 100, 4, 11, 2602, 36]
Debe retornar: 11 (el único número impar)

[160, 3, 1719, 19, 11, 13, -21]
Debe retornar: 160 (el único número par)
*/

function findOutlier(integers){
    // iterar el arreglo
    // contar los numeros pares
    // contar los numeros impares
    /* si los numeros pares son mayor a los numeros impares entonces retornar
    ese numero impar*/
    /* si los numeros impares son mayor a los numeros pares entonces retornar
    ese numero par*/
    let countPar = 0;
    let countImpar = 0;
    let number;
    
    for (let i = 0; i < integers.length; i++) {
      integers[i] % 2 == 0 ? countPar++ : countImpar++;
      if (countPar > countImpar) {
        number = integers.filter(x => x % 2 != 0);
        number = number[0];
        return number;
      } else {
        number = integers.filter(x => x % 2 == 0);
        number = number[0];
        return number;
      }
    }
}