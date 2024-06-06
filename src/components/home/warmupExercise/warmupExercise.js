import { Hard, Normal, Easy } from "../../../const/exercises.js";

class WarmUpExercise extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });

    // Create container for the component
    const container = document.createElement("div");
    container.classList.add("card");

    // Create title
    const title = document.createElement("h2");
    title.textContent = "Warm Up Exercise";
    container.appendChild(title);

    // Create button with icon
    const button = document.createElement("button");
    const icon = document.createElement("img");
    icon.src = "../../../imgs/icons/dice.png";
    button.appendChild(icon);
    container.appendChild(button);

    // Create display for rectangles
    const display = document.createElement("div");
    display.classList.add("display");

    const rojoRect = document.createElement("div");
    rojoRect.classList.add("exercise-rect", "hard");
    display.appendChild(rojoRect);

    const azulRect = document.createElement("div");
    azulRect.classList.add("exercise-rect", "normal");
    display.appendChild(azulRect);

    const verdeRect = document.createElement("div");
    verdeRect.classList.add("exercise-rect", "easy");
    display.appendChild(verdeRect);

    container.appendChild(display);

    // Append the container to the shadow DOM
    shadow.appendChild(container);

    // Add styles
    const style = document.createElement("style");
    style.textContent = `
      .card {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 20px;
        background: linear-gradient(rgba(255, 139, 55, 0.35), rgba(255, 199, 0, 0.6));
        border-radius: 10px;
        position: relative;
        width: 320px;
      }
      h2 {
        font-size: x-large;
        margin-bottom: 5px;
        margin-right: 5px;
      }
      button {
        border: none;
        background: none;
        cursor: pointer;
        padding: 10px;
        border-radius: 5px;
        position: absolute;
        top: 30px;
        right: 5px;
      }
      button img {
        width: 40px;
        height: 40px;
      }
      .display {
        display: flex;
        flex-direction: row; /* Set flex direction to row */
        width: 100%;
        justify-content: space-between;
        margin-top: 20px;
      }
      .exercise-rect {
        width: 60px; 
        height: 140px; 
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        padding: 20px; 
        text-align: center;
        font-size: large;
        font-weight: bold;
        margin: 0 2px;
      }
      .hard {
        background-color: #db4343;
      }
      .normal {
        background-color: #86bfd8;
      }
      .easy {
        background-color: #49cb65;
      }
    `;
    shadow.appendChild(style);

    // Función para seleccionar ejercicios aleatorios de cada pool
    function selectRandomExercise(pool) {
      return pool[Math.floor(Math.random() * pool.length)];
    }

    // Función para manejar el clic del botón
    button.addEventListener("click", function () {
      const ejercicioDuro = selectRandomExercise(Hard); // Utilizar el array Hard de exercise.js
      const ejercicioNormal = selectRandomExercise(Normal); // Utilizar el array Normal de exercise.js
      const ejercicioFacil = selectRandomExercise(Easy); // Utilizar el array Easy de exercise.js

      // Asignar color y texto a los rectángulos
      rojoRect.textContent = `${ejercicioDuro.nombre}: ${ejercicioDuro.repeticiones}`;
      azulRect.textContent = `${ejercicioNormal.nombre}: ${ejercicioNormal.repeticiones}`;
      verdeRect.textContent = `${ejercicioFacil.nombre}: ${ejercicioFacil.repeticiones}`;
    });
  }
}

// Define the custom element
customElements.define("warm-up-exercise", WarmUpExercise);

export default WarmUpExercise;
