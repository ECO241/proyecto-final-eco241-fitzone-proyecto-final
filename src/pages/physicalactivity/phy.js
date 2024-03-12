class PhysicalAct extends HTMLElement {
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
                <link rel="stylesheet" type="text/css" href="./phy.css">
            </head>
            <img src="../../imgs/left arrow.png">
            <h1>What is Your level of physical activity?</h1>
            <center>
                <p>Select your current level of physical activity to provide 
                you with suitable recommendations to achieve your fitness goals.</p>
            </center>


            <center>

            <div class="options">
            <label for="container1">
  <div class="container">Beginner</div>
  <input type="checkbox" id="container1" class="checkbox">
</label>

<label for="container2">
  <div class="container">Intermediate</div>
  <input type="checkbox" id="container2" class="checkbox">
</label>

<label for="container3">
  <div class="container">Advanced</div>
  <input type="checkbox" id="container3" class="checkbox">
</label>

<label for="container4">
  <div class="container">Expert</div>
  <input type="checkbox" id="container4" class="checkbox">
</label>
</div>
<button class="gradient-button">Continue</button>
</center>
        `;
  }
}

customElements.define("physical-form", PhysicalAct);
