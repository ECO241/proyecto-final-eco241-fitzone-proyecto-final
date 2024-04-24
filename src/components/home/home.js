document.addEventListener('DOMContentLoaded', function() {
  console.log('Script de home cargado.');

  class App extends HTMLElement {
    constructor() {
      super();
    }

    render() {
      this.innerHTML = `
        <header>
          <div class="header-container">
            <div class="user-photo"></div>
            <div class="greeting">
              Hello,
              <span class="username">Maria</span>
            </div>
          </div>
        </header>
        <main>
          <div class="title-container">
            <h2>Let's get Fit!</h2>
          </div>
          <div class="workout-progress">
            <h2>Work out Progress</h2>
            <div class="contenedor">
              <div class="circulo-fondo"></div>
              <div class="circulo-progreso"></div>
              <span class="porcentaje">80%</span>
            </div>
          </div>
          <div class="activo">
            <h2 class="titulote">Actividades del día</h2>
            <div class="contenidos">
              <div class="actividad1">
                <h3 class="titulo-actividad">Flexiones</h3>
                <div class="detalles">
                  <span class="cantidad">10x3</span>
                </div>
              </div>
              <div class="actividad2">
                <h3 class="titulo-actividad">Sentadillas</h3>
                <div class="detalles">
                  <span class="cantidad">8x5</span>
                </div>
              </div>
              <div class="actividad3">
                <h3 class="titulo-actividad">Plancha</h3>
                <div class="detalles">
                  <span class="cantidad">12x10s</span>
                </div>
              </div>
            </div>
          </div>
          <div class="status">
            <h2>Overall Status</h2>
            <div class="status-container">
              <div class="burned">
                <p>Burned</p>
                <p>calories</p>
                <p>12.56 Kcal</p>
              </div>
              <div class="time-spent">
                <p>Time</p>
                <p>1 hour</p>
                <p>20 minutes</p>
              </div>
            </div>
          </div>
        </main>
        <nav class="bottom-navigation">
          <div class="bottom-navigation-icon"></div>
          <div class="bottom-navigation-icon"></div>
        </nav>
      `;
    }

    connectedCallback() {
      this.render();
    }
  }

  customElements.define("app-container", App);
});

  