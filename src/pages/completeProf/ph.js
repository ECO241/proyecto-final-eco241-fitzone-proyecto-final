class ProfileConfig extends HTMLElement {
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
                  <link rel="stylesheet" type="text/css" href="./ph.css">
              </head>
              <img onclick="window.location.href='../physicalactivity/physicalactivity.html';" src="../../imgs/left arrow.png" >
              <h1>Complete Your Profile</h1>
              <center>
                  <p>Complete your profile to enjoy a personalized experience</p>
              
              <div class="circle-container">
  <img src="../../imgs/user.png" alt="User Image" class="user-image">
</div>
</center>

       <center>
<form>
<div class="input-container">
  <input type="text" id="nombre" name="nombre" required>
  <label for="nombre">Full name</label>
</div>

<div class="input-container">
<input type="date" id="cumpleanos" name="cumpleanos" required>
<label for="cumpleanos">Date of birth</label>
</div>

<div class="input-container">
  <select id="genero" name="genero" required>
    <option value="" disabled selected>Gender</option>
    <option value="masculino">Male</option>
    <option value="femenino">Female</option>
    <option value="other">Other</option>
  </select>
  <label for="genero"></label>
</div>

<div class="input-container">
  <input type="number" id="altura" name="altura" required>
  <label for="altura">Height</label>
</div>

<div class="input-container">
  <input type="number" id="peso" name="peso" required>
  <label for="peso">Weigth</label>
</div>
</form>  
  </center>
              <center>
  <button class="gradient-button">Let's get started!</button>
  </center>
          `;
    }
  }
  
  customElements.define("profile-configuration", ProfileConfig);
  