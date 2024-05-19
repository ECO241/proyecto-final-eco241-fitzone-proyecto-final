// GreetingParagraph.js
export default class GreetingParagraph extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.saludos = ["Hello", "Greetings", "Hi", "Hey!", "Welcome"]; // Se pueden crear más saludos
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
  
    connectedCallback() {
        const username = sessionStorage.getItem("username");
        this.updateGreeting(username);
    }
  
    render() {
        this.shadowRoot.innerHTML = `
            <style>
                .greeting-container {
                    font-size: 20px;
                    text-align: left;
                    position: absolute;
                    top: 90px;
                    left: 120px;
                    z-index: 1;
                }
                .saludo {
                    font-weight: bold;
                    margin-right: 10px;
                }
                .usuario {
                    color: white;
                }
            </style>
            <div class="greeting-container">
                <span class="saludo"></span>
                <span class="usuario"></span>
            </div>
        `;
    }
}
  
customElements.define("greeting-paragraph", GreetingParagraph);