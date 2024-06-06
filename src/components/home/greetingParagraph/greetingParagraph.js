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

  // Método para obtener el nombre de usuario desde el servidor:
  async fetchUsername(id) {
    try {
      const response = await fetch(`/get-username?id=${id}`);
      if (response.ok) {
        const data = await response.json();
        return data.username;
      } else {
        console.error("Error al obtener el nombre de usuario");
      }
    } catch (error) {
      console.error("Error en la solicitud para obtener el nombre de usuario:", error);
    }
    return null;
  }

  async connectedCallback() {
    const id = localStorage.getItem("id");
    if (id) {
      const username = await this.fetchUsername(id);
      if (username) {
        this.updateGreeting(username);
      }
    }
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        .greeting-container {
          font-size: xx-large;
          text-align: left;
          position: fixed;
          left: 150px;
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
