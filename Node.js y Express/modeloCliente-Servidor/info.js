/* MODELO CLIENTE - SERVIDOR

Modelo que usamos para acceder a internet y obtener recursos e información.
Es tan importante que sin este modelo no existiria internet y no estaria
viendo el video.

Tenemos un cliente que envia solicitudes a un servidor

Cliente: El navegador 

Servidor: Programa que se ejecuta en un servidor físico para ofrecer un
servicio al cliente. Envía información. El servidor conoce el formaro
esperado del mensaje que envía el cliente.

El cliente conoce el formato esperado del mensaje que recibe del servidor.

El protocolo HTTP define el formato de los mensajes.

Protocolo: Conjunto de reglas que permiten transmitir información entre
dispositivos de una red.

HTTP
Hipertext Transfer Protocol = Protocolo de transferencia de hipertexto

Solicitudes HTTP

Para realizar esa comunicación entre cliente y servidor debe haber lo que
denominamos como solicitudes y también respuestas. Cuando un cliente le pide
información a un servidor o desencadena un evento en el servidor para
realizar algún proceso esta realizando un Request (solicitud HTTP)

Una solicitud HTTP (request) tiene todos estos elementos:
- Métodos HTTP: básicamente dicen que acción se debe tomar en el servidor,
    si se estan pidiendo recursos como imagenes o archivos, si se quiere
    modificar algún recurso en una base de datos, si se quiere agregar un
    recurso nuevo en una base de datos y así sucesivamente.
- Camino (path): le dice al servidor donde esta ese recurso que se quiere
    modificar.
- Versión de HTTP
- Cabeceras (headers): Proveen mayor información para el servidor
- Cuerpo (body): Si se necesita enviar alguna información al servidor, por
    ejemplo si queremos crear un usuario nuevo en la base de datos y se
    enviaria en el cuerpo de la solicitud HTTP. Normalmente esa información
    se va a transmitir en formato JSON. El cuerpo no se incluye en todas
    las solicitudes. Solo en aquellas que requieran enviar información. Por
    ejemplo: POST, PUT.

Estos elementos le dan la información que el servidor necesita para saber
que es lo que se esta solicitando.

El cliente va a enviar esa solicitud en un formato especifico y nosotros en 
el servidor con Node vamos a poder extraer esa información de la solicitud y
determinar que es lo que tenemos que hacer, como se tiene que procesar esa
solicitud para retornar la información adecuada.

HTTPS le agrega una capa extra de seguridad

Métodos

Un método HTTP es un verbo o sustantivo que indica la intención de la
solicitud. Aunque también pueden ser sustantivos, frecuentemente se les
denomina como "Verbol HTTP".

¿Qué quiere el navegador? Quiere un recurso, quiere actualizar información,
quiere agregar información nueva?

Entre los más comunes, más usados tenemos GET, POST, PUT, DELETE, Otros...

GET: Nos va a permitir obtener un recurso desde el servidor. Get, verbo usado
para solicitar un recurso espefífico. Por ejemplo, un archivo HTML, CSS o una
imagen.

POST: Verbo para crear un recurso específico. Por ejemplo, agregar un usuario
nuevo a una base de datos o para realizar una acción que cree un recurso
específico con el servidor.

PUT: Verbo para modificar un recurso específico. Por ejemplo, hacer un cambio
en la base de datos.

DELETE: Verbo para eliminar un recurso específico. Por ejemplo, eliminar un
usuario de una base de datos.

RESPUESTAS HTTP

Una vez que el cliente realiza la solicitud, el servidor la procesa y le envia
algo que denominamos Response

La Respuesta HTTP (response) tiene una estructura específica, unos elementos
específicos:

- Código de estado: Número que indica si se ha completado exitosamente la
    solicitud HTTP. Que le dice al cliente si esa solicitud fue exitosa o
    hubo algún error o que fue lo que ocurrió.
- Texto de estado: Para describir ese código con más detalle
- Versión de HTTP
- Cabeceras (headers): Son opcionales y proveen información adicional
    sobre la respuesta. Información adicional que se incluye en la respuesta
- Cuerpo (body): Cotiene la información que debe ser enviada desde el
    servidor hacia el cliente. Incluye un cuerpo si necesita retornar un
    recurso o algún contenido que necesita el cliente luego de su solicitud.

LOS CÓDIGOS DE ESTADO HTTP

Se distribuyen o se categorizan de acuerdo a su primer dígito de izquierda
a derecha:

- Respuestas informativas (100-199)
- Respuestas satisfactorias (200-299)
- Redirecciones (300-399)
- Errores de los clientes (400-499)
- Errores de los servidores (500-599)

Con Node.js y Express podemos especificar el código de estado de la respuesta
HTTP  en nuestro servidor

TU PRIMER SERVIDOR CON NODE.JS

Módulo HTTP
Este módulo le permite a Node.js transmitir información con el protocolo
HTTP.

Crear un servidor con http
*/