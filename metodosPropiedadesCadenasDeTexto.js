var texto = "Carlos Mendoza";

var nuevoTexto0 = texto.length;
console.log(nuevoTexto0);

/* METODOS
substring : para cortar una cadena desde la posición que coloques en parentesis
*/
var nuevoTexto1 = texto.substring(3);
console.log(nuevoTexto1);

var nuevoTexto2 = texto.substring(0, 6);
console.log(nuevoTexto2);

// indexOf : en que posición tenemos la letra que pusimos entre parentesis
var nuevoTexto3 = texto.indexOf("a");
console.log(nuevoTexto3);

var nuevoTexto4 = texto.indexOf("o", 5); //buscar la letra o minúscula desde la posición 5
console.log(nuevoTexto4);

var nuevoTexto5 = texto.lastIndexOf("o"); //empieza a buscar desde atras hacia adelante
console.log(nuevoTexto5);

// replace: remplaza un input por otro
var nuevoTexto7 = texto.replace("Mendoza", "FalconMasters"); //empieza a buscar desde atras hacia adelante
console.log(nuevoTexto7);

// toUpperCase(): convertir a mayusculas
var nuevoTexto7 = texto.toUpperCase(); //empieza a buscar desde atras hacia adelante
console.log(nuevoTexto7);

// toLowerCase(): convertir a minusculas
var nuevoTexto8 = texto.toLowerCase(); //empieza a buscar desde atras hacia adelante
console.log(nuevoTexto8);

/* Links
https://geekflare.com/es/javascript-string-method/
https://www.w3schools.com/js/js_string_methods.asp
*/


const company = "Geek Flare";

console.log(company.toUpperCase());

console.log(company.toLowerCase());

const compania = "         Geek   Flare           ";

/* El método trim elimina los espacios en blanco inicial y final de la cadena.
Es una operación in situ, es decir, actualiza la cadena original.
*/
console.log(compania.trim());

/* El método charAt devuelve el carácter en el índice dado.
Devuelve una cadena vacía si el índice no es válido.
*/

console.log(company.charAt(2));
console.log(company.charAt(6));

/* El método charCodeAt devuelve el carácter de código ASCII en el índice dado.
Vuelve NaN si el índice no es válido.
*/
console.log(company.charCodeAt(1));

/* slice(startIndex, endIndex): El método slice devuelve la subcadena de la cadena
de startIndex a endIndex (No incluído). El string.slice(0, 6) devuelve la subcadena
de la 0th indexar a 5th índice.
*/

console.log(company.slice(0,4));
console.log(company.slice(4));
console.log(company.slice(-3, -1));

console.log(company.substr(0, 4));
console.log(company.substring(0, 4));

console.log(company.replace("Geek", "Google"));

console.log(company.indexOf("G"));
console.log(company.indexOf("O"));
console.log(company.indexOf("e", 5));

console.log(company.split(" "));
console.log(company.split(" "));

let nimo = ["H", "o", "l", "a"]
console.log(nimo.join());
