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
              <img src="../../imgs/left arrow.png">
              <h1>Settings</h1>

              <h2>Account</h2>
              <div class="container">
    <div class="photo">
        <img src="../../imgs/profilePicc.png" class="photo">
    </div>
    <div class="info">
        <h3>Maria Lupe</h3>
        <p>Personal info</p>
    </div>
</div>

             `;
  }
}

customElements.define("setting-profile", SettingProfile);
