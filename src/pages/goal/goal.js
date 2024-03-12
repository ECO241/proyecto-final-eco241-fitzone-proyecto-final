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
    <link rel="stylesheet" type="text/css" href="./goal.css"></head>
    <img src="../../imgs/left arrow.png">

    <h1>What is your goal?</h1>
    <center> <p>Select your fitness goal to personalize 
    your experience in FitZone. Let's get started!</p> </center>


   <center> <div class="container">

    <div class="text">
    <p>Lose weight</p>
    </div>

  <div class="round">
    <input type="checkbox" checked id="checkbox" />
    <label for="checkbox"></label>
  </div>
</div> </center>
   
<center> <div class="container">

    <div class="text">
    <p>Gain muscle mass</p>
    </div>

  <div class="round">
    <input type="checkbox" checked id="checkbox1" />
    <label for="checkbox1"></label>
  </div>
</div> </center>

<center> <div class="container">

    <div class="text">
    <p>Increase strength</p>
    </div>

  <div class="round">
    <input type="checkbox" checked id="checkbox2" />
    <label for="checkbox2"></label>
  </div>
</div> </center>

<center> <div class="container">

    <div class="text">
    <p>Enhance flexibility</p>
    </div>

  <div class="round">
    <input type="checkbox" checked id="checkbox3" />
    <label for="checkbox3"></label>
  </div>
</div> </center>


<center> <div class="container">

<div class="text">
<p>Increase endurance</p>
</div>

<div class="round">
<input type="checkbox" checked id="checkbox4" />
<label for="checkbox4"></label>
</div>
</div> </center>


<center> <div class="container">

<div class="text">
<p>Reduce the risk of injuries</p>
</div>

<div class="round">
<input type="checkbox" checked id="checkbox5" />
<label for="checkbox5"></label>
</div>
</div> </center>


<center> <div class="container">

<div class="text">
<p>Adopt a healthy lifestyle</p>
</div>

<div class="round">
<input type="checkbox" checked id="checkbox6" />
<label for="checkbox6"></label>
</div>
</div> </center>

<center><button class="gradient-button">Continue</button></center>
    `
   }
}

customElements.define("goal-main", GoalScreen);
