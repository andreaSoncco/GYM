/* INTRODUCCIÓN A EXPRESS

El framework web más popular de Node.js
Nos ayuda a desarrollar aplicaciones de Node.js

Características:
- Routing
- Enfocado en alto rendimiento
- Nos permite desarrollar aplicaciones de Node.js más rápidamente con
  código más conciso


Conceptos Básicos: Express

CRUD
Operaciones básicas que se pueden realizar con la información almacenada.
Son las operaciones que podemos realizar con una base de datos
- Create (crear)
- Read (leer)
- Update (actualizar)
- Delete (eliminar)

Esas cuatro operaciones tienen sus equivalentes en métodos o verbos HTTP

Create  POST
Read    GET
Update  PUT
Delete  DELETE

API Application Programming Interface (Interfaz de programación de
aplicaciones).

API: Tipo de interfaz de software que permite que dos o más programas se
cominiquen entre sí. Permite que un software ofrezca un servicio a otro
software. No es usada directamente por el usuario sino por el programador
que usa la API para implementar su programa.

Básicamente la API es como esa conexión entre el cliente y el servidor,
entre el proceso que se está ejecutando en el cliente, en el navegador y
el servidor, le da esa conexión que permite que el cliente realice
solicitudes al servidor.

Normalmente cuando enviamos o recibimos información a través de una API, lo
hacemos en el formato JSON.

REST
Estilo de arquitectura de software para sistemas hipermedia distribuidos
como la World Wide Web (internet).

RESTful API: Es una API basada en REST

REST Representational State Transfer 

PARÁMETROS DE RUTA

PARÁMETROS QUERY

ROUTERS EN EXPRESS

ROUTERS EN DISTINTOS ARCHIVOS

POST, PUT, PACH y DELETE

routerProgramacion.use(express.json()); 

Esto nos va a permitir procesar el cuerpo de esa solicitud en formato json
y poder trabajar con ese cuerpo de la solicitud en nuestro código con la 
propiedad body, esto lo vamos a realizar antes de cualquiera de estas rutas
y para cualquier tipo de método http, esa es la importancia del Middleware.

Las funciones middleware se ejecutan:
- Después de recibir una solicitud
- Antes de enviar una respuesta

Tienen acceso al objeto de la solicitud, al objeto de la respuesta y a
next(), una función que se llama para ejecutar el próximo middleware.

Middleware: es como el intermediario entra lo que se ejecuta la función,
se recibe la solicitud y se responde.

En la realidad, realizarias este tipo de solicitudes desde el cliente, por
ejemplo si estas realizando una solicitud desde una aplicación creada con
React usarias la función fetch() para realizar estas solicitudes







*/