/* 1. frontAgain
Dada un string, devuelve true si los 2 primeros caracteres también aparecen al final, como en el caso de "edited".

Ejemplo

  frontAgain('edited') → true
  frontAgain('edit') → false
  frontAgain('ed') → true
*/

function frontAgain(str){
    // obtener los dos primeros caracteres
    // obtener los dos últimos caracteres
    // si ambos son iguales retornar true
    let primeros = str.substr(0, 2);
    let últimos = str.substr(str.length - 2, 2);
    
    if (primeros == últimos && str.length > 1) {
      return true;
    } else {
      return false;
    } 
}

/* 2. maxMod5
Dados dos valores int, devuelve el que sea mayor. Sin embargo, si los dos valores tienen el mismo residuo cuando se dividen por 5, entonces se devuelve el valor más pequeño. Sin embargo, en todos los casos, si los dos valores son iguales, devuelve 0. Nota: el operador % "mod" calcula el residuo, por ejemplo, 7 % 5 es 2.

Ejemplo:

    maxMod5(2, 3) → 3
    maxMod5(6, 2) → 6
    maxMod5(3, 2) → 3
*/

function maxMod5(a, b){
    // Si ambos valores son iguales retorna 0
    // Si los dos valores tienen el mismo residuo retornar el valor más pequeño
    // Si un valor es mayor retornar ese valor
    if (a == b) {
      return 0;
    } else if ((a % 5 == b % 5) && (a < b)) {
      return a;
    } else if ((a % 5 == b % 5) && (b < a)) {
      return b;
    } else if (a > b) {
      return a;
    } else if (b > a) {
      return b;
    }
}

/* 3. Who's online?
Tienes una app de chat, ¿cómo saber quién está online?

Quieres mostrar a tus usuarios quiénes de tus amigas o amigos están online y disponibles para chatear.

Dado un arreglo de objetos que contiene nombre de usuario, estado y tiempo desde la ultima actividad (en minutos), crea una función para determinar quién está online, offline y away.

Si alguien está online pero su lastActivity fue hace más de 10 minutos, entonces es considerado away.

Los datos de entrada tienen la siguiente estructura:

[{
  username: 'David',
  status: 'online',
  lastActivity: 10
}, {
  username: 'Lucy',
  status: 'offline',
  lastActivity: 22
}, {
  username: 'Bob',
  status: 'online',
  lastActivity: 104
}]
La salida correspondiente a los datos de entrada sería la siguiente:

{
  online: ['David'],
  offline: ['Lucy'],
  away: ['Bob']
}
Si, por ejemplo, ningún usuario está online, la salida debería lucir así:

{
  offline: ['Lucy'],
  away: ['Bob']
}
username será siempre un string; status será siempre uno de los siguientes valores: online o offline; lastActivity será siempre un numero >= 0.

Finalmente, si no tienes ningún amigo o amiga un tu app de chat, el input será un arreglo vacío []. Si este es el caso, debes retornar un objeto vacío {}.
*/

function whosOnline(friends) {
    const result = {
      online: [],
      offline: [],
      away: []
    };
  
    for (const friend of friends) {
      if (friend.status === 'online') {
        if (friend.lastActivity > 10) {
          result.away.push(friend.username);
        } else {
          result.online.push(friend.username);
        }
      } else {
        result.offline.push(friend.username);
      }
    }
  
    if (result.online.length === 0) {
      delete result.online;
    }
  
    if (result.offline.length === 0) {
      delete result.offline;
    }
  
    if (result.away.length === 0) {
      delete result.away;
    }
  
    return result;
}

