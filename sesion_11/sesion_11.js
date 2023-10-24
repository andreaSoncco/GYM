/* 1. lLove6
Dados dos valores enteros, a y b:

Devuelve true si alguno de ellos es 6.
Devuelve true si su suma es 6
Devuelve true si su diferencia es 6
Nota: la función Math.abs(num) calcula el valor absoluto de un número.

Ejemplo

    love6(6, 4) → true
    love6(4, 5) → false
    love6(1, 5) → true
*/

function love6(a, b) {
    let resta = a - b;
    resta = Math.abs(resta)
    if (a == 6 || b == 6 || resta == 6 || a + b == 6) {
     return true;  
    } else {
      return false;
    }
}

/* 2. alarmClock
Dado un día de la semana codificado como 0=domingo, 1=lunes, 2=martes, ...6=sábado, y un booleano que indica si estamos de vacaciones, devuelve una cadena de la forma "7:00" que indica cuándo debe sonar el despertador. Entre semana, la alarma debe ser "7:00" y el fin de semana debe ser "10:00". A menos que estemos de vacaciones, entonces los días laborables debería ser "10:00" y los fines de semana debería ser "off".

Ejemplo

    alarmClock(1, false) → "7:00"
    alarmClock(5, false) → "7:00"
    alarmClock(0, false) → "10:00"
*/

function alarmClock(day, vacation){
    if (vacation) {
      if (day == 1 || day == 2 || day == 3 || day == 4 || day == 5) {
        return "10:00";
      } else {
        return "off";
      } 
    } else {
      if (day == 1 || day == 2 || day == 3 || day == 4 || day == 5) {
        return "7:00";
      } else {
        return "10:00";
      } 
    }
}

/* 3. in1To10
Dado un número n, devuelve true si n está en el rango 1..10, inclusive. A menos que "outsideMode" sea verdadero, en cuyo caso devuelve true si el número es menor o igual a 1, o mayor o igual a 10.

Ejemplo

    in1To10(5, false) → true
    in1To10(11, false) → false
    in1To10(11, true) → true 
*/

function in1To10(n, outsideMode){
    // outside => true y n<=1 || n>=10   => TRUE
    // outside => false y   1<=n<=10       => TRUE
    
    if (outsideMode) {
      if (n <= 1 || n>= 10) {
      return true;
      } else {
      return false;
      }
    } else {
      if (n >= 1 && n <= 10) {
      return true;
      } else {
      return false;
      }
    }
}

/* 4. Stop gninnipS My sdroW
Escribe una función que tome una cadena de una o muchas palabras y devuelva la misma cadena, pero cuando la palabra sea de cinco o más letras debes invertir la cadena.

Ejemplos

spinWords("Hey fellow warriors") ➞ "Hey wollef sroirraw"
spinWords("This is a test") ➞ "This is a test"
spinWords("This is another test") ➞ "This is rehtona test"
Importante ❗

Las cadenas pasadas solo constarán de letras y espacios.
Los espacios se incluirán solo cuando hay más de una palabra en la cadena.
*/

function spinWords(string) {
  // Dividir la cadena en un arreglo
  // calcular las letras en cada cadena
  // si las el numero de letras es igual o mayor a 5 revertir la cadena
  // luego de transformado el array volverlo una cadena de string
  let array = string.split(' ');

  for (let i = 0; i < array.length; i++) {
    if (array[i].length >= 5) {
      array[i] = array[i].split('').reverse().join(''); // Invierte la palabra
    }
  }

  return array.join(' '); // Une el arreglo en una cadena
}

/* 5. 
*/