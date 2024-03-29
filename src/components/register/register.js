document.addEventListener('DOMContentLoaded', function() {
    console.log('Script de registro cargado.');
  
    // Manejo del formulario de registro
    const registerForm = document.getElementById('register-form');
  
    registerForm.addEventListener('submit', async function(event) {
      event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada
  
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
  
      try {
        const response = await fetch('/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ username, password })
        });
  
        if (response.ok) {
          window.location.href = '/pages/login/login.html'; // Redirecciona al usuario a la página de inicio de sesión después de registrarse
        } else {
          const errorMessage = await response.text();
          alert(errorMessage); // Muestra un mensaje de error si el nombre de usuario ya está en uso
        }
      } catch (error) {
        console.error('Error al registrar usuario:', error);
      }
    });
  });
  