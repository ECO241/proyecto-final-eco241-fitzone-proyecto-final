import BarNavigation from "../bar/bar.js";
import UserIcon from "./userIcon/userIcon.js";
import GreetingParagraph from "./greetingParagraph/greetingParagraph.js";
import WorkoutProgress from "./workoutProgress/workoutProgress.js";
import WarmUpExercise from "./warmupExercise/warmupExercise.js";
import OverallStatus from "./overallStatus/overallStatus.js";

class AppHome extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    const appContainer = document.createElement("div");
    appContainer.classList.add("app-container");

    // Agregar el componente GreetingParagraph y UserIcon dentro de un contenedor flexible
    const headerContainer = document.createElement("div");
    headerContainer.classList.add("header-container");
    const greetingParagraph = new GreetingParagraph();
    headerContainer.appendChild(greetingParagraph);
    const userIcon = new UserIcon();
    headerContainer.appendChild(userIcon);
    appContainer.appendChild(headerContainer);

    // Crear e insertar el mensaje debajo del UserIcon:
    const fitnessMessage = document.createElement("p");
    fitnessMessage.classList.add("fitness-message");
    fitnessMessage.textContent = "Let's get fit!";
    appContainer.appendChild(fitnessMessage);

    // Crear e insertar el componente WorkoutProgress:
    const workoutProgress = document.createElement("workout-progress");
    appContainer.appendChild(workoutProgress);

    // Crear e insertar el componente WarmUpExercise:
    const warmUpExercise = document.createElement("warm-up-exercise");
    appContainer.appendChild(warmUpExercise); // Insertar el WarmUpExercise antes del OverallStatus

    // Crear e insertar el componente OverallStatus:
    const overallStatus = document.createElement("overall-status");
    appContainer.appendChild(overallStatus); // Insertar el OverallStatus después del WarmUpExercise

    // Crear e insertar el componente BarNavigation:
    const barNavigation = new BarNavigation();
    shadow.appendChild(barNavigation);

    shadow.appendChild(appContainer);

    const style = document.createElement("style");
    style.textContent = `
      .app-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        max-width: 180px;
        box-sizing: border-box;
      }

      .header-container {
        display: flex;
        justify-content: space-between;
        width: 100%;
        margin-bottom: 10px;
      }

      .app-container h1 {
        font-size: 24px;
        margin-bottom: 10px;
      }

      .app-container p {
        margin: 0;
      }

      .fitness-message {
        font-size: 15px;
        color: white;
        text-align: left;
        position: fixed;
        left: 15px;
        top: 83px;
        z-index: 1;
      }

      workout-progress {
        width: 100%;
        margin-top: 100px;
        z-index:5;
      }

      warm-up-exercise{
          width: 100%;
          margin-top: 20px;
          z-index:6;
        }
        overall-status{
          width: 100%;
          margin-top: 15px;
          z-index:7;
        }

 

      @media (max-width: 428px) {
        .app-container {
          padding: 10px;
        }


        .app-container h1 {
          font-size: 18px;
        }

        .app-container p, .fitness-message {
          font-size: 14px;
        }

        .fitness-message {
          margin: 5px 0;
        }
      }

      bar-navigation {
        display: flex;
        width: 100%;
      }
    `;
    shadow.appendChild(style);
  }
}

customElements.define("app-home", AppHome);
