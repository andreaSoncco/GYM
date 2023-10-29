/* Para abrir Quokka tienes que teclear: Ctlr + shif + P
   y te retornará Star on Current File, le das click allí

*/

const { parse } = require("@babel/core");

let nombreCompleto = "Andrea" + " " + "Soncco"
console.log(nombreCompleto);

var verbo = "programar";
var mensaje = "Estoy aprendiendo a " + verbo + " con FreeCodeCamp";

console.log(mensaje);

let mensajeCompleto = "Estoy aprendiendo a programar";
let parteFinal = " con freeCodeCapm";

console.log(mensajeCompleto);

mensajeCompleto += parteFinal;

console.log(mensajeCompleto);

let lenguajeDeProgramacion = "JavaScript";

/*
Cadena:   J a v a S c r i p t
Índices:  0 1 2 3 4 5 6 7 8 9
*/

console.log(lenguajeDeProgramacion[0]);
console.log(lenguajeDeProgramacion[10]);
console.log(lenguajeDeProgramacion[-3]);
/* El útimo índice siempre es la longitud de la cadena -1 porque comenzamos a
contar desde 0 */
console.log(lenguajeDeProgramacion[lenguajeDeProgramacion.length - 1]);
// El penúltimo índice es longitud - 2 porque comenzamos a contarde desde 0
console.log(lenguajeDeProgramacion[lenguajeDeProgramacion.length - 2]);


/*Inmutabilidad: no puedes cambiar los caracteres individuales de la cadena
pero si puede reasignar la cadena */

let miCadena = "Jola, Mundo";

console.log(miCadena);
miCadena[0] = "H"; //Error
console.log(miCadena);

miCadena = "Hola, Mundo";
console.log(miCadena);

let miSustantivo = "perro";
let miAdjetivo = "negro";
let miVerbo = "corrió";
let miAdverbio = "rápidamente";

let palabrasEnBlanco = "El " + miSustantivo + " " + miAdjetivo + " " + miVerbo + " " + miAdverbio + " a la tienda.";
console.log(palabrasEnBlanco);

//la bicicleta pequeña voló a la tienda lentamente.
miSustantivo = "bicicleta";
miAdjetivo = "pequeña";
miVerbo = "voló";
miAdverbio = "lentamente";

palabrasEnBlanco = "La " + miSustantivo + " " + miAdjetivo + " " + miVerbo + " a la tienda " + miAdverbio + ".";

console.log(palabrasEnBlanco);

// Arrays | Arreglos

var miArreglo = ["John", 24];
console.log(miArreglo);

var estudiantes = ["Nora", "Gino", "Emily", "Juan"];
console.log(estudiantes);

var notas = [95, 67, 89, 56];
console.log(notas);

// Arreglo anidado

var listaDeEstudiantes = [["Nora", 97], ["Gino", 78]]
console.log(listaDeEstudiantes);

var listaDeProductos = [["Camisa", 5.67, "S134"], ["Celular", 250, "S356"], ["Zapatos", 36.7, "S678"]];
console.log(listaDeProductos);

var datos = [[3.4, 5.6, 3.2], [6.7, 4.5, 7.8], [5.6, 3.4, 7.8]];
console.log(datos);

var myArray = [10, 20, 30];
/*
Arreglo:  [10, 20, 30]
Índices:   0   1   2
*/
let suma = myArray[0] + myArray[1] + myArray[2];

console.log(suma);
// Se pueden cambiar los elementos de un array
myArray[0] = 40;
myArray[1] = "Hola";
myArray[3] = [1, 2, 3];
console.log(myArray);

const matriculas = [
  { nombre: 'Ale', apellido: 'Soncco' },
  { nombre: 'Celso', apellido: 'Soncco' },
  { nombre: 'Zandra', apellido: 'Cisneros' }
]

matriculas[3] = { nombre: 'Andrea', apellido: 'Soncco' }
console.log(matriculas);

let ejemplo = [1, 2, 3, 4]
ejemplo[4] = 5;
console.log(ejemplo);

// AREGLO MULTIDIMENSIONAL
myArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
/*
Arreglo:           [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
Índices:                0          1          2
Índices internos:    0  1  2    0  1  2    0  1  2
*/
console.log(myArray[0]);
console.log(myArray[1]);
console.log(myArray[2]);

//Para acceder a un elemento primero especificamos el índice del arreglo y luego el índice del elemento
console.log(myArray[1][2]);
console.log(myArray[2][0]);

