document.addEventListener('DOMContentLoaded', function() {
  // Obtener el nombre de usuario almacenado en localStorage
  const username = localStorage.getItem('username');

  // Verificar si el nombre de usuario existe y actualizar el saludo
  if (username) {
      const greetingElement = document.getElementById('greeting');
      greetingElement.textContent = `Hello, ${username}`;
  }
});

