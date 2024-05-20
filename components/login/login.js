document.addEventListener('DOMContentLoaded', function() {
  console.log('Script de inicio de sesión cargado.');

  const loginForm = document.getElementById('login-form');

  if (loginForm) {
    loginForm.addEventListener('submit', function(event) {
      event.preventDefault();

      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;

      // Provisionalmente almacenamos los datos en localStorage
      if (username && password) {
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        alert('Inicio de sesión exitoso');
        window.location.href = '/pages/home/home.html';
      } else {
        alert('Por favor, ingresa un nombre de usuario y una contraseña.');
      }
    });
  }
});
