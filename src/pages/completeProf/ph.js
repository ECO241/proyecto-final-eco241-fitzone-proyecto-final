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
         <input type="text" id="nombre" name="nombre" placeholder="Full name" required>
       </div>
     
       <div class="input-container">
       <input type="date" id="cumpleanos" name="cumpleanos" placeholder="Date of birth" required class="custom-input">
     </div>
     
       <div class="input-container">
         <select id="genero" name="genero" required>
           <option value="" disabled selected>Gender</option>
           <option value="masculino">Male</option>
           <option value="femenino">Female</option>
           <option value="other">Other</option>
         </select>
       </div>
     
       <div class="input-container2">
         <div class="input-group">
           <input type="number" id="altura" name="altura" placeholder="Height" required>
         </div>
     
         <div class="input-group">
           <input type="number" id="peso" name="peso" placeholder="Weight" required>
         </div>
       </div>
     
       <center>
         <button class="gradient-button">Let's get started!</button>
       </center>
     </form>
     </center>
          `;
    }
  }
  
  customElements.define("profile-configuration", ProfileConfig);
  