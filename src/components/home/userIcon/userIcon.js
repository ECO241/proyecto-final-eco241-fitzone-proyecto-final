export default class UserIcon extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.addEventListener("click", this.handleClick.bind(this));
    }
  
    connectedCallback() {
        this.render();
    }

    handleClick() {
        // Cambiar ruta.
        window.location.href = "../../../pages/profile/profile.html";
    }
  
    render() {
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: flex; 
                    justify-content: flex-start; 
                    cursor: pointer;
                    position: fixed;
                    left: 15px;
                    z-index:5;
                }

                img {
                    width: 50px;
                    height: 50px;
                }
            </style>

            <img src="../../../imgs/icons/userIcon.png" alt="UserIcon">
        `;
    }
}

customElements.define("user-icon", UserIcon);


     // warm-up-exercise{
      //   width: 100%;
      //   margin-top: 20px;
      //   position: fixed;
      //   left: 15px;
      //   top: 30px;
      //   z-index:6;
      // }

      // overall-status{
      //   width: 100%;
      //   margin-top: 20px;
      //   position: fixed;
      //   left: 15px;
      //   z-index:7;
      // }