// MÉTODOS PARA APLICAR A ARREGLOS
var estaciones = ["Invierno", "Otoño", "Primavera"];
// PUSH: método para añadir un elemento al final del arreglo
estaciones.push("Verano");
console.log(estaciones);

// POP: método para remover el último elemento y asignarlo a otra variable
let elementoQuitado = estaciones.pop();
console.log(elementoQuitado);
console.log(estaciones.pop());
console.log(estaciones);


let saludo = ['Hola', 'Hi'];
let elementoSacado = saludo.pop();
console.log(elementoSacado);
console.log(saludo);

// SHIFT: método que permite remover el primer elemento del arreglo
let elementoRemovido = estaciones.shift();
console.log(elementoRemovido);
console.log(estaciones);

// UNSHIFT: método para agregar un elemento al principio del arreglo
estaciones.unshift("Verano");
console.log(estaciones);

// Quitar y agregar elementos de un Arreglo
/*
 Agregar elementos +  UNSHIFT   PUSH
 Quitar elementos  -  SHIFT     POP
*/

var miListaDeCompras = [["cereal", 3], ["leche", 2], ["galletas", 4], ["pan", 5], ["refresco, 7"], ["pollo", 7]];

// Cereal
console.log(" Voy a comprar " + miListaDeCompras[0][1] + " unidades de " + miListaDeCompras[0][0] + ".");

//Leche
console.log("Usted compró " + miListaDeCompras[1][1] + " litros de " + miListaDeCompras[1][0] + ".");

// FUNCIONES: Nos permiten escribir código reutilizable
function mostrarMensaje() {
  console.log("¡Hola, Mundo!");
};

mostrarMensaje();
mostrarMensaje();
mostrarMensaje();
mostrarMensaje();
mostrarMensaje();

/* ARGUMENTOS: son los valores que asignamos a los parametros
a,b = parámetros
el espacio que dejamos para escribir el cuerpo de la función se llama indentación
*/
function sumar(a, b) { // <-- parámetros
  var suma = a + b; //cuerpo de la función
  console.log('El resultado de ' + a + ' + ' + b + 'es: ' + suma + '.');
  return suma;
}

sumar(5, 3); // <-- argumentos
var x = 8;
var y = 9;
sumar(x, y);
console.log(sumar(5, 3))
console.log('  Hola ' + x);

function concatenarTresCadenas(cadena1, cadena2, cadena3) {
  console.log(cadena1 + " " + cadena2 + " " + cadena3);
}

concatenarTresCadenas("Estoy", "aprendiendo", "a programar");

/*
VARIABLES GLOBALES: se puede usar en cualquier lugar del programa porque esta definida en el programa principal
VARIABLES LOCALES: solo se pueden usar dentro de la función en que la definimos
Cuando tenemos una variable global y local con el mismo nombre la variable local tienen prioridad si estamos dentro de la función en que la declaramos
*/
var miNombre = "Nora";

function mostrarNombre() {
  var miNombre = "Gino";
  console.log(miNombre);
};

mostrarNombre();

console.log(miNombre);

function sumar(a, b) {
  return a + b;
};

console.log(sumar(5, 3));

function sumarNumeros(a, b) {
  console.log(a + b);
};

console.log(sumarNumeros(5, 3));
sumarNumeros(5, 3);

let resultado = sumar(5, 3); // let resultado = 8
console.log(resultado);

function crearCadenaConMeta(lenguajeDeProgramacion) {
  return "Mi meta es aprender " + lenguajeDeProgramacion;
}

var miMeta = crearCadenaConMeta("JavaScript");
console.log(miMeta);

miMeta = crearCadenaConMeta("Python");
console.log(miMeta);

// PROXIMO EN LA FILA
function proximoEnLaFila(arreglo, elemento) {
  arreglo.push(elemento); // Agregar al final del arreglo
  return arreglo.shift()         // Remover el primer elemento.
}

var miArreglo = [1, 2, 3, 4, 5];
console.log("Antes: " + JSON.stringify(miArreglo)); //convertir el arreglo en una cadena de caracteres con un formato especifico

console.log(proximoEnLaFila(miArreglo, 6));

console.log("Despues: " + JSON.stringify(miArreglo));

// VALORES BOOLEANOS
console.log(true);
console.log(false);

