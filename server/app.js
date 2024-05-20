const express = require('express');
const path = require('path');
const { createClient } = require('@supabase/supabase-js');

const app = express();
const PORT = process.env.PORT || 3000;

const supabaseUrl = 'https://lkwfiqgbsyiypzkvyhai.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxrd2ZpcWdic3lpeXB6a3Z5aGFpIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxNTkxMDE1NywiZXhwIjoyMDMxNDg2MTU3fQ.6MySod30WrN76FPMmITxa1LBsg99cbGT23kkzbvn-KI';
const supabase = createClient(supabaseUrl, supabaseKey);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('src'));

// Registro de usuarios
app.post('/register', async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).send('Debes proporcionar un nombre de usuario y una contraseña.');
  }

  try {
    const { user, error } = await supabase.auth.signUp({
      email: username,
      password: password,
    });

    if (error) {
      throw error;
    }

    console.log('Usuario registrado:', user);
    res.redirect('/pages/login/login.html');
  } catch (error) {
    console.error('Error en el registro:', error);
    res.status(400).send(error.message);
  }
});

// Inicio de sesión de usuarios
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  if (!supabase.auth) {
    return res.status(500).send('Error en la inicialización de Supabase');
  }

  try {
    const { session, error } = await supabase.auth.signIn({
      email: username,
      password: password,
    });

    if (error) {
      throw error;
    }

    console.log('Inicio de sesión exitoso:', session.user);
    res.redirect('/pages/home/home.html');
  } catch (error) {
    console.error('Error en el inicio de sesión:', error);
    res.status(401).send(error.message);
  }
});

app.get('/', (req, res) => {
  res.redirect('/pages/welcome/welcome.html');
});

app.listen(PORT, () => {
  console.log(`Servidor en funcionamiento en http://localhost:${PORT}`);
});
