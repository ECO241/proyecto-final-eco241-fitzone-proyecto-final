class OverallStatus extends HTMLElement {
    constructor() {
      super();
      const shadow = this.attachShadow({ mode: "open" });
  
      // Crear container para el componente
      const container = document.createElement("div");
  
      // Crear título
      const title = document.createElement("h2");
      title.textContent = "Overall Status";
      container.appendChild(title);
  
      // Crear tarjeta para las calorías quemadas y el tiempo
      const card = document.createElement("div");
      card.classList.add("card");
  
      // Crear título para las calorías quemadas
      const burnedCaloriesTitle = document.createElement("h3");
      burnedCaloriesTitle.textContent = "Burned Calories";
      card.appendChild(burnedCaloriesTitle);
  
      // Mostrar el temporizador conectado al componente WorkoutProgress
      const timeTitle = document.createElement("h3");
      timeTitle.textContent = "Time:";
      card.appendChild(timeTitle);
  
      const timer = document.createElement("div");
      const minutes = document.createElement("span");
      const hours = document.createElement("span");
      minutes.textContent = "00";
      hours.textContent = "00";
      timer.appendChild(hours);
      timer.appendChild(document.createTextNode(":"));
      timer.appendChild(minutes);
      card.appendChild(timer);
  
      container.appendChild(card);
  
      // Estilo para el componente
      const style = document.createElement("style");
      style.textContent = `
        h2 {
          font-size: 24px;
          margin-bottom: 10px;
        }
        .card {
          padding: 10px;
          margin-top: 10px;
          border: 1px solid #ccc;
          border-radius: 5px;
        }
        h3 {
          font-size: 18px;
          margin-bottom: 5px;
        }
        span {
          font-size: 16px;
          padding: 0 5px;
        }
      `;
      container.appendChild(style);
  
      // Adjuntar el contenedor al shadow DOM
      shadow.appendChild(container);
    }
  }
  
  customElements.define("overall-status", OverallStatus);
  
export default OverallStatus;