// OPERADOR DE IGUALDAD
console.log(5 == 5);
console.log("Hola" == "hola");
console.log([1, 2, 3] == [1, 2, 3]);
// Este operador == cuando se aplica a los arreglos no compara los elementos del arreglo sino que compara si los arreglos en la memoria representan el mismo objeto

// OPERADOR DE IGUALDAD ESTRICTA: no solo se fija en el valor sino confirma si ambos tienen el mismo tipo de dato también
console.log(9 == "9");
console.log(9 === "9");

var a;
var b;

a = 5;
b = 5;

console.log(a == b);
console.log(a === b);

// OPERADOR DE DESIGUALDAD: convierte los elementos comparados en un tipo de dato común
console.log(9 != 6);
console.log(9 != 9);
console.log("JavaScript" != "JavaScript");

console.log([1, 2, 3] != [1, 2, 3]);
// no aplicar para elementos de un arreglo

// DESIGUALDAD ESTRICTA: no convierte los elementos a un tipo de dato común
console.log(1 != "1");
console.log(1 !== "1");

// MAYOR QUE | MENOR QUE
console.log("B" > "A");
console.log("ACB" > "ABC");
console.log("AB" > "A");
console.log("Mundo" > "Hola");

console.log(5 < 6);
console.log("A" < "B");
console.log("A" < "a");

// MAYOR O IGUAL QUE | MENOR O IGUAL QUE
console.log(5 > 5);
console.log(5 >= 5);

console.log(5 < 5);
console.log(5 <= 5);

/* OPERADORES LÓGICOS: Permite conbinar distintas expresiones para formar condiciones un poco más elaboradas o más complejas
- Usan Tablas de Verdad
Tabla de verdad del operador AND - X && Y
    X   |   Y   |   X && Y
 ---------------------------
    t   |   t   |   t
    t   |   f   |   f
    f   |   t   |   f
    f   |   f   |   f
La expresión solo es verdadera cuando ambos operadores son verdaderos
*/
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

var a = 8;
console.log((a > 5) && (a < 10));
a = 3;
console.log((a > 5) && (a < 10));

/*
Tabla de verdad del operador OR - X || Y
    X   |   Y   |   X && Y
 ---------------------------
    t   |   t   |   t
    t   |   f   |   t
    f   |   t   |   t
    f   |   f   |   f
La expresión es verdadera si alguno de los dos operadores o ambos son verdaderos.
*/

var a = 2;

console.log((a < 5) || (a > 15));

/*
Tabla de verdad del operador NOT - !X
    X   |  !X   
 ---------------------------
    t   |   f
    f   |   t    
*/

console.log(!true);

var a = 8;
console.log(!(a > 5));
console.log(!(a < 5));

/* SENTENCIAS CONDICIONALES
IF 

La variable se encuentra en un rango de números
*/
x = 5;

if (x > 2 && x < 10) {    // funciona tanto con parentesis como omitiendolos
  console.log("La condición es verdadera.");
};

function clasificarValor(valor) {
  if (valor % 2 == 0) {
    console.log("Divisible entre 2.");
  } else if (valor % 3 == 0) {
    console.log("Divisible entre 3.");
  } else {
    console.log("No es divisible entre las opciones.");
  }
}

clasificarValor(2);
clasificarValor(15);

/* SENTENCIAS SWITCH: La declaración switch evalúa una expresión, comparando
    el valor de esa expresión con una instanciacase, y ejecuta declaraciones 
    asociadas a ese case
*/
function clasificarValor(valor) {
  var respuesta;
  switch (valor) {
    case 1:
      respuesta = "alpha";
      break; // para que no se continue ejecutando casos más abajo
    case 2:
      respuesta = "beta";
      break;
    case 3:
      respuesta = "gamma";
      break;
    case 4:
      respuesta = "delta";
      break;
  }
  return respuesta;
}

console.log(clasificarValor(4));

let producto;

switch (producto) {
  case "pizza":
    console.log("La pizza básica cuesta $10.55");
    break;
  case "hamburguesa":
    console.log("Las hamburguesas cuestan $6.78");
    break;
  case "helado":
    console.log("El helado cuesta $2.8");
    break;
  default:      // Opción predeterminada que se cumple en caso las demas no se cumplan
    console.log("comida rápida");
    break;
};

// SENTENCIAS SWITCH MULTIPLES CASOS
function clasificarVolumen(valor) {
  let volumen;
  switch (valor) {
    case 1:
      volumen = "bajo";
      break;
    case 2:
    case 3:
      volumen = "intermedio";
      break;
    case 4:
    case 5:
    case 6:
      volumen = "alto";
      break;
  }
  return volumen;
}

