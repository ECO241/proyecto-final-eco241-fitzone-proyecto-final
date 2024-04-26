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
                  height: 50px;
                  display: flex; 
                  justify-content: center; 
                  align-items: center; 
                  margin-left: 12px;
                  margin-top: 700px;
                  z-index: 10;
              }

              .icon {
                  margin-right: 15px; 
                  margin-left: 15px;
                  width: 40px; 
                  height: 40px;
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
