class PhysicalAct extends HTMLElement {
  constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this.activityLevels = [
          { id: 'container1', text: 'Beginner' },
          { id: 'container2', text: 'Intermediate' },
          { id: 'container3', text: 'Advanced' },
          { id: 'container4', text: 'Expert' }
      ];
  }

  connectedCallback() {
      this.render();
  }

  addActivityLevel(id, text) {
      this.activityLevels.push({ id, text });
      this.render();
  }

  removeActivityLevel(id) {
      this.activityLevels = this.activityLevels.filter(level => level.id !== id);
      this.render();
  }

  toggleCheckbox(id) {
      const checkbox = this.shadowRoot.querySelector(`#${id}`);
      if (checkbox) {
          checkbox.checked = !checkbox.checked;
      }
  }

  render() {
      const activityHtml = this.activityLevels.map(level => `
          <label for="${level.id}">
              <div class="container">${level.text}</div>
              <input type="checkbox" id="${level.id}" class="checkbox">
          </label>
      `).join('');

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
                  ${activityHtml}
              </div>
              <button class="gradient-button" onclick="window.location.href='../completeProf/profilesign.html';">Continue</button>
          </center>
      `;
  }
}

customElements.define("physical-form", PhysicalAct);
