class GoalScreen extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback() {
        this.render();
    }

   render(){
    this.shadowRoot.innerHTML = `
    <p class="title">What is your goal?</p>
    <p>Select your fitness goal to personalize your experience in FitZone. Let's get started!</p>
    `
   }
}

customElements.define("goal-main", GoalScreen);
