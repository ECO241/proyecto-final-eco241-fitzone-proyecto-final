import BarNavigation from "../bar/bar.js";
import UserIcon from "./userIcon/userIcon.js";
import GreetingParagraph from "./greetingParagraph/greetingParagraph.js";

class AppHome extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    const appContainer = document.createElement("div");
    appContainer.classList.add("app-container");

    // Agregar el componente GreetingParagraph
    const greetingParagraph = new GreetingParagraph();
    appContainer.appendChild(greetingParagraph);

    // Crear e insertar el componente UserIcon
    const userIcon = new UserIcon();
    appContainer.appendChild(userIcon);

    // Crear e insertar el componente BarNavigation
    const barNavigation = new BarNavigation();
    appContainer.appendChild(barNavigation);

    shadow.appendChild(appContainer);

    const style = document.createElement("style");
    style.textContent = `
      .app-container {
        text-align: center;
      }
      
      .app-container h1 {
        font-size: 24px;
        margin-bottom: 20px;
      }
      
      .app-container p {
        font-size: 18px;
      }
    `;
    shadow.appendChild(style);
  }
}

customElements.define("app-home", AppHome);