console.log(clasificarVolumen(6));

// RETORNAR VALORES BOOLEANOS
function esMenorQue(a, b) {
  if (a < b) {
    return true;
  } else {
    return false;
  }
}

function esMenorQue(a, b) {
  return a < b;
}

console.log(esMenorQue(2, 2.1));

/* PATRÓN DE RETORNO ANTICIPADO: Todo código dentro de una función despues de la sentencia return ya no se ejecuta
*/

function miFuncion() {
  console.log("Hola");
  return "Mundo";
  console.log("Adiós"); // esta sentencia ya no se ejecuta porque viene despues de Return
}

miFuncion();
console.log(miFuncion());

function calcularRaizCuadrada(num) {
  if (num < 0) {
    return undefined;
  }
  return Math.sqrt(num);
}

console.log(calcularRaizCuadrada(-5));

let conteo = 0;

function contarCartas(carta) {
  var decision;

  switch (carta) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      conteo++;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      conteo--;
      break;
  }

  if (conteo > 0) {
    decision = "Apostar";
  } else {
    decision = "Esperar";
  }
  return conteo + " " + decision;
}

console.log(contarCartas(2));
console.log(contarCartas(3));
console.log(contarCartas(7));
console.log(contarCartas("K"));
console.log(contarCartas("A")); // el conteo se va acumulando de las anteriores llamadas a la función

/* OBJETOS
    Crear objetos
    "propiedad": "valor"
*/

let miObjeto = {
  5: "cinco" // si el objeto tiene alguna propiedad que no es una cadena JavaScript lo convierte automaticamente en cadena (pone comillas)
};

// ACCEDER A PROPIEDADES: NOTACIÓN DE PUNTO
let miPerro = {
  "nombre": "Gino",
  "edad": 5,
  "peso": 6,
  "raza": "Beagle"
};

miPerro.nombre;
console.log(miPerro.nombre);
console.log(miPerro.peso);

// ACCEDER A PROPIEDADES: NOTACIÓN DE CORCHETES
let miCuaderno = {
  "color": "verde",
  "categoria": 3,
  "numero de paginas": 200,
  "numero de hojas": 100
}

console.log(miCuaderno.color);
console.log(miCuaderno["numero de hojas"]);
console.log(miCuaderno[0]);

// ACCEDER A PROPIEDADES: VARIABLES
let resultados = {
  1: "nora256",
  2: "gino577",
  3: "estef543",
  4: "kiara566"
};

let posicion = 4;
console.log(resultados[posicion]);
console.log(resultados[1]);
resultados['5'] = 'andrea287';
console.log(resultados);

// ACTUALIZAR PROPIEDADES
let mochila = {
  "color": "azul",
  "tamaño": "mediano",
  "contenido": ["botella de agua", "cuaderno"]
};
console.log(mochila.color);
mochila.color = "verde";
console.log(mochila.color);
mochila.contenido.push("lápiz");
console.log(mochila.contenido);
mochila.contenido[3] = 'libro';
console.log(mochila.contenido);
mochila.contenido = [];
console.log(mochila.contenido);


// AGREGAR PROPIEDADES
let curso = {
  "titulo": "Aprende JavaScript desde Cero",
  "idioma": "Español",
  "duracion": 30
};

curso.vistas = 34500;
console.log(curso);


curso["likes"] = 3;
console.log(curso);

curso['profesor'] = 'Mario';
console.log(curso);

let profesorado = 'profesor';
curso[profesorado] = 'Guillermo';
console.log(curso);

// ELIMINAR PROPIEDADES DE UN OBJETO
delete curso.duracion;
console.log(curso);

delete curso["idioma"];
console.log(curso);

// En lugar de trabajar con switch en una función se puede trabajar con un objeto y el código se acorta
function buscarElementoQuimico(simbolo) {
  let simbolosQuimicos = {
    "Al": "Aluminio",
    "S": "Azufre",
    "Cl": "Cloro",
    "He": "Helio",
    "B": "Boro",
    "Li": "Litio"
  };
  return simbolosQuimicos[simbolo];
};

console.log(buscarElementoQuimico('Al'));

// VERIFICAR PROPIEDADES
let miCuadernito = {
  "color": "verde",
  "categoria": 3,
  "precio": 4.56,
};

