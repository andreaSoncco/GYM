const http = require('http');

// Aplico el método para crear un servidor
const servidor = http.createServer((req, res) => {
    console.log('Solicitud nueva');
    res.end('Hola, mundo');

});

/* Cuando creamos el servidor lo primero que hacemos es definir una constante
para guardar nuestro servidor, luego nos referimos a la variable que contiene
al módulo http, luego vemos el método para crear un servidor y dentro de los
parentesis de la función flecha vemos dos parámetros, el parámetro req contiene
la solicitud HTTP Y res representa la respuesta HTTP que se va a enviar al cliente
que realizo la solicitud y dentro de la función flecha vamos a realizar el proceso
que necesitemos y cuando llamamos al método end de la respuesta vamos a enviar
esa respuesta al cliente que en este caso es el navegador.

Cuando creamos nuestro servidor y lo iniciamos vamos a lograr que ese servidor
escuche a las solicitudes del cliente y para eso necesitamos un puerto, el puerto
es escencial pq es como la conexión para que ese servidor escuche un nosotros
podamos solicitar información

Puerto: Ubicación virtual del sistema operativo en la cual se puede acceder a una
aplicación o a un proceso específico que se esté ejecutando en ese puerto.

*/

servidor.listen(3000, () => {             //3000 valor del puerto
    console.log('El servidor esta escuchando...');
});