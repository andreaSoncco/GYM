/* 1. helloName
Implementa la función helloName para que dado un string name, por ejemplo "Bob", retorne un saludo de la forma "Hello Bob!".

Ejemplo

    helloName('Bob') → "Hello Bob!"
    helloName('Alice') → "Hello Alice!"
    helloName('X') → "Hello X!"
*/
function helloName(name){
    return "Hello " + name + "!";
}

/* 2. intMax
Completa la función intMax que recibe tres valores tipo int, a b c y retorna el mayor.

Ejemplo

    intMax(1, 2, 3) → 3
    intMax(1, 3, 2) → 3
    intMax(3, 2, 1) → 3
*/
function intMax(a, b, c){
    return Math.max(a, b, c);
}

/* 3. firstLast6
Implementa la función firstLast6 que recibe un arreglo con números y retorne true si el número 6 es el primer o el último elemento del arreglo. El arreglo tendrá 1 o más elementos.

Ejemplo:

    firstLast6([1, 2, 6]) → true
    firstLast6([6, 1, 2, 3]) → true
    firstLast6([13, 6, 1, 2, 3]) → false
*/
function firstLast6(nums){
    for(let i = 0; i < nums.length; i++) {
      return (nums[0] === 6 || nums[nums.length - 1] === 6)
    };
};

/* 4. Return Something to Me
Comencemos! En este ejercicio deberás crear una función que retorne el string "something" unido con un espacio " " y el argumento dado a.

Ejemplos

giveMeSomething("is better than nothing") ➞ "something is better than nothing"

giveMeSomething("Bob Jane") ➞ "something Bob Jane"

giveMeSomething("something") ➞ "something something"
*/
function giveMeSomething(a) {
	return "something " + a;
};