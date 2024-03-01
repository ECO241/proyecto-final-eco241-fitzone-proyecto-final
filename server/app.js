const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Middleware para manejar datos de formulario
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Configuración para servir archivos estáticos
app.use(express.static('src'));

// Usuarios registrados (simulación, puedes cambiar esto para usar una base de datos)
let users = [];

// Ruta para manejar el registro de usuarios
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

// Ruta para manejar el inicio de sesión
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(user => user.username === username && user.password === password);
  if (!user) {
    return res.status(401).send('Nombre de usuario o contraseña incorrectos.');
  }
  console.log('Inicio de sesión exitoso:', user);
  res.redirect('/pages/home/home.html');
});

// Redirección a la página de inicio de sesión al acceder a la ruta raíz
app.get('/', (req, res) => {
  res.redirect('/pages/login/login.html');
});

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor en funcionamiento en http://localhost:${PORT}`);
});
