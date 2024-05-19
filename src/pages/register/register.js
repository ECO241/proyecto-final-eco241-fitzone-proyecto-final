document.addEventListener('DOMContentLoaded', function() {
    console.log('Script de registro cargado.');
  

    const registerForm = document.getElementById('register-form');
  
    registerForm.addEventListener('submit', async function(event) {
      event.preventDefault(); 
  
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
          window.location.href = '/pages/login/login.html';
        } else {
          const errorMessage = await response.text();
          alert(errorMessage);
        }
      } catch (error) {
        console.error('Error al registrar usuario:', error);
      }
    });

    document.addEventListener('DOMContentLoaded', function() {
      const logInLink = document.getElementById('logInLink');
  
      logInLink.addEventListener('click', function(event) {
          event.preventDefault();
          window.location.href = '/pages/login/login.html';
      });
  });
  
  });
  
  
  
  