/* MODULOS BUILT-IN

http
https
fs(file system)
os(operating system)
path

Módulo console: Módulo built-in que implementa funcionalidad similar a la
consola de un navegador web.

métodos útiles del Módulo Console:
*/
console.log();
console.warn();
console.error();
console.assert();
console.table();

console.warn('Ocurrio un error...');
console.error('¡Ocurrio un error!');

console.error(new Error('¡Ocurrio un error!'));

/* Módulo Process:
    Provee información sobre el proceso de Node.js que se está ejecutando.
    También puede tener cierto control sobre el proceso

*/
console.log(process);
console.log(process.env);

console.log(process.argv[2]);
console.log(process.argv[3]);

// [node, app.js, 6, 7]
//    0    1      2  3

for (let i = 2; i < process.argv.length; i++) {
    console.log(process.argv[i]);
}

console.log(process.memoryUsage());

/* Módulo OS (Operating System)
    Nos va a permitir obtener información sobre el sistema operativo en el cual
    se ejecuta nuestra aplicación

    Nota: Vamos a tener que importarlo
*/

const os = require('os');

// Nos devuelve el tipo de sistema operativo como Windows
console.log(os.type());

// Directorio principal
console.log(os.homedir());

// Cuanto tiempo ha estado ejecutandose el sistema operativo
console.log(os.uptime());

// Información sobre el usuario
console.log(os.userInfo());

/* Módulo Timers: funciones globales
    Timer = temporizador
    Contiene funciones que ejecutan código luego de un cierto periodo de
    tiempo. Se puede usar con node para simular operaciones asincronas
    
    1 segundo = 1000 milisegundos

    Funciones útiles:
    setTimeOut() :función para ejecutar código luego de un número especifico
                  de milisegundos
    
    setTimeout(funcion, retraso, argumento);
    setTimeout(funcion, retraso, argumento1, argumento2);
*/

function mostrarTema(tema) {
    console.log(`Estoy aprendiendo ${tema}`);
}

setTimeout(mostrarTema, 5000, 'Node.js');


function sumar(a, b) {
    console.log(a + b);
};

setTimeout(sumar, 2000, 5, 6);

/*
    setImmediate(): Función para ejecutar código asíncrono en la próxima
    iteración del ciclo de eventos (lo más pronto posible)
    setInterval()

    setImmediate(function, argumento1, argumento2)
    Se ejecuta después del código síncrono

    PASAR UNA FUNCIÓN A OTRA FUNCION: Higher-Order Programming
*/

function mostrarTema(tema) {
    console.log(`Estoy aprendiendo ${tema}`);
}

console.log('Antes de setImmediate()');

setImmediate(mostrarTema, 'Node.js');

console.log('Despues de setImmediate()');

/* 
    setInterval(): Para ejecutar código un número infinito de
    veces con un retraso específico de milisegundos.

    setInterval(funcion, intervalo, arg1, arg2);
*/

function sumar(a, b) {
    console.log(a + b);
}

setInterval(sumar, 1500, 3, 4);

/* Módulo fs
    Módulo que contiene funcionalidad muy útil para trabajar con
    el sistema de archivos

    Operaciones útiles sobre un archivo:
    - Leer
    - Modificar
    - Copiar
    - Eliminar
    - Cambiar nombre

    Todos los métodos de este módulo son asíncronos por defecto,
    estos va a ser asíncronos porque no van a bloquear la ejecución
    del programa. Pero puedes escoger versiones síncronas de estos
    métodos agregando Sync (synchronous) sus nombres.Ejem:

    - fs.rename()
    - fs.renameSync()    --> para convertirlo síncrono

*/

const fs = require('fs');

// Leer un archivo
fs.readFile('index.html', 'utf-8', (err, contenido) => { //para probar error inde.html
    if (err) {
        console.log(err);
    } else {
        console.log(contenido);
    }
    console.log('Mensaje...');

});

// Renombrar un archivo
fs.rename('index.html', 'main.html', (err) => {
    if (err) {
        throw err;
    }
    console.log('nombre cambiado exitosamente');
});

// Agregar un caracter al final de archivo
fs.appendFile('index.html', '<p>Hola</p>', (err) => {
    if (err) {
        throw err;
    }
    console.log('Archivo actualizado.');
})

// Reemplazar todo el contenido del archivo
fs.writeFile('index.html', 'Contenido  nuevo', (err) => {
    if (err) {
        throw err;
    }
    console.log('Contenido reemplazado exitosamente');
});

// Eliminar un archivo
fs.unlink('index.html', (err) => {
    if (err) {
        throw err;
    }
    console.log('Archivo eliminado.');
});

// Eliminar archivos o carpetas administandro permisos
const fs = require('fs-extra');

fs.remove('C:\\Users\\Huawei\\Documents\\GYM\\Node.js y Express\\mi-paquete', err => {
  if (err) {
    console.error(err);
  } else {
    console.log('Carpeta eliminada con éxito.');
  }
});

/* El código asíncrono se ejecuta en diferentes tiempos
    hay que ver como funciona el ciclo de eventos de Node
    - Nombre cambiado
    - Archivo eliminado
    - Archivo actualizado
    - contenido reemplazado exitosamente
    - Mostar contenido: contenido nuevo
*/

/* INTRODUCCIÓN A NPM
    NPM y Node.js: Es el archivo de software más grande del
    mundo que contiene paquetes que puedes instalar y usar
    con Node.js.

    También es una herramienta para la línea de comandos

    Paquete: Archivo o directorio descrito por un archivo
    package.json. Puede ser publicado en el registro de npm.

    Módulo: Cualquier archivo o directorio en el directorio
    node_modules que puede ser importado con require().
    Nota: Para poder incluir un módulo con require(), debe
    ser un archivo javascrit. Una carpeta con un package.json
    que contiene una propiedad "main" 

    node_modules es una carpeta que se va a crear automáticamente
    cuando trabajemos con npm, de esos modulos solo los que tienen
    un archivo package.json son paquetes.

    Dependencia: Paquete que otro paquete necesita para funcionar
    correctamente.

    Paquete A               ==>               Paquete B
    Dependencia                             "depende de A"

    CREAR UN PAQUETE CON NPM

    INTRODUCCIÓN A JSON

    JSON
    JavaScript Object Notation
    Formato de texto usado para almacenar y transportar información
    JSON está basado en la notación de objetos de JavaScript pero es
    solo texto.

    Nos permite almacenar objetos de Javascript como texto. Es
    independiente del lenguaje de programación con el cual estás
    trabajando.

    Características:
    Los datos se representan como pares clave-valor (propiedades).
    Están rodeados por dos llaves principales {}, también pude estar rodeado
    de corchetes [] si es un (array) JSON.
    Los pares deben estar por una coma ,

    Podemos convertir cadenas de caracteres en formato JSON a un objeto JavaScript
    JSON.parse()

    Podemos tomar un objeto de JavaScript y convertirlo a JSON
    JSON.stringify()

    INSTALAR Y DESISTALAR PAQUETES CON NPM
    


*/