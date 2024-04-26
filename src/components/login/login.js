document.addEventListener('DOMContentLoaded', function() {
  console.log('Script de inicio de sesión cargado.');

  // Manejo del formulario de inicio de sesión:
  const loginForm = document.getElementById('login-form');

  loginForm.addEventListener('submit', async function(event) {
    event.preventDefault(); 

    const username = document.getElementById('username').value; 
    const password = document.getElementById('password').value;

    try {
      const response = await fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });

      if (response.ok) {
        // Guardar el nombre de usuario en sessionStorage:
        sessionStorage.setItem('username', username);
        window.location.href = '/pages/home/home.html';
      } else {
        const errorMessage = await response.text();
        alert(errorMessage);
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
    }
  });
});
