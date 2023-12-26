const express = require('express');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hola Mundo');
});

const PORT = 3000;

app.get('/api', validateToken, (req, res) => {
    res.json({
        username: req.user,
        tuits: [
            {
                id: 0,
                text: 'Este es mi primer tuit',
                username: 'vidamrr'
            },
            {
                id: 0,
                text: 'El mejor lenguaje es HTML!',
                username: 'patito_feliz'
            }
        ]
    })
});

app.get('/login', (req, res) => {
    res.send(`<html>
                <head>
                    <title>Login</title>
                </head>
                <body>
                    <form method="POST" action="/auth">
                        Nombre de usuario: <input type="text" name="text"><br />
                        Contraseña: <input type="password" name="password"><br />
                        <input type="submit" value="Iniciar sesión" />
                    </form>
                </body>
              </html>`);
});

app.post('/auth', (req, res) => {
    const {username, password} = req.body;

    // consultar BD y validar que existen tanto username como password
    const user = {username: username};

    const accessToken = generateAccessToken(user);

    res.header('authorization', accessToken).json({
        message: 'Usuario autenticado',
        token: accessToken
    })
    
});

function generateAccessToken(user) {
    return jwt.sign(user, process.env.SECRET, {expiresIn: '5m'})
}

function validateToken(req, res, next) {
    const accessToken = req.headers['authorization'] || req.query.accessToken;
    if(!accessToken) res.send('Access denied');

    jwt.verify(accessToken, process.env.SECRET, (err, user) => {
        if(err) {
            res.send('Access denied, token expired or incorrect')
        } else {
            req.user = user;
            next();
        }
    });
}

app.listen(PORT, () => {
    console.log('servidor iniciado ...');
});

