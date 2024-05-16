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



                   `;
  }
}

customElements.define("routine-screen", RoutineScreen);
