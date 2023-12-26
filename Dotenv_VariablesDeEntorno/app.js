const express = require('express');

const app = express();

require('dotenv').config({path: './.env'})

const PORT = process.env.PORT || 3000;

app.listen(PORT, (req, res) => {
    console.log(`SERVER RUNNING IN PORT ${PORT}`);
})

/*  Para ver las variables de entorno de Windows entrar al terminat cmd y
    ejecutat:
set

    Para guardar la variable PORT como variable de entorno poner:
set PORT=7500
    Para dejarlo nulo como antes poner el siguiente comando:
set PORT=

*/