console.log(miCuadernito.hasOwnProperty("color"));
console.log(miCuadernito.hasOwnProperty("origen"));

function verificarPropiedad(obj, propiedad) {
  if (obj.hasOwnProperty(propiedad)) {
    return "Propiedad: " + obj[propiedad];
  } else {
    return "El objeto no tiene esta propiedad";
  }
};

console.log(verificarPropiedad(miCuadernito, "color"));
console.log(verificarPropiedad(miCuadernito, "origen"));

// OBJETOS COMPLEJOS
let ordenesDePizzas = [
  {
    "tipo": "margarita",
    "tamaño": "individual",
    "precio": 5.67,
    "toppings": [
      "extra queso",
      "champiñones",
      "piña"
    ],
    "paraLlevar": true
  },
  {
    "tipo": "cuatro quesos",
    "tamaño": "familiar",
    "precio": 18.34,
    "toppings": [
      "extra queso",
      "pimentón"
    ],
    "paraLlevar": false
  },
  {
    "tipo": "napolitana",
    "tamaño": "individual",
    "precio": 6.78,
    "toppings": [],
    "paraLlevar": true
  }
]

console.log(ordenesDePizzas[0].tipo);
console.log(ordenesDePizzas[0]["tipo"]);
console.log(ordenesDePizzas[0].precio);
console.log(ordenesDePizzas[2].precio);

// OBJETOS ANIDADOS
let miReceta = {
  "descripcion": "mi postre favorito",
  "costo": 15.6,
  "ingredientes": {
    "masa": {
      "harina": "100 grs",
      "sal": "1 cucharadita",
      "agua": "1 tasa"
    },
    "cobertura": {
      "azucar": "120 grs",
      "chocolate": "4 cucharadas",
      "mantequilla": "200 grs"
    }
  }
};

console.log(miReceta.descripcion);
console.log(miReceta.ingredientes.masa.harina);
console.log(miReceta.ingredientes["cobertura"]["azucar"]);

// AREGLOS ANIDADOS

let misPlantas = [
  {
    tipo: "flores",
    lista: [
      "rosas",
      "tulipanes",
      "dientes de león"
    ]
  },
  {
    tipo: "árboles",
    lista: [
      "abeto",
      "pino",
      "abedul"
    ]
  }
];

var primeraFlor = misPlantas[0].lista[0];
console.log(primeraFlor);

var segundoArbol = misPlantas[1].lista[1];
console.log(segundoArbol);

var segundoArbol = misPlantas[1].lista[2];
console.log(segundoArbol);

// EJERCICIOS

/* EJERCICIO 1: COLECCIÓN DE DISCOS
Tenemos un objeto que representa parte de una colección de álbumes musicales.
Cada álbum tiene un número de identificación único (id) asociado a otras propiedades.
No todos los álbumes tienen la información completa.
*/
let coleccionDeDiscos = {
  7853: {
    tituloDelAlbum: "Bee Gees Greatest",
    artista: "Bee Gees",
    canciones: ["Stayin Alive"]
  },
  5439: {
    tituloDelAlbum: "ABBA Gold"
  }
};
/* Define una función actualizarDiscos que tome los siguientes parámetros:
- discos (el objeto que representa la colección de discos).
- id
- propiedad ("artista" o "canciones").
- valor.

Tu meta es completar la función implementando las siguientes reglas para
modificar el objeto pasado a la función:
- si "valor" es una cadena vacía, elimina la propiedad del álbum correspondiente.
- si "propiedad" es igual a la cadena de caracteres "canciones" pero el álbum no
tiene una propiedad llamada "canciones", crea un arreglo vació y agrega "valor"
a ese arreglo.
- si "propiedad" es igual a la cadena de caracteres "canciones" y "valor" no es
una cadena vacía, agrega "valor" al final del arreglo de canciones del álbum
correspondiente.
- si "valor" no es una cadena vacía y "propiedad" no es igual a "canciones", asigna
el valor del parámetro "valor" a la propiedad. Si la propiedad no existe, debes 
crearla y asignar este valor.
*/

function actualizarDiscos(discos, id, propiedad, valor) {
  if (valor === "") {
    delete discos[id][propiedad];
  } else if (propiedad === "canciones") {
    discos[id][propiedad] = discos[id][propiedad] || [];
    discos[id][propiedad].push(valor);
  } else {
    discos[id][propiedad] = valor;
  }
}

