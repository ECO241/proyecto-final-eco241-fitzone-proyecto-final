class BarNavigation extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
  
    connectedCallback() {
      this.render();
    }
  
    render() {
      this.shadowRoot.innerHTML = `
                <head>
                    <link rel="stylesheet" type="text/css" href="./bar.css">
                </head>

                <div class="container">
                <img src="../../imgs/home.png" class="icon">
                <img src="../../imgs/search.png" class="icon">
                <img src="../../imgs/qr.png" class="icon">
                <img src="../../imgs/trophy.png" class="icon">
                <img src="../../imgs/userIconBar.png" class="icon">

                </div>
                   `;
    }
  }
  
  customElements.define("bar-component", BarNavigation);
  