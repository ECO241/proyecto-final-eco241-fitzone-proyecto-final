document.addEventListener('DOMContentLoaded', () => {

    const loginButton = document.querySelector('.button1');
    const signUpButton = document.querySelector ('.button2');
  
    loginButton.addEventListener('click', () => {
      window.location.href = '/pages/login/login.html'; // Redirigir a la página de Log In
    });
  
    signUpButton.addEventListener('click', () => {
      window.location.href = '/pages/register/register.html'; // Redirigir a la página de Sign Up
    });
  });
  