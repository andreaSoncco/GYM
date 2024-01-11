/*
REACT
Biblioteca o librería de JavaScript de código abierto (open source)
diseñada para crear interfaces de usuario.

Biblioteca o Librería: Conjunto de implementaciones o subprogramas que
podemos usar en nuestro código.

Ventajas de React:
- Fácil de aprender y usar
- Componentes reutilizables
- Crear aplicaciones dinámicas
- Buen desempeño

Conceptos Importantes o Básicos:
- Componente
- props
- Estado
- Hooks
- Event Listener

1. Componente: Parte de la interfaz de usuario que es independiente y
reusable.

Los componentes se pueden dividir en cuento a su estructura principal como:

A. Componentes Funcionales: Es más conciso, más facil de escribir, de leer, de
implementar y en las versiones más recientes de React son muy poderosos.
Es una función de JavaScript/ES6 que retorna un elemento de React(JSX).
*/
function Saludo(props) {
    return <h1>¡Hola, {props.nombre}!</h1>;
}

/* Características de los Componentes Funcionales:
- Debe retornar un elemento de React (JSX)
- Debe comenzar con una letra mayuscula.
- Puede recibir valores si es necesario.

2. Props o Propiedades: Argumentos que puede recibir un componente de React.
En el ejemplo props es basicamente como un objeto y vamos a usar la
notación de punto para acceder a esas propiedades. Los props solo pueden
ser enviados de "padre a hijo".
  
B. Componentes de Clase: Se usaban en versiones anteriores de React, todavia puedes
usar los componentes de clase, los vas a ver y usar muy frecuentemente,
estan reflejados también en la documentación oficial de React.
Es una clase de ES6 (JavaScript moderno) que retorna un elemento JSX.
*/
class Saludo extends React.Component {
    render() {
        return <h1>¡Hola, {this.props.nombre}!</h1>;
    }
}

/* Características de los Componentes de Clase: 
- Debe extender React.Component.
- Debe tener un método render() para retornar un elemento de JSX.
- Puede recibir valores si es necesario.

3. Estado:
Representación en JavaScript del conjunto de propiedades de un componente
y sus valores actuales. En este concepto, "propiedades" no se refiere a
los props, sino a información que se representa sobre el componente.

¿Por qué componentes de clase? Anteriormente, usábamos componentes de
clase para poder trabajar con "estados" de nuestros componentes. En
versiones anteriores de React (anteriores a 16.8), no podíamos hacerlo
en componentes funcionales.

Luego vinieron los ¡Hooks! o anzuelos o ganchos, nos permiten
agregarle un cierto estado a nuestros componentes funcionales,
así que le estan agregando esa funcionalidad que le faltaba a
los componentes funcionales.

4. Hooks: Función especial que permite trabajar con estados en
componentes funcionales y otros aspectos de React. Se puede
hacer todo esto con un hook sin escribir un componente de clase.
Esto nos permite escribir código mucho más conciso y fácil de
entender.

5. Event Listener: Función en JavaScript que es ejecutada cuando 
ocurre un evento específico. También podemos referirnos a esta
función como "EventHandler".

INTRODUCCIÓN A JSX

JSX = JavaScript XML
JSX es una extensión de React para la sintaxis de JavScript.
Nos permite describir en JavaScript cómo se verán los
componentes usando una estructura similar a HTML (su estructura
no necesariamente su estilo).

Ventajas de JSX
- Estructura más fácil de visualizar.
- Errores y advertencias más útiles.

Nota: JSX es opcional
*/
const elementoUno = <h1>¡Hola, Mundo!</h1>;

/* 
Elementos en JSX:

Elemento: Unidades más pequeñas en React. Definen lo que se ve
en la pantalla.
Los componentes en React están "hechos" de elementos.
Con JSX, puedes crear y usar cualquier elemento HTML.

React DOM:
Paquete que facilita la interacción y actualización del DOM en
aplicaciones React.

DOM Document Object Model: Modelo de Objeto del Documento
Representación en el navegador de todos los elementos que
conforman una página o aplicación web.

¿Cómo reconocer a los elementos de los componentes?
En base a sus Etiquetas
En JSX, los elementos HTML se representan con etiquetas en
letras minúsculas. En cambio, los componentes definidos por el
usuario comienzan con una letra mayúscula.

Atributos
Puedes agregar atributos a tus elementos en JSX para especificar
ciertas características. Pero ...algunos se escriben de forma
distinta si los comparamos con HTML.

¿Porque tenemos que cambiar el nombre a algunos atributos en
JSX como en el caso de class por className?
class es una palabra reservada en JavaScript que podemos usar
para crear una clase. Por eso necesitamos escribir este atributo
de forma distinta en JSX.

Lista de atributos cambiados
    Javascript      JSX
class            className
for              htmlFor

El atributo style acepta un objeto JavaScript con propiedades
CSS escritas en camelCase.

    CSS                   JSX
background-image    backgroundImage
background-color    backgroundColor
font-family         fontFamily */

<div style={{color: 'yellow'}}>¡Hola, Mundo!</div>

/*  {} Llaves Externas: sirven para insertar JavaScript
    {} Llaves Internas: sirven para crear objeto

Atributos del DOM reconocidos por React

ESTRUCTURA (DE UN COMPONENTE CON JSX)
Al igual que en HTML, los elementos pueden ser anidados en JSX
para formar estructuras más complejas.

Una vez que se defina la estructura del componente en el
archivo, es importante también saber como renderizarlo, como
mostrarlo en la aplicación web.

Nosotros vamos a tener en la estructura inicial que vamos a
crear para la aplicación de React, un archivo HTML que va a
tener tener un div, este div va a tener el id root (raiz)
porque este div va a actuar como la raiz de la aplicación de
React, va a ser el contenedor principal de todos los otros
elementos y componentes que vamos a crear.

ReactDOM.render () nos va a permitir mostrar un elemento dentro
de otro elemento como en el ejemplo siguiente: */

import ReactDOM from 'react-dom';
const elemento = <h1>¡Hola, Mundo!</h1>;

ReactDOM.render(
    elemento,
    document.getElementById('root')
);

/*
Self-Closing Tags:
Existen Elementos que no necesitan etiquetas de cierre en JSX.
Una self closing tag es un elemento que solo posee una etiqueta
de apertura ya que no contiene texto u otros elementos.
*/
<img src="logo.png" alt="Mi imagen" />

/*
JAVASCRIPT EN JSX
Cuando veas esas llaves {} debes inmediatamente pensar que allí
tenemos código de JavaScript y esta capacidad de JSX es la que
nos va permitir crear aplicaciones de React dinámicas con código
muy conciso que se van a ajustar a los datos y a los valores que
necesitamos mostrar

Ejemplo: Queremos incluir el valor interesante en el elemento p,
solo tenemos que rodear con llaves el nombre de la variable y le
estamos diciendo a React que esta parte del componente se debe
interpretar como un código de JavaScript, así que el valor de la
variable se reemplazará.
*/
let adjetivo = "Interesante";
<p>React es {adjetivo}</p>;

/*
Puedes escribir cualquier expresión válida de JavaScript entre
las llaves y su valor será reemplazado.
*/

<p>El resultado es: {5 * 6}</p>;

let nombre = "Gino";
<p>Su nombre es: {nombre.toUpperCase()}</p>;

/*
PROYECTOS:

I. CREAR UNA APLICACIÓN DE REACT
*/

