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

app.post('/register', async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).send('Debes proporcionar un nombre, email y una contraseña.');
  }

  try {
    const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
      email: email,
      password: password,
    }, {
      data: { name: name }
    });

    if (signUpError) {
      throw new Error(signUpError.message);
    }

    const user = signUpData.user;
    if (!user) {
      throw new Error('No se pudo registrar el usuario. El objeto "user" es undefined.');
    }

    const { data: profileData, error: profileError } = await supabase
      .from('profiles')
      .insert([{ id: user.id, users: name }], {
        returning: 'minimal'
      });

    if (profileError) {
      throw new Error(profileError.message);
    }

    res.redirect('/pages/goal/goal.html');
  } catch (error) {
    console.error('Error en el registro:', error);
    res.status(400).send(error.message);
  }
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).send('Debes proporcionar un correo electrónico y una contraseña.');
  }

  try {
    const { data: loginData, error: loginError } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (loginError) {
      throw new Error(loginError.message);
    }

    const user = loginData.user;
    if (!user) {
      throw new Error('Usuario no encontrado');
    }

    res.status(200).json({ user });
  } catch (error) {
    console.error('Error en el inicio de sesión:', error);
    res.status(400).send(error.message);
  }
});

app.get('/get-username', async (req, res) => {
  const id = req.query.id;

  if (!id) {
    return res.status(400).send('id es requerido');
  }

  app.post('/logout', async (req, res) => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) {
        throw new Error(error.message);
      }
      res.status(200).send('Logged out successfully');
    } catch (error) {
      console.error('Error logging out:', error);
      res.status(400).send(error.message);
    }
  });



  try {
    const { data: profileData, error: profileError } = await supabase
      .from('profiles')
      .select('users')
      .eq('id', id)
      .single();

    if (profileError) {
      throw new Error(profileError.message);
    }

    res.status(200).json({ username: profileData.users });
  } catch (error) {
    console.error('Error al obtener el nombre de usuario:', error);
    res.status(400).send(error.message);
  }
});




app.get('/', (req, res) => {
  res.redirect('/pages/welcome/welcome.html');
});

app.listen(PORT, () => {
  console.log(`Servidor en funcionamiento en http://localhost:${PORT}`);
});
