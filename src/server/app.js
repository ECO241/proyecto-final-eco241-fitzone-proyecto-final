const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


const staticPath = path.join(__dirname, '../../src');
app.use(express.static(staticPath));
app.use('/pages', express.static(path.join(staticPath, 'pages')));

// Usuarios registrados
let users = [];

// Endpoint para manejar el registro de usuarios
app.post('/register', (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).send('Debes proporcionar un nombre de usuario y una contraseña.');
    }

    if (users.some(user => user.username === username)) {
        return res.status(400).send('El nombre de usuario ya está en uso.');
    }

    users.push({ username, password });
    console.log('Usuario registrado:', { username, password });
    res.redirect('/pages/login/login.html');
});

// Endpoint para manejar el inicio de sesión
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(user => user.username === username && user.password === password);
    if (!user) {
        return res.status(401).send('Nombre de usuario o contraseña incorrectos.');
    }
    console.log('Inicio de sesión exitoso:', user);
    res.redirect('/pages/home/home.html');
});

// Ruta para página principal (Welcome)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../src/pages/welcome/welcome.html'));
});

// Inicia el servidor
app.listen(PORT, () => {
    console.log(`Servidor en funcionamiento en http://localhost:${PORT}`);
});

