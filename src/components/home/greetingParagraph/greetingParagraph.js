export default class GreetingParagraph extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this.saludos = ["Hello", "Greetings", "Hi", "Hey!", "Welcome"];
      this.render();
    }
  
    // Método para seleccionar un saludo aleatorio:
    getSaludo() {
      return this.saludos[Math.floor(Math.random() * this.saludos.length)];
    }
  
    // Método para actualizar el saludo con el nombre de usuario:
    updateGreeting(username) {
      const saludo = this.getSaludo();
      this.shadowRoot.querySelector(".saludo").textContent = `${saludo},`;
      this.shadowRoot.querySelector(".usuario").textContent = username + ".";
    }
  
    // Método para obtener el nombre del correo electrónico sin el dominio:
    getUsernameWithoutDomain(email) {
      return email.split('@')[0];
    }
  
    connectedCallback() {
      const email = localStorage.getItem("username");
      if (email) {
        const username = this.getUsernameWithoutDomain(email);
        this.updateGreeting(username);
      }
    }
  
    render() {
      this.shadowRoot.innerHTML = `
        <style>
          .greeting-container {
            font-size: 20px;
            text-align: left;
            position: fixed;
            left: 80px;
            z-index: 1;
          }
          .saludo {
            font-weight: bold;
            margin-right: 10px;
            background: linear-gradient(#ffc700, #ff8b37);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .usuario {
            font-weight: bold;
            background: linear-gradient(#ffc700, #ff8b37);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
        </style>
        <div class="greeting-container">
          <div><span class="saludo"></span></div>
          <span class="usuario"></span>
        </div>
      `;
    }
  }
  
  customElements.define("greeting-paragraph", GreetingParagraph);
  