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
              <img src="../../imgs/left arrow.png">
              <h1>Complete Your Profile</h1>
              <center>
                  <p>Complete your profile to enjoy a personalized experience</p>
              
  
              <div class="circle-container">
  <img src="../../imgs/user.png" alt="User Image" class="user-image">
</div>
</center>

            
            
            

  
              <center>
  <button class="gradient-button">Let's get started!</button>
  </center>
          `;
    }
  }
  
  customElements.define("profile-configuration", ProfileConfig);
  