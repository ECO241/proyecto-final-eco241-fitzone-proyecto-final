class SettingProfile extends HTMLElement {
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
                  <link rel="stylesheet" type="text/css" href="./setting.css">
              </head>
              <p>hola</p>
             `;
    }
  }
  
  customElements.define("setting-profile", SettingProfile);
  