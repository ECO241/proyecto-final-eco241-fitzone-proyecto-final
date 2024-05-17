export default class BarNavigation extends HTMLElement {
  constructor() {
      super();
      this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
      this.render();
  }

  render() {
      this.shadowRoot.innerHTML = `
          <style>
              .container {
                  background: linear-gradient(#ffc700, #ff8b37);
                  padding: 10px; 
                  border-radius: 10px;
                  width: 345px;
                  height: 40px;
                  display: flex; 
                  justify-content: space-around;
                  align-items: center;
                  position: fixed;
                  bottom: 30px;
                  margin-left: 15px;
                  z-index: 1000;
              }

              .icon {
                  margin-right: 15px; 
                  margin-left: 15px;
                  width: 35px; 
                  height: 35px;
              }
          </style>

          <div class="container">
              <img src="../../imgs/icons/home.png" class="icon">
              <img src="../../imgs/icons/search.png" class="icon">
              <img src="../../imgs/icons/qr.png" class="icon">
              <img src="../../imgs/icons/trophy.png" class="icon">
              <img src="../../imgs/icons/userIconBar.png" class="icon">
          </div>
      `;
  }
}

customElements.define("bar-component", BarNavigation);

//barcomponent
