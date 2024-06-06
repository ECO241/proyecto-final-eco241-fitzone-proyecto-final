class GoalScreen extends HTMLElement {
  constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this.goals = [
          { id: 'checkbox', text: 'Lose weight' },
          { id: 'checkbox1', text: 'Gain muscle mass' },
          { id: 'checkbox2', text: 'Increase strength' },
          { id: 'checkbox3', text: 'Enhance flexibility' },
          { id: 'checkbox4', text: 'Increase endurance' },
          { id: 'checkbox5', text: 'Reduce the risk of injuries' },
          { id: 'checkbox6', text: 'Adopt a healthy lifestyle' }
      ];
  }

  connectedCallback() {
      this.render();
  }

  render() {
      const goalHtml = this.goals.map(goal => `
          <center>
              <div class="container">
                  <div class="text">
                      <p>${goal.text}</p>
                  </div>
                  <div class="round">
                      <input type="checkbox" checked id="${goal.id}" />
                      <label for="${goal.id}"></label>
                  </div>
              </div>
          </center>
      `).join('');

      this.shadowRoot.innerHTML = `
          <link rel="stylesheet" type="text/css" href="./goal.css"></head>
          <img src="../../imgs/left arrow.png">
          <h1>What is your goal?</h1>
          <center>
              <p>Select your fitness goal to personalize your experience in FitZone. Let's get started!</p>
          </center>
          ${goalHtml}
          <center>
              <button class="gradient-button" onclick="window.location.href='../physicalactivity/physicalactivity.html';">Continue</button>
          </center>
      `;
  }
}

customElements.define("goal-main", GoalScreen);
