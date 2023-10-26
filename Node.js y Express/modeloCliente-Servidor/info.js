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

ESTRUCTURA DE UNA URL

URL: Dirección de un recurso en la web.
URL Uniform Resource Locator = Localizador Uniforme de Recursos
Nos permite indicicar cual es la página web que queremos acceder
Toda esa secuencia de caracteres es lo que le permite al navegador
saber donde esta ubicada la página que necesitamos obtener y a través
de muchos pasos complejos se llega a un servidor donde esta alojada
esa página y luego el servidor nos retorna los recursos que solicitamos
Todo comienza con la URL, es el punto de partida para poder solicitar
la información al servidor.

https://www.freecodecamp.org/espanol/

https => Protocolo, es el conjunto de reglas que vamos a usar en la
         comunicación para acceder a este recurso específico, la s
         le agrega una capa de seguridad extra.
        
www. => Subdominio, información adicional agregada al inicio del
        dominio de una página web. Permite a los sitios web organizar
        y separar la información para distintos propósitos. Por ejemplo
        si es un blog podemos poner blog. y si queremos crear un subdominio
        en otro idioma podemos usar español.freecodecamp.org y eso nos crearia
        un subdominio

freecodecamp => Dominio, es literalmente a lo que normalmente nos referimos
                como el nombre de la página, en este caso sería freecodecamp.
                El Dominio es una referencia única a un sitio web en internet.
                Cuando adquirimos un dominio lo estamos comprando y somos los
                únicos dueños de ese dominio para poder publicar nuestro sitio
                web en el, no pueden haber dos freecodecamp en internet.

.org => Top-Level Domain: Dominio de nivel superior, otros dominios de nivel superior incluyen:
    - .com
    - .net
    - .int (international)
    - .edu  (sitios educativos)
    - .gov (sitios gubernamentales del Gob. de USA)

https://www.freecodecamp.org/ => Esto representa la raíz de nuestro sitio web
                                 o la página principal de nuestro sitio web.

/español/ => Path: Camino o Ubicación, todo lo que agregemos después de esa
             barra inicial representa un camino dentro de ese servidor o dentro
             de ese conjunto de archivos y de directorios o carpetas, cada vez
             vamos especificando más el recurso al cual queremos acceder. El Path
             representa el archivo o directorio en el servidor web. Puede tener
             parámetros para personalizarlo. Estos parámetros son parte de la URL.

https://www.freecodecamp.org/usuarios/14

14 => Parámetro de ruta, ese número va a representar el identificador único del
      usuario, por ejemplo imaginate que te registraste y se te asigno el número
      único 14, como ese numero depende del usuario al cual queremos acceder y va
      a variar de usuario en usuario lo representamos como un parámetro de ruta,
      nos permite personalizar esa URL para acceder especificamente a los datos
      que queremos, a los datos en este caso del usuario 14

https://www.google.com/search?q=cursos+de+node

?q=cursos+de+node => Parámetros query: También se les conoce como "query string",
                     query significa como una busqueda o consulta en español que no
                     son como tal parte de la URL. Los Parámetros query o parámetros
                     de busqueda, son parámetros usados para obtener contenido 
                     dinámico. Por ejemplo, filtrar una lista de recursos, hacer
                     una busqueda en Google de cursos de node. Lo carácteristico de los
                     parámetros query es que están separados de la parte principal de la
                     URL por un signo de interogación "?"

?q=cursos+de+node 

Cuando vemos este pedazo en espefífico de los parámetros query, vemos que hay como un par,
tenemos una clave "q" y tenemos un valor "cursos+de+node", igual que en JSON igual que en
objetos de JavaScript, la clave es como el nombre que le asignamos a ese parámetro query
y el valor es el valor asociado a ese parámetro

https://.ejemplo.org/search?categoria=programacion => ?categoria=programacion

Es secuencia de parámetros query, podemos obtener toda esa secuncia de parámetors query en
nuestro servidor y procesarlos y filtrar la información que se le pide al cliente, todo esto
lo podemos hacer con Node.js

Esos parámetros query nos van a permitir filtrar la respuesta que le vamos a enviar al cliente
y solo enviarle los recursos que sí quiere incluir en la respuesta o en los recursos que va a
recibir.

¿Qué pasa si queremos incluir varios parámetros query?
?q=cursos+de+node&sourceid=chrome&ie=UTF-8

?q=cursos+de+node&sourceid=chrome&ie=UTF-8

Sí esta permitido, lo único es que tenemos que separarlo con un ampersand "&" y cada uno debe
contener su clave y valor correspondientes unidos por un signo igual. Normalmente usamos parámetros
query para filtrar solicitudes GET (para obtener recursos específicos)

MODULO URL DE NODE.JS

Vamos a crear un objeto URL en app.js

ROUTING EN NODE.JS

Routing: Manejar las solicitudes del cliente en base a ciertos criterios, doscriterios principales
         el método y el camino. Significa crear distintas rutas para ese servidor, para que el servidor
         sepa que es lo que tiene que hacer para manejar una solicitud específica.

Route = Ruta

CRITERIOS

A) El método de la solicitud HTTP: De esta forma el servidor sabe qué tipo de operación se realizará, por
    eso es que el método es importante para determinar una ruta.

    - GET obtener un recurso
    - POST crear un registro nuevo
    - PUT para modificar un registro
    - DELETE eliminar un registro
    - Otros.

B) El path (camino) de la solicitud HTTP. De esta forma el servidor sabe el recurso específico que se usará
    o que se va a modificar o a eliminar

En general una ruta se puede describir como una combinación de estos tres elementos:

Método + Path + Cómo Manejarlo
(método de la solicitud) (como va a manejar esa solicitud)
¿Qué va a hacer? ¿Dondé lo va a hacer? y ¿Cómo lo va a hacer?

¿COMÓ PODER ACTUALIZAR LA APLICACION DE NODE, EL SERVIDOR CUANDO REALIZAMOS CAMBIOS DE FORMA AUTOMÁTICA?

Hasta este momento hemos estado reiniciando el servidor cada vez que hacemos un cambio y eso en realidad no es
práctico al momento de desarrollar, para eso tenemos algo llamado Nodemon

Nodemon para Node.js

Herramienta que reinicia la aplicación de Node.js cuando detecta algún cambio en los archivos
Para instalar nodemon usamos el siguiente comando:

npm istall -g nodemon

Le agremos la g porque lo más recomendable es installar nodemon como un
comando global para que este disponible donde sea que lo necesites, si lo
quieres instalar de forma local para un proyecto específico busca en la
documentación

cuando ejecutes la aplicación, en lugar de node vas a escribir:
nodemon <aplicación>

Se ejecuta en el terminal cmd pq powershell no tienen permisos







*/