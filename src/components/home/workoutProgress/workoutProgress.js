class WorkoutProgress extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });

    // Crear container para el componente
    const container = document.createElement("div");
    container.classList.add("card");

    // Crear sección izquierda para título y descripción
    const leftSection = document.createElement("div");
    leftSection.classList.add("left-section");

    // Crear título
    const title = document.createElement("h2");
    title.textContent = "Work out Progress";
    leftSection.appendChild(title);

    // Crear descripción
    const description = document.createElement("p");
    description.textContent = "one tap pause, two tap reset";
    leftSection.appendChild(description);

    container.appendChild(leftSection);

    // Crear canvas para la barra de progreso circular
    const canvas = document.createElement("canvas");
    canvas.width = 200;
    canvas.height = 200;
    container.appendChild(canvas);

    // Adjuntar el contenedor al shadow DOM
    shadow.appendChild(container);

    // Agregar estilos
    const style = document.createElement("style");
    style.textContent = `
      .card {
        display: flex;
        align-items: center;
        padding: 20px;
        background: linear-gradient(120deg, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.1)); /* Gradiente con ángulo de 120 grados */
        border-radius: 10px;
      }
      .left-section {
        flex: 1;
        text-align: left;
        margin-right: 20px;
      }
      h2 {
        font-size: 24px;
        margin-bottom: 10px;
      }
      p {
        font-size: 16px;
        margin-top: 0;
        color: #555;
      }
      canvas {
        display: block;
      }
      .percentage {
        font-size: 50px;
        fill: #333;
      }
    `;
    shadow.appendChild(style);

    // Variables para el progreso y el temporizador
    let progress = 0;
    let intervalId;
    let isRunning = false;

    // Dibujar la barra de progreso circular
    const ctx = canvas.getContext("2d");
    function drawProgress() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const radius = 90;
      const startAngle = -0.5 * Math.PI;
      const endAngle = startAngle + (progress / 100) * 2 * Math.PI;

      // Dibujar círculo de fondo
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
      ctx.fillStyle = "transparent";
      ctx.fill();

      // Dibujar círculo de progreso
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, startAngle, endAngle);
      ctx.lineWidth = 20;
      ctx.strokeStyle = "white";
      ctx.stroke();

      // Dibujar texto de porcentaje
      ctx.font = "bold 50px Poppins";
      ctx.fillStyle = "white";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(`${Math.round(progress)}%`, centerX, centerY);
    }

    // Iniciar el temporizador
    function startTimer() {
      if (isRunning) return;
      isRunning = true;
      intervalId = setInterval(() => {
        progress += 100 / (15 * 60);
        if (progress >= 100) {
          progress = 0;
        }
        drawProgress();
      }, 1000);
    }

    // Detener el temporizador
    function stopTimer() {
      isRunning = false;
      clearInterval(intervalId);
    }

    // Reiniciar el temporizador
    function resetTimer() {
      stopTimer();
      progress = 0;
      drawProgress();
    }

    // Event listeners para un clic y doble clic
    container.addEventListener("click", () => {
      if (isRunning) {
        stopTimer();
      } else {
        startTimer();
      }
    });

    container.addEventListener("dblclick", () => {
      resetTimer();
    });

    // Dibujo inicial
    drawProgress();

    // Exponer métodos al alcance externo
    this.startTimer = startTimer;
    this.stopTimer = stopTimer;
    this.resetTimer = resetTimer;
    this.getProgress = () => progress;
  }
}

customElements.define("workout-progress", WorkoutProgress);

export default WorkoutProgress;