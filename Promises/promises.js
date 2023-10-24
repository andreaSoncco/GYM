/* FUNCIONES ASINCRONAS: Cuando demoran en recibir la información
PROMESAS: Es un tipo de objeto
*/

const datos = [{
  id: 1,
  title: 'Iron Man',
  year: 2008
}, {
  id: 2,
  title:'Spiderman: Homecoming',
  year: 2017
}, {
  id: 3,
  title: 'Avengers: Endgame',
  year: 2019
}];

// Descomentar la linea 20 y comentar el arreglo datos en caso de querer probar el error con catch()
// const datos = [];

// Función Sincrona Normal
/*
const getDatos = () => {
  return datos;
}
*/


// Funcion Asincrona que devuelve una Promesa
const getDatos = () => {
  return new Promise((resolve, reject) => {
    if(datos.length === 0) {
      reject(new Error('No existen datos'))
    }
    setTimeout(() => {
    resolve(datos);
    }, 1500);
  })  
}

// Funcion Asincrona con .then (Promise) que llama a la función para ejecutarla
// getDatos().then((datos) => console.log(datos));

// Función Asincrona con Async ...Await que llama a la función para ejecutarla
async function fetchingData () {
  const datosFetched = await getDatos();
  console.log(datosFetched);
}

fetchingData();

// Función Asincrona con Async ...Await con try y catch para manejar el error que llama a la función para ejecutarla
async function fetchingDataWithTryCatch () {
  try {
    const datosObtenidos = await getDatos();
    console.log(datosObtenidos);
  } catch (err) {
    console.log(err.message);
  }
}

fetchingDataWithTryCatch();