console.log(coleccionDeDiscos[7853].tituloDelAlbum);
actualizarDiscos(coleccionDeDiscos, 7853, "tituloDelAlbum", "");
console.log(coleccionDeDiscos[7853].tituloDelAlbum);

console.log(coleccionDeDiscos[5439].canciones);
actualizarDiscos(coleccionDeDiscos, 5439, "canciones", "Mama Mia");
console.log(coleccionDeDiscos[5439].canciones);

console.log(coleccionDeDiscos[5439].artista);
actualizarDiscos(coleccionDeDiscos, 5439, "artista", "ABBA");
console.log(coleccionDeDiscos[5439].artista);

/* LOOP - CICLO O BUCLES: Nos permiten repetir una secuencia de instrucciones un número específico
de veces
 "WHILE": Se usa cuando no tenemos un número especifico de iteraciones que queremos realizar pero si sabemos que
 es lo que tiene que ser cierto para continuar el proceso
 Iteración: una repetición del bloque de código que queremos repetir

 Repetir el mensaje "Hola Mundos" tres veces:
*/
console.log("Hola, Mundo");
console.log("Hola, Mundo");
console.log("Hola, Mundo");

var i = 0;

while (i <= 3) {
  console.log("Hola, Mundo");
  i++;
}

var miArreglo = [];
var i = 0;

console.log(miArreglo);

while (i < 10) {
  miArreglo.push(i);
  i++;
}

console.log(miArreglo);
console.log(i);

var numeros = [2, 3, 4, 5, 6, 7, 8, 9, 34];

while (numeros.length > 4) {
  numeros.pop();
}

console.log(numeros);

/*
"FOR": Lo usamos cuando sabemos cuantas iteraciones van a ser necesarias, el ciclo
for nos actualiza esa variable que antes teniamos que actualizar nosotros mismos con
el ciclo while, la actualiza automáticamente

for ( | Inicializar el valor de una variable |
      | Condición que indica si el ciclo continua o no |
      | Como queremos actualizar esa variable en cada iteración | ) {


}

Ventajas: podemos espeficicar todas las condiciones importantes del ciclo dentro
del parentesis
*/

var miArreglo = [];
for (let i = 0; i < 10; i++) {
  miArreglo.push(i);
}

console.log(miArreglo);

var miArreglo = [];
for (let i = 0; i < 10; i += 2) {
  miArreglo.push(i);
}

console.log(miArreglo);

var miArreglo = [];
for (let i = 0; i < 10; i += 2) {
  miArreglo.push("A");
}

console.log(miArreglo);

/* CICLOS "for": NÚMEROS IMPARES
*/

var miArreglo = [];

for (var i = 1; i < 20; i += 2) {
  miArreglo.push(i);
}

console.log(miArreglo);

miArreglo = [];

for (var i = 2; i <= 26; i += 2) {
  miArreglo.push(i);
}

console.log(miArreglo);

/* Ciclos "for": CONTAR HACIA ATRÁS
*/
for (let i = 15; i >= 10; i--) {
  console.log(i);
}

for (let i = 15; i >= 10; i -= 2) {
  console.log(i);
}

miArreglo = [];

for (let i = 10; i > 0; i -= 2) {
  miArreglo.push(i);
}

console.log(miArreglo);

/* ITERAR SOBRE UN ARREGLO CON UN CICLO "for"; significa que vas a obtener cada
uno de los elementos de ese arreglo y los vas a poder usar en el cuerpo del ciclo
*/
miArreglo = [4, 6, 8, 2];
let total = 0;

for (let i = 0; i < miArreglo.length; i++) {
  total += miArreglo[i];
}

console.log(total);

var lenguajes = ["JavaScript", "Python", "Java", "C++"];

for (let i = 0; i < lenguajes.length; i++) {
  console.log(lenguajes[i].toUpperCase());
};

function contarNumerosPares(arreglo) {
  var total = 0;

  for (var i = 0; i < arreglo.length; i++) {
    if (arreglo[i] % 2 == 0) {
      total++;
    }
  }

  return total;
};

console.log(contarNumerosPares([5, 8, 6, 3, 1, 2, 4, 10]));

// CICLOS FOR ANIDADOS

miArreglo = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

for (let i = 0; i < miArreglo.length; i++) {
  var arregloAnidado = miArreglo[i];
  
  for (var j = 0; j < arregloAnidado.length; j++) {
    console.log(arregloAnidado[j]);
  }
}

