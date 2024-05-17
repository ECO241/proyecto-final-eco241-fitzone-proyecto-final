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
        background: linear-gradient(#ffc700, #ff8b37);
        border-radius: 10px;
        position: relative;
        width: 100%;
      }
      h2 {
        font-size: 24px;
        margin-bottom: 10px;
      }
      button {
        border: none;
        background: none;
        cursor: pointer;
        padding: 10px;
        border-radius: 5px;
        background-color: rgba(255, 255, 255, 0.2);
        position: absolute;
        top: 20px;
        right: 20px;
      }
      button img {
        width: 30px;
        height: 30px;
      }
      .display {
        display: flex;
        flex-direction: row; /* Set flex direction to row */
        width: 100%;
        justify-content: space-between; /* Space out the rectangles */
        margin-top: 20px;
      }
      .exercise-rect {
        width: 100px; /* Adjust width as needed */
        height: 150px; /* Adjust height as needed */
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        padding: 15px; /* Add padding */
        text-align: center;
        font-size: 16px;
        margin: 0 5px; /* Add margin to separate the rectangles */
      }
      .hard {
        background-color: #DB4343;
      }
      .normal {
        background-color: #86BFD8;
      }
      .easy {
        background-color: #49CB65;
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
