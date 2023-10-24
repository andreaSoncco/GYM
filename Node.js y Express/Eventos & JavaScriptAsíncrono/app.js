/* Eventos en Node.js
Un evento es una acción que se realiza en la aplicación. Node esta basado
en eventos asíncronos.

En el modelo cliente-servidor vamos a tener un cliente que es el navegador web,
el browser (Google Chrome por ejemplo) y vamos a tener un servidor, el servidor
es un programa que esta ejecutándose en una computadora que está allí como en pausa,
escuchando si hay algún evento, si hay algún request , alguna solicitud del cliente,
cuando esto ocurre, el servidor reacciona ya sea cuando el navegador le pide información
o cuando se necesita ejecutar algún proceso, a eso exactamente es a lo que nos referimos
cuando hablamos de un evento.

Un evento, una acción que desencadena un proceso. También podemos definir eventos que
se desencadenen y ejecuten internamente en el servidor.

Emitters (emisores):
Objetos que emiten eventos nombrados y llaman a funciones específicas cuando ocurren 
Los emisores son instacias de la clase EventEmitter. Esos objetos tienen un método -on()
para asociar una función al evento, vamos a llamar ese método cuando queramos asociar
que es lo que va a ocurrir cuando ocurra un cierto evento. Esa función se ejecuta cuando
ocurre el evento y esa función tiene un nombre especifico “Event Handler” 
*/

const EventEmitter = require('events');

// console.log(EventEmitter);

/* Estoy creando una nueva instacia de esa clase, un nuevo objeto que no
va a permitir emitir eventos, ese objeto lo vamos a llamar emisorProductos
*/

const emisorProductos = new EventEmitter();

/*Función que maneja eventos, eventHandler
Cuando ocurra una compra se debe ejecutar la siguiente función
Se enlaza el evento con la función que la ejecutará
*/
emisorProductos.on('compra', (total, numProductos) => {
    console.log(`Se realizo una compra por ${total}.`);
    console.log(`Número de productos: ${numProductos}.`);
});

// Se emite el evento
emisorProductos.emit('compra', 500, 5);

/* 
Módulo Events
Para poder crear y definir nuestros propios eventos, nos permite: 
-	Definir
-	Emitir
-	Escuchar
Los eventos para saber cuándo ocurran
Promesas en JavaScript
Objeto que representa el eventual resultado (o error) de una operación asíncrona.
Es un objeto de JavaScript, ese objeto se asocia a una callback function,
una función que se ejecuta cuando se completa el proceso asíncrono para
procesar el resultado.

Callback function: función de respuesta, función que se va a llamar cuando
se complete el proceso. Función que se pasa a otra función como argumento y
luego se ejecuta dentro de la función externa.

Promesa -> Pendiente -> Cumplida/ Rechazada (fulfilled/rejected)

Dos funciones

f                                           h

Podemos pasar f como argumento a la función h y luego llamar a f dentro de h
cuando se complete el proceso. Las promesas tienen un método .then(), con el
cual podemos decidir qué ocurre cuando se completa la promesa (éxito o error).

PRÁCTICA DE PROMESAS
*/

const promesaCumplida = false;

const miPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        if(promesaCumplida) {
            resolve('¡Promesa cumplida!');
        } else {
            reject('Promesa rechazada...');
        }
    }, 1000);
});

// miPromesa.then((valor) => {
//     console.log(valor);
// });

const manejarPromesaCumplida = (valor) => {
    console.log(valor)
};

const manejarPromesaRechazada = (razonRechazo) => {
    console.log(razonRechazo);
};

miPromesa.then(manejarPromesaCumplida, manejarPromesaRechazada);

const estatusPedido = () => {
    return Math.random() < 0.8;
}

const miPedidoDePizza = new Promise ((resolve, reject) => {
    setTimeout(() => {
        if (estatusPedido()) {
            resolve('¡Pedido exitoso! Su pizza esta en camino.')
        } else {
            reject('Ocurrio un error. Por favor intente nuevamente.')
        }
    }, 1000);
});

// Ahora definimos las funciones que van a manejar la promesa

const manejarPedido = (mensajeDeConfirmación) => {
    console.log(mensajeDeConfirmación);
}

const rechazarPedido = (mensajeDeError) => {
    console.log(mensajeDeError);
}

miPedidoDePizza.then(manejarPedido, rechazarPedido);

miPedidoDePizza
    .then((mensajeDeConfirmación) => {
        console.log(mensajeDeConfirmación);
    })
    .then(null, (mensajeDeError) => {
        console.log(mensajeDeError);
    })

/* .catch()
Método de promesa que solo se ejecuta si la promesa
es rechazada.
*/

miPedidoDePizza
    .then((mensajeDeConfirmación) => {
        console.log(mensajeDeConfirmación);
    })
    .catch((mensajeDeError) => {
        console.log(mensajeDeError);
    })

/* ¿Porque podemos escribir then y catch de esa forma, con punto .?
Eso se llama Method Chaining, encadenamiento de metodos, es una forma
de escribir esos métodos, como en una secuencia estamos formando una cadena
de llamadas a metodos y esto no los permite hacer then porque retorna una
promesa.
*/

// const manejarPedido = (mensajeDeConfirmación) => {
//     console.log(mensajeDeConfirmación);
// }

// const rechazarPedido = (mensajeDeError) => {
//     console.log(mensajeDeError);
// }

miPedidoDePizza
    .then(manejarPedido)
    .catch(rechazarPedido);

/* Encadenar promesas y async await
    Vamos a ver una sintaxis que nos va a ayudar a escribir código más
    conciso, que se llama async await, en realidad trabajan con esas
    promesas que creamos pero ayudarnos a escribir código más conciso
*/

// Definir la función

function ordenarProducto(producto) {
    return new Promise((resolve, reject) => {
        console.log(`Ordenado: ${producto} de freeCodeCamp`);
        setTimeout(() => {
            if (producto === 'taza') {
                resolve('Ordenando una taza con el logo de freeCodeCamp...');
            } else {
                reject('Este producto no esta disponible actualente.')
            }
        }, 4000)
    });
}

function procesarPedido(respuesta) {
    return new Promise((resolve) => {
        console.log('Procesando respuesta...');
        console.log(`La respuesta fue: "${respuesta}"`);
        setTimeout(() => {
            resolve('Gracias por tu compra. Disfruta tu producto de freeCodeCamp');

        }, 4000);
    })
}

/* ¿Como podemos asignar un orden especifico a las funciones ya que ordenar
    producto viene antes que procesar pedido? Lo podemos hacer encadenanco
    las promesas

    Chaining Promises: Encadenar promesas
    Una vez que termina un proceso asíncrono, empieza otro
*/

ordenarProducto('taza')
    .then(respuesta => {
        console.log('Respuesta recibida');
        console.log(respuesta);
        return procesarPedido(respuesta);
    })
    .then(respuestaProcesada => {
        console.log(respuestaProcesada);
    })
    .catch(error => {
        console.log(error);
    })

// async await: vamos a poder escribir código asícrono como si fuera sincrono
async function realizarPedido(producto) {
    try {
        const respuesta = await ordenarProducto(producto);
        console.log('Respuesta recibida');
        console.log(respuesta);
        const respuestaProcesada = await procesarPedido(respuesta);
        console.log(respuestaProcesada);
    } catch (error) {
        console.log(error);
    }
}

realizarPedido('lapiz');