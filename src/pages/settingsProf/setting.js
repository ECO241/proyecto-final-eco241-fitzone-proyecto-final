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

<h2>Settings</h2>
<div class="container">
<div class="photo-icon">
    <img src="../../imgs/tp.png" class="photo-icon">
</div>
<div class="info-2">
    <h3>Training preferences</h3>
    <p>Personalize your worko...</p>
</div>
</div>

<div class="container">
<div class="photo-icon">
    <img src="../../imgs/fg.png" class="photo-icon">
</div>
<div class="info-2">
    <h3>Fitness Goal</h3>
    <p>Set and update your...</p>
</div>
</div>

<div class="container">
<div class="photo-icon">
    <img src="../../imgs/notification.png" class="photo-icon">
</div>
<div class="info-2">
    <h3>Notifications</h3>
    <p>Configure your notif...</p>
</div>
</div>

<div class="container">
<div class="photo-icon">
    <img src="../../imgs/leng.png" class="photo-icon">
</div>
<div class="info-2">
    <h3>Lenguaje</h3>
    <p>Change your leng...</p>
</div>
</div>

<button class="gradient-button">Log out</button>
             `;
  }
}

customElements.define("setting-profile", SettingProfile);
