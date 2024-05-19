document.addEventListener('DOMContentLoaded', function() {
    console.log('Script de inicio de sesión cargado.');
  
    // Manejo del formulario de inicio de sesión
    const loginForm = document.getElementById('login-form');
  
    loginForm.addEventListener('submit', async function(event) {
      event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada
  
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
          window.location.href = '/pages/home/home.html'; // Redirecciona al usuario a la página home
        } else {
          const errorMessage = await response.text();
          alert(errorMessage); // Muestra un mensaje de error si las credenciales son incorrectas
        }
      } catch (error) {
        console.error('Error al iniciar sesión:', error);
      }
    });

    document.addEventListener('DOMContentLoaded', () => {
      const signUpLink = document.getElementById('signUpLink');
  
      signUpLink.addEventListener('click', (event) => {
          event.preventDefault(); // Prevenir el comportamiento predeterminado del enlace
  
          window.location.href = '/pages/register/register.html'; // Redirigir a la página de registro
      });
  });
  
  });
  