// CICLOS DO WHILE
// Comparandolo con while

var x;
x = 5;

while (x < 10) {
  console.log(x);
  x++;
};

/* La diferencia con el ciclo while es que en el ciclo do while siempre se
   va a ejecutar la secuencia de instrucciones por lo menos una vez */
x = 5;

do {
  console.log(x);
  x++;
} while (x < 10); 

let z = 16;

do {
  console.log(z);
  x++;
} while (z < 10);

while (z < 10) {
  console.log(z);
  x++;
}

/* ¿Para qué me va a servir un ciclo do ...while? Una de las situaciones
   ideales para un ciclo do while es cuando necesitas que el usuario
   ingrese un valor y tienes que verificar si ese valor es valido o no
   pero tienes que pedirselo al usuario al menos una vez, luego de que
   ingrese el valor en la condición de while() se puede verificar, si es
   valido continuo el programa y si no es valido continuas pidiendo el
   valor al usuario hasta que ingrese un valor valido para tu programa
*/

// BUSQUEDA DE PERFIL
var contactos = [
  {
    "nombre": "Nora",
    "apellido": "Nav",
    "numero": "0543236543",
    "gustos": ["Pizza", "Programación"]
  },
  {
    "nombre": "Harry",
    "apellido": "Potter",
    "numero": "0994372684",
    "gustos": ["Hogwarts", "Magia"]
  },
  {
    "nombre": "Sherlock",
    "apellido": "Holmes",
    "numero": "0487345643",
    "gustos": ["Casos interesantes", "Violín"]
  }
];

function buscarPerfil(nombre, propiedad) {
  for (let i = 0; i < contactos.length; i++) {
    if (contactos[i].nombre === nombre) {
      return contactos[i][propiedad] || `La propiedad: ${propiedad} no existe.`;
    }
  }
  return "El contacto no está en la lista de contactos"
}

console.log(buscarPerfil("Nora", "gustos"));
console.log(buscarPerfil("Harry", "apellido"));
console.log(buscarPerfil("Sherlock", "numero"));
console.log(buscarPerfil("Nora", "cumpleaños"));
console.log(buscarPerfil("Bob", "cumpleaños"));

/* NUMEROS ALEATORIOS
OBJETO MATH
Números aleatorios del 0 a casi 1
*/
function generarFraccionAleatoria() {
  return Math.random(); // [0,1) nunca puede ser uno
}

console.log(generarFraccionAleatoria());
console.log(generarFraccionAleatoria());
console.log(generarFraccionAleatoria());
console.log(generarFraccionAleatoria());
console.log(generarFraccionAleatoria());
console.log(generarFraccionAleatoria());
console.log(generarFraccionAleatoria());

/* NUMEROS ENTEROS ALEATORIOS
METODO FLOOR DE MATH: el número se trunca, redonde el numero a su menor
valor 19.56 => 19
Números enteros aleatorios
*/

let numeroAleatorioEntre0y19 = Math.floor(Math.random() * 20);
console.log(numeroAleatorioEntre0y19);

/* Generar un entero aleatorio entre 0 y el límite superior (sin
  inlcuirlo)
*/
function generarEnteroAleatorio(limiteSuperior) {
  return Math.floor(Math.random() * limiteSuperior)
};

for (var i = 0; i < 15; i++) {
  console.log(generarEnteroAleatorio(5));
};

// Números Enteros Aleatorios en un Rango
function rangoAleatorio(limiteInferior, limiteSuperior) {
  return Math.floor(Math.random() * (limiteSuperior - limiteInferior + 1)) + limiteInferior;
};

for (var i = 0; i < 15; i++) {
  console.log(rangoAleatorio(3, 8));
};

/* Función parseInt(): convertir una cadena de caracteres a número

"5.7" => 5
el numero decimal se trunca
*/
console.log(parseInt('89.21'));
console.log(parseInt('0'));
console.log(parseInt('abc'));

a = parseInt("5");
b = parseInt("6.7");

console.log(a + b)

// Función parseInt() con una base
/* Puedes convertir una cadena de carácteres en otro sistema númerico al
   sistema decimal como un entero
*/
console.log(parseInt('110111', 2)) // Sistema numérico binario con base 2
console.log(parseInt(110111, 2))
console.log(parseInt("3E0A", 16)); // sistema hexagecimal a decimal
console.log(parseInt('3E0A', 16)); // en este sistema hexagecimal no lee números solo cadenas de carácteres

