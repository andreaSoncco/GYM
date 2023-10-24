/* 1. Ice hot
Dadas dos temperaturas, devuelve true si una es menor que 0 y la otra es mayor que 100.

Ejemplos:

  icyHot(120, -1) → true
  icyHot(-1, 120) → true
  icyHot(2, 120) → false
*/
function icyHot(temp1, temp2){
    return ((temp1 < 0 && temp2 > 100) || (temp2 < 0 && temp1 > 100));
}

/* 2. comboString
Implementa la función comboString para que reciba dos cadenas, a y b, y devuelva una cadena de la forma corta + larga + corta, con la cadena más corta en el exterior y la cadena más larga en el interior. Las cadenas no tendrán la misma longitud, pero pueden estar vacías (longitud 0).

Ejemplo:

    comboString('Hello', 'hi') → "hiHellohi"
    comboString('Hi', 'Hello') → "HiHelloHi"
    comboString('aaa', 'b') → "baaab"
*/
function comboString(a, b){
  if (a.length>b.length) {
    return b + a + b;
  } else {
    return a + b + a;
  }
};

/* 3. Reverse 3
Dado un array de números enteros de longitud 3, devuelve un nuevo array con los elementos en orden inverso, por lo que [1, 2, 3] se convierte en [3, 2, 1].

Ejemplos:

  reverse3([1, 2, 3]) → [3, 2, 1]
  reverse3([5, 11, 9]) → [9, 11, 5]
  reverse3([7, 0, 0]) → [0, 0, 7]
*/
function reverse3(nums){
  return nums.reverse();
};

/* 4. Remove String Spaces
Esto es demasiado sencillo, elimina los espacios de la cadena, luego devuelve la cadena resultante.

Ejemplos

noSpace('8 j 8   mBliB8g  imjB8B8  jl  B') ➞ '8j8mBliB8gimjB8B8jlB'
noSpace('8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd') ➞ '88Bifk8hB8BB8BBBB888chl8BhBfd'
noSpace('8aaaaa dddd r     ') ➞ '8aaaaaddddr'
*/
function noSpace(x){
  return x.replace(/\s/g, ""); //Las expresiones regulares no se encierran entre comillas
};

/* 5. Same on both ends
Dada una oración, retorna el número de palabras cuya primera y última letra sean iguales.

Ejemplos:

countSameEnds("Pop! goes the balloon") // => 1

countSameEnds("And the crowd goes wild!") // => 0

countSameEnds("No I am not in a gang.") // => 1
*/
a = "hola olo jej!"
function countSameEnds(str) {
  let p = str.replace(/!/g, "");
	p = p.replace(/\./g, "");
	p = p.trim().split(/\s+/);
	let count = 0;
	for (let i=0; i < p.length; i++) {
		if ((p[i][0].toLowerCase() === p[i][p[i].length-1].toLowerCase()) && (p[i].length > 1))  {
			count++;
		}
	}
  return count;
};

console.log(countSameEnds(a));

function countSameEnds(str) {
	// Crear un arreglo con las palabras
	// iterar cada palabra para tener la primera y última letra de cada una
	// Declarar una arreglo vacio llamado count
	// si la primera y última letra de cada palabra es la misma agregar 1 a count
	let array = str.replace(/[.!]/g, '').trim().split(/\s+/g)
	let count = 0;
	for (let i = 0; i < array.length; i++ ) {
		let word = array[i]
		if ((word[0].toLowerCase() === word[word.length-1].toLowerCase()) && word.length > 1) {
			count ++;
		}
	}
	return count;	
}
/* 6. Secret Society
Un grupo de amigos ha decidido iniciar una sociedad secreta. El nombre de la sociedad será la primera letra de cada uno de ellos, ordenados alfabéticamente.

Crear una función que tome una serie de nombres y retorne el nombre de la sociedad secreta.

Ejemplos

societyName(["Adam", "Sarah", "Malcolm"]) ➞ "AMS"
societyName(["Harry", "Newt", "Luna", "Cho"]) ➞ "CHLN"
societyName(["Phoebe", "Chandler", "Rachel", "Ross", "Monica", "Joey"]) ➞ "CJMPRR"
Importante ❗

El nombre de la sociedad secreta debe ser enteramente en mayúsculas.
*/
function societyName(friends) {
	// Iterar el array friends para sacar las palabras
	// sacar la primera letra de cada palabra y unirla
	// transformarla a mayuscula
	let name = friends.map(item => item.charAt(0))
	name = name.sort().join('');
	return name;
}

/* 7. blackjack
Dados 2 valores int mayores que 0, devuelve el valor que más se acerque a 21 sin pasarse. Devuelve 0 si ambos se pasan.

Ejemplo

    blackjack(19, 21) → 21
    blackjack(21, 19) → 21
    blackjack(19, 22) → 19
*/

function blackjack(a, b){
	if (a > 21 && b > 21) {
	  return 0;
	} else if (a > 21) {
	  return b;
	} else if (b > 21) {
	  return a;
	} else if (21 - a < 21 - b) {
	  return a;
	} else if (21 - b < 21 - a) {
	  return b;         
	}
}

