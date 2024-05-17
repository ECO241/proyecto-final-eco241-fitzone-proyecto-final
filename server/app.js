const express = require('express');
const path = require('path');
const app = express();
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://lkwfiqgbsyiypzkvyhai.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxrd2ZpcWdic3lpeXB6a3Z5aGFpIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxNTkxMDE1NywiZXhwIjoyMDMxNDg2MTU3fQ.6MySod30WrN76FPMmITxa1LBsg99cbGT23kkzbvn-KI';
const supabase = createClient(supabaseUrl, supabaseKey);
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('src'));

app.post('/register', async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).send('Debes proporcionar un nombre de usuario y una contraseña.');
  }

  console.log('Supabase:', supabase);
  console.log('Antes de signIn');
  const { session, error } = await supabase.auth.signIn({
    email: username,
    password: password,
  });
  console.log('Después de signIn');
  
  if (error) {
    return res.status(400).send(error.message);
  }

  console.log('Usuario registrado:', user);
  res.redirect('/pages/login/login.html');
});

app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  // Verificar si supabase.auth está inicializado correctamente
  if (!supabase.auth) {
    return res.status(500).send('Error en la inicialización de Supabase');
  }

  const { session, error } = await supabase.auth.signIn({
    email: username,
    password: password,
  });

  if (error) {
    return res.status(401).send(error.message);
  }

  console.log('Inicio de sesión exitoso:', session.user);
  
  res.redirect('/pages/home/home.html');
});

app.get('/', (req, res) => {
  res.redirect('/pages/home/home.html');
});

app.listen(PORT, () => {
  console.log(`Servidor en funcionamiento en http://localhost:${PORT}`);
});