/* OPERADOR CONDICIONAL (TERNARIO)
    Este operador nos permite compactar lo que seria un condicional en una
    sola línea

    El operador condicional comienza con una condición
*/

function retornarMinimo(x, y) {
  if (x < y) {
    return x;
  } else {
    return y;
  }
}

function retornarMinimum(x, y) {
  // console.log(x < y ? x : y);
  return x < y ? x : y;
}

console.log(retornarMinimum(6, 7));
console.log(retornarMinimo(109, 100));

a = 5;
b = 9;

console.log(a > b ? a + 2 : b * 3);

// MULTIPLES OPERADORES CONDICIONALES (TERNARIOS)

function comparaNumeros(a, b) {
  if (a == b) {
    return "a y b son iguales";
  } else if (a > b) {
    return "a es mayor que b";
  } else {
    return "b es mayor que a";
  }
}

console.log(comparaNumeros(13, 20))

function compararNumeritos(a, b) {
  return a == b ? "a y b son iguales"
    : a > b ? "a es mayor que b"
    : "b es mayor que a";
}

console.log(compararNumeritos(50, 27));
// AQUI ME QUEDE VIENDO EL VIDEO
// 7.35 HRS


// var vs. let

var ola = 16;
var ola = 29; // con var se puede declarar cuantas veces quieras

// Ámbito de var vs. let

var miVariableGlobal = 4;
console.log(miVariableGlobal);

function miFuncion() {
  console.log(miVariableGlobal);
  var miVariableLocal = 8;
  console.log(miVariableLocal);
}

miFuncion();

console.log(miVariableGlobal);

var mostrarColor = true;

if (mostrarColor) {
  var color = "verde";
  console.log("Mi color favorito es: " + color);
}

console.log(color);

var canasta = [1, 3];

for (var i = 0; i < canasta.length; i++) {
  var sum = 0;
  sum += canasta[i];
  console.log(sum);
}

function calcularAreaCirculo(radio) {
  const PI = 3.14;
  const MI_VARIABLE = "";
  var sumita;

  if (radio < 0) {
    return undefined;
  }
  return PI * (radio ** 2);
}

console.log(calcularAreaCirculo(10));

// ** : operador de exponente
console.log(3 ** 2);

// MUTUAR ARREGLO DECLARADO CON CONST
const MI_ARREGLO = [1, 2, 3, 4];

// MI_ARREGLO = [5, 6, 7, 8]; // ERROR

MI_ARREGLO[0] = 5;
MI_ARREGLO[1] = 6;
MI_ARREGLO[2] = 7;
MI_ARREGLO[3] = 8;

console.log(MI_ARREGLO);

// Crear un objeto inmutable

let colores = {
  "verde": "#10e04b",
  "azul": "1b50e0",
  "negro": "#000000",
  "blanco": "#ffffff"
}

Object.freeze(colores);

colores.amarrillo = "#fff200"; // no se ejecuta
console.log(colores);
delete colores.verde; // no se ejecuta
console.log(colores);

// FUNCIONES FLECHA
// Este ejemplo retorna un objeto Date()
const fecha = function () {
  return new Date();
}

const Fecha = () => new Date();

// Funciones Flecha con Parámetros

const sumarTres = (x) => x + 3;
console.log(sumarTres(4));

const concatenar = (arr1, arr2) => arr1.concat(arr2);

console.log(concatenar([1, 2], [3, 4, 5]));

const sumarita = (a, b) => {
  let num = 6;
  return a + b + num;
};

console.log(sumarita(1, 1));

// VALORES POR DEFECTO PARA PARAMETROS

const incrementar = (num, valor = 1) => num + valor;

console.log(incrementar(5, 3));

// Operador rest

// ...args agrega arreglos []
function miFuncion(...args) {
  console.log(args.length);
}

miFuncion([1, 2, 3, 4], [4, 5, 6]);

const sumarBien = (x, y, z) => {
  const args = [x, y, z];
  return args.reduce((a, b) => a + b, 0);
}

const sumarMuyBien = (...args) => {
  return args.reduce((a, b) => a + b, 0);
};

// Operador spread

const NUMEROS = [1, 2, 3];

function sumita(x, y, z) {
  console.log(x);
  console.log(y);
  console.log(z)
  return x + y + z;
}

console.log(sumita(...NUMEROS));

// SINTAXIS DE DESESTRUCTURACIÓN
