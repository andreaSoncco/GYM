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

Conceptos Básicos:
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

Props o Propiedades: Argumentos que puede recibir un componente de React.
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

2. Estado:
Representación en JavaScript del conjunto de propiedades de un componente
y sus valores actuales. En este concepto, "propiedades" no se refiere a
los props, sino a información que se representa sobre el componente.

¿Por qué componentes de clase? Anteriormente, usábamos componentes de
clase para poder trabajar con "estados" de nuestros componentes. En
versiones anteriores de React (anteriores a 16.8), no podíamos hacerlo
en componentes funcionales.

Luego vinieron los ¡Hooks! o anzuelos o ganchos, nos permiten agregarle
un cierto estado a nuestros componentes funcionales 21.27min



*/
