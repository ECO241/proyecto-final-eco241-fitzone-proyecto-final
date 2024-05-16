class RoutineScreen extends HTMLElement {
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
                    <link rel="stylesheet" type="text/css" href="./routine.css">
                </head>
<div class="header-1">
               <h1>Routines</h1>
               <img src="../../imgs/bell.png" class="icon">
               </div>

               <div class="search-bar">
                   <img src="../../imgs/search.png" class="icon">
    <input type="text" class="text" placeholder="Search...">
</div>

<h2>Routines for you</h2>

<div class="image-container">
<img src="../../imgs/component.png" class="big-img">
<img src="../../imgs/comp3.png" class="big-img">
<img src="../../imgs/component.png" class="big-img">
</div>


<div class= "bottom-card">
<h4>Popular routines</h4>

<div class="routine-card">
<div class="info">
<h4>Full-Body Circuit</h4>
<p>This routine targets all major muscle groups in...</p>
<button class="time">45-60 minutes</button>
<button class="level">Intermediate</button>
</div>
</div>
</div>


<div class="container">
<img src="../../imgs/home.png" class="icon-2">
<img src="../../imgs/search.png" class="icon-2">
<img src="../../imgs/qr.png" class="icon-2">
<img src="../../imgs/trophy.png" class="icon-2">
<img src="../../imgs/userIconBar.png" class="icon-2">

</div>
                   `;
  }
}

customElements.define("routine-screen", RoutineScreen);
